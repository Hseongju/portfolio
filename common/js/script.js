var _this_scroll = 0;       // 스크롤 up & down 체크위한 변수
var _isScrollTop;          // scrollTop 변수
var _pageScrollOffset;            // dimd 시 scrollTop 값 기억
var _device = '';           // 접속 device 체크 위한 변수
var _deviceCondition = '';  // 해상도 따른 device 체크 위한 변수
var _browser = '';          // browser 체크 위한 변수
var _anchorPdNum// 상단 여백 값
var _thrDepSwiper; // 3depth 스와이퍼
var _filterTop; // 필터 상단 top값
var _barWidthArr = [];
var _thrTotalWidth = 0;
var _newsDetailSwiper; // 코오롱 뉴스 상세 리스트
var _viewConTitHeight; // view 페이지 title 높이값
var _isMotionOnce = false; // resize 안에서 모션 한번만 작동하기 위한 변수
var _mainPopSwiper; // 메인팝업
var _mGnbAccordion; // mobile header accordion 변수
var _headerHeightArr = [];  // header
var _headerMaxHeight = 0;   // header
var _pathLength // top 버튼 stroke-dasharray
var _srchDataSwiper; // 데이터 검색, 선택 초기화 swiper 변수
var _popScrollTop;
var _fooH // 푸터 Height값
var _visualSwiper; // 비주얼 스와이퍼 변수
var _videoTime; // 비디오 영상 시간
var _progressBarMotion;
var _paybarH;
var _fixedBtnH;
var _rightH;

var commonScript = (function(){
  return {
    deviceChk : function(){
      // 디바이스 체크
      if(/Android/i.test(navigator.userAgent)) {
        _device = 'android';
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return navigator.userAgent.match(/(iPhone|iPod)/g) ? _device='ios' : _device='ipad';
      }else {
        _device = 'pc';
      }

      // 브라우저 체크
      var agent = navigator.userAgent.toLowerCase(),
          name = navigator.appName;

      if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1) {
        _browser = 'ie';
        $("html").addClass("ie");
      } else if(agent.indexOf('safari') > -1) { // Chrome or Safari
        if(agent.indexOf("chrome") > -1){
          _browser = 'chrome';
          $("html").addClass("chrome");
        }else{
          _browser = 'safari';
          $("html").addClass("safari");
        }
      } else if(agent.indexOf('firefox') > -1) { // Firefox
        _browser = 'firefox';
      }
    },
    commonFn: function(){

      // 비주얼 타이포 모션 스크립트
      var arrTit = [];
      
      $(".typo_motion").css("opacity", 1);

      typoMotion.incision(".typo_motion");
      $(".typo_motion span").each(function(q){
        arrTit.push($(".typo_motion span").eq(q));
      });
      $(".typo_motion").css("opacity", 1);
      TweenMax.staggerTo(arrTit, 1.1, {left:0, opacity:1, ease:Power3.easeInOut}, 0.07);

    },
    scrollFn: function(){
      // not IE
      $(window).on("scroll", function(){
        _isScrollTop =  $(window).scrollTop();
        
        if(window.innerWidth > 1024){
          if(_isScrollTop > _this_scroll) { // down
            if(_isScrollTop > 0){
              if($("header").size() > 0){
                if($(window).scrollTop() > 50){
                  if(!$("header").hasClass("mouse_hover")){
                    $("header").addClass("hide");
                  }
                }
              }

              if($(".fix_box_area").size() > 0) {
                $(".fixed_content_area .fix_box_area").removeClass("pd_top");
              }
            }
          }

          if(_isScrollTop < _this_scroll) { // up
            $("header").removeClass("hide");
            $("header").addClass("up_scroll");
            
            if($(".fix_box_area").size() > 0) {
              $(".fixed_content_area .fix_box_area").addClass("pd_top");
            }
          }
        }else{
          if($("body").hasClass("ios")){
            if(_isScrollTop > _this_scroll) { // down
              $(".m_navi_bar").addClass("scroll_down");
              // console.log("모바일");
            }else{
              $(".m_navi_bar").removeClass("scroll_down");
            }

            if(_isScrollTop == 0){
              $(".m_navi_bar").removeClass("scroll_down");
            }
          }

          if(_isScrollTop > _this_scroll) { // down
            $(".page_title_area").addClass("up");
            $(".fixed_mobile.fixed").removeClass("move");
            
            if(_isScrollTop < _filterTop) {
              $(".fixed_mobile").removeClass("move");
            }
          } else { // up
            $(".page_title_area").removeClass("up");
            $(".page_title_area").addClass("fixed");
            $(".fixed_mobile.fixed").addClass("move");
          }
          
          if(_isScrollTop == 0){
            $(".page_title_area").removeClass("up");
            $(".page_title_area").removeClass("fixed");
            $(".fixed_mobile").removeClass("fixed move");
            if($(".filter_bar_area").next(".white_inner").size() <= 0) {
              $(".filter_bar_area").next().not(".no_srch_area").css("padding-top", 0);
            }
          }
        }
        
        _this_scroll = _isScrollTop;

        if(_isScrollTop == 0){
          $("header").removeClass("up_scroll");
        }

        if(_isScrollTop <= 100) {
          if($(".fix_box_area").size() > 0) {
            $(".fixed_content_area .fix_box_area").removeClass("pd_top");
          }
        }

        // 필터영역 sticky
        if($(".fixed_mobile_w").size() > 0) {
          _filterTop = $(".fixed_mobile_w").offset().top;
        }

        if($(".fixed_mobile").size() > 0) {
          $(".filter_bar_area").each(function(q) {
            if(window.innerWidth <= 1024) { // mobile            
              if(_isScrollTop > _filterTop) {
                $(this).find(".fixed_mobile").addClass("fixed");

                if($(this).find(".fixed_mobile").hasClass("fixed")) {
                  if($(this).next(".white_inner").size() <= 0) {
                    $(this).next().not(".no_srch_area").css("padding-top", $(this).find(".fixed_mobile").height());
                  }
                }
              // } else {
              //   $(this).find(".fixed_mobile").removeClass("fixed");
  
              //   if($(this).next(".white_inner").size() <= 0) {
              //     $(this).next().not(".no_srch_area").css("padding-top", 0);
              //   }
              }

              if(_isScrollTop + 60 < _filterTop) {
                if($(this).find(".fixed_mobile").hasClass("move")) {
                  $(this).find(".fixed_mobile").removeClass("fixed");
  
                  if($(this).next(".white_inner").size() <= 0) {
                    $(this).next().not(".no_srch_area").css("padding-top", 0);
                  }
                }
              }
            } else { // pc
              $(this).find(".fixed_mobile").removeClass("fixed");
              
              if($(this).next(".white_inner").size() <= 0) {
                $(this).next().not(".no_srch_area").css("padding-top", 0);
              }
            }
          });
        }

        // 이용안내 - 강사/제휴 신청안내
        if($(".page_title_area .txt_wrap .txt").size() > 0) {
          if(window.innerWidth <= 1024) {
            $(".divide_area .inner .box").each(function() {
              if(_isScrollTop <= $(".page_title_area .txt_wrap .txt").offset().top) {
                $(".divide_area .inner .box.left").addClass("active");
                $(".divide_area .inner .box.right").removeClass("active");
              } else {
                $(".divide_area .inner .box.left").removeClass("active");
                $(".divide_area .inner .box.right").addClass("active");
              }
            });
          }
        }

        // 앵커 이동 공통 기능
        if($(".anchor_func_area").size() > 0) {
          if(window.innerWidth <= 1024) {
            $(".anchor_func_area .anchor_con").each(function(q) {
              if(_isScrollTop > $(this).offset().top - $( ".anchor_btn_area").innerHeight() - $(".page_title_area.fixed").innerHeight() - 1) {
                $(".anchor_btn_area .anchor_btn").removeClass("on");
                $(".anchor_btn_area .anchor_btn").eq(q).addClass("on")
              }
            });
          }
        }

        // 탑버튼
        repositioningTopBtn();

        // if($(".class_gate_w").size() > 0){
        //   if($(window).scrollTop() + window.innerHeight > $("footer").offset().top) {
        //     $(".class_gate_w .btn_wrap").addClass("no_fixed");
        //   }else {
        //     $(".class_gate_w .btn_wrap").removeClass("no_fixed");
        //   }
        // }
      });
      $(window).scroll();

      // for IE
      $("body").on("scroll", function(){
        
      });

      // scrollMotion
      scrollMotionTrigger();
    },
    swiperFn: function(){
      if($(".visual_wrap").size() > 0){
        _progressBarMotion = gsap.to($(".visual_wrap .progress_bar .bar"), 4, {width:"100%", ease:"none", onComplete:function(){
          _visualSwiper.slideNext();
        }});

        _visualSwiper = new Swiper(".visual_div .swiper-container", {
          parallax: true,
          speed:1200,
          loop:true,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: ".visual_div .swiper-button-next",
            prevEl: ".visual_div .swiper-button-prev",
          },
          pagination: {
            el: ".visual_div .swiper-pagination",
            type: "fraction",
          },
          on:{
            slideChangeTransitionStart:function(){
              if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
                if ($(".visual_wrap .swiper-slide").not(".swiper-slide-active, .swiper-slide-duplicate-active").find("video").size() > 0){
                  $(".visual_wrap .swiper-slide").not(".swiper-slide-active, .swiper-slide-duplicate-active").find("video").get(0).pause();
                }
  
                $(".visual_wrap .swiper-slide-active video").get(0).currentTime = 0;
                
                _videoTime = $(".visual_wrap .swiper-slide-active video")[0].duration;
                
                if(isNaN(_videoTime)){
                  var vid = $(".visual_wrap .swiper-slide-active video").get(0)
                  vid.onloadedmetadata = function() {
                    _videoTime = $(".visual_wrap .swiper-slide-active video")[0].duration;
                    _progressBarMotion.duration(_videoTime).restart();
                  };
                }

              }
              else {
                _videoTime = 5;
              }
            },
            slideChangeTransitionEnd:function(){
              if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
                $(".visual_div .swiper-slide-active video").get(0).play();
              }

              $(".visual_div .swiper-slide").removeClass("on");

              if(!_isFirst){
                $(".visual_div .swiper-slide-active").addClass("on");
                $(".visual_div .swiper-slide-duplicate-active").addClass("on");
              }

              if($(".visual_area .visual_btn").hasClass("pause")){
                _progressBarMotion.duration(_videoTime).restart();
              }
            },
          }
        });

        $(".visual_area .visual_btn").on("click", function(){
          if($(this).hasClass("pause")){
            $(this).removeClass("pause");
            $(this).addClass("play");
            _progressBarMotion.pause();
            if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
              $(".visual_div .swiper-slide-active video").get(0).pause();
            }
          }else if($(this).hasClass("play")){
            $(this).removeClass("play");
            $(this).addClass("pause");
            _progressBarMotion.play();
            if ($(".visual_wrap .swiper-slide-active video").size() > 0) {
              $(".visual_div .swiper-slide-active video").get(0).play();
            }
          }
        });
      }

      // 이미지 슬라이드
      if($(".lecture_img_swiper").size() > 0) {
        $(".lecture_img_swiper").each(function(q) {
          if($(this).find(".swiper-slide").length > 1) {
            $(this).removeClass("one_slide");

            $(this).find(".swiper-container").after($('<div class="swiper-button-prev"></div>'));
            $(this).find(".swiper-container").after($('<div class="swiper-button-next"></div>'));

            var _lectureImgSwiper = new Swiper($(this).find(".swiper-container"), {
              slidesPerView: "auto",
              observer: true,
              observeParents: true,
              watchOverflow: true,
              pagination: {
                el: $(this).find(".swiper-pagination"),
                type: "progressbar",
              },
              navigation: {
                nextEl: $(this).find(".swiper-button-next"),
                prevEl: $(this).find(".swiper-button-prev"),
              },
            });
          } else {
            $(this).addClass("one_slide");
          }
        });
      }
      // 수강후기 슬라이드
      if($(".course_review_slide").size() > 0){
        var courseReviewSwiper = new Swiper(".course_review_slide .swiper-container", {
          slidesPerView: "auto",
          observer: true,
          observeParents: true,
          pagination: {
            el:".course_review_slide .swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: $(".course_review_slide .swiper-button-next"),
            prevEl: $(".course_review_slide .swiper-button-prev"),
          },
        });
      }
      // 지점안내 슬라이드
      if($(".store_info_swiper").size() > 0) {
        $(".store_info_swiper").each(function(q) {
          var _storeInfoSwiper = new Swiper($(this).find(".swiper-container"), {
            slidesPerView: "auto",
            observer: true,
            observeParents: true,
            speed: 800,
            pagination: {
              el: $(this).find(".swiper-pagination"),
              type: "fraction",
            },
            navigation: {
              nextEl: $(this).find(".swiper-button-next"),
              prevEl: $(this).find(".swiper-button-prev"),
            },
          });
        });
      }

      if($(".border_tab_area").size() > 0){
        var borderTabSwiper = [];
        $(".border_tab_area").each(function(q){
          $(this).find(".swiper-container").addClass("border_tab_swiper" + q);

          if($(this).find(".swiper-slide").length == 2){
            $(this).addClass("two");
          }else if($(this).find(".swiper-slide").length == 3){
            $(this).addClass("thr");
          }else if($(this).find(".swiper-slide").length == 4){
            $(this).addClass("fou");
          }else if($(this).find(".swiper-slide").length > 4){
            $(this).addClass("more");
            borderTabSwiper[q]= new Swiper(".border_tab_swiper"+q, {
              slidesPerView: "auto",
              observer: true,
              observeParents: true,
              on:{
                init : function(){
                  $(".border_tab_swiper" + q).addClass("start");
                },
                transitionStart : function(){
                  $(".border_tab_swiper" + q).removeClass("start");
                  $(".border_tab_swiper" + q).removeClass("end");
                },
                transitionEnd : function(){
                  if(borderTabSwiper[q].isEnd){
                    $(".border_tab_swiper" + q).addClass("end");
                    $(".border_tab_swiper" + q).removeClass("start");
                  }else if(borderTabSwiper[q].isBeginning){
                    $(".border_tab_swiper" + q).addClass("start");
                    $(".border_tab_swiper" + q).removeClass("end");
                  }
                }
              }
            });
          }

          if(!$(this).hasClass("tab_btn_area")) {
            $(this).find(".swiper-slide").on("click", function(){
              $(this).addClass("on").siblings().removeClass("on");
            });
          }
        });
      }

      if($(".circle_sel_swiper").size() > 0){
        var circleSelSwiper = [];
        $(".circle_sel_swiper").each(function(q) {
          $(this).find(".swiper-container").addClass("circle_sel_swiper" + q);

          circleSelSwiper[q] = new Swiper(".circle_sel_swiper"+q, {
            slidesPerView: "auto",
            observer: true,
            observeParents: true,
            on:{
              init : function(){
                $(".circle_sel_swiper" + q).addClass("start");
              },
              transitionStart : function(){
                $(".circle_sel_swiper" + q).removeClass("start");
                $(".circle_sel_swiper" + q).removeClass("end");
              },
              transitionEnd : function(){
                if(this.isEnd){
                  $(".circle_sel_swiper" + q).addClass("end");
                  $(".circle_sel_swiper" + q).removeClass("start");
                }else if(this.isBeginning){
                  $(".circle_sel_swiper" + q).addClass("start");
                  $(".circle_sel_swiper" + q).removeClass("end");
                }
              }
            }
          });
          
          $(this).find(".drop_btn").on("click", function(){
            if(!$(this).parents(".circle_sel_swiper").hasClass("click")){
              $(this).parents(".circle_sel_swiper").addClass("click");
            } else {
              $(this).parents(".circle_sel_swiper").removeClass("click");
            }
          });

          $(this).find(".swiper-slide").on("click", function(){
            $(this).addClass("on").siblings().removeClass("on");

            if($(this).parents(".circle_sel_swiper").hasClass("click")) {
              circleSelSwiper[q].slideTo($(".circle_sel_swiper .swiper-slide.on").index(), 0, false);
            }
            $(this).parents(".circle_sel_swiper").removeClass("click");

          });
        });
      }

      if($(".thr_dep_area").size() > 0){
        var thrDepSwiper = [];
        $(".thr_dep_area").each(function(q) {
          $(this).find(".swiper-container").addClass("thr_dep_area" + q);

          thrDepSwiper[q] = new Swiper(".thr_dep_area"+q, {
            slidesPerView: "auto",
            observer: true,
            observeParents: true,
            on: {
              init: function() {
                $(".thr_dep_area" + q).addClass("start");
              },
              transitionStart : function(){
                $(".thr_dep_area" + q).removeClass("start");
                $(".thr_dep_area" + q).removeClass("end");
              },
              transitionEnd : function(){
                if(this.isEnd){
                  $(".thr_dep_area" + q).addClass("end");
                  $(".thr_dep_area" + q).removeClass("start");
                }else if(this.isBeginning){
                  $(".thr_dep_area" + q).addClass("start");
                  $(".thr_dep_area" + q).removeClass("end");
                }
              }
            }
          });

          !$(this).find(".drop_btn").length == 0 ? $(this).addClass("drop_type") : $(this).removeClass("drop_type");
          $(this).find(".drop_btn").on("click", function() {
            if(!$(this).parents(".thr_dep_area").hasClass("click")){
              $(this).parents(".thr_dep_area").addClass("click");
            }else{
              $(this).parents(".thr_dep_area").removeClass("click");
              $(this).parents(".thr_dep_area").addClass("start");
            }
          });
          $(this).find(".swiper-slide").on("click", function(){
            $(this).addClass("on").siblings().removeClass("on");
            
            if($(this).parents(".thr_dep_area").hasClass("click")) {
              thrDepSwiper[q].slideTo($(".thr_dep_area .swiper-slide.on").index(), 0, false);
            }
            $(this).parents(".thr_dep_area").removeClass("click");
          });
        });
      }

      if($(".srch_data_div").size() > 0){
        _srchDataSwiper = new Swiper(".srch_data_div .swiper-container", {
          slidesPerView: "auto",
          simulateTouch:false,
          observer: true,
          observeParents: true,
          noSwipingClass:"no_swiping",
          noSwiping:true,
        });
      }

      var originActiveIndex;

      if($(".inquiry_slide_w").size() > 0){
        var inquirySwiper = new Swiper(".inquiry_slide_w .swiper-container", {
          slidesPerView: "auto",
          // centeredSlides:true,
          observer: true,
          observeParents: true,
          autoHeight:true,
          pagination: {
            el: ".inquiry_slide .swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".inquiry_slide .swiper-button-next",
            prevEl: ".inquiry_slide .swiper-button-prev",
          },
          on:{
            init : function(){

            },
            transitionStart : function(){
              if(inquirySwiper.activeIndex < $(".inquiry_slide_w .swiper-slide.on").index() && Math.abs(inquirySwiper.activeIndex - $(".inquiry_slide_w .swiper-slide.on").index()) < 3){
                inquirySwiper.activeIndex = $(".inquiry_slide_w .swiper-slide.on").index();
                inquirySwiper.updateAutoHeight(0);
                inquirySwiper.activeIndex = $(".inquiry_slide_w .swiper-slide.swiper-slide-active").index();
              }
            },
          }
        });

        $(".inquiry_slide_w .swiper-slide .txt").each(function(){
          if($(this).height() > 76){
            $(this).addClass("on");
            $(this).parents(".swiper-slide").find(".more").show();
          }
        });

        $(".inquiry_slide_w .swiper-slide .more").each(function(){
          $(this).on("click", function(){
            originActiveIndex = inquirySwiper.activeIndex;
            inquirySwiper.activeIndex = $(this).parents(".swiper-slide").index();

            if(!$(this).parents(".swiper-slide").hasClass("on")){
              $(this).parents(".swiper-slide").addClass("on");
              $(this).parents(".swiper-slide").find(".txt").removeClass("on");

              $(this).parents(".swiper-slide").siblings().removeClass("on")
              $(this).parents(".swiper-slide").siblings().find(".txt").addClass("on");
              $(this).parents(".swiper-slide").siblings().find(".more").text("더보기")
              inquirySwiper.updateAutoHeight(0);
              $(this).text("접기")
            }else{
              $(this).parents(".swiper-slide").removeClass("on");
              $(this).parents(".swiper-slide").find(".txt").addClass("on");
              inquirySwiper.updateAutoHeight(0);
              $(this).text("더보기")
            }

            inquirySwiper.activeIndex = originActiveIndex;
          })
        })
      }
    },
    resizeFn: function(){
      $(window).resize(function(){
        _rightH = $(".fixed_content_area .shadow_div").height();

        $("header .place_pop_area .for_padding").height(window.innerHeight);
        $(".m_navi_bar .all_menu_pop").height(window.innerHeight);
        
        // 탑버튼
        repositioningTopBtn();
        
        // 이미지 리사이징
        imgResizingFn();

        // 메인 비주얼 모션
        if($(".main").size() > 0){
          if(window.innerWidth > 1280){
            $(".visual_wrap").removeAttr("style");
            gsap.to($(".visual_div"), {duration: 1.3, width: "calc(100% - 200px)", height: "67vh", borderRadius: "16px", ease: Power2.easeOut});
          }else if(window.innerWidth > 1024 && window.innerWidth <= 1280){ // pc
            $(".visual_wrap").removeAttr("style");
            gsap.to($(".visual_div"), {duration: 1.3, width: "calc(100% - 100px)", height: "67vh", borderRadius: "16px", ease: Power2.easeOut});
          }else{ // mobile
            $(".visual_wrap").height(window.innerHeight * 0.74)
            gsap.to($(".visual_div"), {duration: 1.3, width: "calc(100% - 4rem)", height: "calc(100% - 104px)", borderRadius: "12px", ease: Power2.easeOut});
  
            $(".lecture_list_w .swiper-container").removeClass("no_swiping")
          }
        }
        
        // 팝업 visible 일 때
        if($(".tit_popup").is(":visible")){
          $(".tit_popup:visible .pop_cont").height($(".tit_popup:visible").find(".pop_wrap").height() - $(".tit_popup:visible").find(".pop_head").innerHeight());
        }
        
        if($(".srch_popup").size() > 0) {
          if($(".srch_popup").is(":visible")) {
            $(".srch_popup:visible").find(".pop_wrap").height(Math.ceil($(".srch_popup:visible").find(".for_padding").height() + $(".srch_popup:visible").find(".scroll_area").innerHeight()));
            if(!$(".reset_wrap").hasClass("active")) {
              $(".srch_popup .for_padding .scroll_area").height($(".srch_popup").find(".for_padding").height());
            } else {
              $(".srch_popup .for_padding .scroll_area").height($(".srch_popup").find(".for_padding").height() - $(".reset_wrap").innerHeight() + 12); // 플로팅 버튼 패딩 윗 여백값
            }
          }
        }

        // 탭메뉴 너비에 따라 드롭다운
        if($(".filter_bar_area .circle_sel_swiper").size() > 0) {
          $(".filter_bar_area .tab_con_area .circle_sel_swiper").each(function(i) {
            _barWidthArr[i] < $(this).parents(".tab_con_area").innerWidth() ? $(this).addClass("all") : $(this).removeClass("all");
          });
        }

        if($(".thr_dep_area").size() > 0) {
          $(".thr_dep_area").each(function(i) {
            if(_thrTotalWidth <= $(this).find(".swiper-container").width()) {
              $(this).addClass("all");
              $(this).find(".drop_btn").removeClass("show");
            } else {
              $(this).removeClass("all click");
              $(this).find(".swiper-container").removeClass("end");
              $(this).find(".drop_btn").addClass("show");
            }
          });
        }
        
        // 해상도 따른 pc, mobile 구분
        if(window.innerWidth > 1024 ){ // pc
          _deviceCondition = "pc";

          // 헤더 pc버전
          $("header").addClass("pc");
          if($("header").hasClass("mobile")){
            _mGnbAccordion = -1;
            $("header .gnb > li").removeClass("on");
            $("header").removeClass("mobile");
          }
          $("header .gnb_w").removeAttr("style");

          if($(".srch_data_div").size() > 0){
            $(".srch_data_div .swiper-wrapper").removeAttr("style");
            if(_srchDataSwiper.destroyed != true){
              // _srchDataSwiper.destroy();
            }
          }

          // 페이지 상단 타이틀 영역
          if($(".page_title_area .tit_div.arrow").size() > 0) {
            if($(".page_title_area .tit_div.arrow").hasClass("active")) {
              $("body").removeClass("stop_scroll");
              $("body, html").off("scroll touchmove mousewheel");
              $(".page_title_area").removeClass("bg_white");
              $(".page_title_area .m_pop_dimd").stop(true, true).fadeOut(300);
              $("footer").removeClass("law_index");
            }
          }
          
          // 강좌상세 pc (ex: CLS-01-009 )
          if($(".right_box_fix_area").size() > 0) {
            $(".right_box_fix_area .fix_box_area .course_popup").each(function(q) {
              if(!$(this).hasClass("list")) {
                $(".course_popup:visible").find(".for_padding").height($(".course_popup:visible").find(".pop_wrap").height() - ($(".course_popup:visible").find(".btn_area").innerHeight() + 1));
                $(".course_popup:visible").height($(".course_popup:visible").find(".pop_cont").height());
                $(".course_popup.list").removeAttr("style");
                
                if($(this).find(".form_select_div").hasClass("on")) {
                  $("body").removeClass("stop_scroll");
                  $("body, html").off("scroll touchmove mousewheel");
                  $("body").removeClass("lock");
                }
              } else {
                if($(this).hasClass("active")) {
                  $("body").removeClass("stop_scroll");
                  $("body, html").off("scroll touchmove mousewheel");
                  $("body").removeClass("lock");
                  $(".fix_box_area").find(".box_dimd").removeClass("high_index").stop(true, true).fadeOut();
                  $(".course_popup.list").find(".for_padding").height($(".course_popup.list").find(".pop_wrap").height() - ($(".course_popup.list").find(".btn_area").innerHeight() + 1));
                  $(".course_popup.list").height($(".course_popup.list").find(".pop_cont").height());
                  $(".course_popup.list").find(".pop_wrap .pop_cont .for_padding .box_con").css("opacity", 1);
                  $(".course_popup.list").find(".btn_area").css("opacity", 1);
                }
                
                if($(".course_popup.multiple").find(".list_wrap").is(":visible")) {
                  $(this).addClass("active");
                  $("body").removeClass("lock");
                }
              }
            });
          }

          if($(".slide_area .lecture_img_swiper").size() > 0) {
            $(".lecture_img_swiper").each(function(q) {
              $(this).parents(".slide_area").hasClass("spread") ? $(this).addClass("off_slide") : $(this).removeClass("off_slide");
            });
          }

          // 필터팝업 pc버전
          if($(".filter_bar_div").size() > 0) {
            if($(".filter_list_wrap").hasClass("show")) {
              $("body").removeClass("stop_scroll");
              $("body, html").off("scroll touchmove mousewheel");
              $(".m_navi_bar").addClass("hide");
              $("body").removeClass("lock");
              
              $(".filter_list_wrap").hide();
              $(".filter_open_area .btn").removeClass("active");
              $(".filter_open_area").siblings(".dimd").hide();
              $(".filter_list_wrap").removeClass("show");
            }
          }

          if($(".mobile_acco_div").size() > 0) {
            $(".accordion_type").each(function() {
              $(this).find(".list_div").removeClass("on");
              $(this).parents(".mobile_acco_div").addClass("open");
              $(this).find(".hide_con").removeAttr("style");

              if(!$(this).parents(".mobile_acco_div").hasClass("first") && $(".white_inner").size() > 0){
                $(this).parents(".mobile_acco_div").addClass("first");
              }
            });
          }

          // 수강결제 팝업
          if($(".open_pop").size() > 0) {
            $(".pop_drop").on("click", function(){
              $(".open_pop").show();
              // $("body").css({overflow: "hidden"});
              // console.log("눌리긴함");
            });
            $(".open_pop .btn_close").on("click", function(){
              $(this).parents(".open_pop").hide();
              // $("body").css({overflow: "visible"});
            });
          }
        }else{ // mobile
          _deviceCondition = "mobile";

          if(!_isMotionOnce){
            if(!$("header .place_pop_area").hasClass("show") && !$("header .mypage_pop_area").hasClass("show")){
              $(".mypage_pop_area, .place_pop_area").css("opacity", "0");
              _isMotionOnce = true
            }
          }

          if($(".srch_data_div").size() > 0){
            var srchDataSwiper = new Swiper(".srch_data_div .swiper-container", {
              slidesPerView: "auto",
              simulateTouch:false,
              observer: true,
              observeParents: true,
              noSwipingClass:"no_swiping",
              noSwiping:true,
              on:{
                init : function(){
                  $(".srch_data_div").addClass("start");
                },
                transitionStart : function(){
                  $(".srch_data_div").removeClass("start");
                  $(".srch_data_div").removeClass("end");
                },
                transitionEnd : function(){
                  if(srchDataSwiper.isEnd){
                    $(".srch_data_div").addClass("end");
                    $(".srch_data_div").removeClass("start");
                  }else if(srchDataSwiper.isBeginning){
                    $(".srch_data_div").addClass("start");
                    $(".srch_data_div").removeClass("end");
                  }
                }
              }
              
            });
          }

          if($(".page_title_area .tit_div.arrow").size() > 0) {
            if($(".page_title_area .tit_div.arrow").hasClass("active")) {
              $(".page_title_area").addClass("bg_white");
              $("body").addClass("stop_scroll");
              $("body, html").on('scroll touchmove mousewheel', function (e) {
                e.preventDefault();
              });
              $(".page_title_area .m_pop_dimd").stop(true, true).fadeIn(300);
              $("footer, .btn_top").addClass("law_index");
            } else {
              $(".page_title_area").removeClass("bg_white");
              $("body").removeClass("stop_scroll");
              $("body, html").off("scroll touchmove mousewheel");
              $(".page_title_area .m_pop_dimd").stop(true, true).fadeOut(300);
              $("footer").removeClass("law_index");
              setTimeout(function() {
                $(".btn_top").removeClass("law_index");
              }, 300);
            }

            if($(".page_title_area .tit_popup").is(":visible")) {
              var timer = null;
              clearTimeout(timer);

              timer = setTimeout(function(){
                if(window.innerWidth <= 1024) {
                  $("body").removeClass("stop_scroll");
                  $("body, html").off("scroll touchmove mousewheel");
                  $(".page_title_area").removeClass("bg_white");
                  $(".page_title_area .tit_div.arrow").removeClass("active");
                  $(".page_title_area .tit_popup").stop(true, true).slideUp();
                  $(".page_title_area .m_pop_dimd").stop(true, true).fadeOut(300);
                  $("footer, .btn_top").removeClass("law_index");
                }
              }, 100); 
            }
          }

          // 강좌상세 mobile (ex: CLS-01-009)
          if($(".right_box_fix_area").size() > 0) {
            $(".right_box_fix_area .fix_box_area .course_popup").each(function() {
              if(!$(this).hasClass("list")) {
                $(".course_popup").find(".for_padding").height("auto");
                $(".course_popup").height("auto");
                $(".course_popup").removeClass("on"); 
                if($(this).find(".form_select_div").hasClass("on")) {
                  $("body").addClass("stop_scroll");
                  $("body, html").on("scroll touchmove mousewheel", function (e) { e.preventDefault();});
                  setTimeout(function(){
                    $("body").addClass("lock");
                  }, 100);
                }
              } else {
                if($(this).hasClass("active")) {
                  $("body").addClass("stop_scroll");
                  $("body, html").on("scroll touchmove mousewheel", function (e) { e.preventDefault();});
                  $(".fix_box_area").find(".box_dimd").addClass("high_index").stop(true, true).fadeIn();
                  setTimeout(function(){
                    $("body").addClass("lock");
                  }, 100);
                  $(".course_popup.list .box_con, .course_popup.list .btn_area").removeAttr("style");

                  if($(this).find(".form_select_div").hasClass("on")) {
                    $(this).removeClass("active");
                    $(".right_box_fix_area .fix_box_area .box_dimd").hide();
                  }
                }
              }
            });
          }

          // 필터팝업 mobile버전
          if($(".filter_bar_div").size() > 0) {
            if($(".filter_list_wrap").not(".show").is(":visible")) {
              $(".filter_list_wrap").hide();
              $(".filter_open_area .btn").removeClass("active");
            }
          }

          // 상세검색 팝업 mobile
          if($(".srch_popup").size() > 0) {
            if($(".srch_popup").hasClass("show")) {
              $("body").addClass("stop_scroll");
              $("body, html").on('scroll touchmove mousewheel', function (e) {
                e.preventDefault();
              });
            }
          }

          // 페이지 상단 비주얼 영역
          if($(".top_visual.full .bg_img").size() > 0) {
            if(window.innerWidth <= 1024) {
              gsap.to(".page_cont_area .top_visual", {
                scrollTrigger: {
                  trigger: ".top_visual.full .bg_img",
                  start:"top top",
                  endTrigger: $(".page_cont_area .bg_inner"),
                  end: "bottom bottom",
                  pin: true,
                  pinSpacing: false,
                  // markers: true,
                },
              });
            }
          }

          // 모바일 아코디언
          if($(".mobile_acco_div").size() > 0) {// 모바일 (ex: CLS-01-009)
            $(".accordion_type").each(function() {
              $(this).parents(".mobile_acco_div").removeClass("open");

              if($(".white_inner").size() > 0){
                if($(this).parents(".mobile_acco_div").hasClass("first")){
                  $(this).find(".list_div").find(".hide_con").hide();
                  $(this).parents(".mobile_acco_div").removeClass("first");
                }
              }
            });
          }

          if($(".slide_area .lecture_img_swiper").size() > 0) {
            $(".lecture_img_swiper").each(function(q) {
              if($(this).parents(".slide_area").hasClass("spread")) {
                $(this).removeClass("off_slide");
              } else {
                $(this).addClass("off_slide");
              }
            });
          }

          // 이용안내 - 강사/제휴 신청안내
          if($(".divide_area .inner .box").size() > 0) {
            if(window.innerWidth > 1024) {
              $(".divide_area .inner .box").each(function() {
                $(this).on("mouseenter focusin", function() {
                  $(this).addClass("active").siblings().removeClass("active");
                });
              });
            }
          }

          // 결제 fixed_bar
          if($(".payment_bar").size() > 0) {

            // 수강결제 resize
            if($(".total_price_info").size() > 0){
              $(".total_price_info").find(".txt_con").removeClass("on");
              $(".hide_con_w").hide();
            }
          
          }

          // 수강결제 팝업
          if($(".open_pop").size() > 0) {
            $(".open_pop").hide();
          }
        }
        
        // 팝업 리사이즈
        popupResize();

        // 콘텐츠 영역 최소높이값 설정
        setTimeout(function(){
          $(".cont_wrap").css("min-height", window.innerHeight - $("footer").innerHeight());
          repositioningTopBtn();
        }, 100);


        if($(".layer_popup").is(":visible")){
          $("body").addClass("stop_scroll");
          $("body, html").on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
          });
        }
      }).resize();
    },
    popupFn:function(){
      // 팝업 닫기
      if(window.innerWidth > 1024){

      }else{

      }
      $(".layer_popup .pop_wrap .btn_close").on("click", function(){
        $(this).parents(".layer_popup").fadeOut();

        if(window.innerWidth <= 1024){
          if($(this).parents(".layer_popup").find(".pop_wrap").hasClass("full")){
            $(this).parents(".layer_popup").fadeOut(300, function(){
              $("body").removeClass("stop_scroll");
              $("body, html").off("scroll touchmove mousewheel");
            });
          }else{
            $(this).parents(".layer_popup").fadeOut();
            $(this).parents(".layer_popup").find(".pop_wrap").stop(true, true).slideUp(300, function(){
              $("body").removeClass("stop_scroll");
              $("body, html").off("scroll touchmove mousewheel");
            });
            
          }
        }
        
        popupResize();
      });

      if(window.innerWidth <= 1024){
        $('.layer_popup').on("click", function(e){
          if($(e.target).parents().hasClass("pop_wrap")){
            
          }else{
            if($(this).find(".pop_wrap").hasClass("full")){
              $(this).fadeOut(300, function(){
                $("body").removeClass("stop_scroll");
                $("body, html").off("scroll touchmove mousewheel");
              });
            }else{
              $(this).fadeOut();
              $(this).find(".pop_wrap").stop(true, true).slideUp(300, function(){
                $("body").removeClass("stop_scroll");
                $("body, html").off("scroll touchmove mousewheel");
              });
            }
          }
        });
      }
      
    },
    openPopupFn: function(popName, comebackEl, customFunc){
      var designatedPopup = $(popName) || $("#popName");
      var comebackElement = comebackEl;
      
      gsap.delayedCall(0.1, function () {
        designatedPopup.show();
        designatedPopup.attr("tabindex", 0).focus();
        popupResize();

        //gsap 완료 후 호출할 함수
        if(customFunc){
          customFunc();
        }
        designatedPopup.find("input[type=text]").eq(0).focus();
        $("body").addClass("stop_scroll");
      });

      designatedPopup.find(".btn_close").on("click", function () {
        designatedPopup.hide();
        comebackElement.attr("tabindex", 0).show().focus();
        $("body").removeClass("stop_scroll");
      });      
    },
  }
})();

$(window).on("load", function(){
  commonScript.deviceChk();
  // commonScript.headerFooterFn();
  gsap.delayedCall(0.2, function() {
    commonScript.swiperFn();
    commonScript.commonFn();
    commonScript.resizeFn();
    commonScript.scrollFn();
    commonScript.popupFn();
  });
  
});

function imgResizingFn(){
  var imgNum;
  $(".img_resize_w").each(function(){
    if($(this).find("img").size() >= 2){
      if(window.innerWidth > 768){
        imgNum = 0;
      }else{
        imgNum = 1;
      }
    }else{
      imgNum = 0;
    }

    if($(this).find("img").get(imgNum).naturalWidth / $(this).find("img").get(imgNum).naturalHeight <= $(this).width() / $(this).innerHeight()){
      $(this).addClass("reverse");
    }else{
      $(this).removeClass("reverse");
    }
  });
}

function scrollMotionTrigger(){
  if($(".scroll_motion").size() > 0){
    $(".scroll_motion:visible").each(function(q){
      gsap.to($(this), {
        scrollTrigger: {
          trigger: $(this),
          start: "top 80%",
          end:"bottom top",
          toggleClass: {targets: $(".scroll_motion:visible").eq(q), className: "active"},
          once: true,
          // markers: true,
        },
      });
    });
  }
}

function popupResize(){
  $(".layer_popup:visible").css("top","0px") // 스크롤 없는 팝업 내에서 생기는 ios 노치영역 배경색 오류 해결 위해 적음
  $(".layer_popup:visible").find(".pop_wrap, .pop_cont").css({"height":"", "transform":"translate(0,0)"});
  
  var fixedBtn;

  if($(".fixed_bot_btn").size() > 0){
    fixedBtn = $(".layer_popup:visible").find(".fixed_bot_btn").outerHeight(true)
  }else if($(".fixed_out_btn").size() > 0){
    fixedBtn = $(".layer_popup:visible").find(".fixed_out_btn").outerHeight(true)
  }

  if(_deviceCondition == 'pc'){
    $(".layer_popup:visible").find(".pop_cont").height($(".layer_popup:visible").find(".pop_wrap").height() - $(".layer_popup:visible").find(".pop_head").innerHeight())
    $(".layer_popup:visible").find(".pop_wrap").height(Math.ceil($(".layer_popup:visible").find(".pop_cont").height() + $(".layer_popup:visible").find(".pop_head").innerHeight())); // 소수점 버림

    $(".layer_popup:visible").find(".pop_cont").innerHeight($(".layer_popup:visible").find(".pop_cont").height() - fixedBtn);

    if($(".fixed_bot_btn").size() > 0){
      $(".layer_popup:visible").find(".scroll_area").removeAttr("style");
    }else if($(".fixed_out_btn").size() > 0){
      $(".layer_popup:visible").find(".for_padding").removeAttr("style");
    }

  }else if( _deviceCondition == "mobile"){
    $(".layer_popup:visible").find(".pop_wrap.full").css("height", window.innerHeight) // 소수점 버림
    $(".layer_popup:visible").find(".pop_cont").height($(".layer_popup:visible").find(".pop_wrap").height() - $(".layer_popup:visible").find(".pop_head").innerHeight())

    if($(".fixed_bot_btn").size() > 0){
      $(".layer_popup:visible").find(".scroll_area").css("height","auto");
      setTimeout(function(){
        $(".layer_popup:visible").find(".scroll_area").height($(".layer_popup:visible").find(".for_padding").height() - fixedBtn);
      },20)
    }else if($(".fixed_out_btn").size() > 0){
      $(".layer_popup:visible").find(".for_padding").css("height","auto");
      setTimeout(function(){
        $(".layer_popup:visible").find(".for_padding").innerHeight($(".layer_popup:visible").find(".pop_cont").height() - $(".layer_popup:visible").find(".fixed_out_btn").outerHeight(true));
      },20)
    }
  }

  $(".layer_popup:visible").find(".pop_wrap").css({"margin-left": $(".layer_popup:visible").find(".pop_wrap").width()*-0.5, "margin-top": $(".layer_popup:visible").find(".pop_wrap").height()*-0.5}); // 중앙정렬
}

function repositioningTopBtn(){
  if($(".btn_top").length) {
    if($(window).scrollTop() > 0){
      $(".btn_top").fadeIn();
      if($(".review_write").size() > 0){
        if(window.innerWidth <= 1024){
          $(".review_write").fadeIn()
        }
        $(".review_write").addClass("move")
      }
    }else{
      $(".btn_top").fadeOut()
      if($(".review_write").size() > 0){
        if(window.innerWidth <= 1024){
          $(".review_write").fadeOut()
        }else{
          $(".review_write").removeAttr("style")
        }
        $(".review_write").removeClass("move")
      }
    }

    // var topBtnPositionGap = 0;
    var navigationGap = 0;
    _paybarH = $(".payment_bar").innerHeight();
    _fixedBtnH = $(".course_popup .fixed_btn_area").outerHeight(true);
    var safetyChar = getComputedStyle(document.documentElement).getPropertyValue("--sab")
    var safetyNum = parseInt(safetyChar.split("p"));
    // console.log(safetyChar, safetyNum);
    var topBtnGap = 40;

    

    if(window.innerWidth <= 1024){
      if($(".payment_bar").size() > 0 || $(".course_popup .fixed_btn_area").size() > 0 || $(".view_con_w").size() > 0 || $(".desc_con").size() > 0){
        navigationGap = 0;
      } else {
        navigationGap = 64 + safetyNum;
      }
    }

    if($(window).scrollTop() + window.innerHeight > $("footer").offset().top + navigationGap) {
      // 푸터에 붙었을 때,
      if(window.innerWidth > 1024){
        if($(".payment_bar").size() > 0){
          $(".btn_top").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + _paybarH + 20);
          $(".payment_bar").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top)
        } else {
          $(".btn_top").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 40);
          $(".review_write").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 40);
        }
      } else {
        if($(".payment_bar").size() > 0){
          $(".page_cont_area").css({"padding-bottom": $(".payment_bar").innerHeight() + $(".btn_top").innerHeight() + topBtnGap});
          $(".btn_top").addClass("no_fixed");
          $(".payment_bar").addClass("no_fixed");
          $(".btn_top").css("bottom", $("footer").innerHeight() + _paybarH + 20);
          $(".payment_bar").css("bottom", $("footer").innerHeight())
        } else {
          $(".btn_top").addClass("no_fixed");
          $(".btn_top").css("bottom", $("footer").innerHeight() + 20);
          $(".review_write").css("bottom", $(window).scrollTop() + window.innerHeight - $("footer").offset().top + 78);
        }
      }
    }else {
      // 스크롤 할 때,
      $(".payment_bar").css("bottom", 0);
      $(".payment_bar").removeClass("no_fixed");
      $(".btn_top").removeClass("no_fixed");
      
      if(window.innerWidth > 1024){
        if($(".payment_bar").size() > 0){
          $(".btn_top").css("bottom", _paybarH + 20);
        } else {
          $(".btn_top").css("bottom", 40);
          $(".review_write").css("bottom", 40);
        }
      }else{
        if($(".payment_bar").size() > 0){
          $(".page_cont_area").css({"padding-bottom": $(".payment_bar").innerHeight() + $(".btn_top").innerHeight() + topBtnGap});
          $(".btn_top").css("bottom", _paybarH + 20);
        } else {
          $(".btn_top").css("bottom", 16 + navigationGap);
          $(".review_write.move").css("bottom", 74 + navigationGap);
        }
      }
    }
    
    if($(".course_popup .fixed_btn_area").size() > 0) {
      if(window.innerWidth <= 1024) {
        if($(window).scrollTop() + window.innerHeight > $("footer").offset().top + _fixedBtnH) {
          $(".btn_top").addClass("no_fixed");
        } else {
          $(".btn_top").removeClass("no_fixed");
          $(".btn_top").css("bottom", _fixedBtnH + 15);
        }
      }
    }
  }
}

var typoMotion = (function(){
  return {
    incision : function (cls) {
        var arrTxt = $(cls).text().trim().split("");
        $(cls).text("");
        for(var i=0; i<arrTxt.length; i++) {
          $(cls).append("<span>" + arrTxt[i] + "</span>");
        }
    }
  }
})();