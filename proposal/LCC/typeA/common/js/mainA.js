$(function() {
  //AOS
  AOS.init({
    once: true,
    offset: 320,
    duration: 1200,
  });

  //헤더 > 지점 이벤트
  var isAgency = false;
  $("header ul.menu .btn1").on("click", function() {
    if(!isAgency) {
      isAgency = !isAgency;
      clearInterval(visualInterval);
      $("header ul.menu .btn1 img").attr("src", "./common/images/header-menu1-active.png");
      $("body").addClass("lock");
      $(".d-flex").addClass("right");
      gsap.to(".main-visual", {duration: 1, width: "50%", ease: Power3.easeOut});
      gsap.to(".popup-agency", {duration: 1, left: 0, ease: Power3.easeOut});

      //hidden
      $(".main-visual .float-sticker").hide();
      $(".main-visual .indicator").hide();
      $(".main-visual .btn-box").hide();
      $(".main-visual .visual").eq(vNum).find(".txt").hide();
    } else {
      isAgency = !isAgency;
      visualInterval = setInterval(function() {
        if(!isMove) {
          isMove = !isMove;
          gsap.delayedCall(1.7, function() {
            isMove = !isMove;
          })
    
          if(!$(this).index()) {
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
            vNum--;
            if(vNum < 0) vNum = 2;
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 1, ease: Power1.easeOut});
          } else {
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
            gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 0.2, y: 60, opacity: 0, ease: Power1.easeOut});
            vNum++;
            if(vNum > 2) vNum = 0;
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.8, opacity: 1, ease: Power1.easeOut});
            gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 1.3, delay: 0.3, y: 0, opacity: 1, ease: Power1.easeOut});
          }
      
          if(vNum == 0) {
            $(".main-visual .indicator .line").removeClass().addClass("line step1");
          } else if(vNum == 1) {
            $(".main-visual .indicator .line").removeClass().addClass("line step2");
          } else if(vNum == 2) {
            $(".main-visual .indicator .line").removeClass().addClass("line step3");
          }
        }
      }, 7000);
      $("header ul.menu .btn1 img").attr("src", "./common/images/header-menu1.png");
      $("body").removeClass("lock");
      gsap.to(".main-visual", {duration: 1, width: "100%", ease: Power3.easeOut, onComplete: function() {
        $(".d-flex").removeClass("right");
      }});
      gsap.to(".popup-agency", {duration: 1, left: "-50%", ease: Power3.easeOut});

      //hidden clear
      $(".main-visual .float-sticker").show();
      $(".main-visual .indicator").show();
      $(".main-visual .btn-box").show();
      $(".main-visual .visual").eq(vNum).find(".txt").show();
    }
  });

  //헤더 > 강좌 이벤트
  var isLecture = false;
  $("header ul.menu .btn2").on("click", function() {
    if(!isLecture) {
      isLecture = !isLecture;
      clearInterval(visualInterval);
      $("header ul.menu .btn2 img").attr("src", "./common/images/header-menu2-active.png");
      $("body").addClass("lock");
      $(".d-flex").addClass("left");
      gsap.to(".main-visual", {duration: 1, width: "50%", ease: Power3.easeOut});
      gsap.to(".popup-lecture", {duration: 1, right: 0, ease: Power3.easeOut});

      //hidden
      $(".main-visual .float-sticker").hide();
      $(".main-visual .indicator").hide();
      $(".main-visual .btn-box").hide();
      $(".main-visual .visual").eq(vNum).find(".txt").hide();
    } else {
      isLecture = !isLecture;
      visualInterval = setInterval(function() {
        if(!isMove) {
          isMove = !isMove;
          gsap.delayedCall(1.7, function() {
            isMove = !isMove;
          })
    
          if(!$(this).index()) {
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
            vNum--;
            if(vNum < 0) vNum = 2;
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 1, ease: Power1.easeOut});
          } else {
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
            gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 0.2, y: 60, opacity: 0, ease: Power1.easeOut});
            vNum++;
            if(vNum > 2) vNum = 0;
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.8, opacity: 1, ease: Power1.easeOut});
            gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 1.3, delay: 0.3, y: 0, opacity: 1, ease: Power1.easeOut});
          }
      
          if(vNum == 0) {
            $(".main-visual .indicator .line").removeClass().addClass("line step1");
          } else if(vNum == 1) {
            $(".main-visual .indicator .line").removeClass().addClass("line step2");
          } else if(vNum == 2) {
            $(".main-visual .indicator .line").removeClass().addClass("line step3");
          }
        }
      }, 7000);
      $("header ul.menu .btn2 img").attr("src", "./common/images/header-menu2.png");
      $("body").removeClass("lock");
      gsap.to(".main-visual", {duration: 1, width: "100%", ease: Power3.easeOut, onComplete: function() {
        $(".d-flex").removeClass("left");
      }});
      gsap.to(".popup-lecture", {duration: 1, right: "-50%", ease: Power3.easeOut});

      //hidden clear
      $(".main-visual .float-sticker").show();
      $(".main-visual .indicator").show();
      $(".main-visual .btn-box").show();
      $(".main-visual .visual").eq(vNum).find(".txt").show();
    }
  });
  var isSlcLecture = false;
  $(".popup-lecture .ele2").on("click", function() {
    if(!isSlcLecture) {
      isSlcLecture = !isSlcLecture;
      gsap.to(".popup-lecture .ele1", {duration: 0.3, opacity: 0});
      gsap.to(".popup-lecture .ele2", {duration: 0.3, opacity: 1});
    } else {
      isSlcLecture = !isSlcLecture;
      gsap.to(".popup-lecture .ele1", {duration: 0.3, opacity: 1});
      gsap.to(".popup-lecture .ele2", {duration: 0.3, opacity: 0});
    }
  })

  //search 아이콘 이벤트
  $("header .utils .search").on("click", function() {
    $("body").addClass("lock");
    $(".dimd").stop(true, true).fadeIn(200);
    gsap.to(".popup-search", {duration: 1, top: 0, ease: Power3.easeOut});
  });
  $(".popup-search .btn-close").on("click", function() {
    $("body").removeClass("lock");
    $(".dimd").stop(true, true).fadeOut(200);
    gsap.to(".popup-search", {duration: 1, top: "-100vh", ease: Power3.easeOut});
  });

  //mypage 아이콘 이벤트
  $("header .utils .mypage").on("click", function() {
    gsap.to(".popup-mypage", {duration: 1, top: 100, ease: Power3.easeOut});
  });
  $(".popup-mypage .btn-close").on("click", function() {
    gsap.to(".popup-mypage", {duration: 1, top: "-100vh", ease: Power3.easeOut});
  });

  //비주얼 인기 카테고리
  var fNum = 0;
  $(".main-visual .float-sticker").on("click", function() {
    if(fNum == 0) {
      fNum++;
      // gsap.to(".main-visual .float-sticker .step1", {duration: 0.3, delay: 0.1, y: 0, opacity: 1});
      gsap.to(".main-visual .float-sticker .step1", {duration: 0.3, scale: 0, x: -100, y: 80, opacity: 0});
      gsap.to(".main-visual .float-sticker .step2", {duration: 0.3, opacity: 1});
    } else {
      $("body").addClass("lock");
      $(".dimd").stop(true, true).fadeIn(200);
      gsap.to(".category-wrap", {duration: 1, bottom: 0, ease: Power3.easeOut});
    }
  });
  $(".category-wrap .btn-close").on("click", function() {
    $("body").removeClass("lock");
    $(".dimd").stop(true, true).fadeOut(200);
    gsap.to(".category-wrap", {duration: 1, bottom: "-100vh", ease: Power3.easeOut});
  })

  //init - 비주얼 축소 모션
  var visualInterval;
  gsap.delayedCall(0.8, function() {
    // $(".main-visual .visual").eq(0).addClass("move");
    gsap.to($(".main-visual .visual").eq(0), {duration: 1.2, top: 100, width: "calc(100% - 200px)", height: "calc(100% - 140px)", borderRadius: "16px", ease: Power2.easeOut, onComplete: function() {
      $("header").addClass("finished");

      //카테고리 버튼 노출 & 감춤
      // gsap.to(".main-visual .float-sticker .step1", {duration: 0.3, delay: 0.1, y: 0, opacity: 1});
      // gsap.to(".main-visual .float-sticker .step1", {duration: 0.3, delay: 2.1, scale: 0, x: -100, y: 80, opacity: 0});
      // gsap.to(".main-visual .float-sticker .step2", {duration: 0.3, delay: 2.1, opacity: 1});
      gsap.to($(".main-visual .visual:eq(0) .txt"), {duration: 0.8, delay: 2.1, y: 0, opacity: 1, ease: Power1.easeOut, onComplete: function(){
        gsap.to(".main-visual .indicator", {duration: 0.3, bottom: 80, opacity: 1});
        gsap.to(".main-visual .btn-box", {duration: 0.3, delay: 0.2, bottom: 80, opacity: 1});
      }});

      visualInterval = setInterval(function() {
        if(!isMove) {
          isMove = !isMove;
          gsap.delayedCall(1.7, function() {
            isMove = !isMove;
          })
    
          if(!$(this).index()) {
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
            vNum--;
            if(vNum < 0) vNum = 2;
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 1, ease: Power1.easeOut});
          } else {
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
            gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 0.2, y: 60, opacity: 0, ease: Power1.easeOut});
            vNum++;
            if(vNum > 2) vNum = 0;
            gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.8, opacity: 1, ease: Power1.easeOut});
            gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 1.3, delay: 0.3, y: 0, opacity: 1, ease: Power1.easeOut});
          }
      
          if(vNum == 0) {
            $(".main-visual .indicator .line").removeClass().addClass("line step1");
          } else if(vNum == 1) {
            $(".main-visual .indicator .line").removeClass().addClass("line step2");
          } else if(vNum == 2) {
            $(".main-visual .indicator .line").removeClass().addClass("line step3");
          }
        }
      }, 7000);
    }});
  })

  //비주얼 좌, 우 버튼 이벤트
  var vNum = 0;
  var isMove = false;
  
  $(".main-visual").on("click", function() {
    if(!isMove) {
      isMove = !isMove;
      gsap.delayedCall(1.7, function() {
        isMove = !isMove;
      })

      gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
      gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 0.2, y: 60, opacity: 0, ease: Power1.easeOut});
      vNum++;
      if(vNum > 2) vNum = 0;
      gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.8, opacity: 1, ease: Power1.easeOut});
      gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 1.3, delay: 0.3, y: 0, opacity: 1, ease: Power1.easeOut});

      // if(!$(this).index()) {
      //   gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
      //   vNum--;
      //   if(vNum < 0) vNum = 2;
      //   gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 1, ease: Power1.easeOut});
      // } else {
      //   gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.3, opacity: 0, ease: Power1.easeOut});
      //   gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 0.2, y: 60, opacity: 0, ease: Power1.easeOut});
      //   vNum++;
      //   if(vNum > 2) vNum = 0;
      //   gsap.to($(".main-visual .visual:eq("+vNum+")"), {duration: 1.8, opacity: 1, ease: Power1.easeOut});
      //   gsap.to($(".main-visual .visual:eq("+vNum+") .txt"), {duration: 1.3, delay: 0.3, y: 0, opacity: 1, ease: Power1.easeOut});
      // }
  
      if(vNum == 0) {
        $(".main-visual .indicator .line").removeClass().addClass("line step1");
      } else if(vNum == 1) {
        $(".main-visual .indicator .line").removeClass().addClass("line step2");
      } else if(vNum == 2) {
        $(".main-visual .indicator .line").removeClass().addClass("line step3");
      }
    }
  });

  //section2 bg fixed
  gsap.to(".section2 .bg", {
    scrollTrigger: {
      trigger: ".section2 .bg",
      start: "0 0",
      end: "100%",
      pinSpacing: false,
      pin: ".section2 .bg"
    },
  });
  gsap.to([".section2 .bg .left", ".section2 .bg .right"], {
    scrollTrigger: {
      trigger: ".section2",
      start: "0 50%",
      end() {
        return `+=${$(window).height()}`
      },
      scrub: 1,
      markers: false,
    },
    width: 0
  });

  //section2 섬네일 리스트
  $(".section2 .list-box .list").on("click", function() {
    if($(".section2 .list-box").hasClass("even")) {
      $(".section2 .list-box").removeClass("even").addClass("odd");
      gsap.to(".section2 .list-box .moving-box", {duration: 1, left: -430, ease: Power1.easeOut});
      gsap.to(".section2 .list-box .bar span", {duration: 1, width: 400, ease: Power1.easeOut});
    } else {
      $(".section2 .list-box").removeClass("odd").addClass("even");
      gsap.to(".section2 .list-box .moving-box", {duration: 1, left: 0, ease: Power1.easeOut})
      gsap.to(".section2 .list-box .bar span", {duration: 1, width: 200, ease: Power1.easeOut});
    }
  });

  //section3 왼쪽 bg fixed
  gsap.to(".section3 .half-wrap .img-area", {
    scrollTrigger: {
      trigger: ".section3 .half-wrap .img-area",
      start: "0 0",
      end() {
        return `+=${$(".section3 .half-wrap .flow-area img").height() - $(window).height()}`;
      },
      pin: ".section3 .half-wrap .img-area"
    },
  });

  //section4 섬네일 리스트
  var isSection4Move = false;
  $(".section4 .flow-area .list").on("click", function() {
    if(!isSection4Move) {
      isSection4Move = !isSection4Move;
      gsap.to(".section4 .moving-box", {duration: 1.2, x: -430, ease: Power1.easeOut});
    } else {
      isSection4Move = !isSection4Move;
      gsap.to(".section4 .moving-box", {duration: 1.2, x: 0, ease: Power1.easeOut});
    }
  })

  //section5 포스터
  var posterNum = 0;
  var posterVelocity = 0.8;
  var isPoster = false;
  $(".section5 .event-wrap").on("click", function() {
    if(!isPoster) {
      isPoster = !isPoster;
    }
    gsap.to($(".section5 .event-wrap .poster-area .img").eq(posterNum), {duration: posterVelocity, left: -530, ease: Power1.easeOut});
    gsap.to($(".section5 .event-wrap .control-area .img").eq(posterNum), {duration: posterVelocity, left: -170, ease: Power1.easeOut});
    posterNum++;
    if(posterNum > 2) posterNum = 0
    gsap.to($(".section5 .event-wrap .poster-area .img").eq(posterNum), {duration: 0, left: 530, ease: Power1.easeOut});
    gsap.to($(".section5 .event-wrap .control-area .img").eq(posterNum), {duration: 0, left: 550, ease: Power1.easeOut});

    gsap.to($(".section5 .event-wrap .poster-area .img").eq(posterNum), {duration: posterVelocity, left: 0, ease: Power1.easeOut});
    gsap.to($(".section5 .event-wrap .control-area .img").eq(posterNum), {duration: posterVelocity, left: 190, ease: Power1.easeOut});
  })

  //section6
  $(window).on("scroll", function() {
    if($(window).scrollTop() > $(".section6 .line").offset().top - $(window).height()) {
      $(".section6 .line").addClass("active");
      $(".section6 .list-box").addClass("active");
    }

    if($(window).scrollTop() > $(window).height() * 1.2) {
      $("footer").show();
      $("#wrap").css("background", "#222");
    } else {
      $("footer").hide();
      $("#wrap").css("background", "#fff");
    }
  })

  //footer effect
  gsap.to(".footer-effect", {
    scrollTrigger: {
      trigger: ".fake-footer",
      start: "0 100%",
      end() {
        return `+=${$("footer").height() / 2}`
      },
      scrub: 0.5,
      markers: false,
    },
    scale: 0.96,
  })
})
