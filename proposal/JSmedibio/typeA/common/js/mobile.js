$(window).load(function(){
	const tl = gsap.timeline();
	let _slideNum = 0;
	$(".first-sec").on("click", function() {
		tl.to(".covering-bg", {top: -732, ease: Power1.easeOut,})
		.to(".txt-box", {top: 396, ease: Power1.easeOut,
			onUpdate() {$(".txt-box .txt").removeClass("black"); $(".statusbar").addClass("active")}}, "<")
		.to($(".txt-box .txt").eq(0), {fontSize: 32, lineHeight: "40px", color: "#fff",}, "<")
	});
		
	let imgNum = 2;
	let commonNum = 0;
	$(".slide-arrow.next").on("click", function(){
		// img
		$(".fixed-slide").eq(imgNum).stop(true, true).fadeOut();
		imgNum == 2 ? imgNum = 0 : imgNum++
		$(".fixed-slide").eq(imgNum).stop(true, true).fadeIn();
		// other
		$(".tab-wrap .tab").eq(commonNum).removeClass("active");
		$(".txt-wrap .txt").eq(commonNum).removeClass("active");
		commonNum == 2 ? commonNum = 0 : commonNum++
		$(".tab-wrap .tab").eq(commonNum).addClass("active");
		$(".txt-wrap .txt").eq(commonNum).addClass("active");
	});

	gsap.to(".third-sec .bg-area", {
		scrollTrigger: {
			trigger: $(".third-sec .bg-area"),
			start: "top top",
			end:"bottom bottom",
			endTrigger: $(".third-sec .inner"),
			pin: true,
			pinSpacing: true,
			scroller: "#mobileWrap .content .scroll",
			// markers: true,
		},
	})
	
	$(".sec3-list").each(function(idx){
		// sec3 count
		$("#mobileWrap .content .scroll").on("scroll", function(){
			if($(".sec3-list").eq(idx).find(".txt").hasClass("active")) {
				if(!$(".sec3-list").eq(idx).find(".txt").hasClass("countup")){
					$(".sec3-list").eq(idx).find(".txt").addClass("countup");
					$(".sec3-list").eq(idx).find(".txt").find(".counter").counterUp({
						time: 1000,
					})
				};
			}
		});

		gsap.to($(".sec3-list").eq(idx).find(".star img"), {
			width: "100%",
			scrollTrigger: {
				trigger: $(".sec3-list").eq(idx),
				start: "top center",
				end: "bottom center",
				scroller: "#mobileWrap .content .scroll",
				// markers: true,
			}
		})
	})
	
	// gsap.to(".fourth-sec", {
	// 	backgroundColor: "#1a1a1a",
	// 	duration: 2,
	// 	scrollTrigger: {
	// 		trigger: ".third-sec",
	// 		start: "bottom center",
	// 		// markers: true,
	// 		scroller: "#mobileWrap .content .scroll",
	// 	}
	// })
	
	// $(".fourth-sec .slide-wrap").on("click", function(){
	// 	_slideNum == 5 ? _slideNum = 0 : _slideNum++
	// 	gsap.to($(this), {
	// 		x: _slideNum * -333
	// 	})
	// })

	// let slideLeng = $(".fourth-sec .slide").length;
	// console.log((slideLeng)); 
	gsap.to(".fourth-sec .slide-wrap", {
		scrollTrigger: {
			trigger: ".fourth-sec .slide-wrap",
			start: "top-=80px top",
			end: "top+=600% top",
			pin: true,
			pinSpacing: true,
			// markers: true,
			scroller: "#mobileWrap .content .scroll",
			onUpdate(self){
				console.log(self.progress.toFixed(3));
				if(self.progress.toFixed(3) <= 0.16) {
					$(".fourth-sec .slide-wrap .slide").eq(0).addClass("active");
				} else if(self.progress.toFixed(3) > 0.16 && self.progress.toFixed(3) <= 0.32) {
					$(".fourth-sec .slide-wrap .slide").removeClass("active");
					$(".fourth-sec .slide-wrap .slide").eq(1).addClass("active");
				} else if(self.progress.toFixed(3) > 0.32 && self.progress.toFixed(3) <= 0.48) {
					$(".fourth-sec .slide-wrap .slide").removeClass("active");
					$(".fourth-sec .slide-wrap .slide").eq(2).addClass("active");
				} else if(self.progress.toFixed(3) > 0.48 && self.progress.toFixed(3) <= 0.64) {
					$(".fourth-sec .slide-wrap .slide").removeClass("active");
					$(".fourth-sec .slide-wrap .slide").eq(3).addClass("active");
				} else if(self.progress.toFixed(3) > 0.64 && self.progress.toFixed(3) <= 0.80) {
					$(".fourth-sec .slide-wrap .slide").removeClass("active");
					$(".fourth-sec .slide-wrap .slide").eq(4).addClass("active");
				} else {
					$(".fourth-sec .slide-wrap .slide").removeClass("active");
					$(".fourth-sec .slide-wrap .slide").eq(5).addClass("active");
				}
				
				if(self.progress.toFixed(3) == 1) {
					$(".fourth-sec").addClass("active");
				}
			},
		},
	})
	
	const tl2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".scrub-area",
			start: "top-=80px top",
			end: "bottom+=200% top",
			pin: true,
			pinSpacing: true,
			scrub: 1,
			scroller: "#mobileWrap .content .scroll",
		}
	});
	tl2.to(".scrub-area .cover", {
		width: 0,
		onUpdate(){
			$(".fourth-sec").removeClass("active");
			$(".scrub-inner").removeClass("active");
		}
	})
	.to(".scrub-area .scrub", {
		x: "-54%",
	})


	gsap.to(".sixth-sec .sec6-bg img", {
		y: "-310px",
		scrollTrigger: {
			trigger: ".sixth-sec",
			start: "top-=812px top",
			end: "bottom top",
			scrub: true,
			// markers: true,
			scroller: "#mobileWrap .content .scroll",
		}
	})


	$(".eighth-sec .sec8-slide").on("click", function(){
		_slideNum == 3 ? _slideNum = 0 : _slideNum++
		gsap.to($(this), {
			x: _slideNum * -300
		})
	});


	if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 65%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          scroller: "#mobileWrap .content .scroll",
          // markers: true,
        },
      });
    });
  }


  // header 역스크롤
  var _this_scroll;
  var _isScrollTop;

  $("#mobileWrap .content .scroll").on("scroll", function(){

    _isScrollTop =  $("#mobileWrap .content .scroll").scrollTop();

    if(_isScrollTop < _this_scroll) { // up
			console.log("up");
			$(".statusbar").addClass("white").removeClass("active");
			gsap.to(".statusbar", {top: "0"})
      if(_isScrollTop == 0){
				$(".statusbar").addClass("active").removeClass("white");
				$(".contact").removeClass("active");
				$(".bound-circle").fadeIn();
				gsap.to(".contact", {bottom: 120, width: 96, height: 96,})
      }
    } else {
			//down
			console.log("down");
			gsap.to(".statusbar", {top: "-60px"})
			$(".contact").addClass("active")
			$(".bound-circle").fadeOut();
			gsap.to(".contact", { bottom: 40, width: 64, height: 64,})
			
		}
    
    _this_scroll = _isScrollTop;
  });

});