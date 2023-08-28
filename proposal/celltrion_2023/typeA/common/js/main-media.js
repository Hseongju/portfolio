var _this_scroll;
var _isScrollTop;

$(window).on("load", function(){
  main.init();
  main.header();
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
		header: function () {
			var _this_scroll;
      var _isScrollTop;
			
      $(window).on("scroll", function(){
				_isScrollTop =  $(window).scrollTop();
				
        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
						if($("header").length > 0){
							gsap.to(("header"), 1.3, {y: -100, ease:Power3.easeOut});
							$("header").removeClass("on")
							setTimeout(function() {
								$("header .dep2").css("display", "none");
								$("header + .dimd").css("display", "none");
							}, 500);
            }	
          }
        }
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
						$("header").addClass("up_scroll");
            gsap.to(("header"), 1.3, {y: 0, ease:Power3.easeOut});
          }
          if(_isScrollTop == 0){
						$("header").removeClass("up_scroll");
						gsap.to(("header"), 1.3, {y: 0, ease:Power3.easeOut});
          }
        }
        _this_scroll = _isScrollTop;
      });$(window).scroll()
			
			gsap.to(("header"), 1.3, {y: 0, ease:Power3.easeOut});

			$("header .dep1 .menu li").eq(1).on('click', function() {
				if ($("header").hasClass("on")) {
					$("header .dep1 .menu li").eq(1).removeClass("on");
					$("header").removeClass("on")
					setTimeout(function() {
						$("header .dep2").css("display", "none");
						$("header + .dimd").css("display", "none");
					}, 500);
				} else {
					
					$("header .dep1 .menu li").eq(1).addClass("on");
					$("header .dep2").css("display", "block");
					$("header + .dimd").css("display", "block");
					setTimeout(function() {
						$("header").addClass("on");
					}, 10); 
					
					$("header + .dimd").on('click', function() {
						$("header .dep1 .menu li").eq(1).removeClass("on");
						$("header").removeClass("on")
						setTimeout(function() {
							$("header .dep2").css("display", "none");
							$("header + .dimd").css("display", "none");
						}, 500);
					})
				}
			});

		},
    init: function () {
			scrollMotionTrigger();

			// intro
			gsap.to(".media h2 span", {y: 0, opacity: 1, duration: 1, delay: .1, ease: Power2.easeInOut });
			gsap.to(".media h2 span", {y: 0, opacity: 1, duration: 1, delay: .1, ease: Power2.easeInOut });
			gsap.to(".media .kv img", {scale: 1, duration: 1, delay: .2, ease: Power2.easeInOut });
			gsap.to(".media .kv dl dt span", {y: 0, opacity: 1, duration: 1, delay: .4, ease: Power2.easeInOut });
			gsap.to(".media .kv dl dd span", {y: 0, opacity: 1, duration: 1, delay: .5, ease: Power2.easeInOut });



			 /* 문의 */
			$(".inquiry-btn").on("click", function(){
				$("body").addClass("stop-scroll");
				$(".inquiry-dimd").fadeIn();
				gsap.to($(".inquiry-pop"), 0.6, {right:0, ease:Power3.easeOut});
			});

			$(".inquiry-pop .x-btn").on("click", function(){
				$("body").removeClass("stop-scroll");
				$(".inquiry-dimd").fadeOut();
				gsap.to($(".inquiry-pop"), 0.6, {right:-620, ease:Power3.easeOut});
			});
			/* // 문의 */
			
    },
  }
}();

function scrollMotionTrigger(){
  if($(".scroll-motion").size() > 0){
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 70%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
}
