function elementInView(element, callback, offset) {
  $(function() {
    const cardScenes = document.getElementsByClassName('card-scene');
    const elementPosition = $(element).offset().top;
    const screenHeight = $(window).height();
    const activationOffset = offset || 0.5;
    const activationPoint = elementPosition - (screenHeight * activationOffset);
    const maxScrollHeight = $('body').height() - screenHeight - 5;
  
    $(window).on('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const elementInView = scrollPosition > activationPoint;
      const reachedBottomOfPage = maxScrollHeight <= scrollPosition && !elementInView;
  
      if (elementInView || reachedBottomOfPage) {
        callback();
      }
    });
  });
}
