var _this_scroll = 0;       // 스크롤 up & down 체크위한 변수
var _isScrollTop;          // scrollTop 변수
var _pageScrollOffset;            // dimd 시 scrollTop 값 기억
var _device = '';           // 접속 device 체크 위한 변수
var _deviceCondition = '';  // 해상도 따른 device 체크 위한 변수
var _browser = '';          // browser 체크 위한 변수
var _barWidthArr = [];
var _thrTotalWidth = 0;
var _newsDetailSwiper; // 코오롱 뉴스 상세 리스트
var _viewConTitHeight; // view 페이지 title 높이값
var _isMotionOnce = false; // resize 안에서 모션 한번만 작동하기 위한 변수
var _mGnbAccordion; // mobile header accordion 변수
var _headerHeightArr = [];  // header
var _headerMaxHeight = 0;   // header

var commonScript = (function(){
  return {
    deviceChk : function(){
      // 디바이스 체크
      if(/Android/i.test(navigator.userAgent)) {
        _device = 'android';
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return navigator.userAgent.match(/(iPhone|iPod)/g) ? _device='ios' : _device='ipad';
      }else {
        _device = 'pc';
      }

      // 브라우저 체크
      var agent = navigator.userAgent.toLowerCase(),
          name = navigator.appName;

      if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        _browser = 'ie';
        $("html").addClass("ie");
      } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
        if(agent.indexOf("chrome") > -1){
          _browser = 'chrome';
          $("html").addClass("chrome");
        }else{
          _browser = 'safari';
          $("html").addClass("safari");
        }
      } else if(agent.indexOf('firefox') > -1) { // Firefox
        _browser = 'firefox';
      }
    },
    commonFn: function(){
      $("section .tab_con_area .list_wrap .list").each(function(){
        $(this).on("click", function(){
          if($(this).siblings(".list_pop").size() > 0){
            if(!$(this).hasClass("no_click")){
              $("body").addClass("stop_scroll")
              $(this).siblings(".list_pop").fadeIn()
              lazyLoading();
              setTimeout(function(){
                popupResize();
              },150)
            }
          }
        });
      });


      // 비주얼 타이포 모션 스크립트
      var arrTit = [];
      
      $(".typo_motion").css("opacity", 1);

      $(".typo_motion").each(function(){
        typoMotion.incision($(this));
        $(this).find("span").each(function(q){
          arrTit.push($(this));
        })
      });
      
      $(".typo_motion").css("opacity", 1);
      TweenMax.staggerTo(arrTit, 1.1, {left:0, opacity:1, ease:Power3.easeInOut}, 0.07);

      // 탭
      $(".tab_btn_area .btn").each(function(q){
        $(this).on("click", function(){
          if(!$(this).hasClass("on")){
            $(".tab_btn_area .btn").removeClass("on");
            $(this).addClass("on");
            $(".tab_con_area .tab_con").removeClass("on");
            $(".tab_con_area .tab_con").eq(q).addClass("on");
            $(".tab_con_area .tab_con .list_wrap").removeClass("active");
            setTimeout(function(){
              $(".tab_con_area .tab_con").eq(q).find(".list_wrap").addClass("active");
            },10)
          }
        });
      });

    },
    scrollFn: function(){
      // not IE
      $(window).on("scroll", function(){
        _isScrollTop =  $(window).scrollTop();
        
        // 탑버튼
        repositioningTopBtn();
      });
      $(window).scroll();

      // for IE
      $("body").on("scroll", function(){
        
      });

      // scrollMotion
      scrollMotionTrigger();
    },
    swiperFn: function(){
      if($(".visual_area .swiper-slide").length > 1){
        var progressBarMotion = gsap.to($(".visual_area .progress_bar .bar"), 5, {height:"100%", ease:"none", onComplete:function(){
          visualSwiper.slideNext();
        }});
        
        var thisSlide, imgMoving;
        
        var currentNum = 0;
        var totalNum = $(".bg_img .swiper-slide").length;
        
        $(".control_area .total_num").text("0" + totalNum);

        var visualSwiper = new Swiper(".visual_area .bg_img.swiper-container", {
          effect:"fade",
          loop:true,
          speed:1500,
          simulateTouch:false,
          on:{
            slideChangeTransitionStart : function(){
              currentNum++;
              if(currentNum > totalNum){
                currentNum = 1;
              }
              
              $(".control_area .current_num").text("0" + currentNum);
  
              $(".visual_area .swiper-slide").removeClass("on");
              $(".visual_area .swiper-slide-active").addClass("on");
              $(".visual_area .swiper-slide-duplicate-active").addClass("on");
  
              gsap.to($(".visual_area .swiper-slide-prev .img"), 0, {transform:"translateX(0)", ease:"none"});
              gsap.to($(".visual_area .swiper-slide-next .img"), 0, {transform:"translateX(0)", ease:"none"});
              gsap.to($(".visual_area .swiper-slide-duplicate-prev .img"), 0, {transform:"translateX(0)", ease:"none"});
              gsap.to($(".visual_area .swiper-slide-duplicate-next .img"), 0, {transform:"translateX(0)", ease:"none"});
              gsap.to($(".visual_area .swiper-slide-active .img"), 0, {transform:"translateX(0)", ease:"none"});
              gsap.to($(".visual_area .swiper-slide-duplicate-active .img"), 0, {transform:"translateX(0)", ease:"none"});
  
              progressBarMotion.restart();
  
              thisSlide = $(".visual_area .swiper-slide.on .img");
              imgMoving = gsap.to(thisSlide, 6.7, {transform:"translateX(-130px)", ease:Linear.easeNone});
            },
          }
        });
      }
    },
    resizeFn: function(){
      $(window).resize(function(){
        
        // 해상도 따른 pc, mobile 구분
        if(window.innerWidth > 1024 ){ // pc
          _deviceCondition = "pc";

          
        }else{ // mobile
          _deviceCondition = "mobile";
        }
        
        // 팝업 리사이즈
        popupResize();
      }).resize();
    },
    popupFn:function(){
      // 팝업 닫기
      $(".list_pop .pop_wrap .btn_close").on("click", function(){
        $(this).parents(".list_pop").fadeOut();
        $("body").removeClass("stop_scroll");
      });
      
    },
  }
})();

$(window).on("load", function(){
  commonScript.deviceChk();
  // commonScript.headerFooterFn();
  gsap.delayedCall(0.2, function() {
    commonScript.swiperFn();
    commonScript.commonFn();
    commonScript.resizeFn();
    commonScript.scrollFn();
    commonScript.popupFn();
  });
  
});

function imgResizingFn(){
  var imgNum;
  $(".img_resize_w").each(function(){
    if($(this).find("img").size() >= 2){
      if(window.innerWidth > 768){
        imgNum = 0;
      }else{
        imgNum = 1;
      }
    }else{
      imgNum = 0;
    }

    if($(this).find("img").get(imgNum).naturalWidth / $(this).find("img").get(imgNum).naturalHeight <= $(this).width() / $(this).innerHeight()){
      $(this).addClass("reverse");
    }else{
      $(this).removeClass("reverse");
    }
  });
}

function scrollMotionTrigger(){
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 80%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
}

function repositioningTopBtn(){
  if($(".btn_top").length) {
    if($(window).scrollTop() > 0){
      $(".btn_top").fadeIn();
      if($(".review_write").size() > 0){
        if(window.innerWidth <= 1024){
          $(".review_write").fadeIn()
        }
        $(".review_write").addClass("move")
      }
    }else{
      $(".btn_top").fadeOut()
      if($(".review_write").size() > 0){
        if(window.innerWidth <= 1024){
          $(".review_write").fadeOut()
        }else{
          $(".review_write").removeAttr("style")
        }
        $(".review_write").removeClass("move")
      }
    }

    // var topBtnPositionGap = 0;
    var navigationGap = 0;
    _paybarH = $(".payment_bar").innerHeight();
    _fixedBtnH = $(".course_popup .fixed_btn_area").outerHeight(true);
    var safetyChar = getComputedStyle(document.documentElement).getPropertyValue("--sab")
    var safetyNum = parseInt(safetyChar.split("p"));
    // console.log(safetyChar, safetyNum);
    var topBtnGap = 40;

    

    if(window.innerWidth <= 1024){
      if($(".payment_bar").size() > 0 || $(".course_popup .fixed_btn_area").size() > 0 || $(".view_con_w").size() > 0 || $(".desc_con").size() > 0){
        navigationGap = 0;
      } else {
        navigationGap = 64 + safetyNum;
      }
    }

    if($(window).scrollTop() + window.innerHeight > $("footer").offset().top + navigationGap) {
      // 푸터에 붙었을 때,
      if(window.innerWidth > 1024){
        if($(".payment_bar").size() > 0){
          $(".btn_top").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + _paybarH + 20);
          $(".payment_bar").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top)
        } else {
          $(".btn_top").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 40);
          $(".review_write").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 40);
        }
      } else {
        if($(".payment_bar").size() > 0){
          $(".page_cont_area").css({"padding-bottom": $(".payment_bar").innerHeight() + $(".btn_top").innerHeight() + topBtnGap});
          $(".btn_top").addClass("no_fixed");
          $(".payment_bar").addClass("no_fixed");
          $(".btn_top").css("bottom", $("footer").innerHeight() + _paybarH + 20);
          $(".payment_bar").css("bottom", $("footer").innerHeight())
        } else {
          $(".btn_top").addClass("no_fixed");
          $(".btn_top").css("bottom", $("footer").innerHeight() + 20);
          $(".review_write").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 78);
        }
      }
    }else {
      // 스크롤 할 때,
      $(".payment_bar").css("bottom", 0);
      $(".payment_bar").removeClass("no_fixed");
      $(".btn_top").removeClass("no_fixed");
      
      if(window.innerWidth > 1024){
        if($(".payment_bar").size() > 0){
          $(".btn_top").css("bottom", _paybarH + 20);
        } else {
          $(".btn_top").css("bottom", 40);
          $(".review_write").css("bottom", 40);
        }
      }else{
        if($(".payment_bar").size() > 0){
          $(".page_cont_area").css({"padding-bottom": $(".payment_bar").innerHeight() + $(".btn_top").innerHeight() + topBtnGap});
          $(".btn_top").css("bottom", _paybarH + 20);
        } else {
          $(".btn_top").css("bottom", 16 + navigationGap);
          $(".review_write.move").css("bottom", 74 + navigationGap);
        }
      }
    }
    
    if($(".course_popup .fixed_btn_area").size() > 0) {
      if(window.innerWidth <= 1024) {
        if($(window).scrollTop() + window.innerHeight > $("footer").offset().top + _fixedBtnH) {
          $(".btn_top").addClass("no_fixed");
        } else {
          $(".btn_top").removeClass("no_fixed");
          $(".btn_top").css("bottom", _fixedBtnH + 15);
        }
      }
    }
  }
}

var typoMotion = (function(){
  return {
    incision : function (cls) {
      var arrTxt = $(cls).text().trim().split("");
      $(cls).text("");
      for(var i=0; i<arrTxt.length; i++) {
        $(cls).append("<span>" + arrTxt[i] + "</span>");
      }
    }
  }
})();

function popupResize(){
  lazyLoading();
  $(".list_pop:visible").find(".pop_wrap, .pop_cont").css("height", "")
  $(".list_pop:visible").find(".pop_cont").height($(".list_pop:visible").find(".pop_wrap").height() - $(".list_pop:visible").find(".pop_head").innerHeight())
  $(".list_pop:visible").find(".pop_wrap").height(Math.ceil($(".list_pop:visible").find(".pop_cont").height() + $(".list_pop:visible").find(".pop_head").innerHeight())); // 소수점 버림
  $(".list_pop:visible").find(".pop_wrap").css({"margin-left": $(".list_pop:visible").find(".pop_wrap").width()*-0.5, "margin-top": $(".list_pop:visible").find(".pop_wrap").height()*-0.5}); // 중앙정렬
}

var lazyLoading = () => {
  var imgs = document.querySelectorAll('.lazy');

  var observerCallback = (entries, observer) => {
    entries.forEach(({ isIntersecting, intersectionRatio, target }) => {
      if (isIntersecting && intersectionRatio > 0) {
        target.src = target.dataset.src;
        target.classList.remove("lazy");
        observer.unobserve(target);
      }
    });
  };

  var io = new IntersectionObserver(observerCallback);
  imgs.forEach((img) => io.observe(img));
};