var _opacitySlide; // 추천강좌, 신규강좌 투명 슬라이드
var _isFirst = true; // 마지막 슬라이드 도달 후 전 슬라이드 돌아갈 때 변수
// var _visualSwiper; // 비주얼 스와이퍼 변수
var _resizeCheck; // 리사이즈 END체크
var _videoTime; // 비디오 영상 시간

var mainScript = (function(){
  return {
    commonFn: function(){

      gsap.config({nullTargetWarn:false});

      $(".category_wrap .half_wrap .img_con_w .img_con").eq(0).show();
    },
    scrollFn: function(){
      // not IE
      $(window).on("scroll", function(){
        _isScrollTop =  $(window).scrollTop();        
      });$(window).scroll()

      // for IE
      $("body").on("scroll", function(){
        
      });

    },
    resizeFn: function(){
      $(window).resize(function(){
        
        $(".visual_area").addClass("active");
        setTimeout(function(){
          $(".visual_wrap .form_search").addClass("active");
          $(".visual_area .swiper-slide-active").addClass("on");
          _isFirst = false;
        },1300)

        // if(window.innerWidth > 1280){
        //   $(".visual_wrap").removeAttr("style");
        //   gsap.to($(".visual_div"), {duration: 1.3, width: "calc(100% - 200px)", height: "67vh", borderRadius: "16px", ease: Power2.easeOut});
        // }else if(window.innerWidth > 1024 && window.innerWidth <= 1280){ // pc
        //   $(".visual_wrap").removeAttr("style");
        //   gsap.to($(".visual_div"), {duration: 1.3, width: "calc(100% - 100px)", height: "67vh", borderRadius: "16px", ease: Power2.easeOut});
        // }else{ // mobile
        //   $(".visual_wrap").height(window.innerHeight * 0.74)
        //   gsap.to($(".visual_div"), {duration: 1.3, width: "calc(100% - 4rem)", height: "calc(100% - 104px)", borderRadius: "12px", ease: Power2.easeOut});

        //   $(".lecture_list_w .swiper-container").removeClass("no_swiping")
        // }

        if($(".category_wrap").size() > 0){
          if(window.innerWidth > 1024){
            $(".category_wrap .half_wrap .form_select_div").css("left", $(".category_wrap .inner").offset().left);
          }else{
            $(".category_wrap .half_wrap .form_select_div, .category_wrap .half_wrap .left").removeAttr("style");
          }
        }

      }).resize();      
    },
    swiperFn: function(){
      // if($(".visual_wrap").size() > 0){
      //   var progressBarMotion = gsap.to($(".visual_wrap .progress_bar .bar"), 4, {width:"100%", ease:"none", onComplete:function(){
      //     _visualSwiper.slideNext();
      //   }});

      //   _visualSwiper = new Swiper(".visual_div .swiper-container", {
      //     parallax: true,
      //     speed:1200,
      //     loop:true,
      //     observer: true,
      //     observeParents: true,
      //     navigation: {
      //       nextEl: ".visual_div .swiper-button-next",
      //       prevEl: ".visual_div .swiper-button-prev",
      //     },
      //     pagination: {
      //       el: ".visual_div .swiper-pagination",
      //       type: "fraction",
      //     },
      //     on:{
      //       slideChangeTransitionStart:function(){
      //         if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
      //           if ($(".visual_wrap .swiper-slide").not(".swiper-slide-active, .swiper-slide-duplicate-active").find("video").size() > 0){
      //             $(".visual_wrap .swiper-slide").not(".swiper-slide-active, .swiper-slide-duplicate-active").find("video").get(0).pause();
      //           }
  
      //           $(".visual_wrap .swiper-slide-active video").get(0).currentTime = 0;
                
      //           _videoTime = $(".visual_wrap .swiper-slide-active video")[0].duration;
                
      //           if(isNaN(_videoTime)){
      //             var vid = $(".visual_wrap .swiper-slide-active video").get(0)
      //             vid.onloadedmetadata = function() {
      //               _videoTime = $(".visual_wrap .swiper-slide-active video")[0].duration;
      //               progressBarMotion.duration(_videoTime).restart();
      //             };
      //           }

      //         }
      //         else {
      //           _videoTime = 5;
      //         }
      //       },
      //       slideChangeTransitionEnd:function(){
      //         if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
      //           $(".visual_div .swiper-slide-active video").get(0).play();
      //         }

      //         $(".visual_div .swiper-slide").removeClass("on");

      //         if(!_isFirst){
      //           $(".visual_div .swiper-slide-active").addClass("on");
      //           $(".visual_div .swiper-slide-duplicate-active").addClass("on");
      //         }

      //         if($(".visual_area .visual_btn").hasClass("pause")){
      //           progressBarMotion.duration(_videoTime).restart();
      //         }
      //       },
      //     }
      //   });

      //   $(".visual_area .visual_btn").on("click", function(){
      //     if($(this).hasClass("pause")){
      //       $(this).removeClass("pause");
      //       $(this).addClass("play");
      //       progressBarMotion.pause();
      //       if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
      //         $(".visual_div .swiper-slide-active video").get(0).pause();
      //       }
      //     }else if($(this).hasClass("play")){
      //       $(this).removeClass("play");
      //       $(this).addClass("pause");
      //       progressBarMotion.play();
      //       if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
      //         $(".visual_div .swiper-slide-active video").get(0).play();
      //       }
      //     }
      //   });
      // }

      if($(".lecture_list_w").size() > 0){
        var lectureSwiper = [];
        $(".lecture_list_w").each(function(q){
          $(this).find(".swiper-container").addClass("lec_list_swiper" + q);

          if($(this).find(".swiper-slide").size() <= 4){
            if(window.innerWidth > 1280){
              $(this).find(".swiper-container").addClass("no_swiping")
            }
          }else{
            $(this).find(".swiper-container").addClass("swiping")
            // $(this).find(".swiper-container").append('<div class="swiper-pagination"></div>')
            $(this).append('<div class="swiper-button-next"></div>')
            $(this).append('<div class="swiper-button-prev"></div>')
          }


          lectureSwiper[q]= new Swiper(".lec_list_swiper"+q, {
            slidesPerView: "auto",
            observer: true,
            observeParents: true,
            noSwipe:true,
            noSwipingClass:'no_swiping',
            pagination: {
              el: $(this).find(".swiper-pagination"),
              type: "progressbar",
            },
            navigation: {
              nextEl: $(this).find(".swiper-button-next"),
              prevEl: $(this).find(".swiper-button-prev"),
            },
            on:{
              // init : function(){
              //   $(".lec_list_swiper" + q).addClass("start");
              // },
              // transitionStart : function(){
              //   $(".lec_list_swiper" + q).removeClass("start");
              //   $(".lec_list_swiper" + q).removeClass("end");
              // },
              // transitionEnd : function(){
              //   if(lectureSwiper[q].isEnd){
              //     $(".lec_list_swiper" + q).addClass("end");
              //     $(".lec_list_swiper" + q).removeClass("start");
              //   }else if(lectureSwiper[q].isBeginning){
              //     $(".lec_list_swiper" + q).addClass("start");
              //     $(".lec_list_swiper" + q).removeClass("end");
              //   }
              // }
            }
          });
        });
      }

      if($(".event_wrap").size() > 0){
        // var eventSmallSwiper = new Swiper(".event_slide_wrap .right .swiper-container", {
        //   loop:true,
        //   speed:800,
        //   simulateTouch:false,
        //   observer: true,
        //   observeParents: true,
        //   navigation: {
        //     nextEl: $(".event_slide_wrap").find(".swiper-button-next"),
        //     prevEl: $(".event_slide_wrap").find(".swiper-button-prev"),
        //   },
        //   pagination: {
        //     el: $(".event_slide_wrap").find(".swiper-pagination"),
        //     type: "fraction",
        //   },
        // });
        
        var eventProgressBarMotion = gsap.to($(".event_slide_wrap .progress_bar .bar"), 4, {width:"100%", ease:"none", onComplete:function(){
          eventLargeSwiper.slideNext();
        }});
        

        var eventLargeSwiper = new Swiper(".event_slide_wrap .swiper-container", {
          parallax: true,
          loop: true,
          speed: 1000,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: $(".event_slide_wrap").find(".swiper-button-next"),
            prevEl: $(".event_slide_wrap").find(".swiper-button-prev"),
          },
          pagination: {
            el: $(".event_slide_wrap").find(".swiper-pagination"),
            type: "fraction",
          },
          on:{
            init:function(){
              $(".event_slide_wrap .left .swiper-container .swiper-slide-active").addClass("active");
            },
            slideChangeTransitionEnd:function(){

              $(".event_slide_wrap .left .swiper-container .swiper-slide").removeClass("active");
              $(".event_slide_wrap .left .swiper-container .swiper-slide-active").addClass("active");
              $(".event_slide_wrap .left .swiper-container .swiper-slide-duplicate-active").addClass("active");

              if($(".event_slide_wrap .visual_btn").hasClass("pause")){
                eventProgressBarMotion.restart();
              }
            },
          }
        });

        $(".event_slide_wrap .visual_btn").on("click", function(){
          if($(this).hasClass("pause")){
            $(this).removeClass("pause");
            $(this).addClass("play");
            eventProgressBarMotion.pause();
          }else if($(this).hasClass("play")){
            $(this).removeClass("play");
            $(this).addClass("pause");
            eventProgressBarMotion.play();
          }
        });
      }

      $(window).resize(function(){
        if(_resizeCheck){ //계속 리사이즈중이면 clear
          clearTimeout(_resizeCheck); 
        };
        if($(".main").size() > 0){
          //1초이상 리사이즈 지속하지않으면 실행
          // _resizeCheck = setTimeout(function(){
          //   if ($(".visual_wrap .swiper-slide-active, .swiper-slide-duplicate-active").find("video").size() <= 0){
          //     progressBarMotion.duration(_videoTime).restart();
          //   }
          //   _visualSwiper.update();
          //   eventProgressBarMotion.restart();
          //   eventLargeSwiper.update();
          // },1000);

          $(".lecture_list_w").each(function(){
            if($(this).find(".swiper-slide").size() <= 4){
              if(window.innerWidth <= 1280){
                $(this).find(".swiper-container").removeClass("no_swiping");
              }else{
                $(".lecture_list_w").find(".swiper-container").addClass("no_swiping");
              }
            }else{
              $(this).find(".swiper-container").removeClass("no_swiping");
            }
          });
          
        }
      });
    },
    scrollTriggerFn: function(){
      ScrollTrigger.matchMedia({
        "(min-width : 1025px)": function(){
          gsap.to(".category_wrap .half_wrap .left", {
            scrollTrigger: {
              trigger: ".category_wrap .half_wrap .left",
              start: "top top",
              end: "bottom bottom",
              endTrigger:$(".category_wrap .half_wrap"),
              pin: true,
              // markers: true,
              onEnter:function(){
                $(".category_wrap .half_wrap .left").addClass("in");
              },
              onEnterBack:function(){
                $(".category_wrap .half_wrap .left").addClass("in");
              },
              onLeave:function(){
                $(".category_wrap .half_wrap .left").removeClass("in");
              },
              onLeaveBack:function(){
                $(".category_wrap .half_wrap .left").removeClass("in");
              }
            },
          });
        }
      });
    }
  }
})();

$(window).on("load", function(){
  mainScript.commonFn();
  mainScript.scrollFn();
  mainScript.resizeFn();
  mainScript.swiperFn();
  mainScript.scrollTriggerFn();
});

