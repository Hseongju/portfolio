$(function(){
	$("html, body").on('mousewheel DOMMouseScroll', function(e) {
		var E = e.originalEvent;
		delta = 0;
		if (E.detail) {
			delta = E.detail * -40;
		}else{
			delta = E.wheelDelta;
		};

		if(delta < 0 && !secMove && scrollNum < scrollMax){ // 留덉슦�� �좎쓣 �꾨옒濡� �대졇�� 寃쎌슦
			barMotion.restart();
			$(".indiArea .controlBtn a").removeClass("stopped");

			if(scrollNum == 0){
				conMotion(scrollNum+1);

				//secMoveDown();
				secMove = true;
				scrollNum++;
				if(scrollNum>scrollMax) scrollNum = scrollMax;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec1 .txt"), 1, {top:200, opacity:0, ease:Power3.easeInOut});
				}});

				secMove = true;

				TweenMax.to($(".sec2 .txt1 p:nth-child(1)"), 1.8, {top:"100%", opacity:0, delay:3, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .txt1 p:nth-child(2)"), 1.8, {top:0, opacity:1, delay:3, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .txt2 p:nth-child(1)"), 1.8, {top:"100%", opacity:0, delay:3.7, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .txt2 p:nth-child(2)"), 1.8, {top:0, opacity:1, delay:3.7, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
				}});


				TweenMax.to($(".sec2 .lightHouse"), 2.5, {top:0, opacity:1, scale:1, delay:1.2, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .light"), 3.5, {opacity:1, delay:2.6, ease:Power3.easeInOut});
			}else if(scrollNum == 1){
				conMotion(scrollNum+1);
				secMoveDown();
				$('.mainIndi a').removeClass('on');
				$('.mainIndi a').eq(1).addClass('on');

				TweenMax.to($(".sec3 .sun"), 3, {top:0, opacity:1, scale:1, delay:1.3, ease:Power3.easeInOut});
				TweenMax.to($(".sec3 .sunLight"), 2.5, {top:0, opacity:1, delay:3, ease:Power3.easeInOut});
			}else if(scrollNum == 2){
				conMotion(scrollNum+1);
				secMoveDown();	
			}else if(scrollNum == 3){
				conMotion(scrollNum+1);
				secMoveDown();
				$('.mainIndi a').removeClass('on');
				$('.mainIndi a').eq(2).addClass('on');
				TweenMax.to($(".sec5 .man"), 3.5, {opacity:1, delay:1, ease:Power3.easeInOut});
			}else if(scrollNum == 4){
				conMotion(scrollNum+1);
				//secMoveDown();	
				secMove = true;
				scrollNum++;
				if(scrollNum>scrollMax) scrollNum = scrollMax;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					//TweenMax.to($(".sec5 .man"), 0, {opacity:1});
				}});


				TweenMax.to($(".sec5 .man"), 2.5, {opacity:0, ease:Power3.easeInOut});
				TweenMax.to($(".sec6 .man2"), 2.5, {opacity:0, ease:Power3.easeInOut});
			}else if(scrollNum == 5){
				scrollNum ++;
				secMove = true;
				TweenMax.to($(".scrollDiv"), 1.5, {top:$(".scrollDiv").offset().top - 200, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
				}});
			}
		};

		if(delta > 0 && !secMove && scrollNum > 0){ // 留덉슦�� �좎쓣 �꾨줈 �щ졇�� 寃쎌슦
			barMotion.restart();
			$(".indiArea .controlBtn a").removeClass("stopped");

			if(scrollNum == 1){
				reest(scrollNum)
				//secMoveUp();

				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec2 .lightHouse"), 0, {top:300, opacity:0, scale:1.4});
					TweenMax.to($(".sec2 .light"), 0, {opacity:0});

					/*TweenMax.to($(".sec2 .txt1 p:nth-child(1)"), 0, {top:0, opacity:1});
					TweenMax.to($(".sec2 .txt2 p:nth-child(1)"), 0, {top:0, opacity:1});*/

					console.log(1111)

					TweenMax.to($(".sec2 .txt1 p:nth-child(1)"), 0, {top:0, opacity:1});
					TweenMax.to($(".sec2 .txt1 p:nth-child(2)"), 0, {top:"200%", opacity:0});
					TweenMax.to($(".sec2 .txt2 p:nth-child(1)"), 0, {top:0, opacity:1});
					TweenMax.to($(".sec2 .txt2 p:nth-child(2)"), 0, {top:"200%", opacity:0});

				}});						
			}else if(scrollNum == 2){
				/*TweenMax.to($(".sec2 .txt p:nth-child(1)"), 0, {top:0, opacity:1, ease:Power3.easeInOut});
				TweenMax.to($(".sec2 .txt p:nth-child(2)"), 0, {top:"200%", opacity:0, ease:Power3.easeInOut});*/

				console.log(2222)

				

				reest(scrollNum)
				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec3 .sun"), 0, {top:350, opacity:0, scale:2.6});
					TweenMax.to($(".sec3 .sunLight"), 0, {opacity:0});
				}});

				$(".mainIndi a").removeClass('on');
				$(".mainIndi a").eq(0).addClass('on');
			}else if(scrollNum == 3){
				reest(scrollNum)
				//secMoveUp();
				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec5 .man"), 3.5, {opacity:1, delay:1, ease:Power3.easeInOut});
				}});				
			}else if(scrollNum == 4){
				reest(scrollNum)
				//secMoveUp();
				$(".mainIndi a").removeClass('on');
				$(".mainIndi a").eq(1).addClass('on');

				secMove = true;
				scrollNum--;
				if(scrollNum<0) scrollNum = 0;
				TweenMax.to($(".scrollDiv"), 2, {top:-$(".scrollDiv").height() * scrollNum, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
					TweenMax.to($(".sec6 .man2"), 0, {opacity:1});
				}});				

			}else if(scrollNum == 5){
				reest(scrollNum)
				TweenMax.to($(".sec5 .man"), 3.5, {opacity:1, ease:Power3.easeInOut});
				TweenMax.to($(".sec6 .man2"), 3.5, {opacity:1, ease:Power3.easeInOut});
				secMoveUp();				
			}else if(scrollNum == 6){
				scrollNum --;
				secMove = true;
				TweenMax.to($(".scrollDiv"), 1.5, {top:$(".scrollDiv").offset().top + 200, ease:Power3.easeInOut, onComplete:function(){
					secMove = false;
				}});
			}
		};
	});
});