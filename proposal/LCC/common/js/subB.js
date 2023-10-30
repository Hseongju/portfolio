$(document).ready(function(){
  AOS.init();

  var h = $("#sec1").innerHeight();
  //왼쪽 레이아웃
  gsap.to(".right-rayout", {
    scrollTrigger: {
      trigger: "#sec1",
      start: "top top",
      end : "bottom bottom",
      pin: ".right-rayout",
      pinSpacing: false,
    }
  });
  
  $(window).scroll(function(){
    var scrT = $(window).scrollTop();
    var scrTopTitle = $(window).scrollTop() + 200;
  
    //오른쪽 말풍선
    if(scrT == 0) {
      $(".hide-txt").fadeIn();
    } else {
      $(".hide-txt").fadeOut();
    }

  });
  
  // title fixed 수정
  gsap.to(".list1 .title-box img", {
    scrollTrigger: {
      trigger: ".list1",
      pin: ".list1 .title-box img",
      pinSpacing: false,
      start: "-=100px top",
      end: "bottom 10%",
      // markers: true,
    }
  });
  gsap.to(".list2 .title-box img", {
    scrollTrigger: {
      trigger: ".list2",
      pin: ".list2 .title-box img",
      pinSpacing: false,
      start: "-=100px top",
      end: "bottom 10%",
      // markers: true,
    }
  });
  gsap.to(".list3 .title-box img", {
    scrollTrigger: {
      trigger: ".list3",
      pin: ".list3 .title-box img",
      pinSpacing: false,
      start: "-=100px top",
      end: "bottom 10%",
      // markers: true,
    }
  });
  gsap.to(".list4 .title-box img", {
    scrollTrigger: {
      trigger: ".list4",
      pin: ".list4 .title-box img",
      pinSpacing: false,
      start: "-=100px top",
      end: "bottom 10%",
      // markers: true,
    }
  });

  //footer진입
  gsap.to(".fake-section", {
    scrollTrigger: {
      trigger: ".fake-footer",
      start: "center bottom",
      end: "bottom bottom",
      scrub: 1,
    },
    scale: ".96",
  });

})
