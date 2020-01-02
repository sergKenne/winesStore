
jQuery('#camera_wrap').camera({
    alignment: 'topCenter',
    height: '34.30%',
    minHeight: '100px',
    loader : false,
    navigation: true,
    fx: 'simpleFade',
    navigationHover:false,       
    thumbnails: false,
    playPause: false,
    pagination:false,

    time: 3000

});

// $(window).resize(function() {
//   location.reload();
// });


//nav-mobile bar menu

$("#nav-mobile-js").click(function(){
	 $(this).parent().toggleClass("nav-mobile__items--toggle-color");
     $(".nav-mobile__sub-list").toggleClass("nav-mobile__sub-list--toggle");             
});

$(".search-btn-js").click(function() {
     $(".nav-menu-search").slideToggle();
});

$(".shopping-cart-js").click(function() {
     $(".nav-menu-shopping-cart").slideToggle();
});


//desktop

var windowWidth = $(window).width();


$(".line-lang__sublist-toggle").click(function() {
		var thisSublist = $(this).parent().find(".line-lang__sub-list");
		var sublist = $('.line-lang__sub-list');
		if(thisSublist.is(':visible')) {
			thisSublist.slideUp();
		}
		else {
			sublist.slideUp();
			thisSublist.slideDown();
		}
});



if( windowWidth > 768 ) {

    $('#sub-list-hover').hover(
        function () {
          $(this).find('.main-menu__sub-list').slideDown();
        }, 
        function () {
          $(this).find('.main-menu__sub-list').slideUp();
        }
    );
}








//------------------ a revoireline-lang__sub-list--active
//var widthWindow = $(window).width();
 
$("#sub-list-hover").click(function() {
	$(this).children(".main-menu__sub-list").slideToggle();
});



//================toggle sublist-items======================// 1024


$(".icon-toggle").parent().click(function() {

    if( $(this).find(".icon-toggle__icons-plus").hasClass("js-visible") ) {

         $(".icon-toggle").find(".icon-toggle__icons-minus").removeClass("js-visible");
         $(".icon-toggle").find(".icon-toggle__icons-plus").addClass("js-visible");

         $(this).find(".icon-toggle__icons-plus").removeClass("js-visible");
         $(this).find(".icon-toggle__icons-minus").addClass("js-visible");

    }else {

         $(".icon-toggle").find(".icon-toggle__icons-plus").addClass("js-visible")
         $(".icon-toggle").find(".icon-toggle__icons-minus").removeClass("js-visible");     

    }

});


   

// var windowWidth = $(window).width();

if(windowWidth < 725) {

    $(".js-block-title").click(function() {


        if($(this).next().is(":visible")) {

            $(this).next().slideUp();

        }else {

            $(".js-block-container").slideUp();
            $(this).next().slideDown();

        }
    });


    $(".js-block-title-footer").click(function() {  


        if($(this).next().is(":visible")) {

            $(this).next().slideUp();

        }else {

            $(".js-block-container-footer").slideUp();
            $(this).next().slideDown();

        }
    });

}






$(".categories-header").click(function() {

     if( $(this).next(".main-menu").is(":visible") ) {

          $(this).next(".main-menu").slideUp();

          $(this).find(".icon-toggle__icons-plus").addClass("js-visible");
          $(this).find(".icon-toggle__icons-minus").removeClass("js-visible");

     } else {

          $(this).next(".main-menu").slideDown();

          $(this).find(".icon-toggle__icons-plus").removeClass("js-visible");
          $(this).find(".icon-toggle__icons-minus").addClass("js-visible");
     }

});



$("#sub-list-hover").click(function() {
  
   $(this).parents(".main-menu").prev().find(".icon-toggle__icons-plus").removeClass("js-visible");
   $(this).parents(".main-menu").prev().find(".icon-toggle__icons-minus").addClass("js-visible");
     
});




$(".main-title--product-page").click(function() {

    $(this).next(".js-block-slide-picture-description").slideToggle();

});




$(".js-show-list").click(function() {

  //test
    $(".js-show-list").addClass("js-active-btn-show-list");
    $(".js-show-grid").removeClass("js-active-btn-show-list");


    $(this).addClass("js-active-btn-show-list");

    $(this).prev().removeClass("js-active-btn-show-list");

    var parent_block = $(this).parents(".main-container__wrapper-content");

    parent_block.find(".product-content__items").addClass("product-content__items--show-list-form");

    parent_block.find(".product__image").addClass("product__image--show-list-form");

    parent_block.find(".product__description").addClass("product__description--show-list-form");

    parent_block.find(".product__title").addClass("product__title--show-list-form");

    parent_block.find(".product__subtitle").addClass("product__subtitle--show-list-form");

    parent_block.find(".product__subtitle-blog").addClass("product__subtitle-blog--show-list-form");

    parent_block.find(".product__add").addClass("product__add--show-list-form");
    
});



$(".js-show-grid").click(function() {

  //test
    $(".js-show-grid").addClass("js-active-btn-show-list");
    $(".js-show-list").removeClass("js-active-btn-show-list");


    $(this).addClass("js-active-btn-show-list");

    $(this).next().removeClass("js-active-btn-show-list");

    var parent_block = $(this).parents(".main-container__wrapper-content");

    parent_block.find(".product-content__items").removeClass("product-content__items--show-list-form");

    parent_block.find(".product__image").removeClass("product__image--show-list-form");

    parent_block.find(".product__description").removeClass("product__description--show-list-form");

    parent_block.find(".product__title").removeClass("product__title--show-list-form");

    parent_block.find(".product__subtitle").removeClass("product__subtitle--show-list-form");

    parent_block.find(".product__subtitle-blog").removeClass("product__subtitle-blog--show-list-form");

    parent_block.find(".product__add").removeClass("product__add--show-list-form");
    
});




if(windowWidth < 426) {

   var show_list = $(".js-add-class-show-list");

    show_list.find(".product-content__items").addClass("product-content__items--show-list-form");

    show_list.find(".product__image").addClass("product__image--show-list-form");

    show_list.find(".product__description").addClass("product__description--show-list-form");

    show_list.find(".product__title").addClass("product__title--show-list-form");

    show_list.find(".product__subtitle").addClass("product__subtitle--show-list-form");

    show_list.find(".product__subtitle-blog").addClass("product__subtitle-blog--show-list-form");

    show_list.find(".product__add").addClass("product__add--show-list-form");
}



