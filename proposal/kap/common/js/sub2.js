$(window).load(function() {
  $(".d-con5 ul li .accor-down").slideUp(0);
  gsap.to($(".d-con5 ul li a").find("span") , 0.8, {rotateZ: '180deg', ease:Power3.easeOut}); 

  gsap.to($(".detail-keyv .contents .copy") , 1.2, {'transform': 'translate(0, -100px)', opacity: 1, delay: 0.2, ease:Power3.easeOut}); 
  gsap.to($(".detail-keyv .contents .txt1") , 1.2, {'transform': 'translate(0, 0)', opacity: 1, delay: 0.4, ease:Power3.easeOut}); 
  gsap.to($(".detail-keyv .contents .txt2") , 1.2, {'transform': 'translate(0, 0)', opacity: 1, delay: 0.5, ease:Power3.easeOut}); 

  gsap.to(".sticky-util .gage > span", {
    scrollTrigger: {
      trigger: ".datail_area",
      start: ($(window).innerHeight())*2 +" top",
      end: "bottom bottom",
      //pin: true,
      scrub: 2,
      //markers: true,
    },
    'width': "100%",
  });

  gsap.to(".detail-keyv .contents", {
    scrollTrigger: {
      trigger: ".datail_area .top-con",
      start: "top top",
      end: "+=100%",
      //pin: true,
      scrub: 2,
      //markers: true,
    },
    'top': "-750px",
  });

  gsap.to(".detail-keyv .dimd", {
    scrollTrigger: {
      trigger: ".datail_area .top-con",
      start: "top top",
      end: "+=100%",
      //pin: true,
      scrub: 2,
      //markers: true,
    },
    'opacity': 0.5,
  });

  gsap.to(".detail-keyv .img2", {
    scrollTrigger: {
      trigger: ".datail_area .top-con",
      start: "top top",
      end: "+=100%",
      //pin: true,
      scrub: 2,
      //markers: true,
    },
    'opacity': 0,
  });

  var stickyOn = false;
  gsap.to(".d-con1", {
    scrollTrigger: {
      trigger: ".datail_area .top-con",
      start: "200% top",
      end: "+=100%",
      //pin: true,
      scrub: 2,
      //markers: true,

      onEnter: function(){
        gsap.to($(".sticky-util") , 0.8, {'bottom': 0, ease:Power3.easeOut, onComplete:function(){
          stickyOn = true;
        }});
      },

      onLeaveBack: function(){
        gsap.to($(".sticky-util") , 0.8, {'bottom': -62, ease:Power3.easeOut});
        stickyOn = false;
      },
    },
    'top': 0,
  });

  // 스크롤 이벤트가 발생할 때마다 sticky 메뉴를 조절합니다.
  $(window).on('scroll', function() {
    var $footer = $("footer");
    var $stickyMenu = $(".sticky-util");
    var stickyMenuHeight = $stickyMenu.outerHeight();
    var footerOffsetTop = $footer.offset().top;
    var windowHeight = $(window).height();

    if(stickyOn == true){
      // 스크롤 높이가 footer를 만나기 전까지는 메뉴를 화면 하단에 고정합니다.
      if ($(window).scrollTop() + windowHeight < footerOffsetTop) {
        $stickyMenu.css({
          bottom: 0
        });
      } else {
        // 스크롤 높이가 footer를 만나면 메뉴를 footer 위에 배치합니다.
        $stickyMenu.css({
          bottom: windowHeight - ($footer.offset().top - $(window).scrollTop())
        });
      }
    }
  });

  gsap.to(".d-con2", {
    scrollTrigger: {
      trigger: ".datail_area .top-con",
      start: "400% top",
      end: "+=100%",
      //pin: true,
      scrub: 2,
      //markers: true,
    },
    'top': 0,
  });

  $(".d-con1 .inner .d-con .product > a").eq(0).on('click', function(){
    $(".d-con1 .popup").css('z-index', '');
    $(".d-con1 .popup").eq(0).css('z-index', '10');
    gsap.to($(".d-con1 .popup") , 1, {'right': 0,'opacity': 0, ease:Power3.easeOut}); 
    gsap.to($(".d-con1 .popup").eq(0) , 1, {'opacity': 1, ease:Power3.easeOut}); 
    gsap.to($(".d-con1 .inner .d-con .product") , 1, {'right': 140, scale: 0.8, ease:Power3.easeOut}); 
  });
  $(".d-con1 .inner .d-con .product > a").eq(1).on('click', function(){
    $(".d-con1 .popup").css('z-index', '');
    $(".d-con1 .popup").eq(1).css('z-index', '10');
    gsap.to($(".d-con1 .popup") , 1, {'right': 0,'opacity': 0, ease:Power3.easeOut}); 
    gsap.to($(".d-con1 .popup").eq(1) , 1, {'opacity': 1, ease:Power3.easeOut}); 
    gsap.to($(".d-con1 .inner .d-con .product") , 1, {'right': 140, scale: 0.8, ease:Power3.easeOut}); 
  });
  
  $(".d-con1 .popup").find("a").on('click', function(){
    gsap.to($(".d-con1 .popup") , 1, {'right': -644, ease:Power3.easeOut}); 
    gsap.to($(".d-con1 .inner .d-con .product") , 1, {'right': -140, scale: 1, ease:Power3.easeOut}); 
  });

  var video1 = $('#detail')[0];
  $(".d-con2 .draginfo").on('click', function(){
    $(this).fadeOut(300);
    video1.playbackRate = 1.5;
    video1.play();
    video1.loop = true;
  });


  var swiper = new Swiper(".d-con3 .swiper-container", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(".d-con5 ul li > a").on('click', function(){
    if($(this).next(".accor-down").is(':visible') == true){
      gsap.to($(this).find("span") , 0.8, {rotateZ: '180deg', ease:Power3.easeOut}); 
      $(this).next(".accor-down").slideUp(400);
    }else{
      gsap.to($(this).find("span") , 0.8, {rotateZ: '0deg', ease:Power3.easeOut});
      $(this).next(".accor-down").slideDown(400);
    }
  });
})