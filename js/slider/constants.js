/**
 * @author Dusan Veselinovic <dusan.veselinovic.dev@gmail.com>
 */

/**
 * @enum {String}
 */
const AnimationStatus = Object.freeze({
  Play: 'play',
  Pause: 'pause'
});

/**
 * Animation types
 * @readonly
 * @enum {string}
 */
var ItemEnterAnimationType = Object.freeze({
  BottomToTop: 'bottom-to-top',
  TopToBottom: 'top-to-bottom',
});

/**
 * Animation types
 * @readonly
 * @enum {string}
 */
var SliderDirection = Object.freeze({
  LeftToRight: 'left-to-right',
  RightToLeft: 'right-to-left'
})

export { ItemEnterAnimationType, SliderDirection, AnimationStatus }