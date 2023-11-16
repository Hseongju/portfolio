var _this_scroll;
var _isScrollTop;
var _isOnce = false;
var _quickMotion;
var _quickMotionOnce = false;

$(function() {
  main.gnbEvtFn();
  main.resizeFn();
});

$(window).on("load", function(){  
  main.commonFn();
  main.swiperEvtFn();
  main.scrollTriggerFn();
  main.scrollFn();
  main.clickFn();
});

var main = function () {
  var _getScrollObjY = function () {
    var _arrY = [];
    $(".scroll-motion").each(function (q) {
      _arrY.push(parseInt($(".scroll-motion").offset().top + 300));
    });
    return _arrY;
  };
  return {
    commonFn: function () {

      $("header").addClass("scroll");
      $(".all-menu").addClass("scroll");
      $(".page-path-name").addClass("active");
      setTimeout(function(){
        $(".scroll-down").addClass("active");
      })

    },
    swiperEvtFn: function(){
      var productSwiper = new Swiper('.product-area .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 16,
      });

      var prodSwiper = new Swiper(".prodSwiper", {
        speed: 1400,
        loop: true,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            //shadow: true,
            translate: ["-0%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
            //scale: ["150%", 0, 0],
            scale: "1.25",
          },
        },
        navigation: {
          nextEl: '.product-area .swiper-button-next',
          prevEl: '.product-area .swiper-button-prev',
        },
        on: {
          slideChangeTransitionStart: function(){
            // console.log(prodSwiper.realIndex);
            gsap.to($(".product-area .txt-wrap .txt .line span"), {top:100, opacity:0, duration:0, ease: "none"});
            gsap.to($(".product-area .txt-wrap .txt").eq(prodSwiper.realIndex).find(".line span"), { top: 0, opacity: 1, stagger: 0.035, duration: 0.6, ease: Power3.ease });
            
            gsap.to($(".product-area .tit-wrap .tit"), {opacity: 0, duration: 0.4, ease: "none"});
            gsap.to($(".product-area .tit-wrap .tit").eq(prodSwiper.realIndex), {opacity: 1, duration: 1.4, ease: Power3.ease});
          },
        },
      });
    },
    gnbEvtFn: function(){
      
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      $(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          $("header").removeClass("scroll")
        }
        
        if(_isScrollTop < _this_scroll) { // up
          $("header").addClass("scroll bg")
        }

        if(_isScrollTop == 0){
          $("header").removeClass("bg")
          $("header").addClass("scroll")
        } 

        if(_isScrollTop + $(window).innerHeight() > $("footer").offset().top){
          $(".right-fixed-area").addClass("no-fixed")
          $(".right-fixed-area").css("bottom", $("footer").innerHeight())
        }else{
          $(".right-fixed-area").removeClass("no-fixed")
          $(".right-fixed-area").css("bottom", 0)
        }

        if(_isScrollTop + $(window).innerHeight() > $(".history-div").eq(0).offset().top && _isScrollTop + $(window).innerHeight() < $(".history-div").eq(1).offset().top){
          $(".cont-wrap .right-fixed-area .history-btn span").not($(".cont-wrap .right-fixed-area .history-btn span").eq(1)).hide()
          $(".cont-wrap .right-fixed-area .history-btn span").eq(1).fadeIn(400)
          $(".cont-wrap .right-fixed-area .history-tit-w span").not($(".cont-wrap .right-fixed-area .history-tit-w span").eq(1)).hide()
          $(".cont-wrap .right-fixed-area .history-tit-w span").eq(1).fadeIn(400)
        }else if(_isScrollTop + $(window).innerHeight() >= $(".history-div").eq(1).offset().top&& _isScrollTop + $(window).innerHeight() < $(".history-div").eq(2).offset().top){
          $(".cont-wrap .right-fixed-area .history-btn span").not($(".cont-wrap .right-fixed-area .history-btn span").eq(2)).hide()
          $(".cont-wrap .right-fixed-area .history-btn span").eq(2).fadeIn(400)
          $(".cont-wrap .right-fixed-area .history-tit-w span").not($(".cont-wrap .right-fixed-area .history-tit-w span").eq(2)).hide()
          $(".cont-wrap .right-fixed-area .history-tit-w span").eq(2).fadeIn(400)
        }else if(_isScrollTop + $(window).innerHeight() >= $(".history-div").eq(2).offset().top){
          $(".cont-wrap .right-fixed-area .history-btn span").not($(".cont-wrap .right-fixed-area .history-btn span").eq(3)).hide()
          $(".cont-wrap .right-fixed-area .history-btn span").eq(3).fadeIn(400)
          $(".cont-wrap .right-fixed-area .history-tit-w span").not($(".cont-wrap .right-fixed-area .history-tit-w span").eq(3)).hide()
          $(".cont-wrap .right-fixed-area .history-tit-w span").eq(3).fadeIn(400)
        }else{
          $(".cont-wrap .right-fixed-area .history-btn span").not($(".cont-wrap .right-fixed-area .history-btn span").eq(0)).hide()
          $(".cont-wrap .right-fixed-area .history-btn span").eq(0).fadeIn(400)
          $(".cont-wrap .right-fixed-area .history-tit-w span").not($(".cont-wrap .right-fixed-area .history-tit-w span").eq(0)).hide()
          $(".cont-wrap .right-fixed-area .history-tit-w span").eq(0).fadeIn(400)
        }
        
        _this_scroll = _isScrollTop;
        scrollMotionTrigger();
      }).scroll();
    },
    clickFn: function () {
      $(".history-btn").on("click", function(){
        $("body").addClass("stop-scroll");
        $(".history-pop").addClass("active");
      });

      $(".history-pop .close-btn").on("click", function(){
        $("body").removeClass("stop-scroll");
        $(".history-pop").removeClass("active");
      });

      $(".year-anchor-btn").each(function(q){
        $(this).on("click", function(){
          $("body").removeClass("stop-scroll");
          $(".history-pop").removeClass("active");
          gsap.to("html", 1, {scrollTop:$(".history-div").eq(q).offset().top, ease:Power3.easeOut});
        });
      });
    },
    scrollTriggerFn:function(){

      gsap.to($(".visual-div"), {
        scrollTrigger: {
          trigger: ".visual-div",
          start: "top top",
          end:"bottom bottom",
          endTrigger:$("footer"),
          scrub:1,
          pin:true,
          // markers: true,
        },
      });

      var fixedImgMotion = gsap.timeline({
        scrollTrigger: {
          id:"comportBgMotion",
          trigger: ".fixed-img-area .fixed-img-wrap",
          start: "top-=" + $(window).innerHeight() * 0.1 + " top",
          end:"bottom bottom",
          // endTrigger:$(".quick-list-area"),
          pin:true,
          scrub:2,
          // markers: true,
          // onUpdate:function(self){
          //   console.log(self.progress.toFixed(3))
          // }
        },
      })

      fixedImgMotion.to($(".fixed-img-area .fixed-img-wrap .img-div .img:nth-child(4)"), {
        top:"-200%"
      }).to($(".fixed-img-area .fixed-img-wrap .img-div .img:nth-child(3)"), {
        top:"-200%"
      }).to($(".fixed-img-area .fixed-img-wrap .img-div .img:nth-child(2)"), {
        top:"-200%"
      })
    }
  }
}();

function scrollMotionTrigger(){
  if($(".scroll-motion").size() > 0){
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 60%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }
}
