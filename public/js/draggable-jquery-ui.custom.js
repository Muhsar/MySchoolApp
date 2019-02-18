(function ($) {
    "use strict";
    
	/*==============================================[ Draggable ]==*/
	var fromPrice = Number($( "span.show-pos-begin" ).text());
	var toPrice = Number($( "span.show-pos" ).text());

	var posPoint3 = $('#containment-wrapper-3').width() - $('#draggable3').position().left - 15;
	var posPoint2 = $('#draggable2').position().left;

	var widthWrap2 = $('.filter-price-bar').width() - posPoint3 - 15;
	var widthWrap3 = $('.filter-price-bar').width() - posPoint2 - 15;

	$('#containment-wrapper-2').width(widthWrap2);
	$('#containment-wrapper-3').width(widthWrap3);


	$(window).resize(function(){

		posPoint3 = $('#containment-wrapper-3').width() - $('#draggable3').position().left - 15;
		posPoint2 = $('#draggable2').position().left;

		widthWrap2 = $('.filter-price-bar').width() - posPoint3 - 15;
		widthWrap3 = $('.filter-price-bar').width() - posPoint2 - 15;

		$('#containment-wrapper-2').width(widthWrap2);
		$('#containment-wrapper-3').width(widthWrap3);

		$('#draggable2').css('left','0');

		var leftDrag3 = (widthWrap2 - 15) + "";
		$('#draggable3').css('left',leftDrag3);
		
		$( "span.show-pos" ).text(toPrice);
		$( "span.show-pos-begin" ).text(fromPrice);

	});


	$( function() {
		var pos;
		var widthContainer;
		var price;


		$("#draggable3").on('mouseover',function(){
			$('.show-pos').css('color','#e52233');
			$('#draggable3').css({'background-color':'#e52233','cursor':'pointer'});
		});
		$("#draggable3").on('mouseout',function(){
			$('.show-pos').css('color','#666666');
			$('#draggable3').css({'background-color':'#999999'});
		});

		$( "#draggable3" ).draggable({ 
			containment: "#containment-wrapper-3", 
			scroll: false ,

			drag: function() {
				$('.show-pos').css('color','#e52233');
				$('#draggable3').css({'background-color':'#e52233','cursor':'pointer'});

				pos = $('#containment-wrapper-3').width() - $('#draggable3').position().left - 15;
				widthContainer = $('.line-bar').width();
				price = toPrice - Math.floor((pos)/(widthContainer-30)*(toPrice-fromPrice));
				updatePos();

			},
			stop: function(){
				$('.show-pos').css('color','#666666');
				$('#draggable3').css('background-color','#999999');

				posPoint3 = $('#containment-wrapper-3').width() - $('#draggable3').position().left - 15;
				posPoint2 = $('#draggable2').position().left;

				widthWrap2 = $('.filter-price-bar').width() - posPoint3 - 15;
				widthWrap3 = $('.filter-price-bar').width() - posPoint2 - 15;

				$('#containment-wrapper-2').width(widthWrap2);
				$('#containment-wrapper-3').width(widthWrap3);

			}
		});

		function updatePos() {
			$( "span.show-pos" ).text(price);
		}
	});


	$( function() {
		var pos;
		var widthContainer;
		var price;

		$("#draggable2").on('mouseover',function(){
			$('.show-pos-begin').css('color','#e52233');
			$('#draggable2').css({'background-color':'#e52233','cursor':'pointer'});
		});
		$("#draggable2").on('mouseout',function(){
			$('.show-pos-begin').css('color','#666666');
			$('#draggable2').css({'background-color':'#999999'});
		});

		$( "#draggable2" ).draggable({ 
			containment: "#containment-wrapper-2", 
			scroll: false ,

			drag: function() {
				$('.show-pos-begin').css('color','#e52233');
				$('#draggable2').css({'background-color':'#e52233','cursor':'pointer'});

				pos = $('#draggable2').position().left;
				widthContainer = $('.line-bar').width();
				price = Math.floor((pos)/(widthContainer-30)*(toPrice-fromPrice))+fromPrice;
				updatePos();

			},
			stop: function(){
				$('.show-pos-begin').css('color','#666666');
				$('#draggable2').css('background-color','#999999');

				posPoint3 = $('#containment-wrapper-3').width() - $('#draggable3').position().left - 15;
				posPoint2 = $('#draggable2').position().left;

				widthWrap2 = $('.filter-price-bar').width() - posPoint3 - 15;
				widthWrap3 = $('.filter-price-bar').width() - posPoint2 - 15;

				$('#containment-wrapper-2').width(widthWrap2);
				$('#containment-wrapper-3').width(widthWrap3);
			}
		});

		function updatePos() {
			$( "span.show-pos-begin" ).text(price);
		}
	});

})
(jQuery);