$(function() {
  //common
  var lastY = 0;
  $(window).on("scroll", function() {
    if($(window).scrollTop() > lastY) {
      $("header").addClass("scroll");

      if(location.pathname.indexOf("sub2") > -1) {
        //박상현 서브2 페이지 내려갈때
        gsap.to(".right-rayout .inner", {
          top: 0,
        });
      }
    } else {
      $("header").removeClass("scroll");
      if(location.pathname.indexOf("sub2") > -1) {
        //박상현 서브2 페이지 올라갈때
        gsap.to(".right-rayout .inner", {
          top: 80,
        });
      }
    }
    lastY = $(window).scrollTop();
  })
})
