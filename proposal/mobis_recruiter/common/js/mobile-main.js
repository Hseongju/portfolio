$(function () {
  mainB.init();
  mainB.sclEvt();
});

var mainB = function () {
  var _getScrollObjY = function () {
    var _arrY = [];
    $(".scroll_motion").each(function (q) {
      _arrY.push(parseInt($(".scroll_motion").offset().top + 300));
    });
    return _arrY;
  };
  return {
    init: function () {
      gsap.to("header", {duration: 1, top: 0, opacity:1, ease: Cubic.easeOut});
      gsap.to(".vis_txt1_mob img", {duration: 1, top: 0, opacity:1, ease: Cubic.easeOut});
      gsap.to(".vis_txt2_mob img", { duration: 1, delay: .15, top: 0, opacity: 1, ease: Cubic.easeOut });
      setTimeout(function () {
        $(".main_visual").addClass("active");
        $(".vis_txt3_mob").addClass("active");
      }, 80);
    },
    sclEvt: function () {
      $(window).on('scroll', function () {
        // scroll_motion
        $(".scroll_motion").each(function (q) {
          if ($(window).scrollTop() + $(window).height() > _getScrollObjY()[q]) $(".scroll_motion").eq(q).addClass("active");
        });
      });

      gsap.to(".main_visual", {
        scrollTrigger: {
          trigger: $(".main_visual"),
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          // markers: true,
          scroller: "#mobileWrap .content .scroll",
          onUpdate: function (self) {
            if (self.progress.toFixed(3) > 0.01) {
              $(".main_visual").addClass("full");
              $(".main_visual").find(".fixed_wrap").addClass("active");
            } else {
              $(".main_visual").removeClass("full");
              $(".main_visual").find(".fixed_wrap").removeClass("active");
            }
          },
        }
      });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: $(".main_visual"),
          start: "0 0",
          end: "+=600%",
          pin: true,
          scrub: 1,
          scroller: "#mobileWrap .content .scroll",
        },
      });
      tl.to(".main_visual .visual_wrap.vis1 .visual", { width: "100%", height: "100%" })
        .to(".main_visual .visual_wrap.vis1 .visual", { width: "100%", height: "100%" })
        .to(".main_visual .visual_wrap.vis1 .visual", { duration: 0.5, width: "80%", height: "80%" })
        .to(".main_visual .visual_wrap.vis1", {duration: 0.7, top: "-100%", left: "100%"}, )
        .to(".main_visual .visual_wrap.vis2", {duration: 0.5, top: "0%", left: "0%", opacity: 1}, "-=0.4" )
        .to(".main_visual .visual_wrap.vis2 .floating_txt", {left: "-50%", bottom: 350, opacity: 1}, "-=0.4" )
        .to(".main_visual .visual_wrap.vis2 .info_tit", { transform: "translateY(0)", opacity: 1}, "-=0.4" )
        .to(".main_visual .visual_wrap.vis2 .info_txt", { transform: "translateY(0)", opacity: 1}, "-=0.4" )
        .to(".main_visual .visual_wrap.vis2 .visual", {width: "100%", height: "100%" },)
        .to(".main_visual .visual_wrap.vis2 .visual", {duration: 0.3, width: "100%", height: "100%" },)
        .to(".main_visual .visual_wrap.vis2", { duration: 1, top: "-100%", left: "100%" },)
        .to(".main_visual .visual_wrap.vis3", { duration: 0.5, top: "0%", left: "0%", opacity: 1 }, "-=0.4")
        .to(".main_visual .visual_wrap.vis3 .floating_txt", {left: "0%", bottom: 350, opacity: 1}, "-=0.4" )
        .to(".main_visual .visual_wrap.vis3 .info_tit", { transform: "translateY(0)", opacity: 1}, "-=0.4" )
        .to(".main_visual .visual_wrap.vis3 .info_txt", { transform: "translateY(0)", opacity: 1}, "-=0.4" )
        .to(".main_visual .visual_wrap.vis3 .visual", {duration: 0.3, width: "100%", height: "100%" },)
        .to(".main_visual .visual_wrap.vis3 .visual", { width: "100%", height: "100%" },)
      
      // header 역스크롤
      var _this_scroll;
      var _isScrollTop;

      $("#mobileWrap .content .scroll").on("scroll", function(){
        _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if (_isScrollTop > 0 && !$("header").hasClass("up_scroll")) {
            // if($("header").size() != 0){
              gsap.to(("header"), 1, {top:-180, ease:Power3.easeOut});
            // }
          } else {
            gsap.to(("header"), 0, {top: -180, ease:Power3.easeOut});
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
            gsap.to(("header"), 1.3, {top:0, ease:Power3.easeOut});  
            $("header").removeClass("dark").addClass("up_scroll");
          }

          if(_isScrollTop == 0){
            $("header").removeClass("up_scroll");
          }
        }
        _this_scroll = _isScrollTop;
      });$("#mobileWrap .content .scroll").scroll()
    },
  }
}();