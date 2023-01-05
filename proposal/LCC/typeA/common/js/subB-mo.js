$(window).on("load", function() {
  //sticky 메뉴
  var $slide = $(".course-tab .swiper-slide");
  const swiper = new Swiper('.course-tab', {
    slidesPerView: "auto",
    spaceBetween: 30,
    observer: true,
    observeParents: true,
  });
  //sticky메뉴 클릭했을 때
  $slide.on("click", function(){
    $slide.removeClass("active");
    $(this).stop().addClass("active");
  });

  var courseTop = parseInt($(".course-sec").offset().top);
  var courseListTop1 = $(".course-list").eq(0).offset().top;
  var courseListTop2 = $(".course-list").eq(1).offset().top;
  var courseListTop3 = $(".course-list").eq(2).offset().top;
  var courseListTop4 = $(".course-list").eq(3).offset().top;
  var courseListTop5 = $(".course-list").eq(4).offset().top;
  // setTimeout(function() {
  //   console.log(courseListTop1, courseListTop2, courseListTop3, courseListTop4, courseListTop5);
  // }, 200)
  $("#mobileWrap .content .scroll").on("scroll", function(){
    var scrT = $("#mobileWrap .content .scroll").scrollTop();
    var scrTopTitle = $("#mobileWrap .content .scroll").scrollTop() + 250;
    // 수강신청 말풍선
    if(scrT == 0) {
      $(".speech-bubble").fadeIn();
    } else {
      $(".speech-bubble").fadeOut();
    }
    //sticky title active변경
    if (scrTopTitle > courseListTop1) {
      $slide.removeClass("active");
      $slide.eq(0).stop().addClass("active");
    }
    if (scrTopTitle > courseListTop2) {
      $slide.removeClass("active");
      $slide.eq(1).stop().addClass("active");
      swiper.slideTo(0)
    }
    if (scrTopTitle > courseListTop3) {
      $slide.removeClass("active");
      $slide.eq(2).stop().addClass("active");
    }
    if (scrTopTitle > courseListTop4) {
      $slide.removeClass("active");
      $slide.eq(3).stop().addClass("active");
      swiper.slideTo(4)
    }
    if (scrTopTitle > courseListTop5) {
      $slide.removeClass("active");
      $slide.eq(4).stop().addClass("active");
    }
  })
})
