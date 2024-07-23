var _this_scroll;
var _isScrollTop;
var _isDone = false;

$(window).on("load", function(){  
  gsap.registerPlugin(ScrollTrigger);
  bsub1.commonFn();
  bsub1.scrollFn();
  bsub1.swiperFn();
});

var bsub1 = function () {
  return {
    commonFn: function () {
      let headerTime;
      
      // header
      $("header nav").on("mouseenter", function(){
				$("header").addClass("hover");
        $("header").removeClass("wht");
				$(".dimd").fadeIn();
				$("header .bg").stop(true, true).slideDown();

        if($("#wrap").hasClass("wht")) {
          clearTimeout(headerTime);
        }
			});

			$("header").on("mouseleave", function(){
				$("header").removeClass("hover");

        
        if($("#wrap").hasClass("wht")) {
          clearTimeout(headerTime);
          headerTime = setTimeout(() =>{
            $("header").addClass("wht");
          }, 400)
        }
				$(".dimd").fadeOut();
				$("header .bg").stop(true, true).slideUp()
			});

			$("header nav a").each(function(){
				$(this).on("mouseenter", function(){
					$("header nav a span").not($(this).find("span")).css("color", "rgba(0,0,0,0.5)");
					$(this).find("span").css("color", "#0F2465");
				})

				$(this).on("mouseleave", function(){
					$("header nav a span").css("color", "")
				})
			});
      
      // quick
      $(".pop-btn").on("click", function(){
				$(".dimd").fadeIn();
				$(".hashtag-pop").addClass("active");
				$(".dimd").css("z-index", "9");
				$("body").addClass("stop-scroll");
				setTimeout(function(){
					$(".hashtag-pop .pop-con").addClass("active");
				}, 800)
			});
			
			$(".hashtag-pop .pop-close").on("click", function(){
				$(".dimd").fadeOut();
				$(".dimd").css("z-index", "6");
				$(".hashtag-pop").removeClass("active");
				setTimeout(function(){
					$("body").removeClass("stop-scroll");
					$(".hashtag-pop .pop-con").removeClass("active");
				}, 800)
			});

			$(".chat-btn").on("click", function(){
				if(!$(this).parents(".chat-area").hasClass("on")){
					$(this).parents(".chat-area").addClass("on");
					$(this).siblings(".chat-con").fadeIn();
				}else{
					$(this).parents(".chat-area").removeClass("on");
					$(this).siblings(".chat-con").fadeOut();
				}
			});

      $(".cont-tit-sec").addClass("on");

      if ($(".scroll-motion").size() > 0) {
        $(".scroll-motion:visible").each(function (q) {
          gsap.to($(this), {
            scrollTrigger: {
              trigger: $(this),
              start:()=> "top 65%",
              // start:()=> "top 80%",
              end: ()=> "bottom top",
              toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
              once: true,
              // markers: true,
            },
          });
        });
      }
      if ($(".scroll-motion2").size() > 0) {
        $(".scroll-motion2:visible").each(function (q) {
          gsap.to($(this), {
            scrollTrigger: {
              trigger: $(this),
              start:()=> "top 40%",
              end: ()=> "bottom top",
              toggleClass: { targets: $(".scroll-motion2:visible").eq(q), className: "on" },
              once: true,
              // markers: true,
            },
          });
        });
      }

      if ($(".bg-sec").size() > 0) {
        gsap.set($(".bg-sec .bg-wrap"), {top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%"});

        const bgMotion = gsap.timeline({
          scrollTrigger: {
            trigger: ".bg-sec",
            start:()=> "top 70%",
            end: ()=> "center 50%",
            scrub: 1,
            // markers: true,
          }
        })
        
        bgMotion
          .to($(".bg-sec .bg-wrap"), 0, {
            width: "100%", height: "100%",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          })
          .to($(".bg-sec .bg-wrap"), 6, {
            width: "1527px", height: "720px",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "20px"
          })
          .to($(".bg-sec .dimds"), 6, {opacity: .6}, "<=")
          .to($(".bg-sec .txt"), 1, {className: "txt active"})
      }

      
      // sub2 아코디언
      $(".board-wrap .board-list .item .board-head").on("click", function() {
        if(!$(this).parents(".item").hasClass("on")){
          $(".board-list .item").not($(this).parents(".board-list .item")).removeClass("on");
          $(".board-list .item").not($(this).parents(".board-list .item")).find(".board-cont").stop(true, true).slideUp(300);
          
          $(this).parents(".board-list .item").addClass("on");
          $(this).parents(".board-list .item").find(".board-cont").stop(true, true).slideDown(300);
        } else {
          $(this).parents(".board-list .item").removeClass("on");
          $(this).parents(".board-list .item").find(".board-cont").stop(true, true).slideUp(300);
        }
      });
    },
    scrollFn:function(){
			$(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            if($("header").size() != 0){
              $("header").addClass("scroll");
            }
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if($("header").size() != 0){
            $("header").removeClass("scroll");
						$("header").addClass("line");
          }

          $("header").removeClass("wht");

          if(_isScrollTop == 0 && $("#wrap").hasClass("wht")) {
            $("header").addClass("wht");
          }

					if(_isScrollTop == 0){
						$("header").removeClass("line");
					}
        }

				if(_isScrollTop + $(window).innerHeight() > $("footer").position().top){
          $(".quick-area").addClass("absolute");
        }else{
          $(".quick-area").removeClass("absolute");
        }
        
        _this_scroll = _isScrollTop;
      }).scroll();
		},
    swiperFn:function(){
			var swiper = new Swiper(".chat-con .swiper-container", {
				slidesPerView: "auto",
			});

			$(".chat-con .swiper-slide").on("click", function(){
				gsap.to($(".chat-con .con"), 0.5, {scrollTop:100, ease:Power3.easeOut});
				$(".chat-con .right").fadeIn();
				setTimeout(function(){
					gsap.to($(".chat-con .con"), 0.5, {scrollTop:200, ease:Power3.easeOut});
					$(".chat-con .left").eq(1).fadeIn();
				}, 600)
				setTimeout(function(){
					gsap.to($(".chat-con .con"), 0.5, {scrollTop:400, ease:Power3.easeOut});
					$(".chat-con .create").fadeIn();
				}, 1200)
			});
		}
  }
}();
