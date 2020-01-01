$(function(){

  $('.hamburger').click(function(){
    $('.header__top-nav ul').slideToggle();
   });


   $('.header__slider').slick({
    prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  });
  $(".progress").each(function()
    {
      let data,progressHeight, color;
      data = $(this).attr('data');
      progressHeight = $(this).attr('progressHeight');
      color = $(this).attr('color');
      $(this).css('height', progressHeight);
      let barSpan = '<span class="bar"></span>';
      let valueSpan = '<span class="value"></span>';
      $(this).append(barSpan);
      $(this).append(valueSpan);
      $(this).children(".bar").css('width', data+'%');
      $(this).children(".bar").css('background-color', color);
      // $(this).children(".value").html(data+'%');
    })
    
    
    var mixer =  mixitup ( ' .amazing__work_img ' );

    // $(function() {
    //   $("div.tabs_nav").on("click", ".tab:not(.active)", function() {
    //     $(this)
    //       .addClass("active")
    //       .siblings()
    //       .removeClass("active")
    //       .closest("div.section__services-tab")
    //       .find("div.tabs__item")
    //       .removeClass("active")
    //       .eq($(this).index())
    //       .addClass("active");
    //   });

    $(" .tabs_services .tab").click(function() {
      $(" .tabs_services .tab").removeClass("active").eq($(this).index()).addClass("active");
       $(".tabs_services .tabs__item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
    


//   $(".js-range-slider").ionRangeSlider({
//     type: "double",
//     // grid: true,
//     skin: "round",
//     min: 0,
//     max: 1000,
//     from: 0,
//     to: 600,
//     prefix: "$"
//   });
  
  
    
//   $('input, select').styler();
    
   
  


// $('.slider__wrapper').slick({
//   infinite: true,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   arrows: false,
//   dots: true
// });

//     $(".tabs__wrapper .tab").click(function () {
//       $(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
//       $(".tabs__wrapper .tab-item").hide().eq($(this).index()).fadeIn()
//     }).eq(0).addClass("active");


//     $(".up").on("click", "a", function (event) {
//       event.preventDefault();
//       var id = $(this).attr('href'),
//         top = $(id).offset().top;
//       $('body,html').animate({
//         scrollTop: top
//       }, 500);
//     });

 });
  
  
    

  