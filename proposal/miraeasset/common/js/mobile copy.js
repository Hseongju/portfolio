$(window).on("load", function(){  
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperEvtFn();
  main.scrollTriggerFn();
  main.gnbFn();
  main.resizeFn();
  main.scrollFn();
});

var main = function () {
  return {
    commonFn: function () {
    },
    swiperEvtFn: function(){
    },
    scrollTriggerFn:function(){
      const tl = gsap.timeline();
      tl.to(".main-sec .tit-area p:nth-child(1) span", {top: 0, opacity: 1, duration: .9, ease: Power3.easeOut});
      tl.to(".main-sec .tit-area p:nth-child(2) span", {top: 0, opacity: 1, duration: .9, ease: Power3.easeOut}, ">-0.6");
      tl.to(".main-sec .tit-area p:nth-child(3) span", {top: 0, opacity: 1, duration: .9, ease: Power3.easeOut}, ">-0.6");
      tl.to(".main-sec .txt-area p:nth-child(1) span", {top: 0, opacity: 1, duration: .9, ease: Power3.easeOut}, ">-0.6");
      tl.to(".main-sec .txt-area p:nth-child(2) span", {top: 0, opacity: 1, duration: .9, ease: Power3.easeOut}, ">-0.6");
      tl.to(".main-sec .txt-area p:nth-child(3) span", {top: 0, opacity: 1, duration: .9, ease: Power3.easeOut}, ">-0.6");

      
      var pathMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".lifestyle-sec",
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: 1,
          scroller: "#mobileWrap .content .scroll",
        },
      })

      pathMotion.from(".path-item", {
        backgroundPosition: "center right -324px",
      }).to(".lifestyle-sec .inner", {
        opacity: 0,
        duration: .5
      }).to($(".path-item"), {
        scrub: 1,
        height: 240,
        width: 207,
        duration: 1,
        backgroundPosition: "center right -68px",
        backgroundSize: "auto 306px",
        clipPath: "polygon(65% 0, 100% 50%, 65% 100%, 0% 100%, 34% 50%, 0% 0%)",
      })

      scrollMotionFuc();
    },
    gnbFn: function(){
      $("header nav").on("mouseenter focusin", function(){
        $("header").addClass("hover");
        $(".dimd").stop(true, true).fadeIn();
      });

      $("header").on("mouseleave", function(){
        $("header").removeClass("hover");
        $(".dimd").stop(true, true).fadeOut();
      });
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      let _thisScroll;
      let _isScrollTop;
    
      $("#mobileWrap .content .scroll").on("scroll", function(){
        _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();
    
        if(_isScrollTop > _thisScroll) { // down
          if(_isScrollTop > 0){
            gsap.to(("header"), .4, {top: -90, ease:Power2.easeOut});
          }
        }
        
        if(_isScrollTop < _thisScroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
            gsap.to(("header"), .4, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (_isScrollTop < 1) {
            $("header").removeClass("up-scroll");
          }
        }
      
        _thisScroll = _isScrollTop;
      });
    },
  }
}();

  // 공통 스크롤 모션
  function scrollMotionFuc () {
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          scroller: "#mobileWrap .content .scroll",
          // markers: true,
        },
      });
    });
  }