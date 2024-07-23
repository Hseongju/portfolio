var _this_scroll;
var _isScrollTop;
var _isDone = false;

$(window).on("load", function(){  
  // gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperFn();
  main.scrollFn();
});

var main = function () {
  return {
		commonFn: function(){
      scrollMotion();

			setTimeout(function(){
				$(".visual-area").addClass("white");
			}, 1450);
			setTimeout(function(){
				$(".visual-area.white .txt-wrap.active .visual-txt .line1 .img").addClass("hide");
			}, 2250);
			setTimeout(function(){
				$(".visual-area.white .txt-wrap.active .visual-txt").addClass("move");
			}, 2750);
			setTimeout(function(){
				$(".visual-area.white .txt-wrap.active .visual-txt").addClass("show");
			}, 3750);
			setTimeout(function(){
				$(".visual-area .txt-wrap .value-wrap").addClass("show");
				$(".visual-area.white .txt-wrap.active .visual-txt .line4 .img").hide();
				$(".quick-area").fadeIn();
				$("header").removeClass("scroll");
				$("body").removeClass("stop-scroll");
			}, 6100);
			setTimeout(function(){
				var visualMotion = gsap.timeline({
					scrollTrigger: {
						trigger: $(".visual-wrap"),
						start: () => "top top",
						end:"bottom bottom",
						endTrigger:$(".visual-area"),
						scrub:1,
						pin: true,
						// markers:true,
						onUpdate:function(self){
							if(self.progress.toFixed(3) > 0.45){
								$(".value-wrap .content").addClass("show");
							}else{
								$(".value-wrap .content").removeClass("show");
							}
							
							if(self.progress.toFixed(3) > 0.5){
								$(".value-wrap .content").addClass("opacity");
							}else{
								$(".value-wrap .content").removeClass("opacity");
							}
							
							if(self.progress.toFixed(3) > 0.8){
								$(".value-wrap .content .txt-box").addClass("active");
								$(".value-wrap").css("overflow", "visible");
							}else{
								$(".value-wrap .content .txt-box").removeClass("active");
								$(".value-wrap").css("overflow", "hidden");
							}
						}
					},
				});

				visualMotion
					.to($(".intro-txt"), 0.05, {opacity:1})
					.to($(".visual-txt"), 0.1, {className: "visual-txt move show hide"})
					.to($(".value-wrap"), 0.1, {className: "value-wrap show move"}, "<=")
					.to($(".visual-area .scroll"), 0.1, {className: "scroll hide"}, "<=")
					.to($(".intro-txt"), 0.05, {opacity:1})
					.to($(".value-wrap"), 0.5, {className: "value-wrap show move active"})



				gsap.to(".glovis-area .fixed-wrap", {
					scrollTrigger: {
						trigger: $(".glovis-area .fixed-wrap"),
						start: "top top",
						end: `bottom+=15% bottom`,
						pin: true,
						// markers:true,
						scrub:1,
						onUpdate:function(self){
							if(self.progress.toFixed(3) > 0.8){
								$(".glovis-area .fixed-wrap").addClass("active");
							}
						},
						onLeaveBack:function(){
							$(".glovis-area .fixed-wrap").removeClass("active");
						}
					},
				});
				
				gsap.to(".glovis-inner .tab-move", {
					scrollTrigger: {
						trigger: $(".glovis-inner .right"),
						start: "top+=50% top",
						end: `bottom+=100% bottom`,
						endTrigger:$(".glovis-inner"),
						// pin: true,
						// markers:true,
						scrub:1,
					},
					top:600
				});
				
				gsap.to($(".bot-scroll-motion"), {
					scrollTrigger: {
						trigger: $(".bot-scroll-motion"),
						start:()=> "top 65%",
						end: "bottom top",
						toggleClass: { targets: $(".bot-scroll-motion:visible"), className: "active" },
						once: true,
						// markers: true,
					},
				});
			}, 6200);


			let fontWidthSum = $(".rolling-con .rolling-text").outerWidth(true);

			while(fontWidthSum < window.innerWidth + $(".rolling-con .rolling-text").eq(0).outerWidth(true)){
				const repeatObject = document.querySelector(".rolling-con .rolling-text");
				const newNode = repeatObject.cloneNode(true);
				repeatObject.after(newNode);
				fontWidthSum = fontWidthSum + $(".rolling-con .rolling-text").eq(-1).outerWidth(true);
			};

			setInterval(function() {
				if(parseInt($(".rolling-con").css("left").split("p")[0]) < -$(".rolling-con .rolling-text").eq(0).outerWidth(true)) {
					$(".rolling-con").css("left", 0);
				}
				$(".rolling-con").css("left", parseInt($(".rolling-con").css("left").split("p")[0]) - 2);
			}, 15);


			$(".glovis-inner .tab-btn-area .tab-btn").each(function(q){
				$(this).on("click", function(){
					if(!$(this).hasClass("on")){
						$(".glovis-inner .tab-btn-area .tab-btn").removeClass("on");
						$(this).addClass("on");
						$(".glovis-inner .tab-con .con").removeClass("on");
						$(".glovis-inner .tab-con .con").eq(q).addClass("on");
						setTimeout(function(){
							$(".glovis-inner .tab-con .con").removeClass("active");
							$(".glovis-inner .tab-con .con").eq(q).addClass("active");
						},10)
					}
				})	
			});

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

			$("header nav").on("mouseenter", function(){
				$("header").addClass("hover");
				$(".dimd").fadeIn();
				$("header .bg").stop(true, true).slideDown()
			});

			$("header").on("mouseleave", function(){
				$("header").removeClass("hover");
				$(".dimd").fadeOut();
				$("header .bg").stop(true, true).slideUp()
			});

			$("header .banner").on("mouseenter", function(){
				$("header").removeClass("hover");
				$(".dimd").fadeOut();
				$("header .bg").stop(true, true).slideUp()
			});
			

			$("header nav a").each(function(){
				$(this).on("mouseenter", function(){
					$("header nav a span").not($(this).find("span")).css("color", "rgba(0,0,0,0.5)");
					$(this).find("span").css("color", "#0F2465");
				})

				$(this).on("mouseleave", function(){
					$("header nav a span").css("color", "rgba(0,0,0,1)")
				})
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

					if(_isScrollTop == 0){
						$("header").removeClass("line");
					}
        }

				if(_isScrollTop > $("#wrap").innerHeight() - $(window).innerHeight() - $("footer").innerHeight()){
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

function scrollMotion() {
  if($(".scroll-motion").size() > 0) {
    $(".scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start:()=> "top 65%",
          end: "bottom top",
          toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
          once: true,
          // markers: true,
        },
      });
    });
  }
}

