var _this_scroll;
var _isScrollTop;
var _isDone = false;

$(window).on("load", function(){  
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperEvtFn();
  main.scrollFn();
  main.scrollTriggerFn();
  main.gnbFn();
  main.resizeFn();
});

var main = function () {
  return {
    commonFn: function () {
      // 페이지 로드시 quick-menu motion
      $(".quick-menu").each(function(){
        $(this).find(".quick-btn").on("click", function(){
          if(!$(this).closest(".quick-menu").hasClass("on")){
            $(".quick-menu").removeClass("on")
            $(this).closest(".quick-menu").addClass("on");
            // $(this).closest(".quick-menu").find(".quick-con").fadeIn();
          }else{
            $(".quick-menu").removeClass("on")
            /* $(this).closest(".quick-menu").find(".quick-con").fadeOut(); */
          }
        });
      });

      // $(".video-area .visual-wrap .pagenation .circle:nth-child(1)").addClass("on")

      setTimeout(function(){
        // $(".quick-menu.on").find(".quick-con").fadeOut();
        $(".quick-menu").removeClass("on");
      }, 1000)

      setTimeout(function(){
        $(".left-visual-area").addClass("active");
      }, 500)

      var videoEnd = setInterval(function(){
        if($("#video1").prop("ended")){
          $(".video-area .video-con video:nth-child(1)").hide()
          clearInterval(videoEnd)
        }
      }, 200)

      var isClick = false;

      $(".pagenation .circle").each(function(q){
        $(this).on("click", function(){
          if(q == 1){
            if(!isClick){
              $(".video-area .right-visual-area").addClass("on");
              gsap.to($(".video-area .right-visual-area"), 1.5, {width:"100%", ease:Power3.easeOut , onComplete:function(){
                isClick = true;
                $(".video-area .right-visual-area").addClass("active");
                $(".video-area .right-visual-area .bg video").get(0).play()
              }})
            }
          }else{
            if(isClick){
              $(".video-area .right-visual-area").removeClass("on");
              gsap.to($(".video-area .right-visual-area"), 1.5, {width:"0", ease:Power3.easeOut , onComplete:function(){
                isClick = false;
                $(".video-area .right-visual-area").removeClass("active");
                $(".video-area .right-visual-area .bg video").get(0).pause()
              }})
            }
          }
        })
      });

      $(".quick-area .quick-menu:nth-child(2) .quick-con .service").on("click", function(){
        $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap").addClass("on");
        $(".quick-area .quick-menu:nth-child(2) .quick-con .robot .img").fadeOut();
        $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap").fadeIn(300, function(){
          $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap .talk-wrap").eq(0).addClass("active");
          $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap .talk-wrap").eq(1).addClass("active");
        });
      });

      $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap .prev-btn").on("click", function(){
        $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap").removeClass("on");
        $(".quick-area .quick-menu:nth-child(2) .quick-con .robot .img").fadeIn();
        $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap").fadeOut()
      })

      $(".click-wrap").each(function(q){
        $(this).on("click", function(){
  
          if(!$(this).find(".click").hasClass("on")){
            $(this).find(".click").addClass("on");
            $(this).find(".choice").not($(this).find(".click")).hide();
            console.log(q)
  
            if(q == 0){
              setTimeout(function(){
                $(".talk-wrap").eq(2).show(0, function(){
                  $(".talk-wrap").eq(2).addClass("active");
                })
              }, 500)
              setTimeout(function(){
                $(".talk-wrap").eq(3).css("display","flex");
                setTimeout(function(){
                  $(".talk-wrap").eq(3).addClass("active");
                  gsap.to($(".chatting-wrap"), 3, {scrollTop:$(".talk-wrap").eq(3).offset().top, ease:Power3.easeOut});
                }, 100)
              }, 700)
            }else if(q == 1){
              setTimeout(function(){
                $(".talk-wrap").eq(4).show(0, function(){
                  $(".talk-wrap").eq(4).addClass("active");
                  gsap.to($(".chatting-wrap"), 3, {scrollTop:$(".talk-wrap").eq(4).offset().top, delay:0.4, ease:Power3.easeOut});
                })
              }, 500)
              setTimeout(function(){
                $(".talk-wrap").eq(5).css("display","flex");
                setTimeout(function(){
                  $(".talk-wrap").eq(5).addClass("active");
                  gsap.to($(".chatting-wrap"), 3, {scrollTop:$(".talk-wrap").eq(5).offset().top, delay:1.5, ease:Power3.easeOut});
                }, 100)
              }, 1000)
            }else if(q == 2){
              setTimeout(function(){
                $(".talk-wrap").eq(6).show(0, function(){
                  $(".talk-wrap").eq(6).addClass("active");
                  gsap.to($(".chatting-wrap"), 3, {scrollTop:$(".talk-wrap").eq(6).offset().top, delay:0.4, ease:Power3.easeOut});
                })
              }, 500)
              setTimeout(function(){
                $(".talk-wrap").eq(7).css("display","flex");
                setTimeout(function(){
                  $(".talk-wrap").eq(7).addClass("active");
                  gsap.to($(".chatting-wrap"), 1, {scrollTop:$(".talk-wrap").eq(7).offset().top, delay:1.5, ease:Power3.easeOut});
                }, 100)
              }, 1000)
            }else if(q == 3){
              setTimeout(function(){
                $(".talk-wrap").eq(8).show(0, function(){
                  $(".talk-wrap").eq(8).addClass("active");
                })
                setTimeout(function(){
                  $(".talk-wrap").eq(9).addClass("active");
                  gsap.to($(".chatting-wrap"), 0.8, {scrollTop:$(".talk-wrap").eq(9).offset().top + $(".chatting-wrap").height(), ease:Power3.easeOut});
                }, 2200)
              }, 500)
            }
            
          }
        });
      })
      
      
    },
    swiperEvtFn: function(){
      
    },
    scrollTriggerFn:function(){
      gsap.to($(".left-visual-area .fixed-area"), {
        scrollTrigger: {
          trigger: $(".left-visual-area .fixed-area"),
          start: "top top",
          end: "bottom bottom",
          endTrigger:$(".solution-area .step-area"),
          scrub: 1,
          // markers: true,
          pin:true,
        },
      });

      gsap.to($(".video-con"), {
        scrollTrigger: {
          trigger: $(".video-con"),
          start: "top top",
          end: "bottom+=40% bottom",
          endTrigger:$(".solution-area"),
          scrub: 1,
          // markers: true,
          pin:true,
          onLeave:function(){
            $(".video-con").addClass("active");
          },
          onEnterBack:function(){
            $(".video-con").removeClass("active");
          }
        },
      });

      gsap.to($(".product-area .fixed-area"), {
        scrollTrigger: {
          trigger: $(".product-area .fixed-area"),
          start: "top top",
          end: "bottom+=50% bottom",
          endTrigger:$(".product-list-area"),
          scrub: 1,
          // markers: true,
          pin:true,
          onEnter:function(){
            $(".product-area").addClass("active");
          },
          onUpdate: function (self) {
            // 현재 스크롤 위치 가져오기
            var progress = self.progress;
            if(progress > 0.5){
              $(".product-area").addClass("up");
            }else{
              $(".product-area").removeClass("up");
            }
          },
          // onLeaveBack:function(){
          //   $(".product-area").removeClass("active");
          // }
        },
      });


      const video2 = document.querySelector("#video2");
      let src2 = video2.currentSrc || video2.src2;
      // console.log(video1, src2);

      /* Make sure the video is 'activated' on iOS */
      function once(el, event, fn, opts) {
        var onceFn = function (e) {
          el.removeEventListener(event, onceFn);
          fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn, opts);
        return onceFn;
      }

      // once(document.documentElement, "touchstart", function (e) {
      //   video1.play();
      //   video1.pause();
      // });

      // gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#wrap",
          start: "top top",
          end: "+=350%",
          //pin: true,
          scrub: true,

          // onEnter: function(){
          //   $("#mc1v1").css('z-index', 1);
          //   $("#mc1v2").css('z-index', 0);
          //   $("#mc1v3").css('z-index', 0);
          // },

          // onEnterBack: function(){
          //   $("#mc1v1").css('z-index', 1);
          //   $("#mc1v2").css('z-index', 0);
          //   $("#mc1v3").css('z-index', 0);
          // },
        }
      });

      once(video2, "loadedmetadata", () => {
        tl.fromTo(
          video2,
          {
            currentTime: 0
          },
          {
            currentTime: 12 // 재생시간
          }
        );
      });

      setTimeout(function () {
        if (window["fetch"]) {
          fetch(src2)
            .then((response) => response.blob())
            .then((response) => {
              var blobURL = URL.createObjectURL(response);

              var t2 = video2.currentTime;
              // once(document.documentElement, "touchstart", function (e) {
              //   video1.play();
              //   video1.pause();
              // });

              video2.setAttribute("src", blobURL);
              video2.currentTime = t2 + 0.01;
            });
        }
      }, 1000);


      gsap.to($(".list-inner"), {
        scrollTrigger: {
          trigger: $(".list-inner"),
          start: "top top",
          end: "bottom+=100% bottom",
          scrub: 3,
          // markers: true,
          pin:true,
        },
      });
      gsap.to($(".list-move"), {
        scrollTrigger: {
          trigger: $(".list-move"),
          start: "top top",
          end: "bottom+=200% bottom",
          scrub: 5,
          // markers: true,
        },
        left:"-150%"
      });

      gsap.to($(".step-area"), {
        scrollTrigger: {
          trigger: $(".step-inner"),
          start: "top-=100px top",
          end: "bottom bottom",
          endTrigger:$(".step-area"),
          // markers: true,
          scrub:1,
          pin:true,
          onUpdate: function (self) {
            // 현재 스크롤 위치 가져오기
            var progress = self.progress;
            gsap.to($(".step-area .step-tit .bar-div .bar"), 1, {width:(100*progress) + 25 + "%", ease:Power3.easeOut});

            if(progress > 0 && progress < 0.25){
              $(".step-area .step-tit .step").eq(0).removeClass("on");
              $(".step-area .step-tit .step").eq(1).addClass("on");
              $(".step-area .step-tit .step").eq(2).removeClass("on");
              $(".step-area .step-con .step").eq(0).addClass("remove")
              $(".step-area .step-con .step").eq(1).removeClass("remove").addClass("on")
              $(".step-area .step-con .step").eq(2).removeClass("on");
            }else if(progress >= 0.25 && progress < 0.5){
              $(".step-area .step-tit .step").eq(1).removeClass("on");
              $(".step-area .step-tit .step").eq(2).addClass("on");
              $(".step-area .step-tit .step").eq(3).removeClass("on");
              $(".step-area .step-con .step").eq(1).addClass("remove");
              $(".step-area .step-con .step").eq(2).removeClass("remove").addClass("on");
              $(".step-area .step-con .step").eq(3).removeClass("on");
            }else if(progress >= 0.5){
              $(".step-area .step-tit .step").eq(2).removeClass("on");
              $(".step-area .step-tit .step").eq(3).addClass("on");
              $(".step-area .step-con .step").eq(2).addClass("remove");
              $(".step-area .step-con .step").eq(3).addClass("on");
            }
          },
          onLeaveBack:function(){
            $(".step-area .step-tit .step").eq(0).addClass("on");
            $(".step-area .step-tit .step").eq(1).removeClass("on");
            $(".step-area .step-con .step").eq(0).removeClass("remove")
            $(".step-area .step-con .step").eq(1).removeClass("on");
          }
        },
      });
      
      // gsap.to($(".step-area .step-tit .bar-div .bar"), {
      //   scrollTrigger: {
      //     trigger: $(".step-area"),
      //     start: "top top",
      //     end: "bottom bottom",
      //     // markers: true,
      //     scrub:1,
      //   },
      //   width:"100%"
      // });

      // 컴포트2 영상 플레이    
      const video3 = document.querySelector("#video3");
      let src3 = video3.currentSrc || video3.src3;
      // console.log(video2, src2);

      /* Make sure the video is 'activated' on iOS */
      function once(el, event, fn, opts) {
        var onceFn = function (e) {
          el.removeEventListener(event, onceFn);
          fn.apply(this, arguments);
        };
        el.addEventListener(event, onceFn, opts);
        return onceFn;
      }

      let tl3 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: "#wrap",
          start: "top+=30% top",
          end: "+=400%",
          //pin: true,
          // markers:true,
          scrub: true,
          onEnter: function(){
            $("#video2").css('z-index', 0);
            $("#video3").css('z-index', 1);
          },
          onLeaveBack: function(){
            $("#video2").css('z-index', 1);
            $("#video3").css('z-index', 0);
          },
        }
      });

      once(video3, "loadedmetadata", () => {
        tl3.fromTo(
          video3,
          {
            currentTime: 0
          },
          {
            currentTime: 10 // 재생시간
          }
        );
      });

      /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
      setTimeout(function () {
        if (window["fetch"]) {
          fetch(src3)
            .then((response) => response.blob())
            .then((response) => {
              var blobURL = URL.createObjectURL(response);

              var t3 = video3.currentTime;

              video3.setAttribute("src", blobURL);
              video3.currentTime = t3 + 0.01;
            });
        }
      }, 1000);

      var infoMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".info-inner",
          start: "top top",
          end: "bottom+=300% bottom",
          pin: true,
          pinSpacing: false,
          // markers: true,
          scrub: 1,
          onUpdate:function(self){
            var progress = self.progress;
            console.log(progress)
            if(progress > 0.3){
              $("body").addClass("white");
              $(".info-list:nth-child(1) video").get(0).play();
            }else if(progress < 0.22){
              $("body").removeClass("white")
            }

            if(progress > 0.58){
              $(".info-list:nth-child(2) video").get(0).play();
            }
          },
        },
      })

      infoMotion.to($(".info-inner .info-square"), {
        top: "0",
        width: "100%",
        height: "100%",
        borderRadius:0,
        duration: 8,
      }).to($(".info-square .info-list").eq(0), {
        className: "info-list active",
        scrub:1,
        duration: 1,
      }).to($(".info-square .info-list").eq(1), {
        opacity:1,
        duration: 4,
      }).to($(".info-square .info-list").eq(1), {
        height:"100%",
        duration:10
      }).to($(".info-square .info-list").eq(1), {
        className: "info-list active",
        scrub:1,
        duration: 1,
      }).to($(".info-square .info-list").eq(1), {
        opacity:1,
        duration: 6,
      }).to($(".info-square .info-list").eq(1), {
        className: "info-list",
        duration: 1,
      }).to($(".info-square"), {
        scrub:1,
        height:800,
        width:693,
        clipPath: "polygon(65% 0, 100% 50%, 65% 100%, 0% 100%, 34% 50%, 0% 0%)",
        duration:8
      })
      // businessMotion.to($(".motion_area .motion_inner"),{
      //   height:"100%"
      // }, 'start')
      // .to($(".motion_area .business_area"), {
      //   top: "calc(50% - 54rem)",
      //   width: "100%",
      //   height: "calc(100vh + 0rem)",
      //   duration: 0.5,
      // }, 'start')
      // .to($(".family_list_w"), {
      //   duration: 1
      // });

      
      scrollMotionTrigger();
      scrollMotionTrigger1()
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
      $(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            if($("header").size() != 0){
              if(!$("header").hasClass("fixed")){
                gsap.to(("header"), 1.2, {top: -130, ease:Power2.easeOut});
              }
            }

            $(".quick-area").addClass("on");
          }

          if(_isScrollTop > 150){
            $(".left-visual-area").addClass("up");
            $(".pagenation").fadeOut();
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
            gsap.to(("header"), 1.3, {top: 0, ease:Power2.easeOut});
            $("header").removeClass("white").addClass("up-scroll");
          }else if (_isScrollTop < 1) {
            $("header").addClass("white").removeClass("up-scroll");
          }

          if(_isScrollTop <= 150){
            $(".pagenation").fadeIn();
            $(".left-visual-area").removeClass("up");
          }

          if(_isScrollTop == 0){
            $(".quick-area").removeClass("on");
          }
        }
        _this_scroll = _isScrollTop;
      }).scroll();
    },
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

function scrollMotionTrigger1(){
  if($(".scroll-motion1").size() > 0){
    $(".scroll-motion1:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 40%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion1:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
}
