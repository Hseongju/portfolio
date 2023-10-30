var _this_scroll;
var _isScrollTop;

$(function() {
  main.commonFn();
  main.scrollFn();
  main.scrollTriggerFn();
});

var main = function () {
  return {
    commonFn: function () {
      $(".intro-area").addClass("active")
      
      $(".green-area").css("margin-top", 6982)

      setTimeout(function(){
        $(".intro-area").fadeOut(800, function(){
          $("body").removeClass("stop-scroll");
        })
      }, 2500)

      setTimeout(function(){
        $(".visual-area .bg video").get(0).play()
      }, 2850)
    },
    scrollFn: function () {
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
          
      }).scroll()
    },
    scrollTriggerFn:function(){
      gsap.to(".visual-area .inner .bg", {
        scrollTrigger: {
          trigger: ".visual-area .inner .bg",
          start: "top top",
          end: "bottom top",
          scrub:true,
          pin:true,
          // markers: true,
        },
      });

      gsap.to(".aboutus-area .bg", {
        scrollTrigger: {
          trigger: ".aboutus-area .bg",
          start: "bottom bottom",
          end: "bottom top",
          endTrigger: "footer",
          scrub:2,
          pin:true,
          // markers: true,
          onUpdate: function (self) {
            console.log(self.progress.toFixed(3))
            if(self.progress.toFixed(3) > 0.1 && self.progress.toFixed(3) <= 0.15){
              $(".aboutus-area .vision-area .inner .txt-div").addClass("active")
            }else if(self.progress.toFixed(3) > 0.15){
              $(".aboutus-area .vision-area .inner .icon-div").addClass("active");
            }
          }
        },
      });

      var aboutusMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".aboutus-area .txt-area .inner",
          start: "top top",
          end: "bottom top",
          scrub:2,
          pin:true,
          // markers: true,
        },
      })
      .add('start')
      aboutusMotion.to(".aboutus-area .txt-area .tit", {
        scale:0.3
      }, 'start')
      aboutusMotion.to(".aboutus-area .txt-area .txt", {
        top:0,
        opacity:1
      });

      gsap.to(".aboutus-area .vision-area .inner", {
        scrollTrigger: {
          trigger: ".aboutus-area .vision-area .inner",
          start: "bottom bottom",
          end: "bottom top",
          endTrigger: "footer",
          scrub:2,
          pin:true,
          // markers:true
        },
      });

      // gsap.to(".business-area", {
      //   scrollTrigger: {
      //     trigger: ".business-area",
      //     start: "top top",
      //     end: "bottom bottom",
      //     endTrigger: "footer",
      //     scrub:true,
      //     pin:true,
      //     markers:true
      //   },
      // });

      var businessMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".business-area",
          start: "top top",
          end: "bottom+=" + $(".business-area .con-sec").innerWidth() + " top",
          // endTrigger:"footer",
          scrub:2,
          // pin:true,
          // markers: true,
          onUpdate: function (self) {
            // console.log(self.progress.toFixed(3))

            if(self.progress.toFixed(3) > 0.01){
              $(".business-area .img-sec .txt-div").addClass("active");
            }
            if(self.progress.toFixed(3) > 0.15){
              $(".business-area .con-sec .business-list").eq(0).addClass("active")
            }
            if(self.progress.toFixed(3) > 0.23){
              $(".business-area .con-sec .business-list").eq(1).addClass("active")
            }
            if(self.progress.toFixed(3) > 0.35){
              $(".business-area .con-sec .business-list").eq(2).addClass("active")
            }
            if(self.progress.toFixed(3) > 0.48){
              $(".business-area .con-sec .business-list").eq(3).addClass("active")
            }
            if(self.progress.toFixed(3) > 0.59){
              $(".business-area .con-sec .news-list").eq(0).addClass("active")
            }
            if(self.progress.toFixed(3) > 0.63){
              $(".business-area .con-sec .news-list").eq(1).addClass("active")
            }
            if(self.progress.toFixed(3) > 0.75){
              $(".business-area .con-sec .news-list").eq(2).addClass("active")
            }
          },
          onEnter:function(){
            $(".business-area").addClass("active")
          },
          onLeaveBack:function(){
            $(".business-area").removeClass("active")
          }
        },
      })
      
      businessMotion.to(".business-area .img-sec .txt-div .tit", {
        left:0,
        duration:0.05
      })

      businessMotion.to(".business-area .inner", {
        // left: -($(".business-area .con-sec").innerWidth()),
        left: -6982,
        scrub:2
      })

      ScrollTrigger.refresh()
      gsap.to($(".green-area .txt-wrap .txt-area"), {
        scrollTrigger: {
          trigger: $(".green-area .txt-wrap .txt-area"),
          start: "top center",
          end:"bottom top",
          toggleClass: {targets: $(".green-area .txt-wrap .txt-area"), className: "active"},
          once: true,
          // markers: true,
        },
      });

      gsap.to($(".green-area .img-area .img-div .left"), {
        scrollTrigger: {
          trigger: $(".green-area .img-area .img-div .left"),
          start: "top center",
          end:"bottom top",
          endTrigger:"footer",
          scrub:1,
          // markers: true,
          onEnter:function(){
            gsap.to(".green-area .img-area .img-div .left", 0.3, {borderRadius:"0 60 0 0", ease:Power3.easeOut})
          },
          onLeaveBack:function(){
            gsap.to(".green-area .img-area .img-div .left", 0.3, {borderRadius:"0 0 0 0", ease:Power3.easeOut})
          }
        },
        width:"25%",
        // borderRadius:"0 60 0 0"
      });

      gsap.to($(".green-area .img-area .img-div .right"), {
        scrollTrigger: {
          trigger: $(".green-area .img-area .img-div .right"),
          start: "top center",
          end:"bottom top",
          endTrigger:"footer",
          scrub:1,
          // markers: true,
          onEnter:function(){
            gsap.to(".green-area .img-area .img-div .right", 0.3, {borderRadius:"60 0 0 0", ease:Power3.easeOut})
          },
          onLeaveBack:function(){
            gsap.to(".green-area .img-area .img-div .right", 0.3, {borderRadius:"0 0 0 0", ease:Power3.easeOut})
          }
        },
        width:"25%",
        // borderRadius:"60 0 0 0"
      });

      gsap.to($(".green-area .img-area .img-div"), {
        scrollTrigger: {
          trigger: $(".green-area .img-area .img-div"),
          start: "top top",
          end:"bottom top",
          endTrigger:"footer",
          scrub:2,
          pin:true,
          // markers: true,
        },
      });
      
      // var esgMotion = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".green-area .img-area .img-div",
      //     start: "top top",
      //     end: "bottom bottom",
      //     endTrigger: "footer",
      //     scrub:true,
      //     pin:true,
      //     // horizontal: true,
      //     // markers: true,
      //   },
      // })
      // esgMotion.to(".green-area .img-area .img-div .left", {
      //   width:"25%",
      //   borderRadius:"0 60 0 0"
      // }, 'on')
      // esgMotion.to(".green-area .img-area .img-div .right", {
      //   width:"25%",
      //   borderRadius:"60 0 0 0"
      // }, 'on')

      

      gsap.to($(".ir-wrap"), {
        scrollTrigger: {
          trigger: $(".ir-wrap"),
          start: "top 50%",
          end:"bottom top",
          toggleClass: {targets: $(".ir-area"), className: "active"},
          once: true,
          // markers: true,
        },
      });
    }
  }
}();

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
          // markers: true,
        },
      });
    });
  }
}
