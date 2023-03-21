$(function() {
  subScript.init();
  subScript.scrollFn();
})
var subScript = (function() {
  return {
    init: function() {
      gsap.to($("header"), 1, {top: 0, ease: Power3.easeOut}, "addLabel");
      gsap.to(".page_title_area .tit span", {duration: 0.7, y: 0, opacity: 1}, "addLabel-=1")
      gsap.to(".flex_div", {duration: 1, y: 0, opacity: 1}, "addLabel-=0.6")
      gsap.to(".list_area .list", {duration: 1, y: 0, opacity: 1, stagger: 0.2}, "addLabel-=0.3")
      
      $("header .gnb").hover(function(){
        $("header").addClass("hover");
        $("header .depth2").slideDown();
      });

      $("header").on("mouseleave", function() {
        $("header .depth2").slideUp();
        $("header").removeClass("hover");
      });
    },
    scrollFn: function() {
      // header motion
      var lastScrlTop = 0;

      $(window).on("scroll", function() {
        var winScrTop = $(window).scrollTop();
        if(winScrTop > lastScrlTop) {
          gsap.to("header", {top: -168});
          $("header").removeClass().addClass("down");
        } else if(winScrTop  === 0) {
          $("header").removeClass();
        } else {
          gsap.to("header", {top: 0});
          $("header").removeClass().addClass("up");
        }
        lastScrlTop = winScrTop;
      }).trigger("scroll");
    },
  }
})();
