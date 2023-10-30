var _isFalse, _isOnce = false;
var _thisScroll = 0;
var _isScrollTop;
var _circleMotion;

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

      $("header").addClass("on");

      $(".trigger_txt_area .txt_area .title").addClass("on");

      $(".flow_txt > p").each(function(q){
        $(this).css("left", ($(this).innerWidth()+ 100) * q )
      });

      $(".one_d .hover").on("click", function(){
        if(!$(this).parents(".one_d").hasClass("on")){
          $(this).parents(".one_d").addClass("on");
          $(".two_d").fadeIn(200)
        }else{
          $(this).parents(".one_d").removeClass("on");
          $(".two_d").fadeOut(200)
        }
      });

    },
    clickFunc: function() {
      $(".btn_top").on("click", function(){
        gsap.to($("html, body"), 1, {scrollTop:0, ease:Power3.easeOut, onComplete:function(){
          $(".trigger_area .bg").removeClass("on")
          $("body").addClass("stop_scroll");
          $(".trigger_txt_area .txt_area").removeClass("active")
        }});
      });

      $(".quick_btn").on("click", function(){
        $(".quick_pop").addClass("on");
        $("body").addClass("stop_scroll");
      });

      $(".popup .pop_close").on("click", function(){
        console.log(_isScrollTop)
        if(_isScrollTop !== 0){
          $("body").removeClass("stop_scroll");
        }
        $(".popup").removeClass("on");
      });

      $(".quick_pop .online").on("click", function(){
        $(".quick_pop").removeClass("on");
        $(".online_pop").addClass("on");
        $("body").addClass("stop_scroll");
      });

      $(".quick_pop .tour_reserve").on("click", function(){
        $(".quick_pop").removeClass("on");
        $(".tour_pop").addClass("on");
        $("body").addClass("stop_scroll");
      });

      $(".all_menu").on("click", function(){
        $("body").addClass("stop_scroll");
        $(".all_menu_pop").fadeIn();
      });

      $(".all_menu_pop .pop_close").on("click", function(){
        if(_isScrollTop !== 0){
          $("body").removeClass("stop_scroll");
        }
        $(".all_menu_pop").fadeOut();
      });

    },
    mouseWheelFn:function(){
      $("html, body").on("mousewheel",function(event, delta){
        if (delta > 0) { // up
          if($(window).scrollTop() == 0){
            $(".trigger_area .bg").removeClass("on")
            $("body").addClass("stop_scroll");
            $(".trigger_txt_area .txt_area").removeClass("active")
          }
        }else if(delta < 0){ // down
          if($(window).scrollTop() == 0){
            if(!$(".quick_pop").hasClass("on") && !$(".online_pop").hasClass("on") && !$(".tour_pop").hasClass("on")){
              $(".trigger_area .bg").addClass("on")
              setTimeout(function(){
                $(".trigger_txt_area .txt_area").addClass("active")
                $("body").removeClass("stop_scroll");
                if(!_isFalse){
                  var triggers = ScrollTrigger.getAll();
                  triggers.forEach(function(trigger) {
                    if (trigger.vars.trigger === ".trigger_area .blue_bg_area .circle_area") {
                      trigger.refresh();
                    }
                  });
                  _isFalse = true;
                }
              }, 900)
            }
            
          }
          
        };
      });
    },
    swiperFunc: function() {

      var reviewSwiper = new Swiper(".review_swiper .swiper-container", {
        slidesPerView: "auto",
        navigation: {
          nextEl: ".review_swiper .swiper-button-next",
          prevEl: ".review_swiper .swiper-button-prev",
        },
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
    scrollFunc: function() {
      // header motion
      $(window).on("scroll", function() {
        _isScrollTop  = $(window).scrollTop();

        if(_isScrollTop > _thisScroll) { // down
          $(".quick_btn").addClass("on")
        }

        if(_isScrollTop < _thisScroll) { // up
          gsap.to($("header") , 0.6, {'top': 0, ease:Power3.easeOut});
          
        }

        if(_isScrollTop == 0) { 
          $(".quick_btn").removeClass("on")
        }

        if(_isScrollTop + window.innerHeight > $("footer").offset().top){
          $(".fixed_area").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 40)
        }else{
          $(".fixed_area").css("bottom", 40)
        }

        if(_isScrollTop > $(".trigger_area .masking_bg").offset().top - 400){
          $(".trigger_area .masking_bg").addClass("active");
        }

        if($(".trigger_area .blue_bg_area .circle_area").hasClass("active")){
          if(!_isOnce){
            gsap.to($(".trigger_area .blue_bg_area .circle_area .circle"), 1.2, {marginTop:0, opacity:1, delay:0.3, ease:Power3.easeOut});
            _isOnce = true
          }
        }

        if(_isScrollTop > $(".news_area").offset().top){
          $("header").addClass("color");
        }else{
          $("header").removeClass("color");
        }

        _thisScroll = _isScrollTop;

        scrollMotionTrigger()

      }).scroll()



      gsap.to($(".trigger_area .flow_txt"), 1.5, {
        scrollTrigger: {
          trigger: ".trigger_area .bg",
          start: "top-=300px top",
          end: "bottom bottom",
          endTrigger:$(".trigger_area .bg"),
          // markers:true,
          scrub:1,
          duration:10
        },
        "left": "-50%",
      });

      gsap.to($(".trigger_area .blue_bg_area"), {
        scrollTrigger: {
          trigger: ".trigger_area .blue_bg_area .circle_area",
          start: "top top",
          end: "bottom+=100% bottom",
          scrub:1,
          // markers:true,
        },
        "background" : "#000000",
      });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trigger_area .blue_bg_area .circle_area",
          start: "top top",
          end: "bottom bottom",
          endTrigger: ".trigger_area .blue_bg_area .slogan_list",
          scrub: 1,
          pin:true,
          pinSpacing:false,
          // markers: true,
        }
      });
      
      tl.to($(".trigger_area .blue_bg_area .circle_area .circle_wrap .circle"), {
        width: 240,
        height: 240,
        top: "50%",
        transform: "translate(-50%,-50%)",
      }).to($(".trigger_area .blue_bg_area .circle_area .circle_bg"), {
        opacity: 1,
      }).to($(".trigger_area .blue_bg_area .circle_area .video_bg"), {
        opacity: 1,
        pin:true,
      }).to($(".trigger_area .blue_bg_area .circle_area .video_bg"), {
        width:"120vw",
        height:"120vw",
        // borderRadius: 0,
        duration:1
      }).to($(".trigger_area .slogan_list"), {
        duration: 1
      });
    },
  }
}();


$(window).on("load", function(){
  main.init();
  main.clickFunc();
  main.swiperFunc();
  main.mouseWheelFn();
  main.scrollFunc();
})

function scrollMotionTrigger(){
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 60%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }

  if($(".scroll_motion1").size() > 0){
    $(".scroll_motion1:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 30%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion1:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }
}
