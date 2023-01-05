$(document).ready(function(){
	var num;

	//로드
	$(window).on("load", function(){
		TweenMax.to($(""), 0.8, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
	});
	
	//리사이즈
	$(window).resize(function(){
		
	});
	

    var lastY = 0;
    var isIeCheck = false;
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) isIeCheck = true;
    else isIeCheck = false;

    $("#mobileWrap .scroll").on("scroll", function() {
        //scroll up&down chk
        if(isIeCheck) {
            $("#mobileWrap .scroll").on("mousewheel", function (event) {
                if(event.originalEvent.wheelDelta < 0) {
                    // down
                    TweenMax.to($("#mobileWrap .contents #header"), 0.6, {top:-92, ease:Power3.easeOut});
                }else{
                    // up
                    TweenMax.to($("#mobileWrap .contents #header"), 0.6, {top:0, ease:Power3.easeOut});
                }
            });
        } else {
            if($("#mobileWrap .scroll").scrollTop() > lastY) {
                TweenMax.to($("#mobileWrap .content #header"), 0.6, {top:-92, ease:Power3.easeOut});
                lastY = $("#mobileWrap .scroll").scrollTop();
            }else{
                TweenMax.to($("#mobileWrap .content #header"), 0.6, {top:0, ease:Power3.easeOut});
                lastY = $("#mobileWrap .scroll").scrollTop();
            }
        }
    });


	// swiper
	var swiper = new Swiper('.swiper-container.typeB', {
      spaceBetween : 0,
      slidesPerView: 1,
	  autoHeight : true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        slideChangeTransitionStart: function () {
            TweenMax.to($(".scrollArea"), 0, {scrollTop:0, ease:Power3.easeOut});
            TweenMax.to($("#mobileWrap .contents #header"), 0.8, {top:0, ease:Power3.easeOut});
        },
      }
    });
});