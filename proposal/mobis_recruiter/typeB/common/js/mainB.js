$(function () {
  mainB.init();
  mainB.scrollFn();
  mainB.swiperFn();
  mainB.scrollTriggerFn();
});
var _isFalse;
var _thisScroll = 0;
var _isScrollTop;

var mainB = function () {
  var _getScrollObjY = function () {
    var _arrY = [];
    $(".scroll_motion").each(function (q) {
      _arrY.push(parseInt($(".scroll_motion").offset().top + 300));
    });
    return _arrY;
  };
  return {
    init: function () {
      $("header").removeClass("first")
      gsap.to("header", {duration: 0.6, top: 0, opacity:1, delay:0.25, ease: Cubic.easeOut});

      // $(".bg_visual .txt_div .txt img").each(function(){
      //   console.log($(this).get(0).naturalHeight)
      //   $(this).parents(".txt").height($(this).naturalHeight)
      // });

      /* header news */
      $(".news_btn").on("click", function(){
        gsap.to(".news_pop", {duration: 0.7, right: -30, ease: Cubic.easeOut});
        $(".news_pop").fadeIn(400);
      });

      $(".news_pop .x_btn").on("click", function(){
        gsap.to(".news_pop", {duration: 0.7, right: -400, ease: Cubic.easeOut});
        $(".news_pop").fadeOut(400);
      });

      /* quick menu */
      $(".quick_btn").on("click", function(){
        gsap.to(".quick_pop", {duration: 0.7, right: -30, ease: Cubic.easeOut});
        $(".quick_pop").fadeIn(400);
      });

      $(".quick_pop .x_btn").on("click", function(){
        gsap.to(".quick_pop", {duration: 0.7, right: -400, ease: Cubic.easeOut});
        $(".quick_pop").fadeOut(400);
      });

      /* fixed tab menu */
      $(".fixed_tab .search").on("click", function(){
        $(".search_on").fadeIn();
        $(".search_on").addClass("on");
      });

      $(".fixed_tab .search_on").on("click", function(){
        $(".search_on").fadeOut(250);
      });

      // $(".fixed_tab .search_on .x_btn").on("click", function(){
      //   $(".search_on").fadeOut(250, function(){
      //     $(".search_on .on").hide();
      //   });
      // });

      $(".fixed_tab_menu .fixed_tab .menu .click").each(function(q){
        $(this).on("click", function(){
          if(!$(this).hasClass("on")){
            var gnbH;
            if($(".bg_visual").hasClass("on")){
              gnbH = 80
            }else{
              gnbH = 0
            }
            gsap.to("html, body", 0.5, {scrollTop:$(".tab_con_area").offset().top - $(".fixed_tab").outerHeight(true) - 30 - gnbH, ease:Power3.easeOut})
            $(".fixed_tab_menu .fixed_tab .menu .click").removeClass("on");
            $(this).addClass("on");
            $(".tab_con_area .tab_con").removeClass("on");
            $(".tab_con_area .tab_con").eq(q).addClass("on");
          }
        });
      });

      /* btn top */
      $(".btn_top").on("click", function(){
        gsap.to("html, body", 1, {scrollTop:0, ease:Cubic.easeOut})
      });
    },
    scrollFn : function(){
      $(window).on("scroll", function(){
        _isScrollTop  = $(window).scrollTop();
        if(_isScrollTop > _thisScroll) { // down
          // gsap.to("header", {duration: 0.4, top: -80, ease: Cubic.easeOut});
          $("header").addClass("down")
          $("header").removeClass("up")
          $(".fixed_tab_menu .fixed_tab.fixed").removeClass("up")

          gsap.to(".news_pop", {duration: 0.7, right: -400, ease: Cubic.easeOut});
          $(".news_pop").fadeOut(400);
        }

        if(_isScrollTop < _thisScroll) { // up
          gsap.to("header", {duration: 0.4, top: 0, ease: Cubic.easeOut});
          $("header").removeClass("down")
          $("header").addClass("up")
          $(".fixed_tab_menu .fixed_tab.fixed").addClass("up")
        }

        if(_isScrollTop == 0) { // up
          $("header").removeClass("up")
          // gsap.to("header", {duration: 0.4, top: 0, ease: Cubic.easeOut});
        }

        if(_isScrollTop > $(".fixed_tab_menu").offset().top){
          $(".fixed_tab_menu .fixed_tab").addClass("fixed")
          $(".bg_visual").addClass("on");
          gsap.to(".bg_visual", 1.3, {opacity:0, ease:Power3.easeOut})
        }
        
        if(_isScrollTop < $(".fixed_tab_menu").offset().top - 100){
          $(".fixed_tab_menu .fixed_tab").removeClass("fixed")
          $(".bg_visual").removeClass("on");
          gsap.to(".bg_visual", 1.3, {opacity:1, ease:Power3.easeOut})
        }

        _thisScroll = _isScrollTop;
      });
    },
    scrollTriggerFn : function(){
      gsap.to($(".bg_visual .swiper-slide .img .img"), {
        scrollTrigger: {
          trigger: $(".bg_visual .swiper-slide"),
          start: "top bottom",
          end:"+=200%",
          scrub: true,
          scrub: 1,
          // markers: true,
          onUpdate : function(self){
            gsap.to($(".bg_visual .swiper-slide .img .img"), 0.8, {bottom:(self.progress.toFixed(3) * 100) * -3, ease: Power1.easeOut});
          },
        },
      });

      gsap.to($(".bg_visual .swiper-slide .txt_div"), {
        scrollTrigger: {
          trigger: $(".bg_visual"),
          start: "bottom bottom",
          end:"+=200%",
          scrub: 1,
          //markers: true,
        },
        top: 0,
      });

      gsap.to($(".bg_visual"), {
        scrollTrigger: {
          trigger: $(".circle_area"),
          start: "top-=140 top",
          endTrigger:$(".list_wrap.first"),
          end:"bottom+=100 top",
          scrub: 1,
          pin:true,
          // markers: true,
          onLeave:function(self){
            /* $(".circle_area .video").fadeIn(400, function(){
              $(".circle_area .video video").get(0).play();
              $(".circle_area .circle > p").hide()
              $(".circle_area .txt").addClass("on");
            }) */
            $(".circle_area").addClass("no_fixed")
          },
          onEnterBack:function(self){
            // $(".circle_area .circle > p").show()
            // $(".circle_area .txt").removeClass("on");
            // $(".circle_area .video").fadeOut(400)
            // $(".circle_area .video video").get(0).pause();
            $(".circle_area").removeClass("no_fixed")
          },
          onUpdate : function(self){
            if(self.progress.toFixed(3) > 0.8){
              $(".circle_area .video").fadeIn(400, function(){
                $(".circle_area .video video").get(0).play();
                $(".circle_area .circle > p").hide()
              })
              $(".circle_area .txt").addClass("on");
            }else{
              $(".circle_area .circle > p").show()
              $(".circle_area .txt").removeClass("on");
              $(".circle_area .video").fadeOut(400)
              $(".circle_area .video video").get(0).pause();
            }
          },
        }
      });

      gsap.to($(".circle_area"), {
        scrollTrigger: {
          trigger: $(".circle_area .txt"),
          start: "top-=160 top",
          end:"+=200%",
          scrub: 1,
          //markers: true,
          onUpdate : function(self){
            gsap.to($(".circle_area .txt"), 0.4, {bottom:(self.progress.toFixed(3) * 100) * -3.2, ease: Power1.easeOut});
          },
        },
      });

      // gsap.to($(".circle_area"), {
      //   scrollTrigger: {
      //     trigger: $(".circle_area .move_circle"),
      //     start: "top top",
      //     end:"+=200%",
      //     scrub: 1,
      //     //markers: true,
      //     onUpdate : function(self){
      //       gsap.to($(".circle_area.no_fixed .move_circle"), 0.4, {top:(self.progress.toFixed(3) * 100) * -1, ease: Power1.easeOut});
      //     },
      //     onScrubComplete : function(self){
      //       console.log(11)
      //     },
      //   },
      //   top:0
      // });
    },
    swiperFn : function(){
      _isFalse = false;
      var swiper = new Swiper(".bg_visual .swiper-container", {
        spaceBetween: 30,
        effect: "fade",
        speed:800,
        loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on:{
          slideChangeTransitionStart : function(){
            $(".bg_visual .swiper-slide .txt_div, .bg_visual .swiper-slide-duplicate .txt_div").removeClass("on");
            $(".bg_visual .swiper-slide-active .txt_div, .bg_visual .swiper-slide-active .txt_div").addClass("on");
            setTimeout(function(){
              _isFalse = true;
            }, 20)
            
            if(_isFalse){
              gsap.to($(".bg_visual .swiper-slide > .img, .bg_visual .swiper-slide-duplicate > .img"), 0.8, {marginTop:100, ease:Power3.easeOut})
              gsap.to($(".bg_visual .swiper-slide-active > .img, .bg_visual .swiper-slide-duplicate-active > .img"), 0.8, {marginTop:0, ease:Power3.easeOut})
            }
          },
        }
      });

      setTimeout(function(){
        $(".bg_visual .txt_div .txt img").each(function(){
          $(this).parents(".txt").height($(this).get(0).naturalHeight)
        });
      }, 100)
      gsap.to(".graphic", 2.5, {opacity:0.8, ease:Power3.easeOut})
    }
  }
}();
