var _this_scroll;
var _isScrollTop;

$(window).on("load", function(){  
  gsap.registerPlugin(ScrollTrigger);
  main.commonFn();
  main.gnbFn();
  main.scrollFn();
});

var main = function () {
  return {
    commonFn: function () {
      scrollMotion();

      if($(".login").size() > 0){
        setTimeout(function(){
          $(".login .cont-sec .sec1").addClass("active");
        }, 10);
        setTimeout(function(){
          $(".login .cont-sec .sec2").addClass("active");
        }, 160);
      }

      $(".drop-click").on("click", function(){
        if(!$(this).hasClass("on")){
          $(this).addClass("on");
          $(".sel-order .dropdown").stop(true, true).slideDown();
        }else{
          $(this).removeClass("on");
          $(".sel-order .dropdown").stop(true, true).slideUp();
        }
      });

      $(".sub-top-visual .sel-img.filter .select").each(function(){
        $(this).find(".select-click").on("click", function(){
          if(!$(this).parents(".select").hasClass("duration")){
            if(!$(this).parents(".select").hasClass("on")){
              $(".sub-top-visual .sel-img.filter .select").removeClass("on");
              $(".sub-top-visual .sel-img.filter .select .duration-sel").stop(true, true).slideUp();
              $(".sub-top-visual .sel-img.filter .select .option").stop(true, true).slideUp();
              $(this).parents(".select").addClass("on");
              $(this).parents(".select").find(".option").stop(true, true).slideDown();
            }else{
              $(this).parents(".select").removeClass("on");
              $(".sub-top-visual .sel-img.filter .select .duration-sel").stop(true, true).slideUp();
              $(".sub-top-visual .sel-img.filter .select .option").stop(true, true).slideUp();
            }
          }else{
            if(!$(this).parents(".select").hasClass("on")){
              $(".sub-top-visual .sel-img.filter .select").removeClass("on");
              $(".sub-top-visual .sel-img.filter .select .option").stop(true, true).slideUp();
              $(this).parents(".select").addClass("on");
              $(this).parents(".select").find(".duration-sel").stop(true, true).slideDown();
            }else{
              $(this).parents(".select").removeClass("on");
              $(".sub-top-visual .sel-img.filter .select .duration-sel").stop(true, true).slideUp();
            }
          }
        });

        $(this).find(".option").on("click", function(){
          $(".sub-top-visual .sel-img.filter .select .option").stop(true, true).slideUp();
          $(this).parents(".select").removeClass("on");

          if($(this).parents(".select").find(".select-click img:nth-child(1)").hasClass("on")){
            $(this).parents(".select").find(".select-click img").removeClass("on");
            $(this).parents(".select").find(".select-click img:nth-child(2)").addClass("on");
          }else if($(this).parents(".select").find(".select-click img:nth-child(2)").hasClass("on")){
            $(this).parents(".select").find(".select-click img").removeClass("on");
            $(this).parents(".select").find(".select-click img:nth-child(1)").addClass("on");
          }
        });
      });

      $(".sub-top-visual .sel-img.filter .date-select").on("click", function(){
        if(!$(this).hasClass("on")){
          $(this).addClass("on");
          $(this).find(".calendar").fadeIn();
        }else{
          $(this).removeClass("on");
          $(this).find(".calendar").fadeOut();
        }
      });

      $(".sub-top-visual .sel-img.filter .date-select .calendar").on("click", function(){
        $(this).siblings("img").removeClass("on");
        $(this).parents(".date-select").find("img:nth-child(2)").addClass("on");
      });

      $(".duration-sel > img").on("click", function(){
        $(".duration-sel img:nth-child(1)").removeClass("on");
        $(".duration-sel img:nth-child(2)").addClass("on");
        $(".duration-sel .calendar").fadeIn();
      });

      $(".duration-sel .calendar").on("click", function(){
        $(".select.duration").removeClass("on");
        $(".select.duration .select-click img").removeClass("on");
        $(".select.duration .select-click img:nth-child(2)").addClass("on");
        $(".duration-sel").fadeOut();
      });

      $(".apply-btn").on("click", function(){
        $(".tab").removeClass("on");
        $(".tab").eq(1).addClass("on");
        setTimeout(function(){
          $(".sub .tab .table-area").addClass("active")
        }, 10)
      });

      $(".fixed-filter").on("click", function(){
        if(!$(this).hasClass("on")){
          $(this).addClass("on");
          $(this).find("img").hide();
          $(this).find("img").eq(1).fadeIn();
        }else{
          $(this).removeClass("on");
          $(this).find("img").hide();
          $(this).find("img").eq(0).fadeIn();
        }
      });

      if($(".acco-div").hasClass("on")){
        $(".acco-div").find(".acco-con").show()
      }

      $(".acco-tit").on("click", function(){
        if($(this).parents(".acco-div").hasClass("on")){
          $(this).parents(".acco-div").removeClass("on");
          $(this).siblings(".acco-con").stop(true, true).slideUp();
        }else{
          $(this).parents(".acco-div").addClass("on");
          $(this).siblings(".acco-con").stop(true, true).slideDown();
        }
      })
    },
    gnbFn: function(){
    },
		scrollFn:function(){
			$(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            if($("header").size() != 0){
              $("header").addClass("scroll");
            }
          }

          $(".fixed-tab-area").removeClass("scroll");
        }
        
        if(_isScrollTop < _this_scroll) { // up
          if($("header").size() != 0){
            $("header").removeClass("scroll");
          }

          if($(".fixed-tab-area").hasClass("fixed")){
            $(".fixed-tab-area").addClass("scroll");
          }
        }

        if($(".fixed-tab-area").size() > 0){
          if(_isScrollTop > $(".cont-sec").offset().top){
            $(".fixed-tab-area").addClass("fixed");
            $(".fixed-filter").addClass("show");
          }else if(_isScrollTop < $(".cont-sec").offset().top - 100){
            $(".fixed-tab-area").removeClass("fixed");
            $(".fixed-filter").removeClass("show");
          }
        }

        if(_isScrollTop > $(".cont-wrap").innerHeight() - $(window).innerHeight()){
          $(".fixed-filter").addClass("absolute");
        }else{
          $(".fixed-filter").removeClass("absolute");
        }
        
        _this_scroll = _isScrollTop;
      }).scroll();
		},
  }
}();

function scrollMotion() {
  if ($(".scroll-motion").size() > 0) {
    $(".scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start:()=> "top 80%",
          end: "bottom top",
          toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
          once: true,
          // markers: true,
        },
      });
    });
  }
}
