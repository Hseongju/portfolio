$(function(){
	$('.click_group a').click(function(){
		$('.srch_rslt').addClass('active');
		$(this).addClass('on');
		var thisText = $(this).text();
		$('.click_view').append('<span>'+thisText+'</span>');
	});	
	$('.srch_rslt .close').click(function(){
		
		$('.click_group,.srch_area').slideToggle();

		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).toggleClass('on');	
		}
	});

	$('.srch_btn').click(function(){
		$('.list').addClass('rslt');
	});

	if($('#wrap.sub2').length>0){
		var scTop;
		var lastY = 0;
		var isCheck = false;
		var agent = navigator.userAgent.toLowerCase();
		if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) isIeCheck = true;
		else isIeCheck = false;


		$(window).on('scroll', function(){ // scroll
			
			if(isIeCheck) {
				$("body").on("mousewheel", function (event) {
					if(event.originalEvent.wheelDelta < 0) {
						$("#wrap.sub2 #header").addClass("hide");
					}
					else $("#wrap.sub2 #header").removeClass("hide");
				});
			 } else {
				if($(window).scrollTop() > lastY){
					$("#wrap.sub2 #header").addClass("hide");
				} 
				else $("#wrap.sub2 #header").removeClass("hide");
				lastY = $(window).scrollTop();
			}
			
		});$(window).scroll();
	}	
})


