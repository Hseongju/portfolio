var _this_scroll;
var _isScrollTop;
var _isDone = false;

$(window).on("load", function(){  
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperFn();
  main.scrollFn();
  main.scrollTriggerFn();
  main.gnbFn();
  main.resizeFn();
});

var main = function () {
  return {
    commonFn: function () {

      var lengthNum = Math.ceil($(window).innerWidth() / ($(".line-move .line").innerWidth() + 10))
      
      for(i=0; i<lengthNum+3; i++){
        $(".line-move .line:nth-child(1)").clone().appendTo(".line-move");
        $(".line-move .line").eq(i).css("left", ($(".line-move .line").innerWidth() + 10) * i)
      }

      for(i=0; i<2; i++){
        $(".line-move:first-child").clone().appendTo(".line-move-area");
      }



      var i = 2;
      setInterval(function(){
        $(".line-move").eq(0).css("left", -367 * i)
        $(".line-move").eq(2).css("left", -367 * i)
        $(".line-move:nth-child(1)").append($(".line-move:nth-child(1) .line:first-child").detach());
        $(".line-move:nth-child(3)").append($(".line-move:nth-child(3) .line:first-child").detach());
        $(".line-move:nth-child(1) .line:last-child").css("left", (367 * lengthNum) + (367 * i))
        $(".line-move:nth-child(3) .line:last-child").css("left", (367 * lengthNum) + (367 * i))
        i = i+1
      },1200)

      var j = 1;
      setInterval(function(){
        $(".line-move:nth-child(2)").prepend($(".line-move:nth-child(2) .line:last-child").detach());
        $(".line-move:nth-child(2) .line:first-child").css("left", (-367 * j))
        $(".line-move").eq(1).css("left", (367 * j) - 186)
        j = j+1
      },1200)

      $(".alarm").on("click", function(){
        $("body").addClass("stop-scroll");
        $(".media-popup").addClass("on");
        setTimeout(function(){
          $(".media-popup .scroll-area").addClass("active");
        }, 700)
      });

      $(".media-popup .close-btn").on("click", function(){
        $("body").removeClass("stop-scroll");
        $(".media-popup").removeClass("on");
        setTimeout(function(){
          $(".media-popup .scroll-area").removeClass("active");
        }, 700)
      });
    },
    swiperFn: function(){
      
    },

    scrollTriggerFn:function(){

      gsap.to($(".made-iron-area .made-iron-wrap"), {
        scrollTrigger: {
          trigger: $(".made-iron-area .made-iron-wrap"),
          start: "top-=100 top",
          end: "bottom bottom",
          endTrigger:$(".iron-con-wrap"),
          // markers: true,
          scrub:1,
          // pin:true,
          onEnter:function(){
            $(".made-iron-area .made-iron-wrap").addClass("active");
          },
          onLeaveBack:function(){
            $(".made-iron-area .made-iron-wrap").removeClass("active");
          },
          onUpdate:function(self){
            var progress = self.progress;
            // console.log(progress)

            if(progress > 0.23){
              $(".made-iron-area .made-iron-wrap .title-div").addClass("active");
            }else{
              $(".made-iron-area .made-iron-wrap .title-div").removeClass("active");
            }

            if(progress > 0.35){
              $(".iron-con-wrap .iron-div").eq(0).addClass("active");
            }else{
              $(".iron-con-wrap .iron-div").eq(0).removeClass("active");
            }

            if(progress > 0.53){
              $(".iron-con-wrap .iron-div").eq(1).addClass("active");
            }else{
              $(".iron-con-wrap .iron-div").eq(1).removeClass("active");
            }

            if(progress > 0.7){
              $(".iron-con-wrap .iron-div").eq(2).addClass("active");
            }else{
              $(".iron-con-wrap .iron-div").eq(2).removeClass("active");
            }
          },
        },
      });

      gsap.to($(".future-iron-area .txt-wrap"), {
        scrollTrigger: {
          trigger: $(".future-iron-area .txt-wrap"),
          start: "top-=800 center",
          end: "bottom bottom",
          // markers: true,
          // pin:true,
          onEnter:function(){
            $(".future-iron-area .txt-wrap").addClass("on");
          },
        },
      });

      gsap.to($(".txt-fixed-con"), {
        scrollTrigger: {
          trigger: $(".txt-fixed-con"),
          start: "top top",
          end: "bottom bottom",
          endTrigger:$(".esg-area"),
          // markers: true,
          scrub:1,
          pin:true,
        },
      });

      var imgSlideMotion = gsap.timeline({
        scrollTrigger: {
          trigger: $(".img-fixed-con"),
          start: () => "top top",
          end:"bottom bottom",
          endTrigger:$(".esg-area"),
          scrub:1,
          pin: true,
          // markers:true,
        },
      });

      imgSlideMotion
        .to($(".img-fixed-con .img-wrap"), 2, {left:($(window).innerWidth() - ($(".img-fixed-con .img-wrap").innerWidth()))})

      
      gsap.to($(".story-area"), {
        scrollTrigger: {
          trigger: $(".story-area .title-wrap"),
          start: "center top",
          end: "bottom+=286 bottom",
          // markers: true,
          scrub:1,
          // pin:true,
        },
        background:"#DEDFDC"
      });

      gsap.to($(".story-area .story-wrap .fixed-bg"), {
        scrollTrigger: {
          trigger: $(".story-area .story-wrap .fixed-bg"),
          start: "top top",
          end: "bottom bottom",
          endTrigger:$(".story-wrap"),
          // markers: true,
          scrub:1,
          pin:true,
          onEnter:function(){
            $(".story-area .story-wrap .fixed-bg").addClass("active");
          },
          onLeaveBack:function(){
            $(".story-area .story-wrap .fixed-bg").removeClass("active");
          }
        },
      });
      
      scrollMotionTrigger();
    },
    gnbFn: function(){
      $("header nav").on("mouseenter focusin", function(){
        $("header").addClass("hover");
        $("header .inner nav .two-depth-div .two-depth").stop(true, true).fadeIn(200)
        $("header .bg").stop(true, true).fadeIn(300);
      });

      $("header").on("mouseleave", function(){
        $("header").removeClass("hover");
        $("header .inner nav .two-depth-div .two-depth").hide()
        $("header .bg").stop(true, true).fadeOut();
      });
    },
    resizeFn: function(){
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      $(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            if($("header").size() != 0){
              $("header").addClass("scroll");
            }
          }
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if(_isScrollTop == 0){
            if($("header").size() != 0){
              $("header").removeClass("scroll");
            }
          }
        }

        if(_isScrollTop > $("#wrap").outerHeight(true) - $(window).innerHeight()){
          $(".overview-area").addClass("active")
        }else{
          $(".overview-area").removeClass("active")
        }

        if(_isScrollTop > $("#wrap").outerHeight(true) - $(window).innerHeight() - $(".overview-area").innerHeight()){
          var num = _isScrollTop - $("#wrap").outerHeight(true) + $(window).innerHeight() + $(".overview-area").innerHeight() + $("footer").outerHeight(true) + 100
          console.log(num/2.6)
          $(".overview-area .inner .go-btn .svg-circle").css("stroke-dasharray", Math.round(370 + (num/2.6)))
        }else{
          $(".overview-area .inner .go-btn .svg-circle").css("stroke-dasharray", 370)
        }

        if(_isScrollTop > $(".future-iron-area").offset().top){
          $(".overview-area").show();
        }else{
          $(".overview-area").hide();
        }

        
        _this_scroll = _isScrollTop;
      }).scroll();
    },
  }
}();

function scrollMotionTrigger(){
  if($(".scroll-motion").size() > 0){
    $(".scroll-motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 65%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          //markers: true,
        },
      });
    });
  }
}
