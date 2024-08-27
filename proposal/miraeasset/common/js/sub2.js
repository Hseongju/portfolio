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
      $(".con-area .right-con .fixed-area .anchor-btn .btn").each(function(q){
        $(this).on("click", function(){
          gsap.to($("html, body"), 0.8, {scrollTop:$(".left-con section").eq(q).offset().top - 39, ease:Power3.easeOut})
        })
      });

      $('.con-area .left-con .list-wrap .list .img .num').counterUp({
        time: 500
      });
      
    },
    swiperEvtFn: function(){
    },
    scrollTriggerFn:function(){
      scrollMotionFn();

      gsap.to($(".con-area .right-con .fixed-area"), {
        scrollTrigger: {
          trigger: $(".con-area .right-con .fixed-area"),
          start: () => "top top",
          end: () => "bottom bottom",
          endTrigger:$(".con-area .left-con"),
          scrub: 1,
          pin:true,
          pinSpacing:false,
          // markers: true,
        },
      });
    },
    gnbFn: function(){
      // header
      $("header").on("click", function(){
        if($("header").hasClass("drop")) {
          $("header").removeClass("drop");
          $(".header-dimd").stop().hide();
        } else {
          $("header").addClass("drop");
          $(".header-dimd").stop().fadeIn();
        }
      });
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      let thisScrollT;
      let scrollT;
      let windowH;
      let footerT;
      
      $(window).on("scroll", function () {
        scrollT =  $(window).scrollTop();
        footerT = $("footer").offset().top;
        windowH = $(window).innerHeight();
        
        const scrolledPercentage = (scrollT / $(".con-area").innerHeight()) * 100;

        if(scrollT > $(".con-area").offset().top){
          $(".con-area .scroll-bar").addClass("on");
          $(".con-area .scroll-bar .bar").css("width", scrolledPercentage + "%")
        }else{
          $(".con-area .scroll-bar").removeClass("on");
        }

        $(".left-con section").each(function(q){
          if(scrollT > $(this).offset().top - 40){
            $(".con-area .right-con .fixed-area .anchor-btn .btn").removeClass("on");
            $(".con-area .right-con .fixed-area .anchor-btn .btn").eq(q).addClass("on");
          }

          if(scrollT + ($(window).innerHeight() * 0.5) > $(".left-con section").eq(4).offset().top - 40 && scrollT <= $(".left-con section").eq(6).offset().top - $(".left-con section").eq(6).outerHeight(true)){
            $(".fixed-list-btn").addClass("on");
          }else{
            $(".fixed-list-btn").removeClass("on");
          }
        });

        if(scrollT >= 100) {
          gsap.to(".scroll-fixed", 1, {
            bottom: 0,
            ease:Power3.easeOut
          })
        } else {
          gsap.to(".scroll-fixed", 1, {
            bottom: "-90px",
            ease:Power3.easeOut
          })
        }
        
        setTimeout(function(){
          $(".scroll-gauge .bar").width(`${(scrollT / ($("#wrap").height() - windowH) * 100)}%`);
        }, 40)

        if(footerT >= (windowH + scrollT)) {
          $(".scroll-fixed").addClass("fixed");
        } else { 
          $(".scroll-fixed").removeClass("fixed");
        }

        if(scrollT > thisScrollT) { // down
          $("header").removeClass("show drop").addClass("hide");
          $(".header-dimd").hide();
          // if(scrollT > 0){
          //   if($("header").size() != 0){
          //     if(!$("header").hasClass("fixed")){
          //       gsap.to(("header"), 1.4, {top: -110, ease:Power2.easeOut});
          //     }
          //   }

          //   $(".quick-area").addClass("on");
          // }
        }
        
        if(scrollT < thisScrollT) { // up
          $("header").removeClass("hide drop").addClass("show");
          thisScrollT > 100 ? $("header").addClass("white") : $("header").removeClass("white");
          $(".header-dimd").hide();
          // if(scrollT != 0 && scrollT > 0){
          //   gsap.to(("header"), 1, {top: 0, ease:Power2.easeOut});
          //   $("header").addClass("up-scroll");
          // }else if (scrollT < 1) {
          //   $("header").removeClass("up-scroll");
          // }

        }
        thisScrollT = scrollT;
      }).scroll();
    },
  }
}();

  // 공통 스크롤 모션
  function scrollMotionFn() {
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
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
