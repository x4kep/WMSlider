(function () {
  'use strict';

  document.addEventListener("DOMContentLoaded", function () {
    const slider = new SliderComponent({
      container: 'slider2',
      rows: [{
        items: [{
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/KdjNaFmIkgSg_T8dLIfd-w/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/XqH2qFzXvw8ZwLXQTRHsbw/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is5-ssl.mzstatic.com/image/thumb/7hvf7Ka4UIOpOyW60UVVlQ/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/dgQe-GNFsZdZerxZVY0XnA/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is2-ssl.mzstatic.com/image/thumb/p6SJeIuT_i3bzTaBz-nFBw/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Z5cBpCPWkXHNwQx7-jFGTw/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is5-ssl.mzstatic.com/image/thumb/RtJOTYWi1OwtKY2WGdL_ww/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/T1thEPfRZsm9KPEwgu8iow/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is5-ssl.mzstatic.com/image/thumb/6SGu2TF73EcNj9CpfwKYqg/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is4-ssl.mzstatic.com/image/thumb/IblYZYg2QcNR7PACZpWk8Q/380x213.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is4-ssl.mzstatic.com/image/thumb/gBUwKd7UtbOmSxold7VuAQ/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/15waL0eN-mNfRtVpZ8H3sA/210x118.jpg'
        }, {
          actionUrl: 'www.gooogle.com',
          imageUrl: 'https://is4-ssl.mzstatic.com/image/thumb/IblYZYg2QcNR7PACZpWk8Q/380x213.jpg'
        }
        ],
        animationSpeed: 1,
        direction: SliderDirection.RightToLeft,
        itemActions: [{
          actionName: 'watchNow',
          animationType: ItemEnterAnimationType.TopToBottom,
          isHref: true,
          label: 'Watch now',
        }]
      }]
    });
  });

}());