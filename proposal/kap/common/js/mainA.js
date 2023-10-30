var _this_scroll;
var _isScrollTop;
var _isOnce = false;
var _isOnceScroll = false;
var _isSidebarChange = false;

$(window).on("load", function(){  
  mainStory.mouseWheelFn();
  mainStory.commonFn();
  mainStory.scrollFn();
});

var mainStory = function () {
  return {
    commonFn: function () {
      setTimeout(function(){
        $(".lottie").addClass("active");
        $(".intro .white-bg").hide();
      }, 2100);

      setTimeout(function(){
        $("header").addClass("active");
        $(".intro").delay(900).fadeOut();
        $(".visual-area").addClass("active");
        $(".side-bar").addClass("active");
      }, 3900);

      setTimeout(function(){
        $("#wrap").addClass("active");
        $(".white-bg-div").hide();
      },5500)

      /* 비주얼 swiper */
      $(".visual-swiper").on("click", function(){
        if(!$(this).hasClass("change")){
          $(this).addClass("change");
          $(this).find(".slide").eq(0).css("width", "0");
          $(".visual-area .txt-slide").addClass("active");
          gsap.to($(".visual-area .bar-div .bar"), 1, {left:365, ease:Power3.easeOut});
        }else{
          $(this).removeClass("change");
          $(this).find(".slide").eq(0).css("width", "100%");
          $(".visual-area .txt-slide").removeClass("active");
          gsap.to($(".visual-area .bar-div .bar"), 1, {left:0, ease:Power3.easeOut});
        }
      });

      /* 세미나 swiper */
      var seminarSwiper = new Swiper(".seminar-area .mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 40,
      });

      /* 사업신청 리스트 마우스 호버 이벤트 */
      $(".business-apply-area .list-wrap .list").each(function(q){
        $(this).on("mouseenter", function(){
          $(".business-apply-area .list-wrap .list").removeClass("opacity");
          $(".business-apply-area .list-wrap .list").not($(this)).addClass("opacity");
          $(".business-apply-area .right img").removeClass("on");
          $(".business-apply-area .right img").eq(q).addClass("on");
        });
        $(this).on("mouseleave", function(){
          $(".business-apply-area .list-wrap .list").removeClass("opacity");
          $(".business-apply-area .right img").removeClass("on");
        });
      });

      /* 전체메뉴 */
      $(".hamburger").on("click", function(){
        $(".all-menu-pop").addClass("on");
        $("body").addClass("stop-scroll");
        $(".dimd").fadeIn();
        gsap.to($(".all-menu-pop"), 1.2, {right:0, ease:Power3.easeOut});
      });

      $(".all-menu-pop .x-btn").on("click", function(){
        $(".all-menu-pop").removeClass("on");
        $(".dimd").fadeOut();
        gsap.to($(".all-menu-pop"), 2, {right:"-100%", ease:Power3.easeOut});
        $("body").removeClass("stop-scroll");
      });

      /* 검색팝업 */
      $(".search-btn").on("click", function(){
        $(".search-pop").addClass("on");
        $("body").addClass("stop-scroll");
        $(".dimd").fadeIn();
        gsap.to($(".search-pop"), 1, {top:0, ease:Power3.easeOut});
      });

      $(".search-pop .x-btn").on("click", function(){
        $(".search-pop").removeClass("on");
        $(".dimd").fadeOut();
        gsap.to($(".search-pop"), 4, {top:"-100%", ease:Power3.easeOut});
        $("body").removeClass("stop-scroll");
      });

      $(".dimd").on("click", function(){
        $(".dimd").fadeOut();
        if($(".all-menu-pop").hasClass("on")){
          $(".all-menu-pop").removeClass("on");
          gsap.to($(".all-menu-pop"), 2, {right:"-100%", ease:Power3.easeOut});
        }

        if($(".search-pop").hasClass("on")){
          $(".search-pop").removeClass("on");
          gsap.to($(".search-pop"), 4, {top:"-100%", ease:Power3.easeOut});
        }
        
        $("body").removeClass("stop-scroll");
      });

      /* 교육/세미나 팝업 */
      $(".calendar").on("click", function(){
        $(".seminar-pop").addClass("on");
        $(".dimd").fadeIn();
        gsap.to($(".seminar-pop"), 1.2, {top:0, ease:Power3.easeOut});
        $("body").addClass("stop-scroll");
      });

      $(".seminar-pop .x-btn").on("click", function(){
        $(".seminar-pop").removeClass("on");
        $(".dimd").fadeOut();
        gsap.to($(".seminar-pop"), 1.2, {top:"-100%", ease:Power3.easeOut});
        $("body").removeClass("stop-scroll");
      });

      /* 자주쓰는 서비스 */
      $(".service-btn").on("click", function(){
        if(!$(".service-div").hasClass("on")){
          $(".service-div").addClass("on");
          $(".hamburger").fadeOut(150);
          $(".service-div .service").fadeIn(200);
        }else{
          $(".service-div").removeClass("on");
          $(".hamburger").fadeIn(200);
          $(".service-div .service").fadeOut(200);
        }
      });

      /* business영역 마우스 커서 모양 변경 */
      $(".business-img-area").on("mouseenter", function(){
        $("html").css({'cursor':'url(../typeA/common/images/img-mouse-arrow.png), auto'});
      });
      $(".business-img-area").on("mouseleave", function(){
        $("html").css({'cursor':'auto'});
      });

      $(".business-area .business-img-area .tab-btn-area .tab-btn").each(function(q){
        $(this).on("click", function(){
          $(".business-area .business-img-area .txt-slide").addClass("no-delay");
          $(".business-area .business-img-area .tab-btn-area .tab-btn").removeClass("on");
          $(this).addClass("on");
          if(q == 0){
            $(this).parents(".business-img-area").find(".slide").eq(0).css("width", "100%");
            $(".business-area .business-img-area .txt-slide").removeClass("move");
            $(".business-area .business-img-area .dot-area > p").removeClass("on");
            $(".business-area .business-img-area .dot-area > p").eq(0).addClass("on");
            $(".business-area .business-img-area .tab-btn-area").removeClass("on");
          }else if(q == 1){
            $(this).parents(".business-img-area").find(".slide").eq(0).css("width", "0");
            $(".business-area .business-img-area .txt-slide").addClass("move");
            $(".business-area .business-img-area .dot-area > p").removeClass("on");
            $(".business-area .business-img-area .dot-area > p").eq(1).addClass("on");
            $(".business-area .business-img-area .tab-btn-area").addClass("on");
          }
        });
      });

      $(".business-area .business-img-area .img-area").on("click", function(){
        $(".business-area .business-img-area .txt-slide").addClass("no-delay");
        if($(".business-area .business-img-area .tab-btn-area .tab-btn").eq(0).hasClass("on")){
          $(".business-area .business-img-area .tab-btn-area .tab-btn").removeClass("on");
          $(".business-area .business-img-area .tab-btn-area .tab-btn").eq(1).addClass("on");
          $(this).find(".slide").eq(0).css("width", "0");
          $(".business-area .business-img-area .txt-slide").addClass("move");
          $(".business-area .business-img-area .dot-area > p").removeClass("on");
          $(".business-area .business-img-area .dot-area > p").eq(1).addClass("on");
          $(".business-area .business-img-area .tab-btn-area").addClass("on");
        }else if($(".business-area .business-img-area .tab-btn-area .tab-btn").eq(1).hasClass("on")){
          $(".business-area .business-img-area .tab-btn-area .tab-btn").removeClass("on");
          $(".business-area .business-img-area .tab-btn-area .tab-btn").eq(0).addClass("on");
          $(this).find(".slide").eq(0).css("width", "100%");
          $(".business-area .business-img-area .txt-slide").removeClass("move");
          $(".business-area .business-img-area .dot-area > p").removeClass("on");
          $(".business-area .business-img-area .dot-area > p").eq(0).addClass("on");
          $(".business-area .business-img-area .tab-btn-area").removeClass("on");
        }
      });

      
    },
    scrollFn: function () {
      $(window).on("scroll", function(){
        

        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop + (($(window).innerHeight() / 2) - 150) > $(".sustainable-area").offset().top){
          if(!_isOnce){
            _isOnce = true
            $("body").addClass("change");
            setTimeout(function(){
              $(".sustainable-area").addClass("on");
            }, 500)
          }
        }else{
          $("body").removeClass("change");
        }

        if(_isScrollTop > _this_scroll) { // down
          // if(_isScrollTop > 0 && $(".business-area .business-img-area").offset().top > _isScrollTop){
          //   if($(".side-bar").hasClass("transparent")){
          //     $(".side-bar").removeClass("transparent")
          //   }
          // }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          
        }

        if(_isScrollTop == 0){
          
        }
        _this_scroll = _isScrollTop;
      }).scroll();
    },
    mouseWheelFn:function(){
      $(window).on('mousewheel',function(e){ 
        var wheel = e.originalEvent.wheelDelta; 
        if(wheel>0){ 
          //스크롤 올릴때 
          if(_isScrollTop <= 200){
            $(".side-bar").addClass("transparent")
          }
        } else { 
          //스크롤 내릴때 
          if($("#wrap").hasClass("active")){
            if(!_isOnceScroll){
              _isOnceScroll = true;
              $(".visual-area").addClass("on");
              $("header").addClass("transparent");
              $(".side-bar").addClass("transparent");
              setTimeout(function(){
                $("body").removeClass("stop-scroll");
                gsap.to(".visual-area", {
                  scrollTrigger: {
                    trigger: ".visual-area",
                    start: "top top",
                    end: "bottom+=100% bottom",
                    pin: true,
                    // markers: true,
                    onEnter:function(){
                      $(".side-bar").addClass("transparent");
                    },
                    onLeave:function(){
                      $(".side-bar").removeClass("transparent");
                    },
                    onEnterBack:function(){
                      $(".side-bar").addClass("transparent");
                    },
                    onLeaveBack:function(){
                      $(".side-bar").removeClass("transparent");
                    }
                  },
                });

                /* business visual */
                gsap.to(".business-area .business-img-area", {
                  scrollTrigger: {
                    trigger: ".business-area .business-img-area",
                    start: "top top",
                    end: "bottom+=100% bottom",
                    pin: true,
                    // markers: true,
                    onEnter:function(){
                      $(".side-bar").addClass("transparent");
                    },
                    onLeave:function(){
                      $(".side-bar").removeClass("transparent");
                    },
                    onEnterBack:function(){
                      $(".side-bar").addClass("transparent");
                    },
                    onLeaveBack:function(){
                      $(".side-bar").removeClass("transparent");
                    }
                  },
                });

                /* 지속가능경영 */
                gsap.to(".sustainable-area", {
                  scrollTrigger: {
                    trigger: ".sustainable-area",
                    start: "top top",
                    end: "bottom+=100% bottom",
                    pin: true,
                    // markers: true,
                    onEnter:function(){
                      if($("body").hasClass("change")){
                        $("body").removeClass("change")
                        $(".sustainable-area").addClass("active");
                      }
                      $(".side-bar").addClass("transparent");
                    },
                    onLeave:function(){
                      $("body").removeClass("change");
                      $(".sustainable-area").addClass("active");
                      $(".side-bar").removeClass("transparent");
                    },
                    onEnterBack:function(){
                      $(".side-bar").addClass("transparent");
                    },
                    onLeaveBack:function(){
                      $(".side-bar").removeClass("transparent");
                    }
                  },
                });

                if($(".scroll-motion").size() > 0){
                  $(".scroll-motion:visible").each(function(q){
                    gsap.to($(this), {
                      scrollTrigger: {
                        trigger: $(this),
                        start: "top 75%",
                        end:"bottom top",
                        toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
                        once: true,
                        // markers: true,
                      },
                    });
                  });
                }
              }, 1200)
            }
          }
        } 
      });
    }
  }
}();
