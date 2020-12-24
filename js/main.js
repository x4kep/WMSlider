import { SliderDirection, ItemEnterAnimationType } from './typedef.js';

(function () {

  "use strict"
  const slider = new Slider({
    rows: [{
      items: [{
        actionUrl: 'www.gooogle.com',
        imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/KdjNaFmIkgSg_T8dLIfd-w/210x118.jpg'
      },{
        actionUrl: 'www.gooogle.com',
        imageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/XqH2qFzXvw8ZwLXQTRHsbw/210x118.jpg'
      },{
        actionUrl: 'www.gooogle.com',
        imageUrl: 'https://is5-ssl.mzstatic.com/image/thumb/7hvf7Ka4UIOpOyW60UVVlQ/210x118.jpg'
      },{
        actionUrl: 'www.gooogle.com',
        imageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/dgQe-GNFsZdZerxZVY0XnA/210x118.jpg'
      },{
        actionUrl: 'www.gooogle.com',
        imageUrl: 'https://is2-ssl.mzstatic.com/image/thumb/p6SJeIuT_i3bzTaBz-nFBw/210x118.jpg'
      }
    ],
      animationSpeed: 1,
      direction: SliderDirection.RightToLeft,
      itemActions: [{
        actionName: 'watchNow',
        animationType: ItemEnterAnimationType.BottomToTop,
        isHref: true,
        label: 'Watch now',
      }]
    }]
  });

  
  /**
   * 
   * @param {SliderOptions} sliderOptions
   */
  function Slider(sliderOptions) {

    let sliderSettings = {
      refreshRate: 10,
      distanceIncrementer: sliderOptions.rows[0].animationSpeed || 1,
      direction: sliderOptions.rows[0].direction || SliderDirection.LeftToRight
    }

    console.log(sliderSettings);

    const uiElements = {
      SliderContainer: document.getElementsByClassName("slider")[0],
      SliderRow: document.getElementsByClassName("slider__row")[0],
      SliderItems: document.getElementsByClassName("slider__item")
    }

    const sliderRender = new SliderRenderer(uiElements, sliderSettings);
    sliderRender.animateSlider();

    const sliderAttachEvents = new SliderAttachEvents(uiElements, sliderSettings);
    sliderAttachEvents.start();

  }

  function SliderRenderer(uiElements, sliderSettings) {
    this.animateSlider = animateSlider;
    this.calcOffset = document.getElementsByClassName('slider__row')[0].firstElementChild.offsetWidth;
    this.endOfSlider = this.calcOffset;
    
    this.offset = (sliderSettings.direction == SliderDirection.RightToLeft) ? 0 : -(Math.abs(this.endOfSlider));
    this.distance = this.offset;

    setRowContainer();
    this.cloneSliderRow = document.querySelector(".slider__row ul").cloneNode(true);
    uiElements.SliderRow.appendChild(this.cloneSliderRow);

    function animateSlider() {
      if(sliderSettings.direction == SliderDirection.RightToLeft){
        setInterval(slideRightToLeft.bind(this), sliderSettings.refreshRate)
      }

      if(sliderSettings.direction == SliderDirection.LeftToRight){
        setInterval(slideLeftToRight.bind(this), sliderSettings.refreshRate)
      }
    }

    // document.getElementsByClassName('slider__row')[0].firstElementChild.offsetWidth
    function setRowContainer() {
      const countElementRow = uiElements.SliderItems.length;
      const containerWidth = countElementRow * 225; // Ref: Get image size
      uiElements.SliderRow.style.width = containerWidth + "px";
    }

    function slideRightToLeft() {
      setRowContainer();
      this.distance -= sliderSettings.distanceIncrementer;
      if (this.distance <  -(Math.abs(this.calcOffset))) {
        this.distance = this.offset;
      }
      uiElements.SliderRow.style.transform = "translateX(" + this.distance + "px)";
    }

    function slideLeftToRight() {
      setRowContainer();
      this.distance += sliderSettings.distanceIncrementer;
        if(this.distance > 0 ){
          this.distance = this.offset;
      }
      uiElements.SliderRow.style.transform = "translateX(" + this.distance + "px)";
    }

    function drawSliderITems() {
      
    }

  }

  function SliderAttachEvents(uiElements, sliderSettings) {
    this.start = start;

    function _attachEvents() {
      uiElements.SliderRow.onmouseenter = onSliderRowHoverSetSpeed.bind(sliderSettings);
      uiElements.SliderRow.onmouseleave = onSliderRowHoverSet.bind(sliderSettings);
    }

    function onSliderRowHoverSetSpeed(e) {
      this.distanceIncrementer = 0.5;
    }

    function onSliderRowHoverSet(e) {
      this.distanceIncrementer = 1;
    }

    function start() {
      _attachEvents();
    }
    
  }

}())