$(function () {
    //프로덕트
    $(".m-tabs a").eq(0).on("click", function(){
        TweenMax.to($(this).find("img.on"), 0.8, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($("#mobileWrap .m_product"), 0.8, {bottom:0, ease:Power3.easeOut});
    });

    $("#mobileWrap .m_product .pro_h a").on("click", function(){
        TweenMax.to($(".m-tabs a").eq(0).find("img.on"), 0.8, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($("#mobileWrap .m_product"), 0.8, {bottom:-1330, ease:Power3.easeOut});
    });

    var curProNum = 0;
    $("#mobileWrap .m_product .pro_body .pro_tab").on("click", function(){
        if(curProNum == 0){
            TweenMax.to($("#mobileWrap .m_product .pro_body .pro_tab img.on"), 0.8, {opacity:1, ease:Power3.easeOut});
            TweenMax.to($("#mobileWrap .m_product .pro_body .pro_tab img.off"), 0.8, {opacity:0, ease:Power3.easeOut});

            TweenMax.to($("#mobileWrap .m_product .pro_body .pro_con img"), 0.8, {top:-601, ease:Power3.easeOut});

            curProNum = 1;
        }else if(curProNum == 1){
            TweenMax.to($("#mobileWrap .m_product .pro_body .pro_tab img.on"), 0.8, {opacity:0, ease:Power3.easeOut});
            TweenMax.to($("#mobileWrap .m_product .pro_body .pro_tab img.off"), 0.8, {opacity:1, ease:Power3.easeOut});

            TweenMax.to($("#mobileWrap .m_product .pro_body .pro_con img"), 0.8, {top:0, ease:Power3.easeOut});

            curProNum = 0;
        }
    });

    //컨택어스
    $(".m-tabs a").eq(1).on("click", function(){
        TweenMax.to($(this).find("img.on"), 0.8, {opacity:1, ease:Power3.easeOut});
        TweenMax.to($("#mobileWrap .m_contact"), 0.8, {bottom:0, ease:Power3.easeOut});
    });

    $("#mobileWrap .m_contact .cont_h a").on("click", function(){
        TweenMax.to($(".m-tabs a").eq(1).find("img.on"), 0.8, {opacity:0, ease:Power3.easeOut});
        TweenMax.to($("#mobileWrap .m_contact"), 0.8, {bottom:-1330, ease:Power3.easeOut});
    });

    var curConbody = 0;
    $("#mobileWrap .m_contact .cont_body a").on("click", function(){
        if(curConbody == 0){
            TweenMax.to($(this), 0.8, {top:-260, ease:Power3.easeOut});

            curConbody = 1;    
        }else if(curConbody == 1){
            TweenMax.to($(this), 0.8, {top:0, ease:Power3.easeOut});

            curConbody = 0;
        }
    });
    

	//scroll
	var remY = 0;
	$("#mobileWrap .scrollArea").on("scroll", function() {
		// menu event
		var _scrollW = $("#mobileWrap .scrollArea").scrollTop();
		if( _scrollW > remY) {
			TweenMax.to($("#mobileWrap .contents #header"), 0.8, {top:-120, ease:Power3.easeOut});
		} else{
			$("#mobileWrap .contents #header").addClass("scrollUp");
			TweenMax.to($("#mobileWrap .contents #header"), 0.8, {top:0, ease:Power3.easeOut});
		}
		remY = $("#mobileWrap .scrollArea").scrollTop()-1;
		if(_scrollW == 0){
			$("#mobileWrap .contents #header").removeClass("scrollUp");
		}

		// footer event
        if( _scrollW > $("#mobileWrap .swiper-container.typeB").height() - ($("#mobileWrap .scrollArea").height())) {
			TweenMax.to($("#mobileWrap .history"), 0.8, {"opacity" : 0, ease:Power3.easeOut});
		} else{
			TweenMax.to($("#mobileWrap .history"), 0.8, {"opacity" : 1, ease:Power3.easeOut});
        };
        
        $(".m-tabs").css('top', _scrollW + 1244);
        if(_scrollW >= 7500){
            $(".m-tabs").css('display', 'none');
        }else if(_scrollW < 7500){
            $(".m-tabs").css('display', 'block');
        }
	});

})