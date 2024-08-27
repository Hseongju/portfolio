var _this_scroll;
var _isScrollTop;
var _isDone = false;
var _heightSum;
const _winW = $(window).width();

$(window).on("load", function () {
  gsap.registerPlugin(ScrollToPlugin);
  main.commonFn();
  main.swiperEvtFn();
  main.scrollFn();
  main.scrollTriggerFn();
  main.gnbFn();
  main.resizeFn();
});

var main = function () {
  return {
    commonFn: function () {
      _heightSum = $(".fund-area").innerHeight() + $(".insight-area").height()
      // fund 리스트 더 생기는 script
      $(".more-btn > a").on("click", function () {
        var scrollTop = $(window).scrollTop();
        $(".list-area img").each(function () {
          $(this).clone().appendTo(".fund-area .fund-con .right .list-area");
        })
        setTimeout(function () {
          _heightSum = $(".fund-area").innerHeight() + $(".insight-area").height()
          ScrollTrigger.refresh();
          $(window).scrollTop(scrollTop);
        }, 20);
      });

      $(".insight-area .flex-box .tag-list").on("click", function () {
        var scrollTop = $(window).scrollTop();
        if (!$(this).hasClass("on")) {
          $(this).addClass("on");
          $(".insight-list-w .later").show();
          $(".insight-list-w .item").hide();
          $(".insight-list-w").removeClass("active active1");
          setTimeout(function () {
            $(".insight-list-w").addClass("active1");
          }, 100)
        } else {
          $(this).removeClass("on");
          $(".insight-list-w").removeClass("active active1");
          $(".insight-list-w .later").hide();
          $(".insight-list-w .item").show();
          setTimeout(function () {
            $(".insight-list-w").addClass("active");
          }, 100)
        }
        setTimeout(function () {
          ScrollTrigger.refresh();
          $(window).scrollTop(scrollTop);
        }, 200);
      });
    },
    swiperEvtFn: function () {

    },
    scrollTriggerFn: function () {
      scrollMotionTrigger();
      scrollMotionTrigger1();
      const tl = gsap.timeline({});

      tl.to(".rotate-circle", {
        rotate: -90, duration: 3, ease: "slow(0.7,0.7,false)",
      })
        .to(".intro-bg .mask img", {
          top: "0", left: "-50%", width: "500%", duration: 2, ease: "slow(0.7,0.7,false)",
        }, "<+=2")
        .to(".fake-mask", {
          opacity: 0,
          visibility: 0,
          ease: "slow(0.7,0.7,false)",
        }, "<-=.5")
        .to(".fake-mask", {
          display: "none",
          onComplete() {
            $(".fund-kh-btn").addClass("show");
            $("header").removeClass("none");
            $(".slogan").fadeIn();
            $(".main-search-btn").fadeIn();
            $(".banner-wrap").addClass("active");
            $(".indicator").fadeIn();
            $(".intro-bg").fadeOut();
          }
        }, "<+=1")
      // .to(".intro-bg", {
      //   opacity: 0, duration: .5,
      //   // onComplete() {}
      // }, "<+=.8")
      // .to(".fake-mask", {
      //   opacity: 0,
      //   visibility: 0,
      //   ease: "slow(0.7,0.7,false)"
      // }, "<-=1")
      // .to(".slogan", {
      //   opacity: 1, ease: "slow(0.7,0.7,false)"
      // }, "<+=.5")
      // .to(".banner-area", {
      //   opacity: 1, ease: "slow(0.7,0.7,false)"
      // }, "<+=.5")
      // .to(".indicator", {
      //   opacity: 1, ease: "slow(0.7,0.7,false)",
      //   onComplete() {
      //     $("header").fadeIn().removeClass("none");
      //   }
      // }, "<")

      // $(".fund-kh-btn").addClass("show");
      //     $("header").removeClass("none");
      //     $(".slogan").fadeIn();
      //     $(".main-search-btn").fadeIn();
      //     $(".banner-wrap").addClass("active");
      //     $(".indicator").fadeIn();
      let i = 0;
      const gap = 40;
      const bannerW = $(".banner-list").outerWidth(true);
      const largeBannerW = $(".video-banner").outerWidth(true);
      const centerW = _winW / 2 - bannerW / 2;
      const centerW2 = _winW / 2 - largeBannerW / 2;
      const videoCont = $("#banner");
      $("a").not("footer a, header .logo a").on("click", function (e) {
        e.preventDefault();
      });
      $(".indicator-control").on("click", function () {
        i++;
        console.log(i)
        gsap.to(".progress", { width: (i + 1) * 25, duration: 1 })
        if (i <= 2) {
          gsap.to(".slogan", { left: "-720px", })
          gsap.to($(".banner-list").eq(0), {
            left: (centerW - (i * (bannerW + gap)))
          })
          gsap.to($(".banner-list").eq(1), {
            left: (centerW + 1 * (bannerW + gap) - (i * (bannerW + gap)))
          })
          gsap.to($(".banner-list").eq(2), {
            left: (centerW + 2 * (bannerW + gap) - (i * (bannerW + gap)))
          })
          gsap.to($(".banner-list").eq(3), {
            left: (centerW + 3 * (bannerW + gap) - (i * (bannerW + gap)))
          })
        }
        if (i == 3) {
          $(".indicator-control").addClass("none-event");
          gsap.to($(".banner-list").eq(0), {
            left: -3 * (bannerW + gap) + centerW2
          })
          gsap.to($(".banner-list").eq(1), {
            left: -2 * (bannerW + gap) + centerW2
          })
          gsap.to($(".banner-list").eq(2), {
            left: -1 * (bannerW + gap) + centerW2
          })
          gsap.to($(".banner-list").eq(3), {
            left: centerW2,
            onComplete() {
              gsap.to(".video-banner", { left: 0, top: "50%", width: "100%", height: "100%", overflow: "visible", borderRadius: "0", duration: 1, })
              gsap.to(".video-banner-wrap .txt", { width: 495, top: 320, duration: 1, });
              gsap.to(".video-banner-wrap .txt2", { opacity: 1, visibility: "visible", duration: 1, delay: .5 });
              $(".arrow").fadeOut();
              $("header").addClass("transparent");
              $(".fund-kh-btn").addClass("dark");
              $(".indicator").addClass("white");
              $(".main-search-btn").addClass("white");
              $(".video-banner").addClass("active");
              videoCont.get(0).play();
              $(".video-banner").on("click", function () {
                gsap.to(".video-banner", {
                  left: centerW2, top: "55%", width: 720, height: 480, overflow: "hidden", borderRadius: 30, duration: 1,
                })
                $("header").removeClass("transparent");
                $(".fund-kh-btn").removeClass("dark");
                $(".main-search-btn").removeClass("white");
                $(".arrow").fadeIn();
                gsap.to(".video-banner-wrap .txt", { width: 202, top: 60, duration: 1, });
                $(".txt2").fadeOut();
                $(".indicator").removeClass("white");
                $(".indicator-control").removeClass("none-event");
                $(".video-banner").removeClass("active");
              });
            }
          })
        }
        if (i > 3) {
          i = 0;
          gsap.to(".slogan", { left: "64px", })
          gsap.to(".progress", { width: (i + 1) * 25, duration: 1 });
          $(".first").text(i + 1);
          gsap.to($(".banner-list").eq(0), {
            left: (centerW - (i * (bannerW + gap)))
          })
          gsap.to($(".banner-list").eq(1), {
            left: (centerW + 1 * (bannerW + gap) - (i * (bannerW + gap)))
          })
          gsap.to($(".banner-list").eq(2), {
            left: (centerW + 2 * (bannerW + gap) - (i * (bannerW + gap)))
          })
          gsap.to($(".banner-list").eq(3), {
            left: (centerW + 3 * (bannerW + gap) - (i * (bannerW + gap)))
          })
        }
        $(".first").text(i + 1);
      })
      $(".banner-list").eq(0).css("left", (centerW));
      $(".banner-list").eq(1).css("left", (centerW + 440));
      $(".banner-list").eq(2).css("left", (centerW + 880));
      $(".banner-list").eq(3).css("left", (centerW + 1320));

      // Fund Know How
      $(".fund-kh-btn").on("click", function () {
        $(".fund-kh-area").addClass("active");
        $(this).addClass("active");
        // $("body").addClass("fund-open");
      });

      $(".kh-detail-btn").on("click", function () {
        $(".slide-wrap").addClass("active");
        $(".kh-keyword-menu").fadeOut();
        $(".kh-scroll-to").fadeIn();
        $(this).fadeOut();
      });

      let khScrW = $(".kh-scroll-wrap").outerWidth(true);
      $(".kh-scroll-wrap").on("click", function () {
        gsap.to(".kh-scroll-wrap ", {
          x: (_winW - 600 - khScrW),
          duration: 1,
        })
      });
      // gsap.to(".kh-scroll-wrap", {
      //   x: (_winW - 600 - khScrW),
      //   scrollTrigger: {
      //     trigger: ".kh-scroll-wrap",
      //     start: "top top",
      //     scrub: 1,
      //     // markers: true,
      //   }
      // });

      $(".kh-close-btn").on("click", function () {
        $(".fund-kh-area").removeClass("active");
        $(".fund-kh-btn").removeClass("active");
        $(".slide-wrap").removeClass("active");
        $(".kh-hide-menu").removeClass("active");
        $(".kh-detail-btn").fadeIn();
        $(".kh-scroll-to").fadeOut();
        $(".kh-keyword-menu").fadeIn();
      });
      $(".indicator-menu li").each(function (i) {
        if (!$(".kh-hide-menu").hasClass("active")) {
          $(".indicator-menu li").on("click", function () {
            $(".kh-hide-menu").addClass("active");
            $(".slide-wrap").addClass("active");
            $(".kh-detail-btn").fadeOut();
            if ($(".kh-hide-menu").hasClass("active")) {
              $(".kh-scroll-to").fadeOut();
            }
          })
          if ($(".kh-hide-menu").hasClass("active")) {
            $(".kh-scroll-to").fadeOut();
          }
        }
        $(".indicator-menu li").eq(i).on("click", function () {
          $(".kh-search li").removeClass("active");
          $(".kh-search li").eq(i).addClass("active");
          if ($(".kh-hide-menu").hasClass("active")) {
            $(".kh-scroll-to").fadeOut();
          }
          if ($(".kh-search li").eq(0).hasClass("active")) {
            gsap.to(".easing-bar", { left: 0, width: 110, })
            $(".tab").removeClass("active").fadeOut();
            $(".tab").eq(0).addClass("active").fadeIn();
            $(".kh-hide-banner").fadeOut();
          }
          if ($(".kh-search li").eq(1).hasClass("active")) {
            gsap.to(".easing-bar", { left: 170, width: 164, })
            $(".tab").removeClass("active").fadeOut();
            $(".tab").eq(1).addClass("active").fadeIn();
            $(".kh-hide-banner").fadeIn();
          }
        })
      })

      $(".kh-search li").each(function (i) {
        $(this).on("click", function () {
          $(".kh-search li").removeClass("active");
          $(this).addClass("active");
          if ($(".kh-search li").eq(0).hasClass("active")) {
            gsap.to(".easing-bar", {
              left: 0,
              width: 110,
            })
            $(".tab").removeClass("active").fadeOut();
            $(".tab").eq(0).addClass("active").fadeIn();
            $(".kh-hide-banner").fadeOut();
          }
          if ($(".kh-search li").eq(1).hasClass("active")) {
            gsap.to(".easing-bar", {
              left: 170,
              width: 164,
            })
            $(".tab").removeClass("active").fadeOut();
            $(".tab").eq(1).addClass("active").fadeIn();
            $(".kh-hide-banner").fadeIn();
          }
        });
      });

      gsap.to(".txt-wrap", {
        scrollTrigger: {
          trigger: ".fixed-video-area",
          start: "top top",
          end: "bottom+=308px top",
          pin: true,
          pinSpacing: true,
          // markers: true,
        }
      })

      var endPosition = $(window).innerHeight() - $(".fund-con .fixed-area").innerHeight() - 40

      gsap.to($(".fund-con .fixed-area"), {
        scrollTrigger: {
          trigger: $(".fund-con .fixed-area"),
          start: () => "top-=80 top",
          end: () => "bottom+=" + endPosition + " bottom",
          endTrigger: $(".fund-area .fund-con .list-area"),
          scrub: 1,
          pin: true,
          pinSpacing: false,
          // markers: true,
          onUpdate: self => {
            self.refresh();
          }
        },
      });

      gsap.to($(".bg-color-wrap"), {
        scrollTrigger: {
          trigger: $(".bg-color-wrap"),
          start: () => "top+=" + _heightSum + " top",
          end: () => "bottom-=100% bottom",
          scrub: 2,
          // markers: true,
        },
        background: "#2A2E36"
      });

      var solutionMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".basic-bg",
          start: () => "top top",
          end: () => "bottom bottom",
          endTrigger: $(".news-area"),
          pin: true,
          pinSpacing: true,
          // markers: true,
          scrub: 1,
        },
      })
      solutionMotion.to($(".solution-area .bg-wrap"), {
        top: "0",
        width: "100%",
        height: "100%",
        opacity: 1,
        duration: 3,
      }, 'first')
        .to($(".basic-bg"), {
          backgroundSize: "100%",
          duration: 1,
        }, 'first')
        // .to($(".solution-area .bg-wrap .bg .dimd"), {
        //   opacity: 0.3,
        //   duration: 1,
        // }, 'first')
        .to($(".solution-area .bg-wrap"), {
          // opacity:1,
          // duration: 1,
        }).to($(".solution-area .bg-wrap"), {
          // opacity:1,
          // duration: 1,
        })

    },
    gnbFn: function () {
      // header
      $(".header-wrap").on("click", function () {
        if ($("header").hasClass("drop")) {
          $("header").removeClass("drop");
          $(".header-dimd").stop().hide();
        } else {
          $("header").addClass("drop");
          $(".header-dimd").stop().fadeIn();
        }
        if($(".video-banner").hasClass("active")){
          $("header").toggleClass("transparent");
        }
      });

      // $("header").on("mouseleave", function(){
      //   $("header").removeClass("drop");
      //   $(".header-dimd").stop().hide();
      // });
    },
    resizeFn: function () {
      $(window).resize(function () {
      }).resize();
    },
    scrollFn: function () {
      // header scroll
      let lastY = 0;
      let solutionArea = $(".solution-area").offset().top;
      // console.log(solutionArea);
      $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        if (scrollTop > lastY) {
          //내려갈때
          $("header").removeClass("show drop").addClass("hide");
          $(".header-dimd").hide();
        } else {
          //올라갈때
          $("header").removeClass("hide drop").addClass("show");
          lastY > 100 ? $("header").addClass("white") : $("header").removeClass("white");
          $(".header-dimd").hide();
        }
        lastY = scrollTop;

        if (scrollTop > solutionArea - 200) {
          $(".title span").addClass("active");
        }
      }).scroll();
    },
  }
}();

function scrollMotionTrigger() {
  if ($(".scroll-motion").size() > 0) {
    $(".scroll-motion:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 70%",
          end: "bottom top",
          toggleClass: { targets: $(".scroll-motion:visible").eq(q), className: "active" },
          once: true,
          //markers: true,
        },
      });
    });
  }
}

function scrollMotionTrigger1() {
  if ($(".scroll-motion1").size() > 0) {
    $(".scroll-motion1:visible").each(function (q) {
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 40%",
          end: "bottom top",
          toggleClass: { targets: $(".scroll-motion1:visible").eq(q), className: "active" },
          once: true,
          // markers: true,
        },
      });
    });
  }
}
