$(window).on("load", function(){  
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperEvtFn();
  main.scrollTriggerFn();
  main.gnbFn();
  main.resizeFn();
  main.scrollFn();
});

var main = function () {
  return {
    commonFn: function () {
      // 페이지 로드시 quick-menu motion
      $(".quick-menu").each(function(){
        $(this).find(".quick-btn").on("click", function(){
          if(!$(this).closest(".quick-menu").hasClass("on")){
            $(".quick-menu").removeClass("on")
            $(this).closest(".quick-menu").addClass("on");
            // $(this).closest(".quick-menu").find(".quick-con").fadeIn();
          }else{
            $(".quick-menu").removeClass("on")
            /* $(this).closest(".quick-menu").find(".quick-con").fadeOut(); */
          }
        });
      });

      $(".quick-area .quick-menu:nth-child(2) .quick-con .service").on("click", function(){
        $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap").addClass("on");
        $(".quick-area .quick-menu:nth-child(2) .quick-con .robot .img").fadeOut();
        $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap").fadeIn(300, function(){
          $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap .talk-wrap").eq(0).addClass("active");
          $(".quick-area .quick-menu:nth-child(2) .quick-con .chatting-wrap .talk-wrap").eq(1).addClass("active");
        });
      });

      $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap.on .prev-btn").on("click", function(){
        $(".quick-area .quick-menu:nth-child(2) .quick-con .tit-wrap").removeClass("on");
        $(".quick-area .quick-menu:nth-child(2) .quick-con .robot .img").fadeIn();
      })

      // setTimeout(function(){
      //   $(".quick-menu.on").find(".quick-con").fadeOut();
      //   $(".quick-menu").removeClass("on");
      // }, 1000)

      // 탭 클릭
      $(".filter-wrap a").on("click", function() {
        if(!$(".tab-area").hasClass("on")) {
          filterLists0();
          $(this).parents(".tab-area").addClass("on");
        } else {
          filterLists0();
          $(this).parents(".tab-area").removeClass("on");
        }
      });
      $(".filter-pop .align-btn").on("click", function() {
        console.log("잉");
        $(".pop").stop().slideToggle(400);
        $(this).toggleClass("on");
      });
      $(".filter-pop .pop").on("click", function() {
        $(".pop").stop().slideUp(400);
        $(".filter-pop .align-btn").removeClass("on");
        if(!$(this).hasClass("on")) {
          filterLists0();
          $(this).addClass("on");
        } else {
          filterLists0();
          $(this).removeClass("on");
        }
      });

      $(".list-area .list-item .plus-btn").on("click", function() {
        addPro(this);
      });

      $(".product-pop .pop-lists .list-item .close-btn").on("click", function() {
        if($(this).parents(".list-item").hasClass("on")) {
          let idx = $(this).parents(".list-item").index();

          if(idx == 0) {
            $(this).parents(".list-item").removeClass("on");
            $(".list-area .list-item.1").removeClass("on");
            
          } else if(idx == 1) {
            $(this).parents(".list-item").removeClass("on");
            $(".list-area .list-item.4").removeClass("on");

          }
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
    },
    swiperEvtFn: function(){
    },
    scrollTriggerFn:function(){
      scrollMotionFuc();
    },
    gnbFn: function(){
      $("header nav").on("mouseenter focusin", function(){
        $("header").addClass("hover");
        $(".dimd").stop(true, true).fadeIn();
      });

      $("header").on("mouseleave", function(){
        $("header").removeClass("hover");
        $(".dimd").stop(true, true).fadeOut();
      });
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      // 필터 고정
      let thisScrollT;
      let scrollT;
      let chkWrapTop = $(".chk-wrap").offset().top;
      let chkWrapBottom = chkWrapTop + 100;

      $(window).on("scroll", function () {
        scrollT =  $(window).scrollTop();
        chkWrapTop = $(".chk-wrap").offset().top;
        chkWrapBottom = chkWrapTop + 100;

        if(scrollT > thisScrollT) { // down
          if(scrollT > 0){
            if($("header").size() != 0){
              if(!$("header").hasClass("fixed")){
                gsap.to(("header"), 1.4, {top: -110, ease:Power2.easeOut});
              }
            }

            $(".quick-area").addClass("on");
          }

          if(scrollT >= chkWrapTop) {
            $(".chk-wrap .fixed-box").addClass("fixed");
            $(".chk-wrap .fixed-box").removeClass("on");
          }
        }
        
        if(scrollT < thisScrollT) { // up
          $(".chk-wrap .fixed-box").addClass("on");
          if(chkWrapBottom >= scrollT + 200) {
            $(".chk-wrap .fixed-box").removeClass("fixed");
          }

          if(scrollT != 0 && scrollT > 0){
            gsap.to(("header"), 1, {top: 0, ease:Power2.easeOut});
            $("header").addClass("up-scroll");
          }else if (scrollT < 1) {
            $("header").removeClass("up-scroll");
          }

        }
        thisScrollT = scrollT;
      }).scroll();
    },
  }
}();

  // 필터 재정렬 함수
  const filterLists0 = () => {
    const list = $(".list-area");
    
    const listChangeItems = [
      list.find(".list-item.1"),
      list.find(".list-item.2"),
      list.find(".list-item.3"),
      list.find(".list-item.4"),
      list.find(".list-item.5"),
      list.find(".list-item.6"),
      list.find(".list-item.7"),
      list.find(".list-item.8"),
      list.find(".list-item.9"),
      list.find(".list-item.10"),
      list.find(".list-item.11"),
      list.find(".list-item.12"),
    ];
    
    list.empty();
    $(listChangeItems).each((idx, item) => {
      list.append(item);
      item.removeClass("active");
    })

    ScrollTrigger.refresh();
    scrollMotionFuc();

    $(".list-area .list-item .plus-btn").on("click", function() {
      addPro(this);
    });

    $(".product-pop .pop-lists .list-item .close-btn").on("click", function() {
      if($(this).parents(".list-item").hasClass("on")) {
        let idx = $(this).parents(".list-item").index();

        if(idx == 0) {
          $(this).parents(".list-item").removeClass("on");
          $(".list-area .list-item.1").removeClass("on");
          
        } else if(idx == 1) {
          $(this).parents(".list-item").removeClass("on");
          $(".list-area .list-item.4").removeClass("on");

        }
      }
    });
  }

  // 공통 스크롤 모션
  function scrollMotionFuc () {
    $(".scroll-motion:visible").each(function(q){
      let currentEle = $(this);
      gsap.to($(this), {
        onComplete: function () {
          if($(currentEle).hasClass("4")) {
            $(".list-area").removeClass("init");
          }
        },
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 75%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }

  // 상품 추가 버튼
  const addPro = function(clickItem) {
    $(clickItem).parents(".list-item").toggleClass("on");
    
    if($(clickItem).parents(".list-item").hasClass("1")) {
      $(".product-pop").addClass("on");
      $(".product-pop .pop-lists .list-item").eq(0).toggleClass("on");
    } else if($(clickItem).parents(".list-item").hasClass("4")) {
      $(".product-pop").addClass("on");
      $(".product-pop .pop-lists .list-item").eq(1).toggleClass("on");
    }
  }