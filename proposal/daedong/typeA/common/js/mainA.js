var _this_scroll;
var _isScrollTop;

$(function() {
  gsap.registerPlugin(ScrollToPlugin);
  main.gnbEvtFn();
  main.resizeFn();
  main.scrollEvtFn();
  main.clickEvtFn();
});

$(window).on("load", function(){  
  main.commonFn();
  main.swiperEvtFn();
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
      function splitTxt(cls) {
        var arrTxt = $("." + cls).text().trim().split("");
        $("." + cls).text("");
        for(var i=0; i<arrTxt.length; i++) {
            $("." + cls).append("<span>" + arrTxt[i] + "</span>");
        }
      }

      $(".main-visual .roll-area .txt-wrap .txt .line").each(function(q){
        $(this).addClass("line"+q);
        splitTxt("roll-area .line"+q);
      })

      $(".product-area .prod-roll-area .txt-wrap .txt .line").each(function (q) {
        $(this).addClass("line" + q);
        splitTxt("prod-roll-area .line" + q);
      });

      $(".main-visual .roll-area .txt-wrap .txt").css("visibility","visible");
      gsap.to($(".main-visual .roll-area .txt-wrap .txt").eq(0).find(".line span"), {top:0, opacity:1, stagger:0.025, duration:0.5, ease: Power3.ease});
      gsap.to($(".main-visual .roll-area .btn-wrap .button-list").eq(0).find(".btn-more"), {top:0, opacity:1, duration:0.5, delay:0.5, ease: Power3.ease});

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

      /*let fontWidthSum = $(".flow-area .flow-list").outerWidth(true);

      while(fontWidthSum < window.innerWidth + $(".flow-area .flow-list").eq(0).outerWidth(true)){
        const repeatObject = document.querySelector(".flow-area .flow-list");
        const newNode = repeatObject.cloneNode(true);
        repeatObject.after(newNode);
        fontWidthSum = fontWidthSum + $(".flow-area .flow-list").eq(-1).outerWidth(true);
      };*/

      // // let fontWidthSum = $(".flow_area .flow_list").outerWidth(true);
      // let fontWidthSum = $(".prod-img-wrap .prod-img .floating-txt img").outerWidth(true);


      // while(fontWidthSum < $(".prod-img-wrap .prod-img").width() + $(".flow_area .flow_list").eq(0).outerWidth(true)){
      //   const repeatObject = document.querySelector(".flow_area .flow_list");
      //   const newNode = repeatObject.cloneNode(true);
      //   repeatObject.after(newNode);
      //   fontWidthSum = fontWidthSum + $(".flow_area .flow_list").eq(-1).outerWidth(true);
      // };
  
      // setInterval(function() {
      //   if(parseInt($(".flow_area").css("left").split("p")[0]) < -$(".flow_area .flow_list").eq(0).outerWidth(true)) {
      //     $(".flow_area").css("left", 0);
      //   }
      //   $(".flow_area").css("left", parseInt($(".flow_area").css("left").split("p")[0]) - 2);
      // }, 8);
    },
    swiperEvtFn: function(){
      var kvSwiper = new Swiper(".kvSwiper", {
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
          nextEl: '.roll-area .swiper-button-next',
          prevEl: '.roll-area .swiper-button-prev',
        },
        on: {
          slideChangeTransitionStart: function(){
            //console.log(kvSwiper.realIndex);
            gsap.to($(".main-visual .roll-area .txt-wrap .txt .line span"), {top:100, opacity:0, duration:0, ease: "none"});
            gsap.to($(".main-visual .roll-area .txt-wrap .txt").eq(kvSwiper.realIndex), {opacity:1, duration: 0});
            gsap.to($(".main-visual .roll-area .txt-wrap .txt").eq(kvSwiper.realIndex).find(".line span"), {top:0, opacity:1, stagger:0.035, duration:0.6, ease: Power3.ease});

            gsap.to($(".main-visual .roll-area .btn-wrap button"), {top:100, opacity:0, duration:0, ease: "none"});
            gsap.to($(".main-visual .roll-area .btn-wrap .button-list").eq(kvSwiper.realIndex).find("button"), {top:0, opacity:1, duration:0.6, delay:0.5, ease: Power3.ease});
          },
        },
      });


      var productSwiper = new Swiper('.product-area .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 16,
      });

      $("section .swiper-container").each(function(){
        gsap.to($(this).find(".for-scroll-motion"), {
          scrollTrigger: {
            trigger: $(this).find(".swiper-slide"),
            start: "top 45%",
            end:"bottom top",
            once: true,
            //markers: true,
          },
          top: 0,
          opacity: 1,
          stagger: 0.1,
        });
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
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollEvtFn: function () {
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
          }

          if ($(window).scrollTop() + window.innerHeight > $("footer").offset().top) {
            $(".quick-list").addClass("on");
            gsap.to(".btn-quick", { duration: 0, opacity: 0 });
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
            gsap.to(("header"), 1.3, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (_isScrollTop < 1) {
            $("header").removeClass("up-scroll");
          }

          if (!($(window).scrollTop() + window.innerHeight > $("footer").offset().top)) {
            if($(".btn-quick").length > 0){
              $(".quick-list").removeClass("on");
              gsap.to(".btn-quick", { duration: 0, opacity: 1 });

              if ($(".product-area").offset().top - $(".main-visual").outerHeight() > _isScrollTop) {
                gsap.to(".btn-quick", { duration: 0, opacity: 0 });
              }
            }
          }
        }
        _this_scroll = _isScrollTop;
        scrollMotionTrigger();
      });

      gsap.to(".main-visual", {
        scrollTrigger: {
          trigger: ".main-visual",
          start: "top top",
          end: "bottom bottom",
          pin: true,
          scrub: 2,
          endTrigger: $(".product-area"),
          onUpdate: function (self) {
            gsap.to(".quick-area .box-wrap", { duration: .8, scrollTop: Math.floor(self.progress * 838 * 1.5), ease: Power3.easeOut });
            $(".main-visual").addClass("active");
          },
          onLeave: function () {
            $("header").removeClass("fixed");
            $(".main-visual").removeClass("active");
            gsap.to(".btn-quick", { delay: .75, duration: 0, opacity: 1 });
            gsap.to(".main-visual .roll-area", { duration: .8, width: "100%" });
            gsap.to(".main-visual .roll-area .img-wrap", { duration: .8, width: "100%" });
            gsap.to(".quick-wrap", { duration: .8, top: "50%", left: "calc(100% - 60px)", transform: "translate(-50%, -40px)", width: 80, height: 80,});
            gsap.to(".quick-area .box-wrap", { duration: .8, width: 80, height: 80, paddingTop: 0});
            gsap.to(".quick-area .quick-box", { duration: 0, opacity: 0});
            gsap.to(".quick-area .quick-box:first-child", { duration: .8, zIndex: 10, marginTop: 16, opacity: 1});
            gsap.to(".quick-area .quick-box:first-child img", { duration: 0, opacity: 0 });
            gsap.to(".quick-area .box-wrap", { delay: .8, duration: 0, opacity: 0 });
            gsap.to(".quick-area .quick-box", {duration: .8, position: "absolute", top: "50%", transform: "translateY(-50%)", width: 80, height: 80 });
          },
          onEnterBack: function () {
            $("header").addClass("fixed");
            $(".main-visual").addClass("active");
            gsap.to(".quick-area .box-wrap", { duration: 0, opacity: 1 });
            gsap.to(".btn-quick", { duration: 0, opacity: 0 });
            gsap.to(".main-visual .roll-area", { duration: .8, width: 1496 });
            gsap.to(".quick-area .quick-box", { duration: 0, opacity: 1});
            gsap.to(".quick-area .quick-box:first-child img", { duration: 0, opacity: 1 });
            gsap.to(".quick-wrap", { duration: .8, top: 90, left: "50%", transform: "translate(-50%, 0)", width: 1832 });
            gsap.to(".quick-area .box-wrap", { duration: .8, width: 320, height: 938, paddingTop: 298 });
            gsap.to(".quick-area .quick-box:first-child", { duration: 0, zIndex: 1, marginTop: 0 });
            gsap.to(".quick-area .quick-box", { duration: .8, position: "relative", top: "auto", transform: "translateY(0)", width: 320, height: 360, });
          },
        }
      });

      
      gsap.to($(".product-area .prod-list-wrap .prod-list"), {
        scrollTrigger: {
          trigger: ".product-area .prod-list-wrap .prod-list",
          start: "top 60%",
          end:"bottom+=500% top",
          once: true,
          //markers: true,
        },
        left: 0,
        opacity: 1,
        stagger: 0.15,
      });

      gsap.to($(".exhibition-area"), {
        scrollTrigger: {
          trigger: $(".exhibition-area"),
          start: "top bottom",
          //endTrigger: ".exhibition-area",
          end:"bottom top",
          scrub: 1,
          onUpdate: function(self) {
            gsap.to(".exhibition-area .exhibition-img", {top: -(self.progress.toFixed(3)*200), ease: Power3.ease});
          },
          //markers: true,
        },
      });

      gsap.to($(".exhibition-area .exhibition-txt img"), {
        scrollTrigger: {
          trigger: ".exhibition-area .exhibition-txt span",
          start: "top 75%",
          end:"bottom top",
          once: true,
          //markers: true,
        },
        top: 0,
        opacity: 1,
        stagger: 0.1,
      });
    },
    clickEvtFn: function () {
      $(".main-visual .roll-area .btn-next").on('click', function () {
        gsap.to($(".main-visual .roll-area .img-wrap .img").eq(0), { duration: .5, left: "-100%" }); // 활성화 이미지
        gsap.to($(".main-visual .roll-area .img-wrap .img").eq(1), { duration: .5, left: 0 });
      });
      $(".main-visual .roll-area .btn-prev").on('click', function () {
        gsap.to($(".main-visual .roll-area .img-wrap .img").eq(0), { duration: .5, left: 0 });
        gsap.to($(".main-visual .roll-area .img-wrap .img").eq(1), { duration: .5, left: "100%" }); // 활성화 이미지
      });

      // 퀵버튼 클릭
      $(".btn-quick").on("click", function () {
        $("body").addClass("scl-lock");
        $(".btn-quick").addClass("on");
          gsap.to(".quick-service", { duration: .6, left: "calc(100% - 408px)" });
      });

      // 퀵서비스 바깥 영역 클릭 시 퀵서비스 메뉴 닫힘
      $('body').click(function (e) {
        if (!$(e.target).parents().hasClass("on")) {
          $("body").removeClass("scl-lock");
          $(".btn-quick").removeClass("on");
          gsap.to(".quick-service", { duration: .6, left: "100%" });
        }
      });

      // product 화면 전환
      $(".type1-clk-left, .type1-clk-right").on("click", function () {
        $(".product-area").addClass("type2");
      });
      $(".type2-clk-left, .type2-clk-right").on("click", function () {
        $(".product-area").removeClass("type2");
        $(".product-area").addClass("type3");
      });
      $(".type3-clk-left, .type3-clk-right").on("click", function () {
        $(".product-area").removeClass("type3");
      });
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
