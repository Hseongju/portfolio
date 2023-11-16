$(function() {
  let _thisScroll;
  let _isScrollTop;

  $("#mobileWrap .content .scroll").on("scroll", function(){
    _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();

    if(_isScrollTop > _thisScroll) { // down
      if(_isScrollTop > 0){
        if($("header").size() != 0){
          gsap.to(("header"), .4, {top: -70, ease:Power2.easeOut});
          $("header").removeClass("up-scroll");
        }
      }
    }
    
    if(_isScrollTop < _thisScroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), .4, {top: 0, ease:Power2.easeOut});
        $("header").addClass("up-scroll");
      }else if (_isScrollTop < 1) {
        $("header").removeClass("up-scroll");
      }

      if ($("header").hasClass("up-scroll") && $(".anchor-area").hasClass("fixed")) {
        $(".anchor-area .anchor-btn-w img").css({opacity: 0})
      } else {
        $(".anchor-area .anchor-btn-w img").css({opacity: 1})
      }
    }
  
    _thisScroll = _isScrollTop;
  });
  $("#mobileWrap .content .scroll").scroll();

  if ($(".scroll-motion").size() > 0) {
    $(".scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 80%",
          end: "bottom top",
          toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
          once: true,
          scroller: "#mobileWrap .content .scroll",
          //markers: true,
        },
      });
    });
  }
});