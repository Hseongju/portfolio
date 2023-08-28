$(function() {
  var _this_scroll;
  var _isScrollTop;
  
  $(window).on("scroll", function () {
    // header
    _isScrollTop =  $(window).scrollTop();

    if(_isScrollTop > _this_scroll) { // down
      if(_isScrollTop > 0){
        if($("header").size() != 0){
          gsap.to(("header"), 1.2, {top: -130, ease:Power2.easeOut});
        }
      }
    }
    
    if(_isScrollTop < _this_scroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), 1.3, {top: 0, ease:Power2.easeOut});
        $("header").addClass("up-scroll");
      }else if (_isScrollTop < 1) {
        $("header").removeClass("up-scroll");
      }
    }
    _this_scroll = _isScrollTop;
 });
})