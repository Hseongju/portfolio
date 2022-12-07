var popup, popupClass;
var marker = [], markers = [];
var lat, lng;

// 참고
// https://www.doosanmachinetools.com/ko/global-network/view.do
// https://www.doosanmachinetools.com/common/js/networkMap.js

function initialize(){
	var lat = 37.425535;
	var lng = 126.9904874;
	var contentString;
	var myLatlng = new google.maps.LatLng(lat, lng); // 위치값 위도 경도
	var zoomLevel = 18; // 지도의 확대 레벨 : 숫자가 클수록 확대정도가 큼
	var myLatlng = new google.maps.LatLng(lat, lng);
	var mapOptions = {
		zoom: zoomLevel,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		gestureHandling: 'greedy'
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(lat, lng),
		map: map,
	});
	var iconUrl = '../../common/images/';
	var featrues;
	var icons = {
		selected: {
			icon: iconUrl + 'marker_icon3.svg'
		},
		etc: {
			icon: iconUrl + 'marker_icon.svg'
		},
		business: {
			icon: iconUrl + 'marker_icon2.svg'
		},
	};
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	contentString = 
		// 호텔명, 영어이름, star클래스값(숫자에 맞는 별개수 나옵니다), 주소 수정해주시면 됩니다
		'<div class="marker_thumb hotel_list_wrap">' + 
		'<div class="thumb_area">' + 
		'<img src="../../common/images/@img-hotel-search-list-01.jpg" alt="">' +
		'</div>' +
		'<div class="list_info_area">' +
		'<div class="star_grade">'+
		'<div class="star star5"></div>' +
		'<p class="txt">5성급</p>' +
		'</div>' +
		'<div class="name">' +
		'<p class="name_eng">Steigenberger Frankfurter HofSteigenberger Frankfurter Hof</p>'+
		'<p class="name_kor">슈타이겐베르거 프랑크푸르트 호프슈타이겐베르거 프랑크푸르트 호프</p>' +
		'</div>' +
		'<div class="price_area">' +
		'<p class="txt">1객실 평균가 X N박</p>'+
		'<p class="price">365 USD</p>'+
		'<p class="room_txt">(N객실 평균가 X 1박 300USD)</p>'+
		'</div>' +
		'<p class="almost_soldout">판매완료임박</p>'+
		'</div>' +
		'<a class="like_btn circle_like_btn" href="javascript:">' +
		'<div class="heart_motion">' +
		'<div class="item front"><img src="../../common/images/icon-like-default.svg" alt=""></div>' +
		'<div class="item back"><img src="../../common/images/icon-like-active.svg" alt=""></div>' +
		'</div>' +
		'</a>' +
		'</div>';
	// features = [
	// 	{
	// 		position: new google.maps.LatLng(35.837143, 128.558612),
	// 		type: 'selected',
	// 	},
	// 	{
	// 		position: new google.maps.LatLng(35.836528, 128.558410),
	// 		type: 'etc',
	// 	}, 
	// 	{
	// 		position: new google.maps.LatLng(35.835528, 128.557910),
	// 		type: 'etc',
	// 	},
	// 	{
	// 		position: new google.maps.LatLng(35.837528, 128.559910),
	// 		type: 'business',
	// 	},
	// ];
	// for (var i =0; i<features.length; i++) {
	// 	marker = [];
	// 	marker[i] = new google.maps.Marker({
	// 		position: features[i].position,
	// 		icon: icons[features[i].type].icon,
	// 		map: map,
	// 		title:features[i].title,
	// 		label: features[i].label,
	// 	});
		
	// 	google.maps.event.addListener(marker[i], "click", function() {
	// 		map.setCenter(this.position);
	// 		popupClass = createPopupClass();
	// 		$("#map_info").html(contentString);
	// 		popup = new popupClass(this.position, document.getElementById('map_info'));
	// 		popup.setMap(map);
	// 	});
	// };

	function HTMLMarker(latlng, map, infowindow){
		this.latlng = latlng;
		this.setMap(map);
		this.infowindow  = infowindow;
	}
	
	HTMLMarker.prototype = new google.maps.OverlayView();

	HTMLMarker.prototype.draw = function(){
		var _self = this, trgtDiv = this.div, infowindow = this.infowindow;

		if (!trgtDiv) 
		{
			trgtDiv = this.div = document.createElement("div");
			trgtDiv.innerHTML = "<div class='marker_con_w'>미국생산법인H20자미국생산법인H20자</div>";
			trgtDiv.style.position = "absolute";
			trgtDiv.style.cursor = "pointer";

			google.maps.event.addDomListener(trgtDiv, "click", function(event) {
				$(".markerD").removeClass("on");
				$(this).find(".markerD").addClass("on");
				infowindow.open(this.map, _self);
				map.setCenter(this.latlng);
			});

			this.getPanes().overlayImage.appendChild(trgtDiv);
		}

		var position = this.getProjection().fromLatLngToDivPixel(this.latlng);
		
		if (position) 
		{
			trgtDiv.style.top = position.y + "px";
			trgtDiv.style.left = (position.x) + "px";
		}
	}

	HTMLMarker.prototype.getPosition = function() {
		return this.latlng;	
	};

	var htmlMarker;
	
	// for (var i =0; i<features.length; i++) 
	// {
	// 	if(features[i].type == "business"){
	// 		htmlMarker = new HTMLMarker(features[i].position, map, infowindow);
	// 	}
	// }
	
	google.maps.event.addListener(map, "click", function(e) { 
		$("#map_info").empty();
	});
}

/**
 * Returns the Popup class.
 *
 * Unfortunately, the Popup class can only be defined after
 * google.maps.OverlayView is defined, when the Maps API is loaded.
 * This function should be called by initMap.
 */
function createPopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content The bubble div.
   * @constructor
   * @extends {google.maps.OverlayView}
   */
	function Popup(position, content) {
		this.position = position;
		content.classList.add('popBubble');

		// This zero-height div is positioned at the bottom of the bubble.
		var bubbleAnchor = document.createElement('div');
		bubbleAnchor.classList.add('infoPop');
		bubbleAnchor.appendChild(content);

		// This zero-height div is positioned at the bottom of the tip.
		this.containerDiv = document.createElement('div');
		this.containerDiv.classList.add('popContainer');
		this.containerDiv.appendChild(bubbleAnchor);

		// Optionally stop clicks, etc., from bubbling up to the map.
		google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
	}
	// ES5 magic to extend google.maps.OverlayView.
	Popup.prototype = Object.create(google.maps.OverlayView.prototype);

	/** Called when the popup is added to the map. */
	Popup.prototype.onAdd = function() {
		this.getPanes().floatPane.appendChild(this.containerDiv);
	};

	/** Called when the popup is removed from the map. */
	Popup.prototype.onRemove = function() {
		if (this.containerDiv.parentElement) {
			this.containerDiv.parentElement.removeChild(this.containerDiv);
		}
	};

	/** Called each frame when the popup needs to draw itself. */
	Popup.prototype.draw = function() {
		var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

		this.containerDiv.style.left = divPosition.x + 'px';
		this.containerDiv.style.top = divPosition.y + 'px';
    
	};

	return Popup;
}
