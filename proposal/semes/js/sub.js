$(function () {
	var _wHeight;
	var device = '';
	var _subH;

	var _getScrollObjY1 = function(){ //  scroll early
        var scrollArray =[];
        var pHeight;
        if(device == "pc"){
            pHeight = 400; // default 400
        }else{
            pHeight = 400;
        }
        $(".scrollMotion-sub").each(function(index){
            scrollArray.push(parseInt($(".scrollMotion-sub").eq(index).offset().top) + pHeight);
        });
        return scrollArray;
	}

	//로드
	if($(".sub2").size() > 0){
		var listC = $(".sub2 .subCon .tabCont .listCont");
		var tabB = $(".sub2 .subCon .listTit .tit .tabBtn a");
		var tabList = -1;

		tabB.each(function(e){ // tab icon
			$(this).on("click", function(){
				if(tabList != e){
					tabB.removeClass("on");
					listC.css("display", "none");
					tabList = e;
					tabB.eq(e).addClass("on");
					listC.css("display", "none");
					listC.eq(e).css("display", "block");
				}else{
					listC.eq(e).css("display", "none");
					if(tabB.eq(e).hasClass("on")){
						$(this).hasClass("on");
						listC.eq(e).css("display", "block");
					}
					tabList = -1;
				}
			});
		});

		$(".sub2 .subCon .listCont .listDiv .list").each(function(e){ // listBox hover
			$(this).hover(function(){
				$(this).find(".hBorder").addClass("on");
				$(this).children("img").attr("src", $(this).children("img").attr("src").replace("-off.png","-on.png"));
			}, function(){
				$(this).find(".hBorder").removeClass("on");
				$(this).children("img").attr("src", $(this).children("img").attr("src").replace("-on.png","-off.png"));
			});
		});

		$(".sub2 .subCon .tabCont .listCont .accodList .list").each(function(e){ // accod list hover
			$(this).hover(function(){
				$(this).find(".hBg").fadeIn(300);
				$(this).find(".img").addClass("on");
			}, function(){
				$(this).find(".hBg").fadeOut(300);
				$(this).find(".img").removeClass("on");

			});

			$(this).on("click", function(){
				$(".sub2 .subCon .tabCont .listCont .accodList .motion").removeClass("on");
			});
		});

		$(".sub2 .subCon .tabCont .listCont .accodList .motion").each(function(e){ // accod list hover
			$(this).hover(function(){
				$(this).find(".hBg").fadeIn(300);
				$(this).find(".img").addClass("on");

				if($(this).hasClass("on")){
					$(this).find(".mList .img").removeClass("on");
				}
			}, function(){
				$(this).find(".hBg").fadeOut(300);
				$(this).find(".img").removeClass("on");

			});

			$(this).on("click", function(){
				if(!$(this).hasClass("on")){
					$(this).addClass("on");
					$(this).find(".mList .img").removeClass("on");
				}else{
					$(this).removeClass("on");
				}
			});
		});

		$(".sub2 .subCon .tabCont .listCont .accodList a").each(function(q){
			var txtMoveEvt = $(".sub2 .subCon .tabCont .listCont .accodList a").eq(q);

			$(".sub2 .subCon .listTit .tit .tabBtn .btn2").on("click", function(){
				setTimeout(function(){
					TweenMax.to($(".sub2 .subCon .tabCont .listCont .accodList .motion"), 0.6, {opacity:1, top:0, ease:Power3.easeOut});
					TweenMax.to(txtMoveEvt, 0.6, {opacity:1, top:0, delay:q*0.2, ease:Power3.easeOut});
				},400);
			});
			
			$(".sub2 .subCon .listTit .tit .tabBtn .btn2").on("click", function(){
				TweenMax.to(txtMoveEvt, 0, {opacity:0, top:"50px", ease:Power3.easeOut});
				TweenMax.to($(".sub2 .subCon .tabCont .listCont .accodList .motion"), 0, {opacity:0, top:"50px", ease:Power3.easeOut});
			});
				
		});
	}
	

	if($(".sub1").size() > 0){
		gsap.registerPlugin(ScrollTrigger);
		ScrollTrigger.defaults({
			//markers:true,
		});

		_subH = $(window).outerHeight();

		gsap.to(".sub1 .subCon .con2", {
			scrollTrigger: {
				trigger: ".sub1 .subCon .con2",
				start: "0 0",
				end: "+=300%",
				pin: true,
				scrub: true,
				// markers : true,
				onUpdate: function (self) {
					console.log(self.progress.toFixed(3));
					$(".sub1 .subCon .con2 .txtArea").removeClass("bottom");
					if (self.progress.toFixed(3) >= 0.05 && self.progress.toFixed(3) < 0.28) {
						gsap.to(".sub1 .subCon .con2 .txtArea .txt1", {top:0, opacity: 1,ease:Power0.easeOut});
						gsap.to(".sub1 .subCon .con2 .txtArea .txt2", {top:"60px", opacity: 0, ease:Power3.easeOut});
						gsap.to(".sub1 .subCon .con2 .txtArea .txt3", {top:"60px", opacity: 0, ease:Power3.easeOut});

					}else if (self.progress.toFixed(3) >= 0.28 && self.progress.toFixed(3) < 0.55) {
						gsap.to(".sub1 .subCon .con2 .txtArea .txt1", {top:"60px", opacity: 0, ease:Power3.easeOut});
						gsap.to(".sub1 .subCon .con2 .txtArea .txt2", {top:0, opacity: 1, ease:Power0.easeOut});
						gsap.to(".sub1 .subCon .con2 .txtArea .txt3", {top:"60px", opacity: 0, ease:Power3.easeOut});
					}else if (self.progress.toFixed(3) >= 0.55 && self.progress.toFixed(3) < 1) {
						gsap.to(".sub1 .subCon .con2 .txtArea .txt1", {top:"60px", opacity: 0, ease:Power3.easeOut});
						gsap.to(".sub1 .subCon .con2 .txtArea .txt2", {top:"60px", opacity: 0, ease:Power3.easeOut});
						gsap.to(".sub1 .subCon .con2 .txtArea .txt3", {top:0, opacity: 1, ease:Power0.easeOut});
					}else{
						gsap.to(".sub1 .subCon .con2 .txtArea .txt1", {top:"60px", opacity: 0, ease:Power3.easeOut});
						gsap.to(".sub1 .subCon .con2 .txtArea .txt2", {top:"60px", opacity: 0, ease:Power3.easeOut});
						// gsap.to(".sub1 .subCon .con2 .txtArea .txt3", {top:"100px", opacity: 0, ease:Power3.easeOut});
					}
				},
				onLeave: function(){
					$(".sub1 .subCon .con2 .txtArea").addClass("bottom");
				},
				onEnter: function(){
					$(".sub1 .subCon .con2 .txtArea").removeClass("bottom");
				}
			},
			ease:"power3.easeOut"
		});
		
		gsap.to(".sub1 .subCon .con2 .bgArea", {
			scrollTrigger: {
				trigger: ".sub1 .subCon .con2",
				start: "0 0",
				end: "+=300%",
				// pin: true,
				scrub: true,
				// markers : true,
			},
			"background-position":"50% 100%",
			ease:"power3.easeOut"
		});

		$(".sub1 .subCon .con3 .listArea .lft-box.thr").on("mouseenter", function(){
			$(this).find("img").attr("src", "./images/sub1-list-img3-over.png");
		}).on("mouseleave", function(){
			$(this).find("img").attr("src", "./images/sub1-list-img3.png");
		});

		$(".sub1 .subCon .con3 .listArea .lft-box.thr").on("click", function(){
			$(".popWrap").fadeIn(300);
			$(".black_bg").fadeIn(300);
		});

		$(".popWrap .closeBtn").on("click", function(){ //popup
			$(this).parent(".popWrap").fadeOut(300);
			$(".black_bg").fadeOut(300);
		});
	}

	var subTop;
	$(window).scroll(function(){
		subTop = $(window).scrollTop() + $(window).height();
		
		if($(".scrollMotion-sub").length != 0){ // scrollMotion
			$(".scrollMotion-sub").each(function(index){
				if($(window).scrollTop() + $(window).height()  > _getScrollObjY1()[index]) $(".scrollMotion-sub").eq(index).addClass("active");
				else $(".scrollMotion-sub").eq(index).removeClass("active");
			});
		}

		if($(".sub1").size() > 0){
			if(subTop > $(".sub1 .subCon .con3").offset().top + 600){
				gsap.to(".sub1 .subCon .con3 .listArea .vline", {/*top:"439px",*/ opacity:1});
			}else{
				gsap.to(".sub1 .subCon .con3 .listArea .vline", {/*top:"489px",*/ opacity:0});
			}
		}

		if($(".sub2").size() > 0){

		}

	});$(window).scroll();
})