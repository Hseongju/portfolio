$(window).on("load", function(){  
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.scrollTriggerFn();
  main.gnbFn();
  main.scrollFn();
});

var main = function () {
  return {
    commonFn: function () {
      $(".filter-btn a").on("click", function(event) {
        event.stopPropagation();
        if($(".fitler-area").hasClass("on")) {
          $(".fitler-area").removeClass("on");
        } else {
          $(".fitler-area").addClass("on");
          gsap.to(window, {duration: 1, scrollTo: {y: ".fitler-area", offsetY: 30}, ease: "power2.out"});
        }
      });
      
      $(".fitler-area").on("click", function(event) {
        event.stopPropagation();

        if($(".fitler-area").hasClass("on")) {
          $(".fitler-area").addClass("click");
        }
      });
      

      $(".my").on("click", function(event) {
        event.stopPropagation();

        $(this).toggleClass("on");
      })

      let num = 0;
      $(".list-item li").on("click", function() {
        if($(this).hasClass("on")) {
          $(this).removeClass("on")
          num = num - 1;
          
          var title = $(this).attr("data-title");
          $(".select-txt li[data-title='" + title + "']").remove();
          if(num == 0) {
            $(".sticky-area").removeClass("on");
          }

          if(num == 2) {
            $(".sticky-area .btns .btn img:nth-child(3)").removeClass("on");
          } else if(num == 1) {
            $(".sticky-area .btns .btn img:nth-child(2)").removeClass("on");
          }
        } else {
          if(num < 3) {
            $(this).addClass("on");
            $(".sticky-area").addClass("on");

            if(num == 1) {
              $(".sticky-area .btns .btn img:nth-child(2)").addClass("on");
            } else if(num == 2) {
              $(".sticky-area .btns .btn img:nth-child(3)").addClass("on");
            }

            var title = $(this).attr("data-title");
            var newListItem = `<li data-title="${title}">${title}</li>`;
            $(".select-txt").append(newListItem);

            num = num + 1;
          }
        }
      });

      $(".bottom-btn").on("click", function() {
        $(".fitler-area").removeClass("on");
        $(".list-area").removeClass("on");
        $(".list-area").removeClass("active");
        setTimeout(() => {
          $(".list-area").addClass("on");
        }, 400)
        
      });
    },
    scrollTriggerFn:function(){
      scrollMotionFuc();
    },
    gnbFn: function(){
      // header
      $("header").on("click", function(){
        if($("header").hasClass("drop")) {
          $("header").removeClass("drop");
          $(".header-dimd").stop().hide();
        } else {
          $("header").addClass("drop");
          $(".header-dimd").stop().fadeIn();
        }
      });
    },
    scrollFn: function () {
      // header scroll
      let lastY = 0;
      $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        if (scrollTop > lastY) {
          //내려갈때
          $("header").removeClass("show drop").addClass("hide");
          $(".header-dimd").hide();
        } else {
          //올라갈때
          $("header").removeClass("hide drop").addClass("show");
          lastY > 100 ? $("header").addClass("white") : $("header").removeClass("white");
          $(".header-dimd").hide();
        }
        lastY = scrollTop;
      }).scroll();
    },
  }
}();

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
          start: () => "top 80%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll-motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
