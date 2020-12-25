
/**
 * @typedef {Object} SliderOptions
 *
 * @property {Array<SliderRowOptions>} rows
 * @property {String|Element} container Container id or Element
 * @property {Function} afterSliderRedered Function that will be called when slider is rendered
 * 
 * ====================================
 * @typedef {Object} SliderRowOptions
 *
 * @property {Array<SliderRowItemActions>} itemActions Array of slider row item actions that we display when user hover the row item.
 * @property {Array<SliderRowItem>} items Array of slider row items that we render inside the row
 * @property {SliderDirection} direction
 * @property {number} animationSpeed Default speed is `1`
 * ====================================
 *
 * @typedef {Object} SliderRowItemActions
 *
 * @property {String} actionName Action name that we will also use when we generate cssClass for the button in format of --action{actionName}
 * @property {String} label Label that we display to the user
 * @property {Boolean} isHref If this is true, actionUrl will be set as "href"
 * @property {ItemEnterAnimationType} animationType
 * @property {Function} callback ** NOT IMPLEMENTED** Callback function that we call when user click
 *
 * ====================================
 *
 * @typedef {Object} SliderRowItem
 *
 * @property {string} imageUrl
 * @property {string} actionUrl
 */