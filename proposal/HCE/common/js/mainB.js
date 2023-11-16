var _this_scroll;
var _isScrollTop;
var _isOnce = false;
var _quickMotion;
var _quickMotionOnce = false;

$(function() {
  gsap.registerPlugin(ScrollToPlugin);
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
      $(".comport-area .con-area .con-inner .right-line img").width($(window).innerWidth())
      $(".main-visual .roll-area .img-wrap .img:first-child").addClass("active");

      // function splitTxt(cls) {
      //   var arrTxt = $("." + cls).text().trim().split("");
      //   $("." + cls).text("");
      //   for(var i=0; i<arrTxt.length; i++) {
      //     $("." + cls).append("<span>" + arrTxt[i] + "</span>");
      //   }
      // }

      // $(".main-visual .roll-area .txt-wrap .txt .line").each(function(q){
      //   $(this).addClass("line"+q);
      //   splitTxt("roll-area .line"+q);
      // })

      $(".product-area .prod-roll-area .txt-wrap .txt .line").each(function (q) {
        $(this).addClass("line" + q);
        splitTxt("prod-roll-area .line" + q);
      });

      $(".main-visual .roll-area .txt-wrap .txt").css("visibility","visible");
      gsap.to($(".main-visual .roll-area .txt-wrap .txt").eq(0).find(".line span"), {top:0, opacity:1, stagger:0.025, duration:0.5, ease: Power3.ease});
      gsap.to($(".main-visual .roll-area .button-list").eq(0).find(".btn-more"), {top:0, opacity:1, duration:0.5, delay:0.5, ease: Power3.ease});

      // product flow text
      var flowMotion;
      var setTime;
      $(".product-area .product-swiper-w .swiper-slide").hover(function(){
        clearInterval(flowMotion);
        clearTimeout(setTime);
        $(this).addClass("active");
        var nowItem = $(this).find(".flow-area");
        flowMotion = setInterval(function() {
          if($(nowItem).position().left < -$(nowItem).find(".flow-list").eq(0).outerWidth(true)) {
            $(nowItem).css("left", 0);
          }
          $(nowItem).css("left", $(nowItem).position().left - 2);
        }, 8);
      }, function(){
        $(this).removeClass("active");
        setTime = setTimeout(() => {
          clearInterval(flowMotion);
        }, 500);
      });
      


      $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").each(function(q){
        $(this).on("mouseenter", function(){
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").removeClass("on")
          $(this).addClass("on");
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").not($(this)).find(".tit img:nth-child(1)").css("opacity", "0")
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").not($(this)).find(".tit img:nth-child(2)").css("opacity", "0.2")
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").not($(this)).find(".txt img:nth-child(1)").css("opacity", "0")
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").not($(this)).find(".txt img:nth-child(2)").css("opacity", "0.2")
          $(this).find(".tit img:nth-child(2)").css("opacity", "0")
          $(this).find(".txt img:nth-child(2)").css("opacity", "0")
          $(this).find(".tit img:nth-child(1)").css("opacity", "1")
          $(this).find(".txt img:nth-child(1)").css("opacity", "1")
          $(".comport-area .con-area .con-inner .bg-con .bg").removeClass("on");
          $(".comport-area .con-area .con-inner .bg-con .bg").eq(q).addClass("on");
          /*  gsap.to(".comport-area .con-area .con-inner .bg-con .bg.on", 0.4, {opacity:1, scale:1.1, onComplete:function(){
            $(".comport-area .con-area .con-inner .bg-con .bg").not($(".comport-area .con-area .con-inner .bg-con .bg").eq(q)).removeAttr("style")
          }}) */
        });
        $(this).on("mouseleave", function(){
          $(".comport-area .con-area .con-inner .bg-con .bg").removeClass("on");
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").removeClass("on");
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").find(".tit img:nth-child(2)").css("opacity", "0")
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").find(".txt img:nth-child(2)").css("opacity", "0")
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").find(".tit img:nth-child(1)").css("opacity", "1")
          $(".comport-area .con-area .con-inner .con-div .con .txt-div .txt-wrap").find(".txt img:nth-child(1)").css("opacity", "1")
        })
      });

      $(".news .img-wrap .news-img:last-child .img").on("mouseenter", function(){
        $(this).find("video").get(0).play()
      });
      $(".news .img-wrap .news-img:last-child .img").on("mouseleave", function(){
        $(this).find("video").get(0).pause()
      });
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
      $("header .gnb").on("mouseenter focusin", function(){
        $("header .two-depth").stop(true, true).slideDown(300);
        $("header").addClass("hover");
      });

      $("header .gnb-area").on("mouseleave", function(){
        $("header .two-depth").stop(true, true).slideUp(300, function(){
          $("header").removeClass("hover");
        });
      });

      $(window).on("mousewheel",function(event){
        if (event.originalEvent.deltaY < 0) {
          // wheeled up
          $("header").addClass("scroll")
        }
        else {
          // wheeled down
          $("header").removeClass("scroll")
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

        if(_isScrollTop == 0){
          $("header").addClass("scroll");
        } 

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            if($("header").size() != 0){
              gsap.to(("header"), 1.2, {top: -130, ease:Power2.easeOut});
            }
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
            gsap.to(("header"), 1.3, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (_isScrollTop < 1) {
            $("header").removeClass("up-scroll");
          }
        }

        if (_isScrollTop + window.innerHeight > $("footer").offset().top) {
          $(".quick-list").addClass("on");
          $(".quick-wrap").fadeOut()

          ScrollTrigger.getById("comportBgMotion").disable(true);
          // ScrollTrigger.getById("comportConMotion").disable(true);
          
        }else{
          $(".quick-list").removeClass("on");
          $(".quick-wrap").fadeIn()
          ScrollTrigger.saveStyles(".con-area");
          ScrollTrigger.saveStyles(".bg-inner");
          ScrollTrigger.getById("comportBgMotion").enable(true);
          // ScrollTrigger.getById("comportConMotion").enable(true);
        }
        
        _this_scroll = _isScrollTop;
        scrollMotionTrigger();
      }).scroll();
    },
    clickFn: function () {
      setTimeout(function(){
        $(".quick-wrap").addClass("on");
      }, 100)

      $("body").on("click", function(e){
        if($(e.target).hasClass("txt-img")) {
          $("body").addClass("scl-lock");
          $(".dimd").fadeIn();
          gsap.to(".quick-service", { duration: .6, left: "calc(100% - 408px)" });
          e.stopPropagation();
        }
      });

      $(".dimd").on("click", function(){
        $(".dimd").fadeOut()
        $("body").removeClass("scl-lock");
        gsap.to(".quick-service", { duration: .6, left: "100%" });
        gsap.to(".news-pop", { duration: .6, left: "100%" });
      });

      $(".news-pop-btn").on("click", function(){
        $("body").addClass("scl-lock");
        $(".dimd").fadeIn();
        gsap.to(".news-pop", { duration: .6, left: "calc(100% - 1728px)" });
      });

      $(".news-pop .close-btn").on("click", function(){
        $(".dimd").fadeOut()
        $("body").removeClass("scl-lock");
        gsap.to(".news-pop", { duration: .6, left: "100%" });
      });

      // product 화면 전환
      $(".type1-clk-right").on("click", function () {
        if(!$(this).hasClass("on")){
          $(this).addClass("on");
          $(".product-area .con1").css("display", "none");
          $(".product-area .con2").css("display", "block");
          setTimeout(function(){
            $(".product-area .con2 .product-txt").addClass("active")
            $(".product-area .con2 .list1").addClass("active")
            scrollMotionTrigger()
            ScrollTrigger.refresh();
            $(".product-area .con1 .prod-list-wrap").removeClass("active");
            $(".product-area .con1 .product-swiper-w").removeClass("active");
          },100)
        }else{
          $(this).removeClass("on");
          $(".product-area .con1").css("display", "block");
          $(".product-area .con2").css("display", "none");
          setTimeout(function(){
            $(".product-area .con2 .product-txt").addClass("active")
            $(".product-area .con2 .list1").addClass("active")
            scrollMotionTrigger()
            ScrollTrigger.refresh();
            $(".product-area .con2 .product-txt").removeClass("active")
            $(".product-area .con2 .list1").removeClass("active")
            $(".product-area .con2 .list2").removeClass("active")
            $(".product-area .con2 .srch-area").removeClass("active")
          },100)
        }
      });
    },
    scrollTriggerFn:function(){
      
      var _quickMotion = gsap.to($(".quick-inner"), {
        scrollTrigger: {
          id:"quickMotion",
          trigger: ".quick-inner",
          start: "top+=300px top",
          end:"bottom bottom",
          endTrigger:$(".main-visual .roll-area .roll:first-child .img-wrap"),
          scrub:1,
          pin:true,
          // markers: true,
        },
      });

      gsap.to($(".quick-area"), {
        scrollTrigger: {
          id:"quickTopMotion",
          trigger: ".main-visual .roll-area .img-wrap .img:first-child",
          start: "top top",
          end:"bottom bottom",
          endTrigger:$(".main-visual .roll-area .roll:first-child .img-wrap"),
          scrub:1,
          // markers: true,
        },
        top:$(window).innerHeight() - $(".quick-area").innerHeight() + 300
      });

      gsap.to($(".comport-area"), {
        scrollTrigger: {
          trigger: ".comport-area .bg-area .bg",
          start: "top bottom",
          end:"bottom+=100% bottom",
          scrub:2,
          // markers: true,
          onUpdate:function(self){
            gsap.to(".comport-area .bg-area .bg img", 1, {top:-self.progress.toFixed(3) * 500, ease:Power3.easeOut})
          }
        },
      });

      var comportMotion = gsap.timeline({
        scrollTrigger: {
          id:"comportBgMotion",
          trigger: ".comport-area .bg-area .bg-inner",
          start: "top top",
          end:"bottom top",
          endTrigger:$(".quick-list-area"),
          pin:true,
          pinSpacing: false,
          scrub:2,
          // markers: true,
          // onUpdate:function(self){
          //   console.log(self.progress.toFixed(3))
          // }
        },
      })

      comportMotion.to($(".comport-area .con-area"), {
        top:0
      })

      gsap.to($(".comport-area .con-area"), {
        scrollTrigger: {
          id:"comportConMotion",
          trigger: ".comport-area .con-area",
          start: "top top",
          end:"bottom+=100% bottom",
          // endTrigger:$("footer"),
          pin:true,
          scrub:2,
          // markers: true,
          onEnter:function(){
            setTimeout(function(){
              $(".comport-area .con-area .con-inner .con-div .con .txt-div").addClass("active")
              $(".comport-area").addClass("on")
            }, 1000)
            gsap.to(".left-line", 0.8, {width:"100%"})
            gsap.to(".right-line", 1.1, {width:"100%", delay:0.4});
          },
          onLeave:function(){
            console.log(123)
            setTimeout(function(){
              $(".comport-area .con-area").css("transform", "translate(0px, + " + $(window).innerHeight() + "px) !important")
            },1000)
          }
        },
      });

      var comportMotion2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".comport-area .con-area",
          start: "top bottom",
          end:"bottom bottom",
          // endTrigger:$("footer"),
          scrub:2,
          // markers: true,
          onEnter:function(){
            $(".comport-area .con-area .con-inner .video-bg video").get(0).play()
          },
        },
      })

      comportMotion2.to($(".comport-area .con-area .con-inner .video-bg"), {left:0, duration:2, ease:Power3.easeOut})
      .to($(".comport-area .con-area .con-inner .video-bg"), {
        clipPath:"polygon(0 15%, 100% 0%, 100% 100%, 0% 100%)",
        duration:1
      }, 0)
      .to($(".comport-area .con-area .con-inner .video-bg"), {
        clipPath:"polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration:1
      }, 1)

      // gsap.to($(".main-visual"), {
      //   scrollTrigger: {
      //     id:"visualType2",
      //     trigger: ".main-visual .inner .con2 .img-div .inner",
      //     start: "top-=110px top",
      //     end:"bottom+=356 bottom",
      //     endTrigger:$(".quick-wrap"),
      //     pin:true,
      //     scrub:2,
      //     markers: true,
      //     onLeave:function(){
      //       console.log(123)
      //       $(".product-area").css("margin-top","calc(100vh + 762px)")
      //     }
      //   },
      // });

      // ScrollTrigger.getById("visualType2").disable(true)


      $(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();
  
        if(_isScrollTop + $(window).innerHeight() - 140 > $(".product-area").offset().top){
          $(".main-visual").addClass("no-fixed")
        }else{
          $(".main-visual").removeClass("no-fixed")
        }
  
        if(_isScrollTop + ($(window).innerHeight() / 2) > $(".product-area").offset().top){
          if(!_quickMotionOnce){
            _quickMotionOnce = true;
            if(!$(".main-visual .con2").is(":visible")){
              ScrollTrigger.getById("quickMotion").disable(true);
              ScrollTrigger.getById("quickTopMotion").disable(true);
            }
            
            ScrollTrigger.saveStyles(".quick-inner");
            $(".quick-wrap").addClass("small");
            $(".quick-area .quick-box img:nth-child(1)").hide()
            gsap.to(".quick-area .box-wrap", 1.5, {width:80, height:80, opacity:0})
            $(".quick-wrap .txt-img").delay(300).fadeIn()
            $(".main-visual .roll-area").addClass("full");
            ScrollTrigger.update()
          }
          
        }else{
          if(_quickMotionOnce){
            _quickMotionOnce = false;
            $(".quick-wrap").removeClass("small");
            $(".quick-wrap .quick-inner").fadeIn(300)
            if(!$(".main-visual .con2").is(":visible")){
              ScrollTrigger.getById("quickMotion").enable(true);
              ScrollTrigger.getById("quickTopMotion").enable(true);
            }
            $(".quick-area .quick-box img:nth-child(1)").show()
            $(".quick-wrap .txt-img").hide()
            gsap.to(".quick-area .box-wrap", 0.8, {width:320, height:1488, opacity:1})
            $(".main-visual .roll-area").removeClass("full");
            ScrollTrigger.update()
          }
        }
  
        _this_scroll = _isScrollTop;
      });

      

      $(".main-visual .tab-btn").on("click", function(){
        if(!$(this).hasClass("on")){
          $(this).addClass("on");
          $(".main-visual").addClass("change");
          $(".quick-test").addClass("change");
          $(".quick-wrap").addClass("change");
          $(".main-visual .con1").css("display", "none");
          $(".main-visual .con2").css("display", "block");
          // $(".quick-wrap").css({"right": -$(window).innerWidth() + (($(window).innerWidth() - 1832) / 2) + 320})
          $(".quick-wrap .quick-inner").css({"width":"200px", "height":"200px"});
          // ScrollTrigger.getById("comportBgMotion").disable(true);
          // ScrollTrigger.getById("comportConMotion").disable(true);
          

          gsap.to($(".main-visual"), {
            scrollTrigger: {
              id:"visualType2",
              trigger: ".main-visual .inner .con2 .img-div .inner",
              start: "top-=110px top",
              end:"bottom+=40 bottom",
              endTrigger:$(".quick-test"),
              pin:true,
              scrub:2,
              // markers: true,
              // onLeave:function(){
              //   _isOnce = true
              //   if(_isOnce){
              //     _isOnce = false
              //     console.log(123)
              //     $(".quick-wrap").removeClass("change")
              //     $(".product-area").css("margin-top","calc(100vh + 571px)")
              //   }
              // },
              // onEnter:function(){
              //   setTimeout(function(){
              //     console.log(45)
              //     $(".product-area").css("margin-top","0")
              //     $(".quick-wrap").addClass("change")
              //   },10)
              // }
            },
          });

          // function splitTxt(cls) {
          //   var arrTxt = $("." + cls).text().trim().split("");
          //   $("." + cls).text("");
          //   for(var i=0; i<arrTxt.length; i++) {
          //     $("." + cls).append("<span>" + arrTxt[i] + "</span>");
          //   }
          // }

          setTimeout(function(){
            // console.log(123123)
            ScrollTrigger.getById("visualType2").enable(true)
            ScrollTrigger.getById("quickMotion").disable(true);
            ScrollTrigger.getById("quickTopMotion").disable(true);
            // ScrollTrigger.getById("comportBgMotion").enable(true);
            // ScrollTrigger.getById("comportConMotion").enable(true);
            ScrollTrigger.refresh();
          },100)

          setTimeout(function(){
            if(!$(".main-visual .con2").hasClass("fir")){
              $(".main-visual .con2").addClass("fir")
              // $(".main-visual .inner .con2 .txt-motion .txt-wrap .txt .line").each(function(q){
              //   $(this).addClass("line"+q);
              //   splitTxt("con2 .line"+q);
              // })
              // $(".main-visual .inner .con2 .txt-motion .txt-wrap .txt").css("visibility","visible");
              // gsap.to($(".main-visual .inner .con2 .txt-motion .txt-wrap .txt").eq(0).find(".line span"), {top:0, opacity:1, stagger:0.025, duration:0.5, ease: Power3.ease});
            }
            $(".main-visual .inner .con2").addClass("active");
          },110)

          setTimeout(function(){
            $(".quick-wrap.change .quick-inner").addClass("active")
          },200)
        }else{
          $(this).removeClass("on");
          $(".main-visual").removeClass("change");
          $(".quick-test").removeClass("change");
          $(".main-visual .con1").css("display", "block");
          $(".main-visual .con2").css("display", "none");
          $(".quick-wrap").removeClass("change")
          $(".quick-wrap").removeAttr("style");
          $(".quick-wrap .quick-inner").removeAttr("style");

          setTimeout(function(){
            ScrollTrigger.getById("visualType2").disable(true)
            ScrollTrigger.getById("quickMotion").enable(true);
            ScrollTrigger.getById("quickTopMotion").enable(true);
            ScrollTrigger.refresh();
          },100)
        }
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
