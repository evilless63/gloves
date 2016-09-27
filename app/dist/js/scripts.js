$(document).ready(function(){
		
	$(".header__button").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".weChoose__h1").offset().top
	    }, 500);
	});



	

});

$(function(){
	$.getJSON('gloves.json', function(data){
			for(var i=0;i<data.gloves.length;i++){
				$('.imageGallery').append('<li class="productSliderIteration">' + 
					'<div class="productSliderBlock productSliderBlockMaterial">' +
						'<h3 class="productSliderBlockMaterial__h3 productSliderBlock__h3 ">Материал</h3>' +
						'<p class="productSliderBlock__description">' +
							data.gloves[i].material +
						'</p>' +
					'</div>' +
					'<div class="productSliderBlock productSliderBlockWeaving">' +
						'<h3 class="productSliderBlockWeaving__h3 productSliderBlock__h3 ">Плетение</h3>' +
						'<p class="productSliderBlock__description">' +
							data.gloves[i].weaving +
						'</p>' +
					'</div>' +
					'<div class="productSliderBlock productSliderBlockTechnology">' +
						'<h3 class="productSliderBlockTechnology__h3 productSliderBlock__h3 ">Технология</h3>' +
						'<p class="productSliderBlock__description">' +
							data.gloves[i].technology + 
						'</p>' +
					'</div>' +
					'<div class="productSliderBlock productSliderBlockApplication">' +
						'<h3 class="productSliderBlockApplication__h3 productSliderBlock__h3 ">Применение</h3>' +
						'<p class="productSliderBlock__description">' +
							data.gloves[i].application +
						'</p>' +
					'</div>' +
					'<div class="productSliderBlock productSliderBlockStrength">' +
						'<h3 class="productSliderBlockStrength__h3 productSliderBlock__h3 ">Надежность</h3>' +
						'<p class="productSliderBlock__description">' +
							data.gloves[i].strength + 
						'</p>' +
					'</div>' +
					'<div class="productSliderBlock productSliderBlockUsability">' +
						'<h3 class="productSliderBlockUsability__h3 productSliderBlock__h3 ">Удобство</h3>' +
						'<p class="productSliderBlock__description">' +
							data.gloves[i].usability + 
						'</p>' +
					'</div>' +
					'<img src="images/product_section_img/product_.jpg" alt="Перчатки Защита" class="productSlider__image">' +
					'<h2 class="productSlider__h2">' +
						data.gloves[i].name +
					'</h2>' +
					'<div class="productSliderBlockAbilities">' +
						'<div class="productSliderBlockAbilitiesFire">' +
							'<img src="images/fire_icon.png" alt="'+ data.gloves[i].fire +'" class="productSliderBlockAbilitiesFire_icon">' +
							'<span class="productSliderBlockAbilities_text">'+ data.gloves[i].fire +'</span>' +
						'</div>' +
						'<div class="productSliderBlockAbilitiesWater">' +
							'<img src="images/water_icon.png" alt="'+ data.gloves[i].water +'" class="productSliderBlockAbilitiesWater_icon">' +
							'<span class="productSliderBlockAbilities_text">'+ data.gloves[i].water +'</span>' +
						'</div>' +
						'<div class="productSliderBlockAbilitiesKnife">' +
							'<img src="images/knife_icon.png" alt="'+ data.gloves[i].knife +'" class="productSliderBlockAbilitiesKnife_icon">' +
							'<span class="productSliderBlockAbilities_text">'+  data.gloves[i].knife +'</span>' +
						'</div>' +
					'</div>' +
					'<form action="" class="getProduct">' +
						'<div class="getCount">' +
							'<input type="text" class="getProduct__setCount">' +
							'<span class="getProduct__text">Пара</span>' +
						'</div>' +
						'<div class="getSumm">' +
							'<input type="text" class="getSumm__setPrice">' +
							'<span class="getSumm__text">Всего</span>' +
						'</div>' +
						'<button class="getProduct__submit" data-remodal-target="modalApplication">Заказать</button>' +
					'</form>' +
				'</li>')
			}
		});

	$.getJSON('gloves.json', function(data){
			for(var i=0;i<data.gloves.length;i++){
				$('.imageCarousel').append('<li><a data-slide-index="0" class="sliderControlChooseProduct">' +
					'<div class="sliderControlChooseProduct__image"></div>' +
					'<span class="sliderControlChooseProduct__text">'+data.gloves[i].name+'</span>' +
				'</a></li>')
			}
		});
});


$(window).load(function() {
  // The slider being synced must be initialized first
  $('#bx-pager').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 115,
    itemMargin: 5,
    asNavFor: '#imageGallery'
  });
 
  $('#imageGallery').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#bx-pager"
  });
});



