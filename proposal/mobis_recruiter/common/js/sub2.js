$(window).load(function(){
  // initial motion ------------------------------------------------------------------------------
  gsap.to("header", {duration: 1, top: 0, opacity:1, ease: Cubic.easeOut});
  
  setTimeout(function(){
    $(".kv_txt_area").addClass("active");
  }, 100);



  // kv ------------------------------------------------------------------------------
  // KV - main title motion
  var kvTextTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".kv_txt_area",
      start: "top top",
      end:"top+="+ window.innerHeight*2 + " bottom",
      scrub: 1,
      pin: true,
      pinSpacing: false,
      ease: 'none',
      //markers: true,
    }
  });

  kvTextTimeline.to(".kv_txt_area .txt_area", {opacity:1, duration:5})
                .to(".kv_txt_area .txt_area", {top:window.innerHeight*0.3, duration:3}, "0");


  // KV - main image motion
  var kvImageTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".kv_img_area",
      start: "top top",
      end:"top+=200% bottom",
      scrub: 1,
      pin: true,
      pinSpacing: false,
      ease: 'none',
      //markers: true,
    }
  });

  kvImageTimeline.to(".kv_img_area .size_change", {opacity:1, duration:5})
                .to(".kv_img_area .size_change", {top:200, width:480, height:640, duration:3}, "0");



  // sticky tab btn ------------------------------------------------------------------------------
  $(window).on("scroll", function(){
    if($(window).scrollTop() > window.innerHeight+80){
      $(".kv_sticky_tab_area_w").removeClass("fixed");
    }else{
      $(".kv_sticky_tab_area_w").addClass("fixed");
    }

    if($(window).scrollTop() > window.innerHeight*2){
      $(".kv_sticky_tab_area_w").addClass("fixed_on_top");
    }else{
      $(".kv_sticky_tab_area_w").removeClass("fixed_on_top");
    }

    if($(window).scrollTop() > window.innerHeight*1.5){
      $(".kv_sticky_tab_area_w").addClass("line_motion");
    }else{
      $(".kv_sticky_tab_area_w").removeClass("line_motion");
    }
  })


  // sticky tab active change
  $("section").each(function(q){
    gsap.to($(this), 1, {
      scrollTrigger: {
        trigger: $(this),
        start: "top 30%",
        bottom: "bottom bottom",
        scrub: 1,
        //markers: true,
        onEnter: function(){
          $(".kv_sticky_tab_area_w.line_motion .divide_area .left_wrap .move_line").width($(".kv_sticky_tab_area_w .divide_area .left_wrap .left .tab_btn").eq(q).width());
          $(".kv_sticky_tab_area_w.line_motion .divide_area .left_wrap .move_line").css("left", $(".kv_sticky_tab_area_w .divide_area .left_wrap .left .tab_btn").eq(q).position().left);
        },
        onEnterBack: function(){
        },
        onLeave: function(){
        },
        onLeaveBack: function(){
          if(q==1){
            $(".kv_sticky_tab_area_w.line_motion .divide_area .left_wrap .move_line").width($(".kv_sticky_tab_area_w .divide_area .left_wrap .left .tab_btn").eq(0).width());
            $(".kv_sticky_tab_area_w.line_motion .divide_area .left_wrap .move_line").css("left", $(".kv_sticky_tab_area_w .divide_area .left_wrap .left .tab_btn").eq(0).position().left);
          }else{
            $(".kv_sticky_tab_area_w.line_motion .divide_area .left_wrap .move_line").width($(".kv_sticky_tab_area_w .divide_area .left_wrap .left .tab_btn").eq(q).width());
            $(".kv_sticky_tab_area_w.line_motion .divide_area .left_wrap .move_line").css("left", $(".kv_sticky_tab_area_w .divide_area .left_wrap .left .tab_btn").eq(q).position().left);
          }
        }
      },
    });
  });






  // technology area ------------------------------------------------------------------------------
  var technologyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".technology_area",
      start:"top top",
      endTrigger: $(".project_area"),
      scrub: 1,
      end:"top bottom",
      pin:true,
      pinSpacing: false,
      //markers: true,
    },
  });

  technologyTimeline.addLabel('time2').to(".technology_area .img_wrap .list2", {top:0, duration:2, delay:0.5})
                    .to(".technology_area .txt_wrap .list1 .for_vertical .title_w .title img", {top:-60, duration:0.8, ease:Power3.easeOut}, 'time2+=0.7')
                    .to(".technology_area .txt_wrap .list1 .for_vertical .txt_w .txt img", {top:-35, stagger:0.1, duration:0.8, ease:Power3.easeOut}, 'time2+=0.7')
                    .to(".technology_area .txt_wrap .list2 .for_vertical .title_w .title img", {top:0, duration:0.8, ease:Power3.easeOut}, 'time2+=1.4')
                    .to(".technology_area .txt_wrap .list2 .for_vertical .txt_w .txt img", {top:0, stagger:0.1, duration:0.8, ease:Power3.easeOut}, 'time2+=1.4')
                    .addLabel('time3').to(".technology_area .img_wrap .list3", {top:0, duration:2, delay:0.5})
                    .to(".technology_area .txt_wrap .list2 .for_vertical .title_w .title img", {top:-60, duration:0.8, ease:Power3.easeOut}, 'time3+=0.7')
                    .to(".technology_area .txt_wrap .list2 .for_vertical .txt_w .txt img", {top:-35, stagger:0.1, duration:0.8, ease:Power3.easeOut}, 'time3+=0.7')
                    .to(".technology_area .txt_wrap .list3 .for_vertical .title_w .title img", {top:0, duration:0.8, ease:Power3.easeOut}, 'time3+=1.4')
                    .to(".technology_area .txt_wrap .list3 .for_vertical .txt_w .txt img", {top:0, stagger:0.1, duration:0.8, ease:Power3.easeOut}, 'time3+=1.4')




  // 수행 프로젝트
  $(".project_area .btn_area .more_btn").on("click", function(){
    $(".project_area .list_w .list:nth-child(n+4)").css("display","block");
    setTimeout(function(){
      $(".project_area .list_w").addClass("more_line");
      ScrollTrigger.refresh();
    }, 10);
  });


  // bg color change ------------------------------------------------------------------------------
  // 하얘지는 구간1
  gsap.to(".b_sub", {
    scrollTrigger: {
      trigger: ".project_area",
      start:"top center",
      endTrigger: $(".gallery_area"),
      end:"top center",
      toggleClass: {targets: ".b_sub", className: "white"},
      //markers: true,
    },
  });

  // 하얘지는 구간2
  gsap.to(".b_sub", {
    scrollTrigger: {
      trigger: ".news_area",
      start:"top center",
      endTrigger: $("footer"),
      end:"bottom 99%",
      toggleClass: {targets: ".b_sub", className: "white"},
      //markers: true,
    },
  });




  

  // gallery swiper ------------------------------------------------------------------------------
  if($(".gallery_swiper").size() > 0){
    var gallerySwiper = new Swiper(".gallery_swiper .swiper-container", {
      simulateTouch:false,
      speed: 700,
      spaceBetween: 30,
      navigation: {
        nextEl: ".gallery_swiper .swiper-button-next",
        prevEl: ".gallery_swiper .swiper-button-prev",
      },
      on:{
        transitionStart : function(){
          $(".gallery_area .gallery_swiper_wrap .txt_area .list").removeClass("on").eq(gallerySwiper.activeIndex).addClass("on");
        },
      }
    });
  }


  // scroll motion ------------------------------------------------------------------------------
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 75%",
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