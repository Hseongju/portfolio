var _isFalse = false;
var _thisScroll = 0;
var _isScrollTop;

var main = function() {
  var _getScrollObjY = function () {
    var _arrY = [];
    $(".scroll-motion").each(function (q) {
      _arrY.push(parseInt($(".scroll-motion").offset().top + 300));
    });
    return _arrY;
  };
  return {
    init: function() {

      gsap.to($(".loading_area .left_cir"), 0.8, {opacity:1, scale:1, 'transform': 'translate(-50%, -50%)', delay:0.5, ease:Power3.easeOut})
      gsap.to($(".loading_area .right_cir"), 0.8, {opacity:1, scale:1, 'transform': 'translate(-50%, -50%)', delay:0.5, ease:Power3.easeOut})
      gsap.to($(".loading_area .white_circle"), 0.6, {width:200, height:200, delay:1.4, ease:Power3.easeOut})
      gsap.to($(".loading_area .white_circle .line_circle"), 0.6, {width:80, opacity:1, delay:1.8, ease:Power3.easeOut})
      gsap.to($(".loading_area .white_circle .line1"), 0.6, {width:"100%", opacity:1, delay:1.9, ease:Power3.easeOut})
      gsap.to($(".loading_area .white_circle .line2"), 0.6, {width:"100%", opacity:1, delay:1.9, ease:Power3.easeOut})
      gsap.to($(".loading_area .white_circle .line3"), 0.6, {width:"100%", opacity:1, delay:1.9, ease:Power3.easeOut, onComplete:function(){
        $(".loading_area .masking_circle").show();
        gsap.to($(".loading_area .masking_circle"), 1.5, {scale:17, ease:Power3.easeOut})
        gsap.to($(".loading_area"), 0.8, {top:-160, ease:Power3.easeOut, onComplete:function(){
          $(".loading_area").hide()
          gsap.to($("header") , 1, {'top': 60, opacity:1, ease:Power3.easeOut});
          $(".visual_area .txt_div.fir").addClass("active")
        }})
      }});

      $("header .nav").on("mouseenter", function(){
        if($("header").hasClass("top")){
          $("header").removeClass("transparent")
        }
        $("header .menu").stop(true,true).slideDown();
      });
  
      $("header").on("mouseleave", function(){
        if($(".loading_area").hasClass("end") && $("header").hasClass("top")){
          $("header").addClass("transparent")
        }
        $("header .menu").stop(true,true).slideUp();
      });

      $(".contact_btn, .pop_btn").on("click", function(){
        $("body").addClass("stop_scroll")
        $(".dimd").fadeIn();
        $(".contact_pop").addClass("on");
      });

      $(".contact_pop .btn_close").on("click", function(){
        $("body").removeClass("stop_scroll")
        $(".dimd").fadeOut();
        $(".contact_pop").removeClass("on");
      });
    },
    clickFunc: function() {
      $("header .gnb").hover(function(){
        $("header").addClass("hover")
      }, function(){
        $("header").removeClass("hover")
      });
      $("header .dim").hover(function(){
        $("header").addClass("hover")
      }, function(){
        $("header").removeClass("hover")
      });

      $(".section1 .part1 .left").on('click', function(){
        $(".srch_area").css('display', 'block')
        gsap.to($(".srch_area") , 1, {'opacity': 1, ease:Power3.easeOut});
        gsap.to($(".srch_area .inner a.srchbt") , 1, {'transform': 'translate(0, 0)', 'opacity': 1, delay: 0.5, ease:Power3.easeOut});
        gsap.to($(".srch_area .inner a.xbt") , 1, {'transform': 'translate(0, 0)', 'opacity': 1, delay: 0.6, ease:Power3.easeOut});
      });

      $(".srch_area .inner a.xbt").on('click', function(){
        gsap.to($(".srch_area") , 1, {'opacity': 0, ease:Power3.easeOut, onComplete:function(){
          gsap.to($(".srch_area .inner a.srchbt") , 0, {'transform': 'translate(0, 100px)', 'opacity': 0, ease:Power3.easeOut});
          gsap.to($(".srch_area .inner a.xbt") , 0, {'transform': 'translate(0, 100px)', 'opacity': 0, ease:Power3.easeOut});
          $(".srch_area").css('display', 'none')
        }});
      });

      var _curmy = false;
      $("header .my").on('click', function(){
        if(_curmy == false){
          gsap.to($("header .my > p") , 1, {'opacity': 0, ease:Power3.easeOut});
          gsap.to($(".alarm_area") , 1, {'right': 30, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(0) , 1, {'left': 0, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(1) , 1, {'left': 0, delay: 0.1, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(2) , 1, {'left': 0, delay: 0.2, ease:Power3.easeOut, onComplete:function(){
            _curmy = true;
          }});
        }else{
          gsap.to($(".alarm_area") , 1, {'right': -360, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(0) , 1, {'left': 100, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(1) , 1, {'left': 100, delay: 0.1, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(2) , 1, {'left': 100, delay: 0.2, ease:Power3.easeOut, onComplete:function(){
            _curmy = false;
          }});
        }
      });

      $(".alarm_area li").eq(0).find("a").on('click', function(){
        gsap.to($(".alarm_area li").eq(0) , 0.8, {'opacity': 0, ease:Power3.easeOut});
        gsap.to($(".alarm_area li").eq(1) , 0.8, {'top': 0, ease:Power3.easeOut});
        gsap.to($(".alarm_area li").eq(2) , 0.8, {'top': 128, ease:Power3.easeOut});
      });

      $(".alarm_area li").eq(1).find("a").on('click', function(){
        gsap.to($(".alarm_area li").eq(1) , 0.8, {'opacity': 0, ease:Power3.easeOut});
        gsap.to($(".alarm_area li").eq(2) , 0.8, {'top': 0, ease:Power3.easeOut});
      });

      $(".alarm_area li").eq(2).find("a").on('click', function(){
        gsap.to($(".alarm_area li").eq(2) , 0.8, {'opacity': 0, ease:Power3.easeOut, onComplete:function(){
          gsap.to($(".alarm_area") , 0, {'right': -360, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(0) , 0, {'left': 100, top: 0, opacity: 1, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(1) , 0, {'left': 100, top: 128, opacity: 1, ease:Power3.easeOut});
          gsap.to($(".alarm_area li").eq(2) , 0, {'left': 100, top: 256, opacity: 1, ease:Power3.easeOut});
          _curmy = false;
        }});
      });


      $(".section1 .part1 .right").on('click', function(){
        gsap.to($(".hiring_area") , 2, {'left': 0, ease:Power3.easeInOut});
        gsap.to($(".hiring_area .list_sec .right .list_area") , 1, {'transform': 'translate(0, 0)', opacity: 1, delay: 1.2, ease:Power3.easeOut});
        gsap.to($(".hiring_area .list_sec .right .select_area > p").eq(1) , 1, {'transform': 'translate(0, 0)', opacity: 1, delay: 1.2, ease:Power3.easeOut});
      });

      $(".hiring_area .xbt").on('click', function(){
        gsap.to($(".hiring_area") , 1.5, {'left': '100%', ease:Power3.easeOut, onComplete:function(){
          gsap.to($(".hiring_area .list_sec .right .list_area") , 0, {'transform': 'translate(0, 100px)', opacity: 0, ease:Power3.easeOut});
          gsap.to($(".hiring_area .list_sec .right .select_area > p").eq(1) , 0, {'transform': 'translate(-100px, 0)', opacity: 0, ease:Power3.easeOut});
        }});
      });

      $(".hiring_area .hiring_pop .tit_area .open").on('click', function(){
        $(".hiring_area .hiring_pop").removeClass("close");
        $(".hiring_area .dim").fadeIn(500)
      });

      $(".hiring_area .hiring_pop .input_area > a").on('click', function(){
        $(".hiring_area .hiring_pop").addClass("close");
        $(".hiring_area .dim").fadeOut(500)
      });
    },
    swiperFunc: function() {
      var bgSwiper = new Swiper(".bg_area .swiper-container", {
        effect: "fade",
        speed:500,
        simulateTouch:false,
        loop:true,
      });

      var visualSwiper = new Swiper(".visual_area .swiper-container", {
        effect: "fade",
        speed:500,
        simulateTouch:false,
        loop:true,
        navigation: {
          nextEl: ".visual_area .swiper-button-next",
          prevEl: ".visual_area .swiper-button-prev",
        },
        on:{
          slideChangeTransitionStart : function(){
            $(".visual_area .slide_page_txt > p").removeClass("on");
            $(".visual_area .slide_page_txt > p").eq(this.realIndex).addClass("on");
            bgSwiper.slideTo(this.activeIndex)

              gsap.to($(".visual_area .swiper-slide .txt_div"), 1.2, {bottom:160, opacity:0, ease:Power3.easeOut});
              gsap.to($(".visual_area .swiper-slide-duplicate .txt_div"), 1.2, {bottom:160, opacity:0, ease:Power3.easeOut});

              gsap.to($(".visual_area .swiper-slide-active .txt_div"), 1.5, {bottom:206, opacity:1, ease:Power3.easeOut});
              gsap.to($(".visual_area .swiper-slide-duplicate-active .txt_div"), 1.5, {bottom:206, opacity:1, ease:Power3.easeOut});
          },
        }
      });

    },
    mouseWheelFn:function(){
      $("html, body").on("mousewheel DOMMouseScroll",function(e){
        var E = e.originalEvent;
        delta = 0;
        if (E.detail) { // up
          
        }else{ // down
          if(!$(".loading_area").hasClass("end")){
            gsap.to($(".visual_area .swiper-slide .once_white_bg"), 1.8, {top:"-100%", ease:Power3.easeOut, onComplete:function(){
              $("body").removeClass("stop_scroll");
            }});
            gsap.to($("header") , 0.6, {'top': 0, opacity:1, delay:0.2, ease:Power3.easeOut});
            setTimeout(function(){
              $("header").addClass("transparent");
              $(".loading_area").addClass("end");
            },200)
            $(".visual_area .txt_div.fir").addClass("on");
            gsap.to($(".slide_page_txt") , 0.6, {opacity:1, delay:0.2, ease:Power3.easeOut});
            $(".visual_area .swiper-button-next, .visual_area .swiper-button-prev").fadeIn();
          }
        };
      });
    },
    scrollFunc: function() {
      // header motion
      $(window).on("scroll", function() {
        _isScrollTop  = $(window).scrollTop();

        if(_isScrollTop > _thisScroll) { // down
          $("header").addClass("transparent");
          $("header").removeClass("top")
          gsap.to($("header") , 0.6, {'top': -168, ease:Power3.easeOut});

          $(".contact_btn").addClass("on")
        }

        if(_isScrollTop < _thisScroll) { // up
          $("header").removeClass("transparent");
          gsap.to($("header") , 0.6, {'top': 0, ease:Power3.easeOut});
        }

        if(_isScrollTop == 0) { 
          $("header").addClass("transparent");
          $("header").addClass("top")
          $(".contact_btn").removeClass("on")
        }

        _thisScroll = _isScrollTop;

        scrollMotionTrigger()

        

        $(".about_us_area .inner .info_area .inner .list_div .list").each(function(){
          if($(this).hasClass("active")){
            if(!$(this).hasClass("countup")){
              $(this).addClass("countup");
              $(this).find(".count .num").counterUp({
                time: 800,
              });
            }
          }
        })
      });



      gsap.to($(".about_us_area .inner .info_area .info_bg_w"), 0.5, {
        scrollTrigger: {
          trigger: ".about_us_area .inner .txt_area",
          start: "center top",
          end: "bottom+=250% bottom",
          // markers:true,
          scrub:1,
          // onLeave : function(self){
          //   $(".about_us_area .inner .info_area").addClass("on");
          // },
          onUpdate : function(self){
            if(self.progress.toFixed(3) > 0.9){
              $(".about_us_area .inner .info_area").addClass("on");
            }else{
              $(".about_us_area .inner .info_area").removeClass("on");
            }
          },
        },
        "marginTop": "264",
        "width": "100vw",
        "height": 2574,
        "transform": "translateX(-50%)",
        "left": "50%",
        "right": "auto",
        "bottom": "auto",
        "top": "0",
        "borderRadius": "0",
      });

      gsap.to($(".circle_slide"), {
        scrollTrigger: {
          trigger: ".circle_slide",
          start: "top top",
          end: "550% bottom",
          // endTrigger:$(".circle_slide .slide_wrap"),
          pin:true,
          // markers:true,
          onEnter : function(){

          },
          onUpdate : function(self){
            if(self.progress.toFixed(3) <= 0.16){
              $(".business_area .circle_slide .slide").eq(1).removeClass("on");
              $(".business_area .circle_slide .slide").eq(0).removeClass("prev");
            }else if(self.progress.toFixed(3) > 0.16 && self.progress.toFixed(3) <= 0.32){
              $(".business_area .circle_slide .slide").eq(2).removeClass("on");
              $(".business_area .circle_slide .slide").eq(0).addClass("prev");
              $(".business_area .circle_slide .slide").eq(1).addClass("on");
              $(".business_area .circle_slide .slide").eq(1).removeClass("prev");
            }else if(self.progress.toFixed(3) > 0.32 && self.progress.toFixed(3) <= 0.48){
              $(".business_area .circle_slide .slide").eq(3).removeClass("on");
              $(".business_area .circle_slide .slide").eq(1).addClass("prev");
              $(".business_area .circle_slide .slide").eq(2).addClass("on");
              $(".business_area .circle_slide .slide").eq(2).removeClass("prev");
            }else if(self.progress.toFixed(3) > 0.48 && self.progress.toFixed(3) <= 0.64){
              $(".business_area .circle_slide .slide").eq(4).removeClass("on");
              $(".business_area .circle_slide .slide").eq(2).addClass("prev");
              $(".business_area .circle_slide .slide").eq(3).addClass("on");
              $(".business_area .circle_slide .slide").eq(3).removeClass("prev");
            }else if(self.progress.toFixed(3) > 0.64 && self.progress.toFixed(3) <= 0.80){
              $(".business_area .circle_slide .slide").eq(5).removeClass("on");
              $(".business_area .circle_slide .slide").eq(3).addClass("prev");
              $(".business_area .circle_slide .slide").eq(4).addClass("on");
              $(".business_area .circle_slide .slide").eq(4).removeClass("prev");
            }else{
              $(".business_area .circle_slide .slide").eq(4).addClass("prev");
              $(".business_area .circle_slide .slide").eq(5).addClass("on");
            }
          },
        },
      });

      gsap.to($(".digital_area .circle_div"), 0.8, {
        scrollTrigger: {
          trigger: ".circle_div",
          start: "top top",
          end: "bottom bottom",
          // endTrigger:$(".circle_slide .slide_wrap"),
          pin:true,
          // markers:true,
          onEnter : function(){
            $(".digital_area .content").addClass("on")
          },
        },
        // scale:50
      });

      gsap.to($(".digital_area .circle_div .circle"), 0.8, {
        scrollTrigger: {
          trigger: ".circle_div",
          start: "top top",
          end: "bottom bottom",
          // endTrigger:$(".circle_slide .slide_wrap"),
          // markers:true,
        },
        scale:50
      });

      gsap.to($(".digital_area .content .x_scroll_area .x_scroll_div"), 0.8, {
        scrollTrigger: {
          trigger: ".digital_area .content .x_scroll_area .x_scroll_div",
          start: "top top",
          end: "bottom bottom",
          // endTrigger:$(".circle_slide .slide_wrap"),
          pin:true,
          // markers:true,
          onEnter : function(){
            $(".digital_area .content").addClass("active")
          },
          onLeaveBack : function(){
            $(".digital_area .content").removeClass("active")
          }
        },
      });
      
      gsap.timeline({
        scrollTrigger: {
          trigger: ".digital_area .content .x_scroll_area .x_scroll_div",
          start: "top top",
          end: "bottom+=800% bottom",
          scrub: 2,
          // markers: true,
          pin: true,
          onUpdate:function(self){
            console.log(self.progress.toFixed(3))
            if(self.progress.toFixed(3) <= 0.7){
              $(".digital_area .content .x_scroll_area .x_scroll_div .con .txt_w > *").removeClass("active")
            }else if(self.progress.toFixed(3) > 0.7 && self.progress.toFixed(3) <= 0.75){
              $(".digital_area .content .x_scroll_area .x_scroll_div .con .txt_w > .txt1").addClass("active");
            }else if(self.progress.toFixed(3) > 0.75){
              $(".digital_area .content .x_scroll_area .x_scroll_div .con .txt_w > .txt2").addClass("active");
            }
          },
          onLeave:function(){
            $(".digital_area .content").addClass("leave");
            $(".digital_area").addClass("white");
            $(".solution_area").addClass("on");
            $(".digital_area .content.leave .x_scroll_area .x_scroll_div .con .title").addClass("active")

            setTimeout(function(){
              $(".solution_area .inner .txt_area").addClass("active")
            },400)
          },
          onEnterBack:function(){
            $(".digital_area .content").removeClass("leave");
            $(".solution_area").removeClass("on");
            $(".digital_area .content .x_scroll_area .x_scroll_div .con .title").removeClass("active")
          }
        }
      })
      .to(".digital_area .content .x_scroll_area .x_scroll_div .con .img", {
        width:"1760",
        duration:100,
        ease: "power1.inOut"
      })
      .to(".digital_area .content .x_scroll_area .x_scroll_div .con_div", {
        x:"-200%",
        duration:100,
        ease: "power1.inOut",
      });

      gsap.to($(".story_area .flex_box .left"), 0.8, {
        scrollTrigger: {
          trigger: ".story_area .flex_box .left",
          start: "top top",
          end: "bottom bottom",
          endTrigger:$(".story_area .flex_box .img_area"),
          pin:true,
          // markers:true
        },
      });
    },
  }
}();

$(function() {
  gsap.registerPlugin(ScrollToPlugin);
  main.init();
  main.clickFunc();
  main.swiperFunc();
  main.mouseWheelFn();
  main.scrollFunc();
});

function scrollMotionTrigger(){
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 50%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }
}
