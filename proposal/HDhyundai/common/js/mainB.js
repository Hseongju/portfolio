var _this_scroll;
var _isScrollTop;

$(function() {
  //gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.scrollEvtFn();
  main.clickEvtFn();
});

var main = function () {
  var _getScrollObjY = function () {
    var _arrY = [];
    $(".scroll-motion").each(function (q) {
      _arrY.push(parseInt($(".scroll-motion").offset().top + 300));
    });
    return _arrY;
  };
  return {
    commonFn: function () {
      gsap.to(".intro", {opacity: 0, duration: 1.2, delay: 4, ease: Power2.easeOut, onComplete:function(){
        $(".intro").css('display', 'none');
      }});

      gsap.to("header", {top: 0, duration: 0.8, delay: 5, ease: Power2.easeOut});
      gsap.to("nav", {top: 30, duration: 0.7, delay: 5, ease: Power2.easeOut});

      gsap.to(".main-top-con .txt-area .inner .txt1", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 5, ease: Power2.easeOut});
      gsap.to(".main-top-con .txt-area .inner .txt2", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 5.1, ease: Power2.easeOut});     
    },
    scrollEvtFn: function () {
      $(window).on("scroll", function () {
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
        scrollMotionTrigger();
      });

      var video1 = $('#myVideo1')[0];

      gsap.to(".main-con1 .movie", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          // markers: true,

          onUpdate: function (self) {
            if(self.progress.toFixed(3) > 0.6){
              video1.play()
              gsap.to(".main-con1 .part1 .txt .inner .txt1", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, ease: Power2.easeOut});
              gsap.to(".main-con1 .part1 .txt .inner .txt2", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 0.1, ease: Power2.easeOut});
              gsap.to(".main-con1 .part1 .txt .inner .txt3", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 0.2, ease: Power2.easeOut});
            }else{

            }

            if(self.progress.toFixed(3) > 0.8){
              gsap.to(".main-con1 .gage", {opacity: 1, duration: 0.8, ease: Power2.easeOut});
            }else{
              gsap.to(".main-con1 .gage", {opacity: 0, duration: 0.8, ease: Power2.easeOut});
            }
          },

          onEnter: function(){
            
          },
        },
        'top': 0,
        'width': '100%'
      });

      gsap.to(".main-con1 .part1", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "150% top",
          end: "+=50%",
          pin: true,
          scrub: 2,
          // markers: true,
        },
        'left': '-100%',
      });
      
      gsap.to(".main-con1 .gage span", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "150% top",
          end: "+=300%",
          // pin: true,
          scrub: 2,
          //markers: true,
        },
        'height': '100%',
      });

      gsap.to(".main-con1 .part2", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "150% top",
          end: "+=50%",
          pin: true,
          scrub: 2,
          //markers: true,
          onUpdate: function (self) {
            if(self.progress.toFixed(3) > 0.7){
              gsap.to(".main-con1 .part2 .txt .inner .txt1", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, ease: Power2.easeOut});
              gsap.to(".main-con1 .part2 .txt .inner .txt2", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 0.1, ease: Power2.easeOut});
              gsap.to(".main-con1 .part2 .txt .inner .txt3", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 0.2, ease: Power2.easeOut});
            }else{

            }
          },
        },
        'left': 0,
      });
      gsap.to(".main-con1 .movie .bg2", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "150% top",
          end: "+=50%",
          pin: true,
          scrub: 2,
          //markers: true,
          onUpdate: function (self) {
            if(self.progress.toFixed(3) > 0.7){
            }else{
            }
          },
        },
        scale: 1,
      });
      gsap.to(".main-con1 .part3", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "150% top",
          end: "+=50%",
          pin: true,
          scrub: 2,
          //markers: true,
        },
        'left': "100%",
      });

      gsap.to(".main-con1", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "200% top",
          end: "+=50%",
          pin: true,
          scrub: 2,
          //markers: true,
          onUpdate: function (self) {
            console.log(self.progress.toFixed(3))
            if(self.progress.toFixed(3) > 0.7){
              gsap.to(".main-con1 .part3 .txt .inner .txt1", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, ease: Power2.easeOut});
              gsap.to(".main-con1 .part3 .txt .inner .txt2", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 0.1, ease: Power2.easeOut});
              gsap.to(".main-con1 .part3 .txt .inner .txt3", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 0.2, ease: Power2.easeOut});
            }else{

            }
          },
        },
        'left': "-100%",
      });
      gsap.to(".main-con1 .movie .bg3", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "200% top",
          end: "+=50%",
          pin: true,
          scrub: 2,
          //markers: true,
          onUpdate: function (self) {
          },
        },
        scale: 1,
      });
   

      gsap.to(".main-con2", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "300% top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          //markers: true,
          onEnter: function(){
            gsap.to(".main-con2 .txt .inner .txt1", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 1, ease: Power2.easeOut});
            gsap.to(".main-con2 .txt .inner .txt2", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 1.1, ease: Power2.easeOut});
            gsap.to(".main-con2 .txt .inner .txt3", {'transform': 'translate(0, 0)', opacity: 1, duration: 0.8, delay: 1.2, ease: Power2.easeOut});
          },
        },
        'top': 0,
      });

      gsap.to(".main-con2 .pack", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "400% top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        'top': '-100%',
      });

      gsap.to(".main-con3", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "400% top",
          end: "+=100%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        'top': 0,
      });

      gsap.to(".main-con3 .inner", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "500% top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        'scale': 1,
      });

      gsap.to(".main-con3 .inner .img.one", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "500% top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        top: 280,
      });
      gsap.to(".main-con3 .inner .img.two", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "500% top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        bottom: -320,
      });
      gsap.to(".main-con3 .inner .img.fiv", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "500% top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        top: 280,
      });
      gsap.to(".main-con3 .inner .img.six", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "500% top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        bottom: -320,
      });

      gsap.to(".main-con3 .inner .txt", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "500% top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          //markers: true,

          onEnter: function(){
            $(".main-btns-con").css('z-index', 0);
          },

          onEnterBack: function(){
            $(".main-btns-con").css('z-index', 10);
          },
        },
        'opacity': 1,
      });

      gsap.to(".main-con3 .inner .txt > img", {
        scrollTrigger: {
          trigger: ".main-top-con",
          start: "500% top",
          end: "+=150%",
          pin: true,
          scrub: 1,
          //markers: true,
        },
        scale: 0.5,
      });

      gsap.to(".main-con5 .left li:nth-child(1)", {
        scrollTrigger: {
          trigger: ".main-con5 .left li:nth-child(1)",
          start: "top 30px",
          end: "+=2632px",
          pin: true,
          scrub: 1,
          //markers: true,
        },
      });

      gsap.to(".main-con5 .left li:nth-child(2)", {
        scrollTrigger: {
          trigger: ".main-con5 .left li:nth-child(2)",
          start: "top 153px",
          end: "+=1438px",
          pin: true,
          scrub: 1,
          //markers: true,
        },
      });

      gsap.to(".main-con5 .left li:nth-child(3)", {
        scrollTrigger: {
          trigger: ".main-con5 .left li:nth-child(3)",
          start: "top 276px",
          end: "+=246px",
          pin: true,
          scrub: 1,
          //markers: true,
        },
      });

      gsap.to(".main-con9 .bg-area .img", {
        scrollTrigger: {
          trigger: ".main-con9",
          start: "-30% top",
          end: "bottom top",
          //pin: true,
          scrub: 1,
          // markers: true,
        },
        scale: 1.2
      });

      $("nav").on('click', function(){
        $("body").css('overflow-y', 'hidden')
        gsap.to($(".sitemap"), {left: 0, duration: 1, ease: Power2.easeOut});
      });

      $(".sitemap .xbt").on('click', function(){
        $("body").css('overflow-y', '')
        gsap.to($(".sitemap"), {left: "100%", duration: 1, ease: Power2.easeOut});
      });

      $(".main-btns-con .btns > a").each(function(index){
        $(this).hover(function(){
          gsap.to($(".main-top-con .masks > p"), {opacity: 0, duration: 0, ease: Power2.easeOut});
          gsap.to($(".main-top-con .masks > p").eq(index), {opacity: 1, duration: 0, ease: Power2.easeOut});

          gsap.to($(".main-top-con .movies > p"), {opacity: 0, duration: 0.8, ease: Power2.easeOut});
          gsap.to($(".main-top-con .movies > p").eq(index), {opacity: 1, duration: 0.8, ease: Power2.easeOut});
          
        }, function(){

        })
      });

      var curListNum = 0;
      $(".main-con5 .left li.last a").on('click', function(){
        if(curListNum == 0){
          $(this).parent("li").addClass("active");
          curListNum = 1;
        }else{
          $(this).parent("li").removeClass("active");
          curListNum = 0;
        }
      });

      $("header .gnb").hover(function(){
        $("header").addClass("hover");
        $(".gnb-two").addClass("hover");
      }, function(){
        $("header").removeClass("hover");
        $(".gnb-two").removeClass("hover");
      })
    },
    clickEvtFn: function () {
    },
  }
}();

function scrollMotionTrigger(){
  if($(".scroll-motion").size() > 0){
      var _getScrollObjY = function () {
      var _arrY = [];
      $(".scroll-motion").each(function (q) {
        _arrY.push(parseInt($(".scroll-motion").eq(q).offset().top) + ($(".colorful-bg").hasClass("scroll_motion") ? 150 : ($(window).height()/50)));
      });
      return _arrY;
    };
    $(".scroll-motion").each(function (q) {
      if($(window).scrollTop() + $(window).height() - 500 > _getScrollObjY()[q]){
        $(".scroll-motion").eq(q).addClass("active");
      }
    });
  }
}