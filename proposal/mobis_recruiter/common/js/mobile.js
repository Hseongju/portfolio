$(window).load(function(){
  // visual---------------------------

  // // feature ------------------------------------------------------------------------------
  // // text 영역 fix 및 텍스트 교체

  // var technologyTimeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".feature_area .txt_list_w",
  //     start:"top top",
  //     endTrigger: $(".product_lines_wrap"),
  //     scrub: 1,
  //     end:"top bottom",
  //     pin:true,
  //     pinSpacing: false,
  //     scroller: "#mobileWrap .content .scroll",
  //     //markers: true,
  //   },
  // });

  // technologyTimeline.to(".feature_area .txt_list_w", {opacity:1, duration:3, ease:Power3.easeOut})
  //                   .to(".feature_area .txt_list_w .list1 .title .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "0.9")
  //                   .to(".feature_area .txt_list_w .list1 .txt .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "0.9")
  //                   .to(".feature_area .txt_list_w .list2 .title .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "1.1")
  //                   .to(".feature_area .txt_list_w .list2 .txt .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "1.1")
  //                   .to(".feature_area .txt_list_w .list2 .title .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.1")
  //                   .to(".feature_area .txt_list_w .list2 .txt .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.1")
  //                   .to(".feature_area .txt_list_w .list3 .title .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.3")
  //                   .to(".feature_area .txt_list_w .list3 .txt .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.3")

  // // product lines ------------------------------------------------------------------------------
  // // section title fix
  // gsap.to(".product_lines_wrap", {
  //   scrollTrigger: {
  //     trigger: ".product_lines_wrap .title_area",
  //     start:"center center",
  //     endTrigger: $(".news_area"),
  //     end:"top bottom",
  //     pin:true,
  //     pinSpacing: false,
  //     scroller: "#mobileWrap .content .scroll",
  //     //markers: true,
  //   },
  // });

  // // section img bigger
  // gsap.to(".product_lines", {
  //   scrollTrigger: {
  //     trigger: ".product_lines .horizontal_fixed_area",
  //     start:"top 30%",
  //     endTrigger: $("footer"),
  //     end:"bottom top",
  //     toggleClass: 'active',
  //     scroller: "#mobileWrap .content .scroll",
  //     //markers: true,
  //   },
  // });

  // var targetEl = document.querySelector('.horizontal_secton_wrap');
  // var horizonTimeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".product_lines",
  //     start: function start() {
  //       return "top top";
  //     },
  //     end: function end() {
  //       return "+=".concat(targetEl.offsetWidth, "px");
  //     },
  //     scrub: 1,
  //     //pin: true,
  //     //pinSpacing: false,
  //     ease: 'none',
  //     toggleClass: 'active',
  //     scroller: "#mobileWrap .content .scroll",
  //     onUpdate: function(self){              
  //       if(self.progress.toFixed(3) >= 0.4 && self.progress.toFixed(3) < 0.8){
  //         $(".product_lines_wrap .section_indicator .dot").removeClass("active").eq(1).addClass("active");
  //       }else if(self.progress.toFixed(3) >= 0.8){
  //         $(".product_lines_wrap .section_indicator .dot").removeClass("active").eq(2).addClass("active");
  //       }else{
  //         $(".product_lines_wrap .section_indicator .dot").removeClass("active").eq(0).addClass("active");
  //       }
  //     },
  //     //markers: true,
  //   }
  // });
  // horizonTimeline.addLabel('horizon').fromTo('.horizontal_secton_wrap', {
  //   xPercent: 0,
  //   x: '0'
  // }, {
  //   xPercent: -100,
  //   x: '880px',
  //   ease: 'none',
  //   delay: 0.05
  // }).fromTo('.horizontal_secton_wrap', {
  //   delay: 0
  // }, {
  //   delay: 0.01
  // }, 'horizon+=0.15')


  // var horizonFixedTimeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".product_lines",
  //     start: "top top",
  //     endTrigger: $("footer"),
  //     end: "bottom bottom",
  //     scrub: 1,
  //     pin: true,
  //     pinSpacing: false,
  //     ease: 'none',
  //     scroller: "#mobileWrap .content .scroll",
  //     //markers: true,
  //   }
  // });
  gsap.fromTo(".list_area .list_div.default .list", 1, {y: 40, opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, ease: Power3.ease});

  var stickyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".filter_area",
      start: "top top",
      end: "bottom bottom-=50px",
      endTrigger: $("footer"),
      scrub: 1,
      pin: true,
      pinSpacing: false,
      ease: "none",
      scroller: "#mobileWrap .content .scroll",
      toggleClass: {targets: $(".filter_area"), className: "fixed"},
      // markers: true,
    }
  });

  $(".filter_area").on("click", function() {
    $(this).toggleClass("on");
    $(".list_area .list_div.default .list").removeAttr("style");

    if($(this).hasClass("on")) {
      gsap.to("#mobileWrap .content .scroll", 0.5, {scrollTo: {x: 0, y: 68, ease: Power3.easeOut}});

      $(".list_area").addClass("on"); // list 컨텐츠 높이값
      $(".list_area .list_div.default .list").css("display", "none");
      gsap.fromTo(".list_area .list_div.active .list", 1, {y: 40, opacity: 0}, {delay: 0.2, y: 0, opacity: 1, stagger: 0.2, ease: Power3.ease});
    } else {
      $(".list_area").removeClass("on");
      gsap.fromTo(".list_area .list_div.default .list", 1, {y: 40, opacity: 0}, {delay: 0.2, y: 0, opacity: 1, stagger: 0.2, ease: Power3.ease});
      $(".list_area .list_div.active .list").removeAttr("style");
    }
    
    // if($(this).hasClass("on")) {
    //   gsap.to("#mobileWrap .content .scroll", 0.5, {scrollTo: {x: 0, y: 820, ease: Power3.easeOut}});
    // } else {
    //   gsap.to("#mobileWrap .content .scroll", 0.5, {scrollTo: {x: 0, y: 0, ease: Power3.easeOut}});
    // }
  });

  $(".bottom_nav .icon").each(function(q) {
    $(this).on("click", function() {
      $(this).addClass("on").siblings().removeClass("on");
      $(".nav_area").addClass("on");

      if(q > 0) {
        $(".nav_area .img").eq(q - 1).addClass("on").siblings().removeClass("on");
      }
      if(q == 0) {
        $(".nav_area .img").removeClass("on");
        $(".nav_area").removeClass("on");
      }
    });

    $(this).on("hover", function() {
      $(this).addClass("on").siblings().removeClass("on");
    });
  });

  // scroll motion ------------------------------------------------------------------------------
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 80%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          scroller: "#mobileWrap .content .scroll",
          //markers: true,
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
      if(_isScrollTop == 0){
        // $(".filter_area").removeClass("on");
      }
    }
    
    _this_scroll = _isScrollTop;
  });$("#mobileWrap .content .scroll").scroll()
});