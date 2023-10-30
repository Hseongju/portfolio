$(function() {
  gsap.delayedCall(2, function() {
    gsap.to("header .nav .logo .mlogo", {duration: 0.8, width: 20, height: 16, opacity: 0, ease: Power3.easeOut});
    gsap.to("header .nav .logo .ci", {duration: 0.8, opacity: 1, ease: Power3.easeOut});
  });

  var sclTop;
  $("#mobileWrap .content .scroll").on("scroll", function() {
    sclTop = $("#mobileWrap .content .scroll").scrollTop();
    console.log(sclTop);
    if(sclTop > 270) {
      gsap.to(".section2 .bg .wht1", {duration: 0.4, width: 100 - sclTop / 8, esae: Power3.easeOut});
      gsap.to(".section2 .bg .wht2", {duration: 0.4, width: 100 - sclTop / 8, esae: Power3.easeOut});
    }

    if(sclTop > 1200) {
      $("footer").show();
    } else {
      $("footer").hide();
    }

    if(sclTop > 4770) {
      $(".section6 .mask").addClass("active");
    }
  })

  //init 비주얼 작아지는 인트로
  $("#mobileWrap .content .scroll").css("overflow-y", "hidden");
  gsap.delayedCall(1, function() {
    gsap.to($(".visual-wrap .visual").eq(0), {duration: 1, top: 105, width: "calc(100% - 32px)", height: 598, borderRadius: 16, ease: Power1.easeOut, onComplete: function() {
      gsap.to("#controler", {duration: 1, bottom: 0, ease: Power3.easeOut});
      gsap.to(".visual-wrap .float-btn", {duration: 0.7, delay: 0.1, top: 640, opacity: 1, ease: Power3.easeOut});
      gsap.to(".visual-wrap .indicator", {duration: 0.7, delay: 0.2, top: 645, opacity: 1, ease: Power3.easeOut});
      gsap.to($(".visual-wrap .visual").eq(0).find("img"), {duration: 1, opacity: 1, ease: Power3.easeOut});
      $("#wrap").addClass("finished");
      $("#mobileWrap .content .scroll").css("overflow-y", "auto");

      var visualInterval = setInterval(function() {
        gsap.to($(".visual-wrap .visual:eq("+vNum+")"), {duration: 1.2, opacity: 0, ease: Power1.easeOut});
        gsap.to($(".visual-wrap .visual:eq("+vNum+") img"), {duration: 1.2, opacity: 0, ease: Power1.easeOut});
        vNum++;
        if(vNum > 2) vNum = 0;
        gsap.to($(".visual-wrap .visual:eq("+vNum+")"), {duration: 1.2, opacity: 1, ease: Power1.easeOut});
        gsap.to($(".visual-wrap .visual:eq("+vNum+") img"), {duration: 1.2, opacity: 1, ease: Power1.easeOut});
        $(".visual-wrap .indicator .bar span").width(50 * vNum + 50);
      }, 4000);
    }});
  });

  var vNum = 0;
  $(".visual-wrap .visual").on("click", function() {
    gsap.to($(".visual-wrap .visual:eq("+vNum+")"), {duration: 1.2, opacity: 0, ease: Power1.easeOut});
    gsap.to($(".visual-wrap .visual:eq("+vNum+") img"), {duration: 1.2, opacity: 0, ease: Power1.easeOut});
    vNum++;
    if(vNum > 2) vNum = 0;
    gsap.to($(".visual-wrap .visual:eq("+vNum+")"), {duration: 1.2, opacity: 1, ease: Power1.easeOut});
    gsap.to($(".visual-wrap .visual:eq("+vNum+") img"), {duration: 1.2, opacity: 1, ease: Power1.easeOut});
    $(".visual-wrap .indicator .bar span").width(50 * vNum + 50);
  });

  //section2
  var section2Num = 0;
  $(".section2 .list-box .list").on("click", function() {
    section2Num++;
    if(section2Num > 5) section2Num = 0;
    gsap.to($(this), {duration: 0.4, left: -(section2Num * 256), ease: Power3.easeOut});
    gsap.to(".section2 .indi span", {duration: 0.4, width: section2Num * 50 + 50, ease: Power3.easeOut});
  })

  //section3
  var section3Num = 0;
  $(".section3 .list-box .list").on("click", function() {
    section3Num++;
    if(section3Num > 1) section3Num = 0;
    gsap.to($(this), {duration: 0.4, left: -(section3Num * 358), ease: Power3.easeOut});
    gsap.to(".section3 .indi span", {duration: 0.4, width: section3Num * 50 + 50 , ease: Power3.easeOut});
  })

  //section4
  var section4Num = 0;
  $(".section4 .list-box .list").on("click", function() {
    section4Num++;
    if(section4Num > 3) section4Num = 0;
    gsap.to($(this), {duration: 0.4, left: -(section4Num * 260), ease: Power3.easeOut});
    gsap.to(".section4 .indi span", {duration: 0.4, width: section4Num * 50 + 50, ease: Power3.easeOut});
  })

  //section5
  var posterNum = 0;
  $(".section5 .d-flex .btn").on("click", function() {
    gsap.to($(".section5 .d-flex .mask .img").eq(posterNum), {duration: 0.4, left: -240, ease: Power2.easeOut});
    posterNum++;
    if(posterNum > 2) posterNum = 0;
    gsap.to($(".section5 .d-flex .mask .img").eq(posterNum), {duration: 0, left: 240, ease: Power2.easeOut});
    gsap.to($(".section5 .d-flex .mask .img").eq(posterNum), {duration: 0.4, left: 0, ease: Power2.easeOut});
  });

  //float-btn
  $(".float-btn").on("click", function() {
    $(".dimd").stop(true, true).fadeIn(300);
    gsap.to(".popup-category", {duration: 0.4, top: 60, ease: Power1.easeOut});
  });
  $(".popup-category a").on("click", function() {
    $(".dimd").stop(true, true).fadeOut(300);
    gsap.to(".popup-category", {duration: 0.4, top: 820, ease: Power1.easeOut});
  });

  //search
  var isSearch = false;
  $("#controler .btn2").on("click", function() {
    if(!isSearch) {
      isSearch = !isSearch;
      $(".dimd").stop(true, true).fadeIn(300);
      gsap.to(".popup-search", {duration: 0.4, top: 0, ease: Power1.easeOut});
      $(this).find("img").attr("src", "./common/images/m-icon-control2-active.png");
    } else {
      isSearch = !isSearch;
      $(".dimd").stop(true, true).fadeOut(300);
      gsap.to(".popup-search", {duration: 0.4, top: -1000, ease: Power1.easeOut});
      $(this).find("img").attr("src", "./common/images/m-icon-control2.png");
    }
  });
  $(".popup-search .btn-close").on("click", function() {
    isSearch = !isSearch;
    $(".dimd").stop(true, true).fadeOut(300);
    $("#controler .btn2").find("img").attr("src", "./common/images/m-icon-control2.png");
    gsap.to(".popup-search", {duration: 0.4, top: -1000, ease: Power1.easeOut});
  });

  //헤더 지점 이벤트
  var isAgency = false;
  $("header .nav .menu a").eq(0).on("click", function() {
    if(!isAgency) {
      isAgency = !isAgency;
      $("#mobileWrap .content .scroll").css("overflow-y", "hidden");
      $(this).find("img").attr("src", "./common/images/m-header-menu1-active.png");
      gsap.to(".popup-agency", {duration: 0.8, left: 0, ease: Power2.easeOut});
      gsap.to(".visual-wrap", {duration: 0.6, left: 340, ease: Power2.easeOut});
    } else {
      isAgency = !isAgency;
      $("#mobileWrap .content .scroll").css("overflow-y", "auto");
      $(this).find("img").attr("src", "./common/images/m-header-menu1.png");
      gsap.to(".popup-agency", {duration: 0.6, left: -360, ease: Power2.easeOut});
      gsap.to(".visual-wrap", {duration: 0.8, left: 0, ease: Power2.easeOut});
    }
  });

  //헤더 강좌 이벤트
  var isLecture = false;
  $("header .nav .menu a").eq(1).on("click", function() {
    if(!isLecture) {
      isLecture = !isLecture;
      $("#mobileWrap .content .scroll").css("overflow-y", "hidden");
      $(this).find("img").attr("src", "./common/images/m-header-menu2-active.png");
      gsap.to(".popup-lecture", {duration: 0.8, right: 0, ease: Power2.easeOut});
      gsap.to(".visual-wrap", {duration: 0.6, left: -340, ease: Power2.easeOut});
    } else {
      isLecture = !isLecture;
      $("#mobileWrap .content .scroll").css("overflow-y", "auto");
      $(this).find("img").attr("src", "./common/images/m-header-menu2.png");
      gsap.to(".popup-lecture", {duration: 0.6, right: -360, ease: Power2.easeOut});
      gsap.to(".visual-wrap", {duration: 0.8, left: 0, ease: Power2.easeOut});
    }
  });

  var isStep = false;
  $(".popup-lecture a").on("click", function() {
    if(!isStep) {
      gsap.to($(this).find("img").eq(0), {duration: 0.4, opacity: 0, ease: Power3.easeOut});
      gsap.to($(this).find("img").eq(1), {duration: 0.4, opacity: 1, ease: Power3.easeOut});
    } else {
      gsap.to($(this).find("img").eq(0), {duration: 0.4, opacity: 1, ease: Power3.easeOut});
      gsap.to($(this).find("img").eq(1), {duration: 0.4, opacity: 0, ease: Power3.easeOut});
    }

    isStep = !isStep;
  })
});
