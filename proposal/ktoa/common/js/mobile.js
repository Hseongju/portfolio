$(function () {
  var _this_scroll;
  var _isScrollTop;

  $("#mobileWrap .content .scroll").on("scroll", function(){
    _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();

		if(_isScrollTop > _this_scroll) {
			// $("header").removeClass().addClass("down");
      if(_isScrollTop > 0) { gsap.to("header", {y: -80}); }
		} else if(_isScrollTop == 0) {
			// $("header").removeClass();
		} else {
			// $("header").removeClass().addClass("up");
      if(_isScrollTop > 0) {
        gsap.to("header", {y: 0});
      } else {
        $("header").removeClass("up");
      }
		}
  
    _this_scroll = _isScrollTop;

  });$("#mobileWrap .content .scroll").scroll();
});
