$(function () {
  main.commonFunc();
  main.swiperfunc();
  main.clickFunc();
  main.scrollFunc();
  main.mouseCursorFunc();
  main.hoverFunc();
  main.scrollTriggerFn();
  AOS.init({
    duration: 1500,
  });
});

let isColumn1Clicked = false;
let isColumn2Clicked = false;
var _progressMotion;

const main = (function () {
  return {
    commonFunc(){
      $(".project-area").css("margin-top", -($(window).innerHeight() * 3))
      if($(".scroll-motion").size() > 0){
        $(".scroll-motion:visible").each(function(q){
          let currentEle = $(this);
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

      $(".why-hd-area .left .acco-div .list").each(function(q){
        if($(this).hasClass("on")){
          $(this).find(".txt").show();
        }

        $(this).on("click", function(){
          gsap.to($("html, body"), 1, {scrollTop:$(".right-con-area > div").eq(q).offset().top - 350, ease:Power3.easeOut});
        });
      });

      $(".why-hd-area .right-con-area > div").each(function(q){
        $(window).scroll(function(){
          if($(window).scrollTop() + $(window).innerHeight() > $(".right-con-area > div").eq(0).offset().top && $(window).scrollTop() + $(window).innerHeight() <= $(".right-con-area > div").eq(1).offset().top){
            $(".why-hd-area .left .acco-div .list").removeClass("on")
            $(".why-hd-area .left .acco-div .list").eq(0).addClass("on")
          }else if($(window).scrollTop() + $(window).innerHeight() > $(".right-con-area > div").eq(1).offset().top && $(window).scrollTop() + $(window).innerHeight() <= $(".right-con-area > div").eq(2).offset().top + 350){
            $(".why-hd-area .left .acco-div .list").removeClass("on")
            $(".why-hd-area .left .acco-div .list").eq(1).addClass("on")
          }else if($(window).scrollTop() + $(window).innerHeight() > $(".right-con-area > div").eq(2).offset().top + 350){
            $(".why-hd-area .left .acco-div .list").removeClass("on")
            $(".why-hd-area .left .acco-div .list").eq(2).addClass("on")
          }
        });
      })

      $(".why-hd-area .right-con-area .bottom-area .txt-wrap .txt").each(function(q){
        if($(this).hasClass("on")){
          $(this).find(".detail").show();
        }

        $(this).on("click", function(){
          if(!$(this).hasClass("on")){
            $(".why-hd-area .right-con-area .bottom-area .txt-wrap .txt").removeClass("on");
            $(".why-hd-area .right-con-area .bottom-area .txt-wrap .txt .detail").stop(true, true).slideUp();
            $(this).addClass("on");
            $(this).find(".detail").stop(true, true).slideDown();
            $(".why-hd-area .bg-wrap .bg img").removeClass("on");
            $(".why-hd-area .bg-wrap .bg img").eq(q).addClass("on");
            $(".why-hd-area .bg-wrap .bg img").eq(q).fadeIn(300, function(){
              $(".why-hd-area .bg-wrap .bg img").not($(".why-hd-area .bg-wrap .bg img").eq(q)).hide();
            });
          }
        });
      })
    },
    swiperfunc() {
      const progressLine = $(".main-swiper .progress-bar");
      const progressTotalLength = $(".progress-box").width();
      console.log(progressTotalLength, "progressTotalLength");

      // const myVideoPlayer = document.querySelector(
      //   ".main-vis .video-wrap video"
      // );

      const bullet = ["HYUNDAI Heritage", "Hail Resistance", "LEAD FREE", "Premium N-Type HJT", "New Global R&D Center"];


      _progressMotion = gsap.to($(".main-vis .progress-bar"), 10, {width:"100%", ease:"none", onComplete:function(){
        mainSwiper.slideNext();
      }});

      var tween1, tween2, tween3;
      const mainSwiper = new Swiper(".main-swiper", {
        slidesPerView: 1,
        effect: "fade",
        disableOnInteraction: false,
        loop: true,
        fadeEffect: {
          crossFade: false
        },
        pagination: {
          el: ".pagination-bullets-wrap",
          type: "bullets",
          clickable: true,
          renderBullet(index, className) {
            return `<div class=${className}>${bullet[index]}</div>`;
          },
        },
        on:{
          slideChangeTransitionStart:function(){
            _progressMotion.restart();
            if($(".swiper-slide-active video").size() > 0){
              $(".swiper-slide-active").find("video").get(0).play();
            }

            if($(".video-btn").hasClass("play")){
              $(".video-btn").removeClass("play");
              $(".video-btn").addClass("pause");
            }
          }
        }
      });

      $(".swiper-pagination-bullet").on("click", function(){
        $(".video-btn").removeClass("play");
        $(".video-btn").addClass("pause");
        $(".swiper-slide-active").find("video").get(0).currentTime = 0;
        $(".swiper-slide-active").find("video").get(0).play();
      });

      $(".video-btn").on("click", function(){
        if($(this).hasClass("pause")){
          $(this).removeClass("pause");
          $(this).addClass("play");
          _progressMotion.pause();
          if($(".swiper-slide-active video").size() > 0){
            $(".swiper-slide-active").find("video").get(0).pause();
          }
        }else if($(this).hasClass("play")){
          $(this).removeClass("play");
          $(this).addClass("pause");
          _progressMotion.play();
          if($(".swiper-slide-active video").size() > 0){
            $(".swiper-slide-active").find("video").get(0).play();
          }
        }
      });


      var productSwiper = new Swiper(".product-list-area .swiper-container", {
        slidesPerView: "auto",
        loop:true,
        loopAdditionalSlides:1,
        navigation: {
          nextEl: ".product-list-area .swiper-button-next",
          prevEl: ".product-list-area .swiper-button-prev",
        },
      });

      // $(".product-swiper").on("click", function(e) {

      // });
    },
    clickFunc() {
      
    },
    scrollFunc() {
      let lastY;
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > lastY) {
          isScrollDown = true;
          $("header").addClass("active");
        } else {
          isScrollDown = false;
          $("header").removeClass("active");
        }
        lastY = $(window).scrollTop();

      });
    },
    mouseCursorFunc() {
      document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // console.log(x, "x");
        // console.log(y, "y");
        
        $(".cursor-div").css("transform", `translate(${x}px, ${y}px)`);

        $(".product-list-area").on("mouseover", function() {
          // if(x>= 0 && x <= 2000) {
          //   $(".cursor-div .inner-wrap").removeClass("next");
          //   $(".cursor-div .inner-wrap").addClass("prev");
          //   $(this).removeClass("next");
          //   $(this).addClass("prev");
          // } else {
          //   $(".cursor-div .inner-wrap").removeClass("prev");
          //   $(".cursor-div .inner-wrap").addClass("next");
          //   $(this).removeClass("prev");
          //   $(this).addClass("next");
          // }
          $(".cursor-div .inner-wrap").addClass("active");
        });
        $(".product-list-area").on("mouseleave", function() {
          $(".cursor-div .inner-wrap").removeClass("active");
          $(this).remove("prev next");
        });
      })
    },
    hoverFunc() {
      $(".video-area .video-wrap").each(function() {
        $(this).children(".video").on("mouseenter", function() {
          $(this).children("video").get(0).play()
          $(this).children(".icon-play").fadeOut();
        })
        $(this).children(".video").on("mouseleave", function() {
          $(this).children("video").get(0).pause()
          $(this).children(".icon-play").fadeIn();
        })
      })
    },
    scrollTriggerFn:function(){

      // why hd hyundai 배경 고정
      gsap.to($(".why-hd-area .bg-wrap"), {
        scrollTrigger: {
          trigger: $(".why-hd-area .bg-wrap"),
          start: "top top",
          end: "bottom+=900% bottom",
          // endTrigger:$(".project-area"),
          scrub: 1,
          pin:true,
          // markers: true,
        },
      });

      gsap.to($(".why-hd-area .bg-wrap .bg .img"), {
        scrollTrigger: {
          trigger: $(".why-hd-area .bg-wrap"),
          start: "top top",
          end: "bottom+=800% bottom",
          // endTrigger:$(".project-area"),
          scrub: 1,
          // pin:true,
          // markers: true,
        },
        top:-(3300 - $(window).innerHeight())
      });

      // why hd hyundai 타이틀
      gsap.to($(".why-hd-area .left .fixed-area"), {
        scrollTrigger: {
          trigger: $(".why-hd-area .left .fixed-area"),
          start: "top top",
          end: "bottom+=1350% bottom",
          // endTrigger:$(".newsroom-area"),
          scrub: 1,
          pin:true,
          // markers: true,
        },
      });

      gsap.to($(".why-hd-area .left .fixed-area .bar-div .bar"), {
        scrollTrigger: {
          trigger: ".why-hd-area .inner",
          start: "top top",
          // end: "+=5000",
          endTrigger: ".why-hd-area .right-con-area .bottom-area",
          scrub:1,
          // markers:true
        },
        height:"100%"
      });

      gsap.to($(".why-hd-area .right-con-area .bottom-area"), {
        scrollTrigger: {
          trigger: $(".why-hd-area .right-con-area .bottom-area"),
          start: "top-=200px top",
          end: "bottom+=400% bottom",
          scrub: 1,
          pin:true,
          // markers: true,
          onUpdate:function(self){
            // console.log(self.progress.toFixed(3))
            // if(self.progress.toFixed(3) > 0.5){
            //   console.log(123)
            //   $(".project-area").show()
            // }else{
            //   $(".project-area").hide()
            // }
            
          }
        },
      });

      // project 첫 이미지 축소
      var projectMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".project-area .project-inner",
          start: "top+=100% bottom",
          end: "bottom+=500% bottom",
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: 1,
          // onEnter: function () {
          //   $(".motion_area .esg_area .bg_area .txt_div").addClass("active");
          // },
          // onLeaveBack: function () {
          //   $(".motion_area .esg_area .bg_area .txt_div").removeClass("active");
          // },
          onUpdate: function (self) {
            // console.log(self.progress.toFixed(3))
            
          }
        },
      })

      projectMotion.to($(".project-area .project-inner .bg"), {
        height: "100vh",
        duration:2
      })
      .to($(".project-content"), {
        opacity: 1,
      })
      .add("first")
      .to($(".project-area .project-inner .bg"), {
        scale: 0,
        opacity:0,
        duration:3
      }, 'first')
      .to($(".project-area .project-inner .project-list-w .list:nth-child(1)"), {
        top:0,
        left:40,
        opacity:1,
        duration:3
      }, 'first')
      .to($(".project-area .project-inner .project-list-w .list:nth-child(2)"), {
        bottom:60,
        left:120,
        opacity:1,
        duration:3
      }, 'first')
      .to($(".project-area .project-inner .project-list-w .list:nth-child(3)"), {
        top:320,
        left:440,
        opacity:1,
        duration:3
      }, 'first')
      .to($(".project-area .project-inner .project-list-w .list:nth-child(4)"), {
        top:0,
        left:960,
        opacity:1,
        duration:3
      }, 'first')
      .to($(".project-area .project-inner .project-list-w .list:nth-child(5)"), {
        bottom:52,
        left:1280,
        opacity:1,
        duration:3
      }, 'first')
      .to($(".project-area .project-inner .project-list-w .list:nth-child(6)"), {
        top:0,
        left:1600,
        opacity:1,
        duration:3
      }, 'first')
      .to($(".project-area .project-inner .tit-wrap"), {
        className: "tit-wrap active",
      })
      .to($(".project-area .project-inner .bg"), {
        scale: 0,
      })
      .to($(".project-area .project-inner .bg"), {
        scale: 0,
      })
      .add('start')
      .to($(".project-area .project-inner .project-list-w"), {
        left: -($(".project-list").width() - $(window).innerWidth()),
        duration: 6
      })
      .to($(".project-area .project-inner .tit-wrap"), {
        className: "tit-wrap active hide",
      },'start')

      gsap.to($(".newsroom-area"), {
        scrollTrigger: {
          trigger: $(".newsroom-area"),
          start: "top-=50% center",
          end: "bottom bottom",
          scrub: 1,
          // pin:true,
          // markers: true,
          onEnter:function(){
            $(".newsroom-area .txt-area").addClass("active");
            $(".newsroom-area .newsroom-list").addClass("active");
          }
        },
      });

      gsap.to($(".n-type-area"), {
        scrollTrigger: {
          trigger: $(".n-type-area"),
          start: "top-=50% center",
          end: "bottom bottom",
          scrub: 1,
          // pin:true,
          // markers: true,
          onEnter:function(){
            $(".n-type-area").addClass("active");
          }
        },
      });

      gsap.to($(".newsletter-area"), {
        scrollTrigger: {
          trigger: $(".newsletter-area"),
          start: "top-=50% center",
          end: "bottom bottom",
          scrub: 1,
          // pin:true,
          // markers: true,
          onEnter:function(){
            $(".newsletter-area").addClass("active");
          }
        },
      });

      gsap.to($(".n-type-wrap"), {
        scrollTrigger: {
          trigger: $(".n-type-wrap"),
          start: "top top",
          end: "bottom+=50% bottom",
          scrub: 1,
          pin:true,
          // markers: true,
        },
      });
    }
  };
})();
