(function ($) {
    "use strict";

    $(document).ready(function() {
      var btnAddToCart = $('.add-to-cart');
      var btnAddToCartProduct = $('.btn-add-to-cart-product');

      btnAddToCart.each(function(){
      	$(this).on('click', function(){
      		var nameProduct = $(this).parent().find('.name-item').html();
      		showNotify(nameProduct);
      	});
      });

      btnAddToCartProduct.each(function(){
      	$(this).on('click', function(){
      		var nameProduct = $(this).parent().find('.name-product').html();
      		showNotify(nameProduct);
      	});
      });

      function showNotify(nameProduct) {
        $.notify({
         icon: "fa fa-shopping-cart",
         title: nameProduct,
         message: "is added to card"
       },{
        type: 'success',
        animate: {
          enter: 'animated fadeInUp',
          exit: 'animated fadeOutDown'
        },
        placement: {
          from: "bottom",
          align: "right"
        },
        delay: 3000,
        offset: 20,
        spacing: 10,
        z_index: 1031,
      });
      };
    });
    
})
(jQuery);