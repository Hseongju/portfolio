$(function() {
  // scroll-motion
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


  // 헤더
  $("header").addClass("scroll");

  $("header .gnb").on("mouseenter focusin", function(){
    $("header .two-depth").stop(true, true).slideDown(300);
    $("header").addClass("hover");
  });

  $("header .gnb-area").on("mouseleave", function(){
    $("header .two-depth").stop(true, true).slideUp(300, function(){
      $("header").removeClass("hover");
    });
  });

  $(window).on("mousewheel",function(event){
    if (event.originalEvent.deltaY < 0) {
      // wheeled up
      $("header").addClass("scroll")
    }
    else {
      // wheeled down
      $("header").removeClass("scroll")
    }
  });

  var _this_scroll;
  var _isScrollTop;

  $(window).on("scroll", function () {
    // header
    _isScrollTop =  $(window).scrollTop();

    if(_isScrollTop == 0){
      $("header").addClass("scroll");
    } 

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
    
    _this_scroll = _isScrollTop;
    }
  });


  // 헤더 - 뉴스 팝업
  $(".dimd").on("click", function(){
    $(".dimd").fadeOut()
    $("body").removeClass("scl-lock");
    gsap.to(".quick-service", { duration: .6, left: "100%" });
    gsap.to(".news-pop", { duration: .6, left: "100%" });
  });

  $(".news-pop-btn").on("click", function(){
    $("body").addClass("scl-lock");
    $(".dimd").fadeIn();
    gsap.to(".news-pop", { duration: .6, left: "calc(100% - 1728px)" });
  });

  $(".news-pop .close-btn").on("click", function(){
    $(".dimd").fadeOut()
    $("body").removeClass("scl-lock");
    gsap.to(".news-pop", { duration: .6, left: "100%" });
  });


  // 탭 클릭
  $(".tab-area .tab-menu .tab.click1").on("click", function() {
    if($(".click1").eq(2).hasClass("on")) {
      $(".click1").eq(2).removeClass("on");

      $(".tab-area .tab-click .tab.click1").removeClass("on");
      $(".tab-area .tab-click .tab.click1").fadeOut(200);
      filterLists0();
    } else {
      $(".click1").eq(2).addClass("on");

      $(".tab-area .tab-click .tab.click1").addClass("on");
        $(".tab-area .tab-click .tab.click1").fadeIn(200);
        filterLists1();
    }
    filterChk();
  });
  $(".tab-area .tab-menu .tab.click2").on("click", function() {
    if($(this).hasClass("on")) {
      $(this).removeClass("on");

      $(".tab-area .tab-click .tab.click2").removeClass("on");
      $(".tab-area .tab-click .tab.click2").fadeOut(200);
      $(".tab-area .tab-menu .tab.click2 .pop").removeClass("on");

      if(!$(".tab-area .tab-menu .tab.click2 .pop").hasClass("on")) {
        filterLists0();
      }
    } else {
      $(this).addClass("on");

      $(".tab-area .tab-menu .tab.click2 .pop").addClass("on")
    }
    filterChk();
  });
  // $(".tab-area .tab-menu .tab.click").on("click", function() {
  //   if($(this).hasClass("on")) {
  //     $(this).removeClass("on");
  //     if($(this).index() == 2) {
  //       $(".tab-area .tab-click .tab").eq(0).removeClass("on");
  //       $(".tab-area .tab-click .tab").eq(0).fadeOut(200);
  //       filterLists0();
  //     }
  //     if($(this).index() == 4) {
  //       $(".tab-area .tab-click .tab").eq(1).removeClass("on");
  //       $(".tab-area .tab-click .tab").eq(1).fadeOut(200);
  //       $(".tab-area .tab-menu .tab.click .pop").removeClass("on");
  //       if(!$(".tab-area .tab-menu .tab.click .pop").hasClass("on")) {
  //         filterLists0();
  //       }
  //     }
  //   } else {
  //     $(this).addClass("on");
  //     if($(this).index() == 2) {
  //       $(".tab-area .tab-click .tab").eq(0).addClass("on");
  //       $(".tab-area .tab-click .tab").eq(0).fadeIn(200);
  //       filterLists1();
  //     }
  //     if($(this).index() == 4) {
  //       $(".tab-area .tab-menu .tab.click .pop").addClass("on")
  //     }
  //   }
  //   filterChk();
  // });


  $(".tab-area .tab-menu .tab.click2 .pop").on("click", function(event) {
    event.stopPropagation();
    $(".tab-area .tab-click .tab.click2").addClass("on");
    $(".tab-area .tab-click .tab.click2").fadeIn(200);
    $(".tab-area .tab-menu .tab.click2 .pop").removeClass("on")
    
    filterChk();
    filterLists2();
  });
  // $(".tab-area .tab-menu .tab.click .pop").on("click", function(event) {
  //   event.stopPropagation();
  //   $(".tab-area .tab-click .tab").eq(1).addClass("on");
  //   $(".tab-area .tab-click .tab").eq(1).fadeIn(200);
  //   $(".tab-area .tab-menu .tab.click .pop").removeClass("on")
    
  //   filterChk();
  //   filterLists2();
  // });

  
  $(".tab-area .tab-click .tab.click1").on("click", function() {
    $(this).removeClass("on");
    $(this).fadeOut(200);
    $(".tab-area .tab-menu .tab.click1").removeClass("on");
    filterChk();
    filterLists0();
  });
  $(".tab-area .tab-click .tab.click2").on("click", function() {
    $(this).removeClass("on");
    $(this).fadeOut(200);
    $(".tab-area .tab-menu .tab.click2").removeClass("on");
    filterChk();
    filterLists0();
  });
  // $(".tab-area .tab-click .tab").on("click", function() {
  //   $(this).removeClass("on");
  //   $(this).fadeOut(200);
  //   $(".tab-area .tab-menu .tab.click").eq($(this).index()).removeClass("on");
  //   filterChk();
  //   filterLists0();
  // });


  // 체크 탭 확인 함수
  const filterChk = () => {
    if($(".tab-area .tab-click .tab.on").length != 0) {
      $(".tab-click").slideDown(400);
    } else {
      $(".tab-click").slideUp(400);
    }
  }


  // 상품 재정렬
  $(".list-head .align-box .align-btn").on("click", function() {
    $(".list-head .align-box .pop").stop(true, true).slideToggle(400);
  });
  $(".list-head .align-box .pop").on("click", function() {
    $(".list-head .align-box .pop").stop(true, true).slideUp(400);
    filterLists3();
  });


  // 필터 재정렬 함수
  const filterLists0 = () => {
    const list = $(".product-lists");
    
    const listChangeItems = [
      list.find(".list-item.1"),
      list.find(".list-item.2"),
      list.find(".list-item.3"),
      list.find(".list-item.4"),
      list.find(".list-item.5"),
      list.find(".list-item.6"),
    ];
    
    list.empty();
    $(listChangeItems).each((idx, item) => {
      list.append(item);
      item.removeClass("active");
    })

    ScrollTrigger.refresh();
  }
  const filterLists1 = () => {
    const list = $(".product-lists");
    
    const listChangeItems = [
      list.find(".list-item.2"),
      list.find(".list-item.3"),
      list.find(".list-item.1"),
      list.find(".list-item.6"),
      list.find(".list-item.4"),
      list.find(".list-item.5"),
    ];
    
    list.empty();
    $(listChangeItems).each((idx, item) => {
      list.append(item);
      item.removeClass("active");
    })

    ScrollTrigger.refresh();
    $(".product-lists .list-item .plus-btn").on("click", function() {
      addPro(this);
    });
    
    $(".product-lists .list-item").hover(function() {
      $(this).find(".roll-txt").addClass("move");
    }, function() {
      $(this).find(".roll-txt").removeClass("move");
    });
  }
  const filterLists2 = () => {
    const list = $(".product-lists");
    
    const listChangeItems = [
      list.find(".list-item.2"),
      list.find(".list-item.1"),
      list.find(".list-item.3"),
      list.find(".list-item.4"),
      list.find(".list-item.5"),
      list.find(".list-item.6"),
    ];
    
    list.empty();
    $(listChangeItems).each((idx, item) => {
      list.append(item);
      item.removeClass("active");
    })

    ScrollTrigger.refresh();
    $(".product-lists .list-item .plus-btn").on("click", function() {
      addPro(this);
    });
    
    $(".product-lists .list-item").hover(function() {
      $(this).find(".roll-txt").addClass("move");
    }, function() {
      $(this).find(".roll-txt").removeClass("move");
    });
  }
  const filterLists3 = () => {
    const list = $(".product-lists");
    
    const listChangeItems = [
      list.find(".list-item.1"),
      list.find(".list-item.2"),
      list.find(".list-item.3"),
      list.find(".list-item.4"),
      list.find(".list-item.6"),
      list.find(".list-item.5"),
    ];
    
    list.empty();
    $(listChangeItems).each((idx, item) => {
      list.append(item);
      item.removeClass("active");
    })

    ScrollTrigger.refresh();
    $(".product-lists .list-item .plus-btn").on("click", function() {
      addPro(this);
    });
    
    $(".product-lists .list-item").hover(function() {
      $(this).find(".roll-txt").addClass("move");
    }, function() {
      $(this).find(".roll-txt").removeClass("move");
    });
  }


  // 상품 호버 시, 텍스트 롤링
  $(".product-lists .list-item").hover(function() {
    $(this).find(".roll-txt").addClass("move");
  }, function() {
    $(this).find(".roll-txt").removeClass("move");
  });


  // 상품 호버 시, 비디오 재생
  $(".product-lists .large").hover(function() {
    let video = $(this).find("video")[0];
    video.play();
  }, function() {
    let video = $(this).find("video")[0];
    video.pause();
    video.currentTime = 0; 
  });


  // 상품 추가 버튼
  const addPro = function(clickItem) {
    let idx = $(clickItem).parents(".list-item").index();
    $(clickItem).parents(".list-item").toggleClass("on");
    $(".product-pop .pop-lists .list-item").eq(idx).toggleClass("on");
    $(".product-pop").addClass("on");
  }

  $(".product-lists .list-item .plus-btn").on("click", function() {
    addPro(this);
  });

  $(".product-pop .pop-lists .list-item .close-btn").on("click", function() {
    if($(".product-lists .list-item").hasClass("on")) {
      let idx = $(this).parents(".list-item").index();
      $(this).parents(".list-item").toggleClass("on");
      $(".product-lists .list-item").eq(idx).toggleClass("on");
    }
  });


  // 제품 비교하기 닫기
  $(".product-pop .pop-close-btn").on("click", function() {
    $(".product-pop").removeClass("on");
  });


  // 비교하기 팝업
  $(".product-pop .pop-head .comparison-btn").on("click", function() {
    $("body").css("overflow-y", "hidden");
    $(".product-pop").removeClass("on");
    $(".compare-pop").fadeIn();
  });
  $(".compare-pop .pop-wrap .close-btn").on("click", function() {
    $(".product-lists .list-item").removeClass("on");
    $(".pop-lists .list-item").removeClass("on");
    $(".compare-pop").fadeOut(function(){
      $("body").removeAttr("style");
    });
  });


  // 비교하기 팝업, 스크롤
  $(".compare-pop .pop-wrap .scroll-area").on("scroll", function(){
    if($(".compare-pop .pop-wrap .scroll-area").scrollTop() > 0){
      $(".compare-pop .pop-wrap .top-con .pop-lists2").addClass("on");
    }else{
      $(".compare-pop .pop-wrap .top-con .pop-lists2").removeClass("on");
    }
  });
});
