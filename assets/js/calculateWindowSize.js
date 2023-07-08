(function() {
  function windowHeight() {
    if (/android|webos|iphone|ipad|ipod|blackberry|nokia|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase())) {
      let actualWindowHeight = Math.min(document.documentElement.clientHeight, window.screen.height, window.innerHeight);
      $('#banner').css('height', actualWindowHeight);
    }
  }
  window.addEventListener('resize orientationchange', function() {
    windowHeight();
  }, false);
  windowHeight();
}());