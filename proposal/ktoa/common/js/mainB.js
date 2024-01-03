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
      setTimeout(function(){
        $(".visual-area").addClass("active");
      },100)

      setTimeout(function(){
        $("header").addClass("on");
      },1000)
      
      $(".right-menu").addClass("on");

      setTimeout(function(){
        $("body").removeClass("stop-scroll");
      }, 3000)

      $(".acco-txt").on("click", function(){
        if(!$(this).closest(".slide").hasClass("on")){
          $(this).closest(".slide").addClass("on");
          $(this).find("p").removeClass("on");
          $(this).find("p").eq(2).addClass("on");
        }else{
          $(this).closest(".slide").removeClass("on");
          $(this).find("p").removeClass("on");
          $(this).find("p").eq(0).addClass("on");
        }
      });

    },
    swiperEvtFn: function(){
      setTimeout(function(){
        var memberSwiper = new Swiper('.member-slide-area .swiper-container', {
          slidesPerView: "auto",
          scrollbar: {
            el: ".swiper-scrollbar",
          },
          navigation: {
            nextEl: ".member-slide-area .swiper-button-next",
            prevEl: ".member-slide-area .swiper-button-prev",
          },
        });
      }, 3000)
      

      var bannerSwiper = new Swiper('.fixed-slide-area .swiper-container', {
        parallax: true,
        speed:1000,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".fixed-slide-area .swiper-button-next",
          prevEl: ".fixed-slide-area .swiper-button-prev",
        },
        pagination: {
          el: ".fixed-slide-area .swiper-pagination",
        },
        on:{
          slideChangeTransitionEnd:function(){
            $(".fixed-slide-area .swiper-slide").removeClass("on");
            $(".fixed-slide-area .swiper-slide-active").addClass("on");
          }
        }
      });
    },
    gnbEvtFn: function(){
      $(window).on("mousewheel",function(event){
        if (event.originalEvent.deltaY < 0) {
          // wheeled up
          $("header").addClass("on")
        }
        else {
          // wheeled down
          $("header").removeClass("on")
        }
      });
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      $(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop + $(window).innerHeight() > $(".fixed-slide-area").offset().top){
          $(".fixed-slide-area .fixed-slide-wrap").addClass("on");
        }else{
          $(".fixed-slide-area .fixed-slide-wrap").removeClass("on");
        }
        
        // let animation1 = document.getElementById("lottie1");
        // let animation2 = document.getElementById("lottie2");
        // let animation3 = document.getElementById("lottie3");
        if($(".ktoa-info-area").hasClass("active")){
          // animation1.play();
          // animation2.play();
          // animation3.play();
          $(".ktoa-info-area.active .list-area .list:nth-child(1) .icon video").get(0).play()
          setTimeout(function(){
            $(".ktoa-info-area.active .list-area .list:nth-child(2) .icon video").get(0).play()
          }, 150)
          setTimeout(function(){
            $(".ktoa-info-area.active .list-area .list:nth-child(3) .icon video").get(0).play()
          }, 300)
        }

        // if(_isScrollTop > _this_scroll) { // down
        //   if(_isScrollTop > 0){
        //     if($("header").size() != 0){
        //       gsap.to(("header"), 1.2, {top: -130, ease:Power2.easeOut});
        //     }
        //   }
        // }
        
        _this_scroll = _isScrollTop;
        scrollMotionTrigger();
      }).scroll();
    },
    clickFn: function () {

    },
    scrollTriggerFn:function(){

      gsap.to($(".visual-area .visual-div"), {
        scrollTrigger: {
          trigger: $(".visual-area .visual-div"),
          start: "top top",
          end: "bottom top",
          endTrigger:$("footer"),
          pin:true,
          scrub: 2,
          // markers: true,
          onUpdate:function(self){
            if(self.progress.toFixed(3) > 0.05){
              $(".visual-area").addClass("on")
              $(".visual-area .txt-div").addClass("on");
              $(".visual-area .slide-div").addClass("active");
              $(".visual-area .scroll-bar").addClass("active");
            }else{
              $(".visual-area .txt-div").removeClass("on");
              $(".visual-area .slide-div").removeClass("active");
              $(".visual-area .scroll-bar").removeClass("active");
            }
          }
        },
      });

      var visualSlideMotion = gsap.timeline({
        scrollTrigger: {
          id:"visualSlideBgMotion",
          trigger: ".visual-area .visual-wrap",
          start: "top top",
          end:"bottom+=150% bottom",
          // pin:true,
          // pinSpacing: false,
          scrub:2,
          // markers: true,
        },
      })
      
      visualSlideMotion.to($(".visual-area .slide-div"), {
        opacity:1,
      })
      .add('start')
      .to($(".visual-area .slide-div"), {
        // left:"-670px",
        left: (-($(window).innerWidth() - 570) / 2) + ($(window).innerWidth() - 1760) - 180
      }, 'start')
      .to($(".visual-area .scroll-bar .scroll"),{
        left:970
      }, 'start')
      .to($(".ktoa-txt img"), {
        left:(-($(window).innerWidth() - 570) / 2) + ($(window).innerWidth() - 1760) - 180,
      }, 'start')

      setTimeout(function(){
        
        // gsap.to($(".fixed-slide-area .fixed-slide"), {
        //   scrollTrigger: {
        //     trigger: $(".fixed-slide-area .fixed-slide"),
        //     start: "top bottom",
        //     end: "bottom bottom",
        //     endTrigger:"footer",
        //     scrub: 2,
        //     pin:true,
        //     markers:true
        //   },
        // });

        gsap.to($(".report-area .right .report-div"), {
          scrollTrigger: {
            trigger: $(".report-area .right .report-div"),
            start: "top top",
            end: "bottom bottom",
            endTrigger:".report-area .left",
            scrub: 2,
            pin:true,
            // markers: true,
          },
        });

        // gsap.to($(".fixed-slide-area .fixed-slide-wrap .swiper-container .swiper-slide .bg"), {
        //   scrollTrigger: {
        //     trigger: $(".fixed-slide-area .fixed-slide-wrap .swiper-container .swiper-slide .bg"),
        //     start: "top-=50% top",
        //     end: "bottom bottom",
        //     scrub: 2,
        //     // pin:true,
        //     // markers: true,
        //     onUpdate:function(self){
        //       gsap.to($(".fixed-slide-area .fixed-slide-wrap .swiper-container .swiper-slide .bg"), 0.8, {top:(self.progress.toFixed(3) * 400), ease:Power3.easeOut});
        //     }
        //   },
        // });
      }, 3000)
      
    }
  }
}();

function scrollMotionTrigger(){
  if($(".scroll-motion").size() > 0){
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 50%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }
}
