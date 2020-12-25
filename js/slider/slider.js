import { SliderDirection, ItemEnterAnimationType } from './constants.js';
import { isString, getElementWidth } from './helpers.js';
import './typedef.js';

const SliderComponent = (function () {
  "use strict";

  /**
   * @enum {String}
   */
  const AnimationStatus = Object.seal({
    Play: 'play',
    Pause: 'pause'
  });

  /**
   * 
   * @param {SliderOptions} sliderOptions
   * 
   * @property {Array<SliderRowComponent>} rows
   * @property {Object} uiElements
   * @property {Element} uiElements.container
   */
  function SliderComponent(sliderOptions) {
    this.rows = [];
    this.uiElements = {
      container: isString(sliderOptions.container) ? document.getElementById(sliderOptions.container) : sliderOptions.container
    };

    this.uiElements.container.className = 'slider';
    sliderOptions.rows.forEach(row => {
      this.rows.push(new SliderRowComponent(row, this.uiElements.container));
    });

    // RENDER PLAY AND STOP BUTTONS AND ATTACH EVENTS
  }

  /**
   * Stop slide for each row
   */
  SliderComponent.prototype.stop = function () {
    this.rows.forEach(sliderRowComponent => {
      sliderRowComponent.stop();
    });
  };

  /**
   * Start slide for each row
   */
  SliderComponent.prototype.play = function () {
    this.rows.forEach(sliderRowComponent => {
      sliderRowComponent.play();
    });
  };

  /**
   * 
   * @param {SliderRowOptions} options Sldier row options
   * @param {Element} container Where we need to render our row
   */
  function SliderRowComponent(options, container) {
    this.animationInterval = undefined;
    this.animationDistance = 0;
    this.animationStatus = AnimationStatus.Pause;
    this.animationDirection = options.direction;
    this.animationSpeed = options.animationSpeed || 1;
    this.animationSequenceDistance = 0;
    this.width = 0;
    this.options = options;
    this.uiElements = {
      itemsContainer: this.renderItemsContainer(container),
    }
    this.uiElements.sliderRow = this.uiElements.itemsContainer.parentElement;

    this.renderItems(options.items, options.itemActions, this.uiElements.itemsContainer);
    this.attachEvents();
    this.runAnimation();
  }

  SliderRowComponent.prototype.stop = function stop() {
    this.setAnimationStatus(AnimationStatus.Pause);
  }

  SliderRowComponent.prototype.play = function play() {
    this.setAnimationStatus(AnimationStatus.Play);
  }

  /**
   * 
   * @param {AnimationStatus} status 
   */
  SliderRowComponent.prototype.setAnimationStatus = function stop(status) {
    if (status === AnimationStatus.Pause) {
      clearInterval(this.animationInterval);
      this.animationStatus = AnimationStatus.Pause;
    } else if (status === AnimationStatus.Play) {
      this.runAnimation();
    }
  }

  SliderRowComponent.prototype.attachEvents = function attachEvents() {
    this.uiElements.sliderRow.addEventListener('mouseenter', () => {
      this.animationSpeed = this.animationSpeed * 0.3;
    });
    this.uiElements.sliderRow.addEventListener('mouseleave', () => {
      this.animationSpeed = this.options.animationSpeed;
    });
  }

  SliderRowComponent.prototype.runAnimation = function runAnimation() {
    this.animationStatus = AnimationStatus.Play;
    this.animationSequenceDistance = getElementWidth(this.uiElements.itemsContainer.getElementsByClassName('slider__item')[0]);
    this.animationInterval = setInterval(() => {
      this.animate();
    }, 10);
  }

  /**
   * 
   */
  SliderRowComponent.prototype.animate = function () {
    let animationDistanceAddition = 0;

    if (this.animationDirection === SliderDirection.LeftToRight &&
      Math.round(this.animationDistance) === 0) {
      let liElements = this.uiElements.itemsContainer.getElementsByTagName('li');
      let numberOfItems = liElements.length;
      // move last to first
      this.uiElements.itemsContainer.prepend(this.uiElements.itemsContainer.getElementsByTagName('li')[numberOfItems - 1])
      this.animationDistance = -(Math.round(this.animationSequenceDistance));
    } else if (this.animationDirection === SliderDirection.RightToLeft &&
      -(Math.round(this.animationDistance)) === this.animationSequenceDistance) {
      // move first to last
      this.uiElements.itemsContainer.append(this.uiElements.itemsContainer.getElementsByTagName('li')[0])
      this.animationDistance = 0;
    }

    animationDistanceAddition = this.animationDirection === SliderDirection.LeftToRight ? 1 : -1;

    this.animationDistance += animationDistanceAddition * this.animationSpeed;
    this.uiElements.sliderRow.style.transform = "translateX(" + this.animationDistance + "px)";
  }

  /**
   * Render row items container
   * @param {Element} container Container element where we add container that holds row items
   */
  SliderRowComponent.prototype.renderItemsContainer = function renderItemsContainer(container) {
    const sliderRowEl = document.createElement('DIV');
    sliderRowEl.className = 'slider__row';

    const rowItemsContainerEl = document.createElement('UL');

    sliderRowEl.append(rowItemsContainerEl);
    container.append(sliderRowEl);

    return rowItemsContainerEl;
  }

  /**
   * Render row items inside container
   * @param {Array<SliderRowItem>} items Items options
   * @param {Array<SliderRowItemActions>} actions Item actions options
   * @param {Element} container Container where we render the items
   */
  SliderRowComponent.prototype.renderItems = function renderItems(items, actions, container) {
    items.forEach(item => {
      const domEl = document.createElement('LI');

      domEl.style = 'background-image: url("' + item.imageUrl + '")';
      domEl.className = 'slider__item';
      if (actions.length) {
        const sliderSkinEl = document.createElement('DIV');
        sliderSkinEl.className = 'slider__skin';
        domEl.append(sliderSkinEl);
        this.renderItemActions(actions, item, domEl);
      }

      container.append(domEl);
    });

    this.width = container.offsetWidth;
  }

  /**
   * Render item actions buttons
   * @param {Array<SliderRowItemActions>} actions Actions options
   * @param {Element} itemContainer Item container where we add action buttons
   */
  SliderRowComponent.prototype.renderItemActions = function renderItemActions(actions, item, itemContainer) {
    actions.forEach(action => {
      const actionButtonEl = document.createElement('a');
      const actionButtonClassNames = ['slider__link'];

      actionButtonEl.innerText = action.label;

      if (action.isHref) {
        actionButtonEl.href = item.actionUrl;
        actionButtonEl.target = '_blank';
      } else {
        throw 'Not supported atm';
      }

      if (action.animationType === ItemEnterAnimationType.BottomToTop) {
        actionButtonClassNames.push('slider__link--bottom-to-top');
      } else if (action.animationType === ItemEnterAnimationType.TopToBottom) {
        actionButtonClassNames.push('slider__link--top-to-bottom');
      }

      actionButtonEl.className = actionButtonClassNames.join(' ');

      itemContainer.append(actionButtonEl);
    });
  }

  
  /**
   * Render slider actions
   * @param {Element} container Container where we render slider actions
   */
  SliderComponent.prototype.renderSliderActions = function renderSliderActions() {

  }

  return SliderComponent;
}());

export { SliderComponent };