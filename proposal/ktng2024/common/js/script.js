var _this_scroll;
var _isScrollTop;

$(function() {
  main.commonFn();
  main.scrollFn();
  main.scrollTriggerFn();
});

var main = function () {
  return {
    commonFn: function () {
			
			scrollMotionTrigger();

			$(".intro-area").addClass("on");

			setTimeout(function(){
				$(".intro-area").fadeOut(400)
			}, 2500)

			setTimeout(function(){
				$("header").removeClass("up-scroll");
				$(".visual-area").addClass("active");
				$("#wrap").removeClass("stop-scroll")
			}, 2700)

    },
    scrollFn: function () {

      $(window).on("scroll", function () {

        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          $("header").addClass("up-scroll")
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop != 0 && _isScrollTop > 0){
            $("header").addClass("up-scroll");
          }else if (_isScrollTop < 1) {
            $("header").removeClass("up-scroll");
          }
        }
        _this_scroll = _isScrollTop;
      }).scroll()

    },
		scrollTriggerFn:function(){

			gsap.to(".visual-area .bottom-txt", {
				scrollTrigger: {
					trigger: ".visual-area .bottom-txt",
					start: "top top",
					end: "bottom bottom",
					endTrigger:$(".visual-area"),
					pin:true,
					scrub: 1,
					// markers:true
				},
			});

			var visualMotion = gsap.timeline({
				scrollTrigger: {
					trigger: $(".visual-area .txt-wrap"),
					start: () => "top top",
					end:"bottom bottom",
					endTrigger:$(".visual-area"),
					scrub:1,
					pin: true,
					pinSpacing:false,
					// markers:true,
					onUpdate: function(self){
						if(self.progress.toFixed(3) > 0.001){
							$(".bottom-txt .img").addClass("hide");
						}else{
							$(".bottom-txt .img").removeClass("hide");
						}
					},
				},
			});
			
			visualMotion
				.to($(".visual-area .txt-wrap .tit"), 0.5, {color:"#fff"})
				.to($(".visual-area .txt-wrap .txt"), 0.5, {color:"#fff"}, "<=")
				.to($(".visual-area .txt-wrap"), 1, {opacity:1})
				.to($(".visual-area .txt-wrap .tit"), 1.5, {scale:0.35, left:"-150px"})
				.to($(".visual-area .txt-wrap .txt"), 1.5, {scale:2.6, left:"294px"}, "<=")
				.to($(".visual-area .txt-wrap"), 1, {opacity:1})

			gsap.to(".visual-area .bg", {
				scrollTrigger: {
					trigger: ".visual-area .bg-wrap",
					start: "top top",
					end: "bottom bottom",
					pin:true,
					scrub: 1,
					// markers:true
				},
				top:0,
				width:"100%",
				height:"200vh",
			});


			// global bg top값 이동
			gsap.to(".global-area .fixed-bg .bg", {
				scrollTrigger: {
					trigger: ".global-area .list-wrap",
					start: "top top",
					end: "bottom center",
					scrub: 1,
				},
				top:0
			});

			// global bg 크기 키우기
			gsap.to(".global-area .fixed-bg .bg", {
				scrollTrigger: {
					trigger: ".global-area .fixed-bg",
					start: "top+=10% top+=40%",
					end: "bottom center",
					scrub: 1,
					// markers: true,
					onEnter:function(){
						$(".global-area .fixed-bg .bg img").addClass("on");
					},
					onLeaveBack:function(){
						$(".global-area .fixed-bg .bg img").removeClass("on");
					},
					onLeave:function(){
						$(".global-area .fixed-bg .bg").addClass("dimd");
					},
					onEnterBack:function(){
						$(".global-area .fixed-bg .bg").removeClass("dimd");
					}
				},
				width:"100vw",
				height:"100vh",
				borderRadius:0
			});

			// global bg fixed 시키기
			gsap.to(".global-area .fixed-bg", {
				scrollTrigger: {
					trigger: ".global-area .fixed-bg",
					start: "top top",
					end: "bottom+=100% bottom",
					endTrigger:$(".global-con-wrap"),
					scrub: 1,
					pin:true,
					// markers: true,
					onUpdate: function(self){
						// console.log(self.progress.toFixed(3))
						if(self.progress.toFixed(3) > 0.35){
							$(".global-area .fixed-bg .bg img:nth-child(2)").addClass("show");
						}else{
							$(".global-area .fixed-bg .bg img:nth-child(2)").removeClass("show");
						}

						if(self.progress.toFixed(3) > 0.45){
							$(".global-con .dimd").addClass("on");
						}else{
							$(".global-con .dimd").removeClass("on");
						}
					},
				},
			});

			gsap.to(".global-area .global-con", {
				scrollTrigger: {
					trigger: ".global-area .global-con",
					start: "bottom bottom",
					end: "bottom+=50% top",
					scrub: 1,
					pin:true,
					pinSpacing:false,
					// markers: true,
				},
			});

			gsap.to(".esg-area .img-list .img", {
				scrollTrigger: {
					trigger: ".esg-area .img-list",
					start: "top-=10% center",
					end: "center-=10% center",
					scrub: 1,
					// markers: true,
				},
				top:0
			});

			gsap.to(".esg-area .fixed-con", {
				scrollTrigger: {
					trigger: ".esg-area .fixed-con",
					start: "top top",
					end: "bottom bottom",
					endTrigger:$(".esg-area"),
					pin:true,
					scrub: 1,
					// markers: true,
				},
			});

			var esgMotion = gsap.timeline({
				scrollTrigger: {
					trigger: $(".esg-area .fixed-con"),
					start: () => "top top",
					end:"bottom bottom",
					endTrigger:$(".esg-area"),
					scrub:1,
					pin: true,
					pinSpacing:false,
					// markers:true,
				},
			});
			
			esgMotion
				.to($(".esg-area"), 0.5, {className: "esg-area white"})
				.to($(".esg-area .img-list .img"), 1, {opacity:1})
				.to($(".esg-area .img-list .img").eq(0), 1.5, {right:"-75%"}, "<=")
				.to($(".esg-area .img-list .img").eq(1), 1.5, {right:"-50%"}, "<=")
				.to($(".esg-area .img-list .img").eq(2), 1.5, {right:"-25%"}, "<=")
				.to($(".esg-area .img-list .img"), 0.2, {opacity:1})
				.to($(".esg-area .con-list"), 0.5, {className: "con-list on"})
				.to($(".esg-area .img-list .img").not(":first-child"), 0, {top: "100vh"}, "<=")
				.to($(".esg-area .img-list .img"), 0.5, {opacity:1})
				.to($(".esg-area .img-list .img").eq(1), 1.5, {top:0})
				.to($(".esg-area .con-list .txt-wrap .txt-div .img").eq(0), 0.5, {opacity:0}, "<=")
				.to($(".esg-area .img-list .img"), 0.2, {opacity:1})
				.to($(".esg-area .img-list .img").eq(2), 1.5, {top:0})
				.to($(".esg-area .con-list .txt-wrap .txt-div .img").eq(1), 0.5, {opacity:0}, "<=")
				.to($(".esg-area .img-list .img"), 0.2, {opacity:1})
				.to($(".esg-area .img-list .img").eq(3), 1.5, {top:0})
				.to($(".esg-area .con-list .txt-wrap .txt-div .img").eq(2), 0.5, {opacity:0}, "<=")
				.to($(".esg-area .img-list .img"), 1, {opacity:1})

			gsap.to(".society-area", {
				scrollTrigger: {
					trigger: ".society-area .list-area",
					start: "top top",
					end: "bottom+=100% bottom",
					pin:true,
					scrub: 1,
					// markers: true,
				},
			});
			
			gsap.to(".korea-fixed-bg .txt-fixed", {
				scrollTrigger: {
					trigger: ".korea-fixed-bg .txt-fixed",
					start: "top top",
					end: "bottom bottom",
					endTrigger: $(".korea-fixed-bg"),
					pin:true,
					scrub: 1,
					// markers: true,
				},
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
