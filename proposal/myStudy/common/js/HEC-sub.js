var _this_scroll;
var _isScrollTop;

$(function() {
  main.commonFn();
  main.scrollFn();
});

var main = function () {
  // var _getScrollObjY = function () {
  //   var _arrY = [];
  //   $(".scroll-motion").each(function (q) {
  //     _arrY.push(parseInt($(".scroll-motion").offset().top + 300));
  //   });
  //   return _arrY;
  // };
  return {
    commonFn: function () {
			
			scrollMotionTrigger();

			setTimeout(function(){
				$(".masking-area").addClass("on");
			}, 500)

			setTimeout(function(){
				$(".top-area .tit-wrap").addClass("active");
				$("body").removeClass("stop-scroll");
			}, 1700)

      // 헤더 --------------------------------------------------------
      $("header .dep1").on("click", function() {
				if ($("header").hasClass("on")) {
					$("header").removeClass("on");
				} else {
					$("header").addClass("on");
				}
			});

      $("header .family").on("click", function() {
        $(".fam-site").addClass("on");
			});
      $("header .fam-site .xbt").on("click", function() {
        $(".fam-site").removeClass("on");
			});

      $("header .fam-site .menu a div").on("click", function() {
				if ($("header .fam-site .menu a div").hasClass("on")) {
					$("header .fam-site .menu a div").removeClass("on");
				} else {
					$("header .fam-site .menu a div").addClass("on");
				}
			});
      // 헤더 --------------------------------------------------------



      // 인트로
      gsap.to(("header"), 1, {top: 0, delay: .3,  ease:Power2.easeOut});
      gsap.to((".main .poli"), 1, {top: -50, x: -50, delay: .3,  ease:Power2.easeOut});
      gsap.to((".main .copy p:first-of-type"), 1, {y: 0, opacity: 1, delay: .4,  ease:Power2.easeOut});
      gsap.to((".main .copy p:last-of-type"), 1, {y: 0, opacity: 1, delay: .5,  ease:Power2.easeOut});




    },
    scrollFn: function () {

      $(window).on("scroll", function () {

        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            if($("header").size() != 0){
              gsap.to(("header"), 1, {top: -130, ease:Power2.easeOut});
            }
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
            gsap.to(("header"), 1, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (_isScrollTop < 1) {
            $("header").removeClass("up-scroll");
          }
        }
        _this_scroll = _isScrollTop;
      }).scroll()


			// 진입 후 첫 스크롤 모션
			gsap.to(".product-area", {
				scrollTrigger: {
					trigger: ".product-area",
					start: "top+=27% center",
					end: "top+=32% center",
					scrub: 1,
					// markers: true,
				},
				background:"#000"
			});

			gsap.to(".product-area .tit-div", {
				scrollTrigger: {
					trigger: ".product-area .tit-div",
					start: "top top",
					end: "bottom bottom",
					endTrigger:$(".product-txt"),
					scrub: 1,
					// markers: true,
					pin:true,
					onUpdate: function(self){
						// console.log(self.progress.toFixed(3))
						if(self.progress.toFixed(3) > 0.4){
							$(".product-area .tit-area .tit-wrap").addClass("on")
						}else{
							$(".product-area .tit-area .tit-wrap").removeClass("on")
						}
					},
				},
			});
			gsap.to(".product-area .tit-wrap .tit", {
				scrollTrigger: {
					trigger: ".product-area .tit-area",
					start: "top top",
					end: "bottom+=50% bottom",
					scrub: 1,
					// markers: true,
				},
				// fontSize: 24,
				// lineHeight: "34px",
				scale:0.55,
				// top:-40
			});
			gsap.to(".product-area .tit-wrap .tit", {
				scrollTrigger: {
					trigger: ".product-area .tit-area",
					start: "top top",
					end: "bottom+=50% bottom",
					scrub: 1,
					// markers: true,
				},
				// fontSize: 24,
				// lineHeight: "34px",
				scale:0.55,
				// top:-30
			});
			gsap.to(".product-area .tit-wrap .tit span", {
				scrollTrigger: {
					trigger: ".product-area",
					start: "top+=27% center",
					end: "top+=32% center",
					scrub: 1,
					// markers: true,
				},
				color:"#fff"
			});
			gsap.to(".product-area .tit-wrap .txt", {
				scrollTrigger: {
					trigger: ".product-area .tit-area",
					start: "top top",
					end: "bottom+=50% bottom",
					scrub: 1,
					// markers: true,
				},
				scale: 2.5,
				top:-40
			});
			gsap.to(".product-area .tit-wrap .txt", {
				scrollTrigger: {
					trigger: ".product-area",
					start: "top+=27% center",
					end: "top+=32% center",
					scrub: 1,
					// markers: true,
				},
				color:"#fff"
			});
			

			$(".product-txt .txt-div").each(function(q){
				gsap.to($(this), {
					scrollTrigger: {
						trigger: $(this),
						start: "top center",
						end:"bottom+=100% bottom",
						toggleClass: {targets: $(this), className: "active"},
						// once: true,
						// markers: true,
						onLeave:function(){
							if(q == 3){
								$(".product-txt .txt-div").eq(-1).addClass("active");
							}
						},
						onLeaveBack:function(){
							if(q == 0){
								console.log(123)
								$(".product-txt .txt-div").eq(0).addClass("active");
							}
						}
					},
				});
			});

      gsap.to(".product-area .bg-area", {
				scrollTrigger: {
					trigger: ".product-area .bg-area",
					start: "top top",
					end: "bottom bottom",
					endTrigger:$(".product-txt"),
					scrub: 1.5,
					// markers: true,
					pin:true,
					onUpdate: function(self){
						// console.log(self.progress.toFixed(3))
						if(self.progress.toFixed(3) > 0 && self.progress.toFixed(3) <= 0.55){
							$(".product-area .bg-area .img").eq(0).addClass("active");
							$(".product-area .bg-area .img").eq(1).removeClass("active");
						}else if(self.progress.toFixed(3) > 0.55 && self.progress.toFixed(3) <= 0.71){
							$(".product-area .bg-area .img").eq(1).addClass("active");
							$(".product-area .bg-area .img").eq(2).removeClass("active");
						}else if(self.progress.toFixed(3) > 0.71 && self.progress.toFixed(3) <= 0.87){
							$(".product-area .bg-area .img").eq(2).addClass("active");
							$(".product-area .bg-area .img").eq(3).removeClass("active");
						}else if(self.progress.toFixed(3) > 0.87){
							$(".product-area .bg-area .img").eq(3).addClass("active");
						}
					},
				},
			});

			// gsap.to(".product-area", {
			// 	scrollTrigger: {
			// 		trigger: ".product-area .tit-div .tit",
			// 		start: "top top",
			// 		end: "bottom bottom",
			// 		// endTrigger:$(".product-txt"),
			// 		scrub: 1,
			// 		markers: true,
			// 		pin:true,
			// 	},
			// 	left:0
			// });

			gsap.to(".product-area .bg-wrap", {
				scrollTrigger: {
					trigger: ".product-area .bg-area",
					start: "top bottom",
					end: "bottom bottom",
					scrub: 1.5,
					// markers: true,
					// pin:true,
				},
				width:"100%",
				height:"100vh",
			});
    }
  }
}();

function scrollMotionTrigger(){ 
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
}
