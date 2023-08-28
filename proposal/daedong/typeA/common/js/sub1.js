var _this_scroll;
var _isScrollTop;

$(window).load(function() {
  // 제품 목록 리스트 클릭 시 체크
  $(".inner .list-area .list.click").each(function(q){
    $(this).find(".check").on("click", function(){
      if(!$(this).parents(".list").hasClass("on")){
        $(this).parents(".list").addClass("on");
        $(".product-chk-pop .inner .compare-list .list").eq(q).addClass("on");
        $(".product-chk-pop .inner .top-area .title .chk-num").text($(".product-chk-pop .inner .compare-list .list.on").length)
        if(!$(".product-chk-pop").hasClass("on")){
          $(".product-chk-pop").addClass("on");
        }
      }else{
        $(this).parents(".list").removeClass("on");
        $(".product-chk-pop .inner .compare-list .list").eq(q).removeClass("on");
        $(".product-chk-pop .inner .top-area .title .chk-num").text($(".product-chk-pop .inner .compare-list .list.on").length)
      }
    });
  });

  // 필터 sorting
  var data1, data2, data3;

  $(".inner .filter-area").on("click", function(){
    if(!$(this).hasClass("on")){
      $(this).addClass("on")
      $(this).find(".on").css("opacity","0");
      data3 = $(".inner .list-area .list").eq(5).detach();
      data1 = $(".inner .list-area .list").eq(1).detach();
      data2 = $(".inner .list-area .list").eq(3).detach();
    }else{
      $(this).removeClass("on")
      $(this).find(".on").css("opacity","1");
      $(".inner .list-area .list").eq(0).after(data1);
      $(".inner .list-area .list").eq(3).after(data2);
      $(".inner .list-area .list").eq(4).after(data3);
    }
  });

  // 리스트 view type
  $(".inner .list-info .view-type").on("click", function(){
    $(".content-inner").addClass("active")
    if($(this).hasClass("half")){
      $(this).removeClass("half");
      $(this).addClass("full");
      $(".inner .list-area").removeClass("half");
      $(".inner .list-area").addClass("full");
      $(".inner .list-area").removeClass("active");
      $(".inner .list-area").removeAttr("style");
      $(".inner .list-area .list").removeClass("active");
      setTimeout(function(){
        $(".inner .list-area").css("opacity","1");
      },100);
      setTimeout(function(){
        $(".inner .list-area.full").addClass("active");
      },100);
      setTimeout(function(){
        $(".inner .list-area.full .one").addClass("active");
      },200)
      setTimeout(function(){
        $(".inner .list-area.full .two").addClass("active");
      },300)
    }else if($(this).hasClass("full")){
      $(this).removeClass("full");
      $(this).addClass("half");
      $(".inner .list-area").removeClass("full");
      $(".inner .list-area").addClass("half");
      $(".inner .list-area").removeAttr("style");
      $(".inner .list-area").removeClass("active");
      $(".inner .list-area .list").removeClass("active");
      setTimeout(function(){
        $(".inner .list-area").css("opacity","1");
      },100);
      setTimeout(function(){
        $(".inner .list-area.half").addClass("active");
      },100);
      setTimeout(function(){
        $(".inner .list-area.half .one").addClass("active");
        $(".inner .list-area.half .two").addClass("active");
      },200)
    }
  });

  // 제품 비교하기 팝업 닫기 
  $(".product-chk-pop .close-btn").on("click", function(){
    $(".product-chk-pop").removeClass("on");
  });

  // 제품 리스트 full.ver hover 이벤트
  $(".inner .list-area .list.one").on("mouseenter", function(){
    $(".inner .list-area .list .hover-area video").get(0).play();
    $(".inner .list-area .list .hover-area video").css("opacity", "1");
    $(".inner .list-area.full .list.one .title-area .series").css("color", "#ffffff");
    $(".inner .list-area.full .list.one .title-area .info-txt").css("color", "#ffffff");
  });

  $(".inner .list-area .list.one").on("mouseleave", function(){
    $(".inner .list-area .list .hover-area video").get(0).pause();
    $(".inner .list-area .list .hover-area video").get(0).currentTime = 0;
    $(".inner .list-area .list .hover-area video").css("opacity", "0");
    $(".inner .list-area.full .list.one .title-area .series").removeAttr("style")
    $(".inner .list-area.full .list.one .title-area .info-txt").removeAttr("style")
  });

  $(".inner .list-area .list.two").on("mouseenter", function(){
    $(".inner .list-area .list .hover-area img").css("opacity", "1")
  });

  $(".inner .list-area .list.two").on("mouseleave", function(){
    $(".inner .list-area .list .hover-area img").css("opacity", "0")
  });

  // 비교하기 팝업
  $(".compare-btn").on("click", function(){
    $("body").css("overflow-y", "hidden");
    $(".product-chk-pop").removeClass("on");
    $(".compare-pop").fadeIn();
    // $(".compare-pop .pop-wrap .bottom-con").height($(".compare-pop .pop-wrap").height() - $(".compare-pop .pop-wrap .top-con").outerHeight(true))
  });

  $(".compare-pop .close-btn").on("click", function(){
    $(".compare-pop").fadeOut(function(){
      $(".product-chk-pop").addClass("on");
      $("body").removeAttr("style");
    });
  });

  $(".compare-pop .pop-wrap .bottom-con .scroll-area").on("scroll", function(){
    if($(".compare-pop .pop-wrap .bottom-con .scroll-area").scrollTop() > 0){
      $(".compare-pop .pop-wrap .top-con .compare-list").addClass("on");
      // $(".compare-pop .pop-wrap .bottom-con").height($(".compare-pop .pop-wrap").height() - $(".compare-pop .pop-wrap .top-con").outerHeight(true))
    }else{
      $(".compare-pop .pop-wrap .top-con .compare-list").removeClass("on");
      // $(".compare-pop .pop-wrap .bottom-con").height($(".compare-pop .pop-wrap").height() - $(".compare-pop .pop-wrap .top-con").outerHeight(true))
    }
  });

  // 스크롤
  $(window).on("scroll", function(){
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

    // header
    _isScrollTop =  $(window).scrollTop();

    if(_isScrollTop > _this_scroll) { // down
      if(_isScrollTop > 0){
        if($("header").size() != 0){
          gsap.to(("header"), 1.2, {top: -130, ease:Power2.easeOut});
        }
      }
    }
    
    if(_isScrollTop < _this_scroll) { // up
      if(_isScrollTop != 0 && _isScrollTop > 0){
        gsap.to(("header"), 1.3, {top: 0, ease:Power2.easeOut});
        $("header").addClass("up-scroll");
      }else if (_isScrollTop < 1) {
        $("header").removeClass("up-scroll");
      }
    }
    _this_scroll = _isScrollTop;
  });
  $(window).scroll();
});