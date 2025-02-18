$(window).load(function () {
  main.commonFn();
  main.scrollFn();
  main.scrollTriggerFn();
})

const main = (function () {
  return {
    commonFn: function () {
      if($(".main").length > 0){
        scrollMotion();
      }else{
        let fontWidthSum = $(".flow-area .flow-list").outerWidth(true);

        while(fontWidthSum < window.innerWidth + $(".flow-area .flow-list").eq(0).outerWidth(true)){
          const repeatObject = document.querySelector(".flow-area .flow-list");
          const newNode = repeatObject.cloneNode(true);
          repeatObject.after(newNode);
          fontWidthSum = fontWidthSum + $(".flow-area .flow-list").eq(-1).outerWidth(true);
        };
      
        setInterval(function() {
          if(parseInt($(".flow-area").css("left").split("p")[0]) < -$(".flow-area .flow-list").eq(0).outerWidth(true)) {
            $(".flow-area").css("left", 0);
          }
          $(".flow-area").css("left", parseInt($(".flow-area").css("left").split("p")[0]) - 2);
        }, 8);
      }
      

      // 헤더 등장
      setTimeout(()=>{
        $("header").addClass("scroll");
      }, 1400);

      $(".sub .visual-area").addClass("active");

      // LifeStyle 정보 클릭
      $(".lifestyle-area .img-area .info-div").on("click", function () {
        $(".lifestyle-area .img-area .info-div").toggleClass("on");
      });

      // LifeStyle 전체보기 클릭 및 팝업 열기
      let infoPopScrollTrigger; // ScrollTrigger 인스턴스를 저장할 변수

      // 전체보기 버튼 클릭 및 팝업 열기
      $(".lifestyle-area .view-all").on("click", function () {
        $(".info-pop").addClass("active");
        $("body").addClass("stop-scroll");

        // 팝업이 열린 후 ScrollTrigger 초기화
        setTimeout(() => {

          infoPopScrollTrigger = gsap.timeline({
            scrollTrigger: {
              trigger: ".info-pop .scroll-area",
              scroller: ".info-pop .scroll-area",
              start: "top top",
              end: "+=500",
              scrub: 1,
              markers: {               // markers를 객체로 변경
                startColor: "transparent",
                endColor: "transparent",
                fontSize: "0px",
                indent: 0
              }, // 디버깅을 위해 임시로 활성화
              onUpdate: (self) => {
                if (self.progress > 0) {
                  // 스크롤 다운할 때 애니메이션
                  $(".info-pop .txt-wrap").addClass("active");
                  $(".info-pop .con-wrap").addClass("active");
                  $(".main .info-pop .bg").addClass("fixed");
                  $(".main .info-pop .txt-wrap").addClass("fixed");
                  $(".main .info-pop .more-btn").addClass("fixed");
                } else {
                  // 맨 위로 스크롤할 때 초기 상태로 복귀
                  $(".info-pop .txt-wrap").removeClass("active");
                  $(".info-pop .con-wrap").removeClass("active");
                  $(".main .info-pop .bg").removeClass("fixed");
                  $(".main .info-pop .txt-wrap").removeClass("fixed");
                  $(".main .info-pop .more-btn").removeClass("fixed");
                }
              }
            }
          });

          // ScrollTrigger 새로고침
          ScrollTrigger.refresh();
        }, 1000);
      });

      // 팝업 닫기
      $(".info-pop .close-btn").on("click", function () {
        $(".info-pop").removeClass("active");
        $("body").removeClass("stop-scroll");
        
        // 팝업 내 스크롤 위치 초기화
        $(".info-pop .scroll-area").scrollTop(0);
        
        // 애니메이션 관련 클래스 초기화
        $(".info-pop .txt-wrap").removeClass("active");
        $(".info-pop .con-wrap").removeClass("active");
        
        $(".main .info-pop .bg").removeClass("fixed");
        $(".main .info-pop .txt-wrap").removeClass("fixed");
        $(".main .info-pop .more-btn").removeClass("fixed");

        // ScrollTrigger 제거
        if (infoPopScrollTrigger) {
          infoPopScrollTrigger.scrollTrigger.kill();
          infoPopScrollTrigger.kill();
        }
      });

    },
    scrollFn: function () {
      let _this_scroll;
      let _isScrollTop;

      $(window).on("scroll", function () {
        // header
        _isScrollTop =  $(window).scrollTop();

        if(_isScrollTop > _this_scroll) { // down
          if(_isScrollTop > 0){
            $("header").removeClass("scroll");
            $("header").removeClass("active");
          }
        }
        
        if(_isScrollTop < _this_scroll){ // up
          if(_isScrollTop == 0){
            $("header").removeClass("active");
          }else{
            $("header").addClass("scroll");
            $("header").addClass("active");
          }
        }

        
        
        _this_scroll = _isScrollTop;
      });
    },
    scrollTriggerFn: function () {
      if($(".main").length > 0){

        /* LifeStyle */
        // 텍스트 채워지는 모션
        var lifeTxtMotion = gsap.timeline({
          scrollTrigger: {
            trigger: $(".lifestyle-area"),
            start: () => "top-=500vh top",
            end:"bottom-=750px bottom",
            scrub:1,
            // markers:true,
          },
        });

        lifeTxtMotion
          .to($(".lifestyle-area .motion-txt .txt .fill-txt").eq(0), 5, {width:"100%", stagger:0.5, ease: Power3.easeOut})
          .to($(".lifestyle-area .motion-txt .txt .fill-txt").eq(1), 5, {width:"100%", stagger:0.5})
          .to($(".lifestyle-area .motion-txt .txt .fill-txt").eq(2), 5, {width:"100%", stagger:0.5})

        // 왼쪽 이미지 내 버튼 고정
        gsap.to($(".lifestyle-area"), {
          scrollTrigger: {
            trigger: ".lifestyle-area .img-area .btn",
            start: "top top",
            end: "bottom top+=128px",
            endTrigger: ".lifestyle-area",
            pin:true,
            // markers:true,
          }
        });

        gsap.to($(".lifestyle-area .img-area .fixed-area"), {
          scrollTrigger: {
            trigger: ".lifestyle-area .img-area .fixed-area",
            start: () => "bottom bottom",  // 함수로 반환
            end: () => "bottom+=" + (window.innerHeight * 0.3) + "px" + " bottom",  // 화면 높이의 30% 만큼 추가
            pin: true,
            // markers: true,
            onLeave: () => {
              ScrollTrigger.refresh();
              scrollMotion();
            }
          }
        });

        // 정보 
        gsap.to($(".lifestyle-area .img-area"), {
          scrollTrigger: {
            trigger: ".lifestyle-area .img-area",
            start: "top-=320px top",
            end: "bottom bottom",
            // pin:true,
            // markers:true,
            onEnter:()=>{
              $(".lifestyle-area .img-area .info-div").addClass("active");
            },
            onEnterBack:()=>{
              $(".lifestyle-area .img-area .info-div").addClass("active");
              $(".lifestyle-area .img-area .info-div").removeClass("fixed");
            },
            onLeaveBack:()=>{
              $(".lifestyle-area .img-area .info-div").removeClass("active");
            },
            onLeave:()=>{
              $(".lifestyle-area .img-area .info-div").removeClass("on");
              $(".lifestyle-area .img-area .info-div").addClass("fixed");
            }
          }
        });

        // 우측 이미지 고정 및 변경 모션
        gsap.to($(".lifestyle-area"), {
          scrollTrigger: {
            trigger: ".lifestyle-area .img-area .right",
            start: "top top",
            end: "bottom top+=360px",
            endTrigger: ".lifestyle-area",
            pin:true,
            // markers:true,
            onUpdate(self) {
              const progress = self.progress.toFixed(3);
              // console.log(progress);
              if (progress < .3) {
                $(".lifestyle-area .img-area .right .img").eq(1).removeClass("on");
                $(".lifestyle-area .img-area .right .img").eq(2).removeClass("on");
              }
              if (progress >= .3) {
                $(".lifestyle-area .img-area .right .img").eq(1).addClass("on");
                $(".lifestyle-area .img-area .right .img").eq(2).removeClass("on");
              }
              if (progress >= .7) {
                $(".lifestyle-area .img-area .right .img").eq(2).addClass("on");
              }
            }
          }
        });

        /* Inspire Space */
        gsap.to($(".inspire-area"), {
          scrollTrigger: {
            trigger: ".inspire-area .txt-wrap",
            start: "top-=320px top",
            end: "bottom bottom",
            endTrigger: ".inspire-area",
            // pin:true,
            // markers:true,
          }
        });

        /* Masterpiece */
        // 리스트 이동
        gsap.to($(".masterpiece-area .list-wrap .flow"), {
          scrollTrigger: {
            trigger: ".masterpiece-area",
            start: "top top", // 영역이 화면 하단에서 보이기 시작할 때
            end: "bottom top", // 영역의 bottom이 화면 상단에 도달할 때까지
            scrub: 1,
            // markers:true,
            onUpdate(self) {
              const progress = self.progress.toFixed(3);
              // console.log(progress);
              if (progress > 0.07) {
                $(".masterpiece-area .list-wrap").addClass("active");
              }
            }
          },
          left: () => {
            const windowWidth = $(window).innerWidth();
            const flowWidth = $(".masterpiece-area .list-wrap .flow").innerWidth();
            const lastItemWidth = $(".masterpiece-area .list-wrap .flow .list").last().outerWidth();
            return -(flowWidth - (windowWidth/2 + lastItemWidth/2));
          },
        });


        // 리스트 영역 고정
        gsap.to($(".masterpiece-area .list-wrap"), {
          scrollTrigger: {
            trigger: ".masterpiece-area .list-wrap",
            start: "top top",
            end: "bottom-=320px bottom",
            endTrigger: ".masterpiece-area",
            pin:true,
            // markers:true,
          }
        });

        /* Remodeling */
        // 영역 고정 및 이미지 커짐
        var remodelingMotion = gsap.timeline({
          scrollTrigger: {
            trigger: ".remodeling-area .fixed-area",
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".remodeling-area",
            pin:true,
            // markers:true,
            scrub:1,
          }
        });


        remodelingMotion
          .to($(".remodeling-area .fixed-area .bg-img"), 2, {width:"100%", height:"100%"})
          .to($(".remodeling-area .fixed-area .bg-img .dimd"), 2, {opacity:1}, "<=")
          .to($(".remodeling-area .fixed-area .txt-wrap"), 2, {bottom:"120px"}, "<=")
          .to($(".remodeling-area .fixed-area .txt-wrap .tit"), 2, {color:"#fff", scale:0.6}, "<=")
          .to($(".remodeling-area .fixed-area .txt-wrap .txt"), 2, {color:"#fff", marginTop:0}, "<=")
          .to($(".remodeling-area .fixed-area .txt-wrap .btn"), 2, {color:"#fff", border:"1px solid #fff"}, "<=")
          .to($(".remodeling-area .fixed-area .txt-wrap"), 2, {opacity:1})

        /* Service */
        // 배경 고정
        gsap.to($(".service-area"), {
          scrollTrigger: {
            trigger: ".service-area .bg",
            start: "top top",
            end: "bottom bottom",
            endTrigger: ".service-area",
            pin:true,
            // markers:true,
          }
        })

        // 왼쪽 타이틀 고정
        gsap.to($(".service-area"), {
          scrollTrigger: {
            trigger: ".service-area .left .title",
            start: "top-=320px top",
            end: "bottom bottom",
            endTrigger: ".service-area",
            pin:true,
          }
        })

        // 왼쪽 타이틀 모션
        gsap.to($(".service-area"), {
          scrollTrigger: {
            trigger: ".service-area .left",
            start: "top bottom",
            end: "bottom bottom",
            once: true,
            toggleClass: { targets: $(".service-area .left"), className: "active" },
            // markers: true,
          }
        })
      }
      
      if($(".sub").length > 0){
        /* Visual */
        var visualMotion = gsap.timeline({
          scrollTrigger: {
            trigger: ".sub .visual-area .fixed-area",
            start: "top top",
            end: "bottom bottom-=100px",
            scrub:1,
            onEnter:()=>{
              $(".sub .visual-area").addClass("on");
              setTimeout(function() {
                ScrollTrigger.refresh();
                $(".scroll-motion").removeClass("active");
                scrollMotion();
              }, 1300);
            },
            onLeaveBack:()=>{
              $(".sub .visual-area").removeClass("on");
            }
          }
        });

        /* Platinum */
        var platinumMotion = gsap.timeline({
          scrollTrigger: {
            trigger: ".sub .philosophy-area .fixed-area",
            start: "top top",
            end: "bottom bottom", 
            endTrigger: ".sub .philosophy-area",
            scrub:1,
            pin:true,
            // markers:true,
            onEnter:()=>{
              gsap.to($(".sub .platinum-area .philosophy-area .flow-area"), 0.6, {opacity:0});
              $(".sub .platinum-area .philosophy-area .flow-position").css("position", "fixed");
            },
            onLeaveBack:()=>{
              gsap.to($(".sub .platinum-area .philosophy-area .flow-area"), 0.6, {opacity:1});
              $(".sub .platinum-area .philosophy-area .flow-position").css("position", "absolute");
            },
            onLeave:()=>{
              $(".sub .platinum-area .philosophy-area .flow-position").css("position", "absolute");
            },
            onEnterBack:()=>{
              $(".sub .platinum-area .philosophy-area .flow-position").css("position", "fixed");
            },
          }
        });
        
        platinumMotion
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual"), 0.7, {width:"100%"})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual .dimd"), 0.7, {opacity:1}, "<=")
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual .txt"), 0.5, {className:"txt active"})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual"), 0.2, {opacity:1})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual"), 1, {height:"100%"})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual .txt"), 0.5, {className:"txt active hide"}, "<=")
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual .bg"), 1, {top:"-150px"}, "<=")
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual .list:nth-child(1) .txt-wrap"), 0.5, {className:"txt-wrap active"})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual"), 0.5, {opacity:1})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual .list:nth-child(1) .bg"), 0.5, {className:"bg hide"})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual .list:nth-child(1) .txt-wrap"), 0.5, {className:"txt-wrap active hide"}, "<=")
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual .list:nth-child(2) .txt-wrap"), 0.5, {className:"txt-wrap active"}, "<=")
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual"), 0.5, {opacity:1})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual .list:nth-child(2) .bg"), 0.5, {className:"bg hide"})
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual .list:nth-child(2) .txt-wrap"), 0.5, {className:"txt-wrap active hide"}, "<=")
          .to($(".sub .platinum-area .philosophy-area .fixed-area .con-visual .list:nth-child(3) .txt-wrap"), 0.5, {className:"txt-wrap active"}, "<=")
          .to($(".sub .platinum-area .philosophy-area .fixed-area .tit-visual"), 0.5, {opacity:1})

        /* Life Space */
        var lifeSpaceMotion = gsap.timeline({
          scrollTrigger: {
            trigger: ".sub .life-space-area .features-wrap .right",
            start: "top top",
            end: "bottom bottom",
            scrub: 0,
            pin: ".sub .life-space-area .features-wrap .bg",
            // markers: true,
          }
        });

        lifeSpaceMotion
          .to($(".sub .life-space-area .features-wrap .left"), 0.1, {className:"left active"})
          .to($(".sub .life-space-area .features-wrap .right"), 0.1, {className:"right active"}, "<=")
      }
    }

  }
})();


function scrollMotion() {
  if ($(".scroll-motion").size() > 0) {
    $(".scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: () => "top 85%", // 함수로 변경하여 동적 계산
          end: () => "bottom top", // 함수로 변경하여 동적 계산
          toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
          once: true,
          // markers: true,
          invalidateOnRefresh: true // 스크롤 위치가 변경될 때 재계산
        },
      });
    });
  }
}
