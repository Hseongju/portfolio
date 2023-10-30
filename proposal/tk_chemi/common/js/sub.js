$(function(){
	TweenMax.to($('.simulation-intro .eng img'),  1, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
	TweenMax.to($('.simulation-intro .text img'), 1, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
	TweenMax.to($('.imgList li:nth-child(1)'), 0.5, {delay:1.3, top:0, opacity:1, ease:Power2.easeOut});
	TweenMax.to($('.imgList li:nth-child(2)'), 0.5, {delay:1.6, top:0, opacity:1, ease:Power2.easeOut});
	TweenMax.to($('.imgList li:nth-child(3)'), 0.5, {delay:1.9, top:0, opacity:1, ease:Power2.easeOut});
	TweenMax.to($('.imgList li:nth-child(4)'), 0.5, {delay:2.1, top:0, opacity:1, ease:Power2.easeOut});

	//step2-0
	$('.simulation-intro .imgList li:nth-child(2) button').bind().click(function(){
		$('body').attr('data-step','step2-0');
		$(this).addClass('active');

		//$('.simulationWrap').show();
		TweenMax.to($('.simulationWrap'), 0.5, {display:'block', y:0, opacity:1, ease:Power3.easeOut});
	});
	//step2-1
	$('.viewArea .btnMore').bind().click(function(){
		$('body').attr('data-step','step2-1');
		$(this).addClass('active');
		TweenMax.to($('.viewArea .colorView'), 0.5, {right:0, ease:Power3.easeOut});
	});
	//step2-1
	$('.sub1 .selectColor .color').click(function(){
		if($('body').is('[data-step=step2-1]')){
			$('body').attr('data-step','step2-2');
			$('.viewArea .colorView').css('right','-100%')
			TweenMax.to($('.viewArea .colorView'), 0.5, {right:0, ease:Power3.easeOut});
		}
	});
	//step3~5
	$('.sub1 .recommendColor .color button').click(function(){
		$('.viewArea .btnMore').removeClass('active');
		$('.viewArea .colorView').css('right','-100%');			
		var target = $(this);
		$('.sub1 .recommendColor .color button').removeClass('active');
		$(this).addClass('active');

		if(target.is('.color1')){
			$('body').attr('data-step','step3');
		}else if(target.is('.color3')){
			$('body').attr('data-step','step4');
		}else if(target.is('.color4')){
			$('body').attr('data-step','step5');
		}
		TweenMax.to($('.viewArea .colorView'), 0.5, {right:0, ease:Power3.easeOut});
	});
	$('.sub1 .selectArea .fin').bind().click(function(){
		$('body').attr('data-step','step6');
		$('.finalView').slideDown();
		TweenMax.to($('.finalView .title .text img'), 0.5, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.finalView .colorArea li:nth-child(1)'), 0.5, {delay:0.7, left:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.finalView .colorArea li:nth-child(2)'), 0.5, {delay:0.9, left:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.finalView .colorArea li:nth-child(3)'), 0.5, {delay:1.1, left:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.finalView .colorArea li:nth-child(4)'), 0.5, {delay:1.3, left:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.finalView .colorArea li:nth-child(5)'), 0.5, {delay:1.5, left:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.finalView .snsArea'), 0.5, {delay:2, top:0, opacity:1, ease:Power3.easeOut});
		TweenMax.to($('.finalView .footBtn'), 0.5, {delay:2.2, top:0, opacity:1, ease:Power3.easeOut});
	});

	$('.sub1 .finalView .footBtn .prev').bind().click(function(){
		$('body').attr('data-step','step2-0');
		$('.finalView').slideUp();
		$('.finalView .colorArea li').removeAttr('style');
		$('.finalView .snsArea').removeAttr('style');
		$('.finalView .footBtn').removeAttr('style');
		$('.viewArea .colorView').removeAttr('style');
	});



	//sub2
	TweenMax.to($(".sub2 .container .tit img"),  1, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
	TweenMax.to($(".sub2 .container .txt img"), 1, {delay:0.5, top:0, opacity:1, ease:Power3.easeOut});
	$(".sub2 .container .listDiv .list").each(function(q){
		TweenMax.to($(this), 0.5, {top:0, opacity:1, delay:0.3*q+1.3, ease:Power2.easeOut});
	});
	
});