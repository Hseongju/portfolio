var _this_scroll;
var _isScrollTop;
var _isDone = false;

$(window).on("load", function(){  
  // gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.scrollTriggerFn();
});

var main = function () {
  return {
		commonFn: function(){
      scrollMotion();

			/* 로그인 전 메인 */
			setTimeout(function(){
				$(".login-wrap .inner .left .txt").addClass("active");
			}, 10);
			setTimeout(function(){
				$(".login-wrap .inner .left .scrolldown-area").addClass("active");
			}, 160);
			setTimeout(function(){
				$(".login-wrap .inner .right .img:nth-child(1)").addClass("active");
			}, 200);
			setTimeout(function(){
				$(".login-wrap .inner .right .img:nth-child(2)").addClass("active");
			}, 300);


    },
    scrollTriggerFn: function(){
			gsap.to(".login-wrap .bg", {
				scrollTrigger: {
					trigger: $(".login-wrap .bg"),
					start: "top top",
					end: `bottom bottom`,
					endTrigger:$(".login-wrap .inner .right"),
					pin: true,
					// markers:true,
					scrub:1,
				},
			});

			gsap.to(".login-area", {
				scrollTrigger: {
					trigger: $(".login-wrap .inner .left"),
					start: "top-=200px top",
					end: `bottom bottom`,
					endTrigger:$(".login-wrap .inner .right"),
					pin: true,
					// markers:true,
					scrub:1,
				},
			});
    },
  }
}();

function scrollMotion() {
  if ($(".scroll-motion").size() > 0) {
    $(".scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start:()=> "top 80%",
          end: "bottom top",
          toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
          once: true,
          // markers: true,
        },
      });
    });
  }
}

