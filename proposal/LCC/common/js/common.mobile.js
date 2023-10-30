$(function() {
  //스크롤 헤더
  var lastY = 0;
  $("#mobileWrap .content .scroll").on("scroll", function() {
    if($("#mobileWrap .content .scroll").scrollTop() > lastY) {
      $("header").addClass("scl");
      if(location.pathname.indexOf("sub2-mobile") > -1) {
        //박상현 모바일 페이지 내려갈때
        $(".course-tab").removeClass("slide-down");
      }
    } else {
      $("header").removeClass("scl");
      if(location.pathname.indexOf("sub2-mobile") > -1) {
        //박상현 모바일 페이지 올라갈때
        $(".course-tab").stop().addClass("slide-down");
      }
    }
    lastY = $("#mobileWrap .content .scroll").scrollTop();
  })
})
