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
      $(".map-list .click").on("click", function(){
        $("body").addClass("stop-scroll");
        $(".dimd").fadeIn(250);
        $(".list-view-pop").addClass("active");
      });

      $(".list-view-pop .close-btn").on("click", function(){
        $(".dimd").fadeOut(300, function(){
          $("body").removeClass("stop-scroll");
        });
        $(".list-view-pop").removeClass("active");
      });
    },
    swiperEvtFn: function(){
      
    },
    scrollTriggerFn:function(){
      scrollMotionFuc();

      // gsap.to($(".tit-inner"), {
      //   scrollTrigger: {
      //     trigger: $(".tit-inner"),
      //     start: "top top",
      //     end: "bottom bottom",
      //     endTrigger: "footer",
      //     scrub: 3,
      //     markers: true,
      //     pin:true,
      //   },
      // });

      gsap.to($(".map-list-w"), {
        scrollTrigger: {
          trigger: $(".map-list-w"),
          start: "top top",
          end: "bottom+=200% bottom",
          scrub: 3,
          // markers: true,
          pin:true,
          onEnter:function(){
            $(".map-area .map-list").addClass("active");
          }
        },
      });
    },
    gnbFn: function(){
      $("header nav").on("mouseenter focusin", function(){
        $("header").addClass("hover");
        $(".header-dimd").stop(true, true).fadeIn();
      });

      $("header").on("mouseleave", function(){
        $("header").removeClass("hover");
        $(".header-dimd").stop(true, true).fadeOut();
      });
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      let thisScrollT;
      let scrollT;

      $(window).on("scroll", function () {
        scrollT =  $(window).scrollTop();

        if(scrollT > thisScrollT) { // down
          if(scrollT > 0){
            if($("header").size() != 0){
              if(!$("header").hasClass("fixed")){
                gsap.to(("header"), 1.4, {top: -110, ease:Power2.easeOut});
              }
            }

            $(".quick-area").addClass("on");
          }
        }
        
        if(scrollT < thisScrollT) { // up
          if(scrollT != 0 && scrollT > 0){
            gsap.to(("header"), 1, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (scrollT < 1) {
            $("header").removeClass("up-scroll");
          }

        }
        thisScrollT = scrollT;
      }).scroll();
    },
  }
}();

  // 공통 스크롤 모션
  function scrollMotionFuc () {
    $(".scroll-motion:visible").each(function(q){
      let currentEle = $(this);
      gsap.to($(this), {
        onComplete: function () {
          if($(currentEle).hasClass("4")) {
            $(".list-area").removeClass("init");
          }
        },
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
