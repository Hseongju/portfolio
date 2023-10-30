var _this_scroll;
var _isScrollTop;

var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

var _deviceCondition = 'pc';  // 해상도 따른 device 체크 위한 변수
var curSaSectionNum = 0;
var isSaSectionMove = false;
var footerScroll = false;
var _isFuncSwiper = false;
var _isOnce = false;
var _isOnceReload = false;
var _isHeader = false

var _isQuickMouseUp = false;

var isMediaMode = false;

$(function() {
  //gsap.registerPlugin(ScrollToPlugin);
  //main.gnbEvtFn();
  // main.resizeFn();
  mainStory.scrollEvtFn();
  mainStory.clickEvtFn();  
});

$(window).on("load", function(){  
  
  mainStory.commonFn();
  gsap.registerPlugin(ScrollTrigger);
  // main.swiperEvtFn();
});

var mainStory = function () {
  var _getScrollObjY = function () {
    var _arrY = [];
    $(".scroll-motion").each(function (q) {
      _arrY.push(parseInt($(".scroll-motion").offset().top + 300));
    });
    return _arrY;
  };
  return {
    commonFn: function () {
      gsap.to((".main-con .story-con .onescroll-area .main-v .bg-area"), 0, {'transform': 'translate(-50%, 200px)', scale: 0.8, ease:Power3.easeInOut});
      gsap.to((".main-con .story-con .onescroll-area .main-v .txt-area > p > span"), 2, {height: 214, ease:Power3.easeInOut});
      gsap.to((".main-con .story-con .onescroll-area .main-v .sub-txt span"), 1, {height: 47, delay: 0.5, ease:Power3.easeInOut});

      gsap.to((".main-con .story-con .onescroll-area .main-v .bg-area"), 1.2, {'transform': 'translate(-50%, 0)',scale: 1, delay: 1.5, ease:Power3.easeInOut});
      gsap.to((".main-con .story-con .onescroll-area .main-v .txt-area .txt1"), 1.2, {left:253, delay: 1.5, ease:Power3.easeInOut});
      gsap.to((".main-con .story-con .onescroll-area .main-v .txt-area .txt2"), 1.2, {left:"43%", delay: 1.5, ease:Power3.easeInOut});
      gsap.to((".main-con .story-con .onescroll-area .main-v .txt-area .txt4"), 1.2, {top:372, delay: 1.5, ease:Power3.easeInOut});
    },
    swiperEvtFn: function(){
    },
    gnbEvtFn: function(){
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollEvtFn: function () {
      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {rotation:'0deg', scale: 0.8, ease:Power2.easeInOut});

      $("#wrap").on('mousewheel DOMMouseScroll', function(e) {
        if($(".story-con").length > 0){
          if(isMediaMode == false){
            var E = e.originalEvent;
            delta = 0;
            if (E.detail) {
      
            }else{ 
              delta = E.wheelDelta;
              if(delta < 0){ // 마우스 down
                if(_isQuickMouseUp == false){
                  if(isSaSectionMove == false){
                    if(curSaSectionNum == 0){
                      isSaSectionMove = true;
                      gsap.to(("header"), 0.8, {top: -80, ease:Power2.easeInOut});

                      gsap.to((".main-con .story-con .onescroll-area .bg"), 1.8, {height: '100vh', ease:Power2.easeInOut});

                      gsap.to(("#key_video2"), 0.5, {opacity: 1, ease:Power2.easeInOut});
                      $('#key_video2').get(0).play();
                      $('#key_video3').get(0).play();

                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt1 span"), 1.8, {height: 174, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt2 span"), 1.8, {height: 187, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt3 span"), 1.8, {height: 388, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt4 span"), 1.8, {height: 292, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt5"), 1.8, {opacity: 1, ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});

                      curSaSectionNum++;      
                    }else if(curSaSectionNum == 1){
                      isSaSectionMove = true;

                      gsap.to((".main-con .story-con .onescroll-area .con1 .move-area"), 1.8, {top: '-100vh', ease:Power2.easeInOut});

                      gsap.to((".main-con .story-con .onescroll-area .bg video"), 0.8, {opacity: 0, ease:Power2.easeInOut});

                      gsap.to((".main-con .story-con .onescroll-area .bg > img"), 1.8, {bottom: '1000', rotation:'-30deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {top: '227', rotation:'0deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt"), 0.8, {opacity: 0, delay: 0.5, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt.one"), 0.8, {opacity: 1, delay: 0.5, ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});
      
                      curSaSectionNum++;
                    }else if(curSaSectionNum == 2){
                      isSaSectionMove = true;

                      gsap.to((".main-con .story-con .onescroll-area .con1 .move-area"), 1.8, {top: 'calc(-200vh + 210px)', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part3 .txt1"), 0.8, {opacity: 1, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {top: '227',rotation:'30deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt"), 0.8, {opacity: 0, delay: 0.5, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt.two"), 0.8, {opacity: 1, delay: 0.5, ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});

                      curSaSectionNum++;
                    }else if(curSaSectionNum == 3){
                      isSaSectionMove = true;

                      gsap.to((".main-con .story-con .onescroll-area .con1 .move-area"), 1.8, {top:  'calc(-300vh + 420px)', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part4 .txt1"), 0.8, {opacity: 1, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {top: '227',rotation:'60deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt"), 0.8, {opacity: 0, delay: 0.5, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt.thr"), 0.8, {opacity: 1, delay: 0.5, ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});
      
                      curSaSectionNum++;
                    }else if(curSaSectionNum == 4){
                      isSaSectionMove = true;

                      gsap.to((".main-con .story-con .onescroll-area .con1 .part4 .txt1"), 1.8, {top: -300, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .bg"), 1.8, {bottom: '100vh', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: '-100vh', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {top: '50',rotation:'60deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .subtxt"), 0.8, {top: '-100vh',  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area .con2 .inner .txt1"), 1.8, {'transform': 'translate(0, 0)',  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area .con2 .inner .txt2"), 1.8, {'transform': 'translate(0, 0)',  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area > .obj"), 1.8, {'top': 0,  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area"), 1.8, {'margin-top': 0,  ease:Power2.easeInOut, onComplete:function(){
                        $("#wrap").css('height', 'auto');
                        
                        isSaSectionMove = false;
                      }});
      
                      curSaSectionNum++;
                      
                    }
                  }
                }
                
              } else { // 마우스 up
                if(_isQuickMouseUp == false){
                  if(isSaSectionMove == false){
                    if(curSaSectionNum == 0){
                      isSaSectionMove = false;

                      curSaSectionNum = 0;
                    }else if(curSaSectionNum == 1){
                      isSaSectionMove = true;

                      gsap.to(("header"), 0.8, {top: 0, ease:Power2.easeInOut});

                      gsap.to((".main-con .story-con .onescroll-area .bg"), 1.8, {height: 0, ease:Power2.easeInOut});
                      gsap.to(("#key_video2"), 0.8, {opacity: 0, ease:Power2.easeInOut, onComplete:function(){
                        
                        $('#key_video2').get(0).currentTime = 0;
                        
                        $('#key_video3').get(0).currentTime = 0;

                      }});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt1 span"), 1.8, {height: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt2 span"), 1.8, {height: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt3 span"), 1.8, {height: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt4 span"), 1.8, {height: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part1 .txt5"), 1.8, {opacity: 0, ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});
      
                      curSaSectionNum--;
                    }else if(curSaSectionNum == 2){
                      isSaSectionMove = true;

                      gsap.to((".main-con .story-con .onescroll-area .con1 .move-area"), 1.8, {top: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .bg > img"), 1.8, {bottom: -303, rotation:'0deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: '100vh', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {top: '50',rotation:'0deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt"), 0.8, {opacity: 0,  ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});
      
                      curSaSectionNum--;
                    }else if(curSaSectionNum == 3){
                      isSaSectionMove = true;

                      gsap.to((".main-con .story-con .onescroll-area .con1 .move-area"), 1.8, {top: '-100vh', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part3 .txt1"), 0.8, {opacity: 0.18, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .bg > img"), 1.8, {bottom: '1000', rotation:'-30deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {top: '227',rotation:'0deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt"), 0.8, {opacity: 0, delay: 0.5, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt.one"), 0.8, {opacity: 1, delay: 0.5, ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});
      
                      curSaSectionNum--;
                    }else if(curSaSectionNum == 4){
                      isSaSectionMove = true;

                      gsap.to((".main-con .story-con .onescroll-area .con1 .move-area"), 1.8, {top: 'calc(-200vh + 210px)', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part4 .txt1"), 0.8, {opacity: 0.18, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {top: 227,rotation:'30deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt"), 0.8, {opacity: 0, delay: 0.5, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .con1 .subtxt.two"), 0.8, {opacity: 1, delay: 0.5, ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});
      
                      curSaSectionNum--;
                    }else if(curSaSectionNum == 5 && $(window).scrollTop() == 0){
                      isSaSectionMove = true;

                      $("#wrap").css('height', '100vh');
                      gsap.to((".main-con .story-con .onescroll-area .con1 .part4 .txt1"), 1.8, {top: 0, ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .bg"), 1.8, {bottom: '0', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj"), 1.8, {top: '0', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .obj video"), 1.8, {rotation:'60deg', ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .onescroll-area .subtxt"), 1.8, {top: 90,  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area .con2 .inner .txt1"), 1.8, {'transform': 'translate(-500px, 0)',  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area .con2 .inner .txt2"), 1.8, {'transform': 'translate(500px, 0)',  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area > .obj"), 1.8, {'top': '100vh',  ease:Power2.easeInOut});
                      gsap.to((".main-con .story-con .scroll-area"), 1.8, {'margin-top': '100vh',  ease:Power2.easeInOut, onComplete:function(){
                        isSaSectionMove = false;
                      }});
                      
                      curSaSectionNum--;
                    }
                  }
                }
              };
            };
          }
        }
      });

      // 스크롤 이벤트가 발생할 때마다 sticky 메뉴를 조절합니다.
      $(window).on('scroll', function() {
        var stickyOn = true;
        var $footer = $("footer");
        var $stickyMenu = $(".main-con .btn-area");
        var $stickyMenu2 = $(".inquiry-btn");
        var stickyMenuHeight = $stickyMenu.outerHeight();
        var footerOffsetTop = $footer.offset().top;
        var windowHeight = $(window).height();

        console.log(footerOffsetTop, $(window).scrollTop() ,windowHeight)

        if(stickyOn == true && isMediaMode == false){
          // 스크롤 높이가 footer를 만나기 전까지는 메뉴를 화면 하단에 고정합니다.
          if ($(window).scrollTop() + windowHeight < footerOffsetTop) {
            // $stickyMenu.css({
            //   bottom: 40
            // });
            // $stickyMenu2.css({
            //   bottom: 40
            // });
          } else {
            // 스크롤 높이가 footer를 만나면 메뉴를 footer 위에 배치합니다.
            // $stickyMenu.css({
            //   bottom: windowHeight - ($footer.offset().top - $(window).scrollTop()) + 40
            // });
            // $stickyMenu2.css({
            //   bottom: windowHeight - ($footer.offset().top - $(window).scrollTop()) + 40
            // });

            gsap.to($(".main-con .story-con .scroll-area .con6 .banner > a"), 1.5, {opacity: 1, 'top': '50%', ease:Power3.easeOut});
          }
        };

        if(isMediaMode == false){
          if($(window).scrollTop() > $(".main-con .story-con .scroll-area .con3 .txt").offset().top - 500 && $(window).scrollTop() <= $(".main-con .story-con .scroll-area .con3 li").eq(0).offset().top - 500){
            gsap.to((".main-con .story-con .scroll-area .con3 .txt"), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', ease:Power3.easeOut});
          }else if($(window).scrollTop() > $(".main-con .story-con .scroll-area .con3 li").eq(0).offset().top - 500 && $(window).scrollTop() <= $(".main-con .story-con .scroll-area .con4").offset().top - 500) {
            gsap.to($(".main-con .story-con .scroll-area .con3 li").eq(0), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', ease:Power3.easeOut});
            gsap.to($(".main-con .story-con .scroll-area .con3 li").eq(1), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', delay: 0.1, ease:Power3.easeOut});
            gsap.to($(".main-con .story-con .scroll-area .con3 li").eq(2), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', delay: 0.2, ease:Power3.easeOut});
          }else if($(window).scrollTop() > $(".main-con .story-con .scroll-area .con4").offset().top - 500 && $(window).scrollTop() <= $(".main-con .story-con .scroll-area .con5").offset().top - 500) {
            gsap.to($(".main-con .story-con .scroll-area .con4 .subtxt .txt1"), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', ease:Power3.easeOut});
            gsap.to($(".main-con .story-con .scroll-area .con4 .subtxt .txt2"), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', delay: 0.1, ease:Power3.easeOut});
            gsap.to($(".main-con .story-con .scroll-area .con4 .subtxt .txt3"), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', delay: 0.2, ease:Power3.easeOut});
            gsap.to($(".main-con .story-con .scroll-area .con4 .subtxt .txt4"), 1.5, {opacity: 1, 'transform': 'translate(0, 0)', delay: 0.4, ease:Power3.easeOut});
          }else if($(window).scrollTop() > $(".main-con .story-con .scroll-area .con5").offset().top - 500 && $(window).scrollTop() <= $(".main-con .story-con .scroll-area .con6").offset().top - 500) {
            gsap.to($(".main-con .story-con .scroll-area .con5 .txt-area .tit"), 1.5, {opacity: 1, 'transform': 'translate(-50%, 0)', ease:Power3.easeOut});
            gsap.to($(".main-con .story-con .scroll-area .con5 .txt-area .txt3"), 1.5, {opacity: 1, 'transform': 'translate(-50%, 0)', delay: 0.1, ease:Power3.easeOut});
          }
        }
      });
    },
    clickEvtFn: function () {
      gsap.to((".main-con .btn-area > a:nth-child(2) .on"), 0, {opacity: 1, ease:Power3.easeOut});

      $(".main-con .btn-area > a").eq(0).on('click', function(){
        gsap.to((".main-con .btn-area > a:nth-child(2) .on"), 0.8, {opacity: 1, ease:Power3.easeOut});
        gsap.to((".main-con .btn-area > a:nth-child(3) .on"), 0.8, {opacity: 0, ease:Power3.easeOut});
        gsap.to((".main-con .btn-area > p"), 0.8, {left: 0, ease:Power3.easeOut});

        $("#wrap").css('height', '100vh');
        gsap.to((".main-con .story-con"), 1.2, {left: 0, ease:Power3.easeOut});
        gsap.to((".main-con .media-con"), 1.2, {left: "100%", ease:Power3.easeOut});

        isMediaMode = false;
      });
      $(".main-con .btn-area > a").eq(1).on('click', function(){
        gsap.to((".main-con .btn-area > a:nth-child(2) .on"), 0.8, {opacity: 0, ease:Power3.easeOut});
        gsap.to((".main-con .btn-area > a:nth-child(3) .on"), 0.8, {opacity: 1, ease:Power3.easeOut});
        gsap.to((".main-con .btn-area > p"), 0.8, {left: 130, ease:Power3.easeOut});

        $("#wrap").css('height', 5595);
        gsap.to((".main-con .story-con"), 1.2, {left: "-100%", ease:Power3.easeOut});
        gsap.to((".main-con .media-con"), 1.2, {left: 0, ease:Power3.easeOut});

        isMediaMode = true;
      });

      /* 문의 */
      $(".inquiry-btn").on("click", function(){
        $("body").addClass("stop-scroll");
        $(".dimd").fadeIn();
        gsap.to($(".inquiry-pop"), 0.6, {right:0, ease:Power3.easeOut});
      });

      $(".inquiry-pop .x-btn").on("click", function(){
        $("body").removeClass("stop-scroll");
        $(".dimd").fadeOut();
        gsap.to($(".inquiry-pop"), 0.6, {right:-620, ease:Power3.easeOut});
      });
      /* // 문의 */

      $(".main-con .story-con .scroll-area .con5 .st-area ul li").eq(0).find(".img").on('click', function(){
        gsap.to($(".main-con .story-con .scroll-area .con5 .st-area ul li").eq(0).find(".img"), 0.8, {'width': 1368, 'border-radius': '324px', ease:Power3.easeOut});
      })

      $(".main-con .story-con .scroll-area .con5 .st-area ul li").eq(0).find(".txt").on('click', function(){
        gsap.to($(".main-con .story-con .scroll-area .con5 .st-area ul"), 2, {'transform': 'translate(-1880px, 0)', ease:Power3.easeOut});
      });

      $(".main-con .story-con .scroll-area .con5 .st-area ul li").eq(1).find(".txt").on('click', function(){
        gsap.to($(".main-con .story-con .scroll-area .con5 .st-area ul"), 1.5, {'transform': 'translate(-3000px, 0)', ease:Power3.easeOut});
      });

      $(".main-con .story-con .scroll-area .con5 .st-area ul li").eq(2).find(".txt").on('click', function(){
        gsap.to($(".main-con .story-con .scroll-area .con5 .st-area ul"), 3, {'transform': 'translate(0, 0)', ease:Power3.easeOut});
      })
    },
  }
}();

// function stStart(){
//   const textTimeline1 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".main-con .story-con .scroll-area .con5", // 트리거 요소 선택자
//       start: "top top", // 트리거 요소 상단 중앙에서 애니메이션 시작
//       end: '+= 100%', // 트리거 요소 하단 중앙에서 애니메이션 종료
//       pin: true,
//       scrub: 2, // 스크롤 속도에 따라 애니메이션 재생
//       markers: true, // 디버깅을 위한 마커 표시
//     }
//   });
//   // 타임라인에 애니메이션 추가
//   textTimeline1.fromTo('.main-con .story-con .scroll-area .con5 .st-area ul li:nth-child(1)', { // 시작 상태
//     width: 'calc(100% + 457px)',
//   }, { // 종료 상태
//     width: 1368,
//   }).to('.main-con .story-con .scroll-area .con5 .st-area ul', { // 추가 애니메이션
//     transform: 'translate(-3000px, 0)',
//   });
// }

function scrollMotionTrigger(){
  if($(".scroll-motion").size() > 0){
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 50%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }
}
