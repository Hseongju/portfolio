$(function () {
	
	var mobTop;
	$("#mobileWrap .content .scroll").scroll(function(){
		mobTop = $("#mobileWrap").scrollTop() + $("#mobileWrap .content .scroll").height();

		if($("#mobileWrap").size() > 0){ // mobile
			if($("#mobileWrap .content .scroll").scrollTop() > mobTop - 100){
				$("#mobileWrap .header a img").attr("src", "./images/TypeA_mobile_GNB_floating2.png");
			}else{
				$("#mobileWrap .header a img").attr("src", "./images/TypeA_mobile_GNB_floating1.png");
            }
		}
	});$("#mobileWrap .content .scroll").scroll();
})