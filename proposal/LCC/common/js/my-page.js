$(document).ready(function(){
  AOS.init();
  gsap.to(".left-layout a", {
    scrollTrigger: {
      trigger: ".my-course",
      start: "top top",
      end: "bottom bottom",
      pin: ".left-layout a",
      pinSpacing: false,
    }
  });

  //footer진입
  // var courseH = $(".my-course").innerHeight();
  // $(".fake-section").css({"height":courseH});

  gsap.to(".fake-section", {
    scrollTrigger: {
      trigger: ".fake-footer",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
    },
    scale: ".96",
  });


})