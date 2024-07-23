$(window).on("load", function(){  
  gsap.registerPlugin(ScrollToPlugin);
  typeBmob.scrollFn();
});

var typeBmob = function () {
  return {
    scrollFn: function () {
      let _thisScroll;
      let _isScrollTop;
    
      $("#mobileWrap .content .scroll").on("scroll", function(){
        _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();
    
        if(_isScrollTop > _thisScroll) { // down
          if(_isScrollTop > 100){
            gsap.to(("header"), .7, {top: -90, ease:Power2.easeOut});
          }
        }
        
        if(_isScrollTop < _thisScroll) { // up
          gsap.to(("header"), .7, {top: 0, ease:Power2.easeOut});
        }
      
        _thisScroll = _isScrollTop;
      });
    },
  }
}();