(function () {
  "use strict"

  const slider = new Slider();

  function Slider() {

    let distance = 0;

    let sliderSettings = {
      refreshRate: 15,
      distanceIncrementer : 1
    }

    const uiElements = {
      SliderContainer: document.getElementsByClassName("slider")[0],
      SliderRow: document.getElementsByClassName("slider__row")[0]
    }

    setInterval(function () {
      distance += sliderSettings.distanceIncrementer;
      uiElements.SliderRow.style.transform = "translateX(" + distance + "px)";
      if (distance > 1200) { distance = 0; }
    }, sliderSettings.refreshRate)

  }


}())