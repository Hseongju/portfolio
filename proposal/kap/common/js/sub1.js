var _this_scroll;
var _isScrollTop;

$(window).load(function() {
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

  setTimeout(function(){
    $(".visual-area").addClass("on");
  }, 2000);

  $(".rotate-img-area .txt-list .list-div").each(function(q){
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top top",
        end:"bottom+=100% bottom",
        pin:true,
        // markers: true,
        scrub: 1.2,
      },
    });
  });

  gsap.to(".rotate-img-area .bg", {
    scrollTrigger: {
      trigger: ".rotate-img-area .bg",
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".rotate-img-area .txt-list",
      pin: true,
      // markers: true,
    },
  });

  let fontWidthSum = $(".flow_area .flow_list").outerWidth(true);
  
  while(fontWidthSum < window.innerWidth + $(".flow_area .flow_list").eq(0).outerWidth(true)){
    const repeatObject = document.querySelector(".flow_area .flow_list");
    const newNode = repeatObject.cloneNode(true);
    repeatObject.after(newNode);
    fontWidthSum = fontWidthSum + $(".flow_area .flow_list").eq(-1).outerWidth(true);
  };
  
  setInterval(function() {
    if(parseInt($(".flow_area").css("left").split("p")[0]) < -$(".flow_area .flow_list").eq(0).outerWidth(true)) {
      $(".flow_area").css("left", 0);
    }
    $(".flow_area").css("left", parseInt($(".flow_area").css("left").split("p")[0]) - 2);
  }, 10);
  

  $(window).on('mousewheel',function(e){ 
    var wheel = e.originalEvent.wheelDelta; 
    if(wheel>0){ 
      //스크롤 올릴때 
      
      if(!$(".visual-area").hasClass("on")){
        if(_isScrollTop === 0){
          $(".visual-area").removeClass("active");
          setTimeout(function(){
            $("body").addClass("stop-scroll");
            $(".visual-area").addClass("on");
          }, 800)
        }
      }
    } else { 
      //스크롤 내릴때 
      if($(".visual-area").hasClass("on")){
        $(".visual-area").addClass("active");
        setTimeout(function(){
          $("body").removeClass("stop-scroll");
          $(".visual-area").removeClass("on");
          $(".content .info-sec").addClass("active");
        }, 800)
      }
    } 
  });

  // 스크롤
  $(window).on("scroll", function(){
    if($(".scroll-motion").size() > 0){
      $(".scroll-motion:visible").each(function(q){
        gsap.to($(this), {
          scrollTrigger: {
            trigger: $(this),
            start: "top 65%",
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
          $("header").addClass("up");
          $(".sub-menu").removeClass("down");
          $(".sub-menu").fadeIn();
        }
      }
    }
    
    if(_isScrollTop < _this_scroll) { // up
      $("header").removeClass("up").addClass("on");
      $(".sub-menu").addClass("down");
    }

    if(_isScrollTop == 0){
      $(".sub-menu").fadeOut();
      $("header").removeClass("on");
    }
    _this_scroll = _isScrollTop;
  });
  $(window).scroll();
});