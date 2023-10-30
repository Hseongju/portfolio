$(function() {
  subScript.init();
  subScript.scrollFn();
  subScript.scrollTriggerFn();
})
var subScript = (function() {
  return {
    init: function() {
      gsap.to($("header"), 1, {top: 0, ease: Power3.easeOut}, "addLabel");

      var init = gsap.timeline();
      init.to(".visual_area .left .img", {duration: 0.6, opacity: 1, x: 0, "border-radius": "0 200px 0 0"}, "addLabel+=0.3")
          .to(".visual_area .right .btn_share", {duration: 0.6, opacity: 1, y: 0, ease: Power3.ease}, "addLabel+=0.4")
          .to(".visual_area .right .txt_div .txt *", {duration: 0.6, opacity: 1, y: 0, stagger: 0.12, ease: Power3.ease}, "addLabel+=0.5")
          .to(".visual_area .right .btn_wrap .btn", {duration: 0.6, opacity: 1, y: 0, stagger: 0.18, ease: Power3.ease}, "addLabel+=1.2")

      $("header .gnb").hover(function(){
        $("header").addClass("hover");
        $("header .depth2").slideDown();
      });

      $("header").on("mouseleave", function() {
        $("header .depth2").slideUp();
        $("header").removeClass("hover");
      });

      $(".solution_area .list_area .list").on("hover", function() {
        $(this).addClass("on").siblings().removeClass("on");
      });
      $(".solution_area .list_area .list").on("mouseleave", function() {
        $(this).removeClass("on");
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

          $(".fixed_btn_area").addClass("active");
        } else if(winScrTop  === 0) {
          $("header").removeClass();

          $(".fixed_btn_area").removeClass("active");
        } else {
          gsap.to("header", {top: 0});
          $("header").removeClass().addClass("up");

          // $(".fixed_btn_area").removeClass("active");
        }
        lastScrlTop = winScrTop;
      }).trigger("scroll");
    },
    scrollTriggerFn: function() {    
      var benefitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".benefit_area",
          start: "top-=40% top",
          endTrigger: ".service_area",
          end: "top top",
          // markers: true,
        }
      });
      benefitTl.to(".benefit_area .sub_title_area > *", {duration: 1, y: 0, opacity: 1, stagger: 0.2}, "addLabel")
                .to(".benefit_area .box_area .box", {duration: 1, y: 0, opacity: 1, stagger: 0.1}, "addLabel+=0.5")
      
      var serviceTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".service_area",
          start: "top-=40% top",
          endTrigger: ".solution_area",
          end: "top top",
          // markers: true,
        }
      });
      serviceTl.to(".service_area .sub_title_area > *", {duration: 1, y: 0, opacity: 1, stagger: 0.2}, "addLabel")
                .to(".service_area .list_div .row .list", {duration: 1, y: 0, opacity: 1, stagger: 0.2, delay: 0.5}, "addLabel+=0.5")

      var solutionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".solution_area",
          start: "top-=30% top",
          endTrigger: ".interview_area",
          end: "top top",
          // markers: true,
        }
      });
      solutionTl.to(".solution_area .sub_title_area > *", {duration: 1, y: 0, opacity: 1, stagger: 0.2})

      var solutionAni = gsap.to(".solution_area .list_area .list", {duration: 1, y: 0, opacity: 1, stagger: 0.2, delay: 0.2})
      ScrollTrigger.create({
        animation: solutionAni,
        trigger: ".solution_area",
        start: "top 20%", 
        endTrigger: ".interview_area",
        bottom: "bottom bottom",
        // markers: true,
      });


      var interviewTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".interview_area",
          start: "top-=25% top",
          endTrigger: ".recommend_area",
          end: "top top",
          toggleClass: "active"
          // markers: true,
        }
      });
      interviewTl.to(".interview_area .sub_title_area > *", {duration: 1, y: 0, opacity: 1, stagger: 0.2}, "addLabel")
      
      var recommendTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".recommend_area",
          start: "top-=65% top",
          endTrigger: "footer",
          end: "top top",
          toggleClass: "active",
          // markers: true,
        }
      });
      recommendTl.to(".recommend_area .tit", {duration: 1, y: 0, opacity: 1}, "addLabel")
                 .to(".recommend_area .list_area .list", {duration: 1, y: 0, opacity: 1, stagger: 0.2}, "addLabel+=0.2")

      ScrollTrigger.config({autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});
      ScrollTrigger.create({
        trigger: ".interview_area .left .img",
        start: "top-=90px top",
        endTrigger: ".recommend_area",
        end: "top-=240px bottom",
        pin: $(".interview_area .right_flow_area .left"),
        pinSpacing: false,
        // markers: true,
        scrub: 1,
      });
    }
  }
})();
