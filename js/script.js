// ====================================register part
$(".Register").click(function(){

    $("#form-part").slideDown();
})

$(".close").click(function(){

    $("#form-part").slideUp();
})


// ===================================login part 
$(".Login").click(function(){

  $("#login-part").slideDown();
})

$(".close").click(function(){

  $("#login-part").slideUp();
})



// ============================================banner part
$('.main').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
    nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
  });

// ========================================abourt part slider
  $('.about-slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

// =================================counter up 
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});
// ======================================our slider
$('.our-slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
});
// ========================================image
$('.image-part').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
  asNavFor: '.text-part'
});
// ==========================text slider
$('.text-part').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.image-part'
});
// ================================lstt
$('.last-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
});



