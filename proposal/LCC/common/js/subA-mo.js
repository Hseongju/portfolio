$(function() {
  gsap.registerPlugin(ScrollTrigger);

  // gsap.delayedCall(1, function() {
  //   gsap.to("header .nav .logo .mlogo", {duration: 0.8, width: 20, height: 16, opacity: 0, ease: Power3.easeOut});
  //   gsap.to("header .nav .logo .ci", {duration: 0.8, opacity: 1, ease: Power3.easeOut});
  // });

  $("main .cate-area .filter").on("click", function() {
    $(".filter-img").addClass("filter-active");
    setTimeout(function() {
      $(".scroll").addClass("active");
    }, 200);
  });

  $(".filter-img a.close-btn").on("click", function() {
    $(".filter-img").removeClass("filter-active");
    $(".scroll").removeClass("active");
    $("main").addClass("after");
  });

  $("main .cate-icon .cate-calendar").on("click", function() {
    $("main").addClass("calendar-active");
  });

  $("main .cate-icon .cate-grid").on("click", function() {
    $("main").removeClass("calendar-active");
  });
}); //end