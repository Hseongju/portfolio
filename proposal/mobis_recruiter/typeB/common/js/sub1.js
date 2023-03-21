$(window).load(function(){
  // initial motion ------------------------------------------------------------------------------
  gsap.to("header", {duration: 1, top: 0, opacity:1, ease: Cubic.easeOut});
  
  setTimeout(function(){
    $(".sub_kv_area .kv_txt_area").addClass("active");
  }, 300);


  // feature ------------------------------------------------------------------------------
  // text 영역 fix 및 텍스트 교체

  var technologyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".feature_area .txt_list_w",
      start:"top top",
      endTrigger: $(".product_lines_wrap"),
      scrub: 1,
      end:"top bottom",
      pin:true,
      pinSpacing: false,
      //markers: true,
    },
  });

  technologyTimeline.to(".feature_area .txt_list_w", {opacity:1, duration:3, ease:Power3.easeOut})
                    .to(".feature_area .txt_list_w .list1 .title .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "0.9")
                    .to(".feature_area .txt_list_w .list1 .txt .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "0.9")
                    .to(".feature_area .txt_list_w .list2 .title .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "1.1")
                    .to(".feature_area .txt_list_w .list2 .txt .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "1.1")
                    .to(".feature_area .txt_list_w .list2 .title .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.1")
                    .to(".feature_area .txt_list_w .list2 .txt .line img", {top:-100, opacity:0, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.1")
                    .to(".feature_area .txt_list_w .list3 .title .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.3")
                    .to(".feature_area .txt_list_w .list3 .txt .line img", {top:0, opacity:1, duration:0.8, stagger: 0.05, ease:Power3.easeOut}, "2.3")



  // product lines ------------------------------------------------------------------------------
  // section title fix
  gsap.to(".product_lines_wrap", {
    scrollTrigger: {
      trigger: ".product_lines_wrap .title_area",
      start:"center center",
      endTrigger: $(".news_area"),
      end:"top bottom",
      pin:true,
      pinSpacing: false,
      //markers: true,
    },
  });

  // section img bigger
  gsap.to(".product_lines", {
    scrollTrigger: {
      trigger: ".product_lines .horizontal_fixed_area",
      start:"top 30%",
      endTrigger: $("footer"),
      end:"bottom top",
      toggleClass: 'active',
      //markers: true,
    },
  });

  var targetEl = document.querySelector('.horizontal_secton_wrap');
  var horizonTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".product_lines",
      start: function start() {
        return "top top";
      },
      end: function end() {
        return "+=".concat(targetEl.offsetWidth, "px");
      },
      scrub: 1,
      //pin: true,
      //pinSpacing: false,
      ease: 'none',
      toggleClass: 'active',
      onUpdate: function(self){              
        if(self.progress.toFixed(3) >= 0.4 && self.progress.toFixed(3) < 0.8){
          $(".product_lines_wrap .section_indicator .dot").removeClass("active").eq(1).addClass("active");
        }else if(self.progress.toFixed(3) >= 0.8){
          $(".product_lines_wrap .section_indicator .dot").removeClass("active").eq(2).addClass("active");
        }else{
          $(".product_lines_wrap .section_indicator .dot").removeClass("active").eq(0).addClass("active");
        }
      },
      //markers: true,
    }
  });
  horizonTimeline.addLabel('horizon').fromTo('.horizontal_secton_wrap', {
    xPercent: 0,
    x: '0'
  }, {
    xPercent: -100,
    x: '100vw',
    ease: 'none',
    delay: 0.05
  }).fromTo('.horizontal_secton_wrap', {
    delay: 0
  }, {
    delay: 0.01
  }, 'horizon+=0.15')
  .to(".horizontal_secton_wrap .horizontal_secton:nth-child(-n+2) .txt_area", {left:250}, "0")



  var horizonFixedTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".product_lines",
      start: "top top",
      endTrigger: $("footer"),
      end: "bottom bottom",
      scrub: 1,
      pin: true,
      pinSpacing: false,
      ease: 'none',      
      //markers: true,
    }
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
          //markers: true,
        },
      });
    });
  }


  // gnb_left 마우스오버
  $("header .gnb_left").on("mouseenter", function () {
    if (!$("header").hasClass("hover")) {
      $("header .left_dep").stop(true).slideDown(400);
      $("header").addClass("hover");
      $(".dim").addClass("on");
      if ($("header").hasClass("dark")) {
        $("header").addClass("type2");
      }
    } else {
      $("header .dep2").css({ display: "none" });
      $("header .left_dep").stop(true).slideDown(400);
    }
  });

  // gnb_right 마우스오버
  $("header .gnb_right").on("mouseenter", function () {
    if (!$("header").hasClass("hover")) {
      $("header .right_dep").stop(true).slideDown(400);
      $("header").addClass("hover");
      $(".dim").addClass("on");
      if ($("header").hasClass("dark")) {
        $("header").addClass("type2");
      }
    }else {
      $("header .dep2").css({ display: "none" });
      $("header .right_dep").stop(true).slideDown(400);
    }
  });

  // gnb 마우스리브
  $("header").on("mouseleave", function () {
    $("header .dep2").stop(true).slideUp(400);
    $(".dim").removeClass("on");
    setTimeout(function () {
      $("header").removeClass("hover");
      $("header").removeClass("type2");
    }, 400);
  });



  // header 역스크롤
  var _this_scroll;
  var _isScrollTop;

  $(window).on("scroll", function(){
    _isScrollTop =  $(window).scrollTop();

    if(_isScrollTop > _this_scroll) { // down
      if(_isScrollTop > 0){
        if($("header").size() != 0){
          gsap.to(("header"), 1, {top:-180, ease:Power3.easeOut});
          
        }
      }
    }
    
    if(_isScrollTop < _this_scroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), 1.3, {top:0, ease:Power3.easeOut});  
        $("header").removeClass("dark").addClass("up_scroll");
      }

      if(_isScrollTop == 0){
        $("header").addClass("dark").removeClass("up_scroll");
      }
    }
    _this_scroll = _isScrollTop;
  });$(window).scroll()
});