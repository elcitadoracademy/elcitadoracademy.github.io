$( document ).ready(function() { 


  //*** Header js
  $(window).scroll(function() { 
    if ($(window).scrollTop() > 50) {
      $('header.land-header').addClass('sticky');
    } else {
      $('header.land-header').removeClass('sticky');
    }
  });
  $(document).on("click",'.menu-action',function(){    
    $('.menu-list').toggleClass('open');  
    $('.cdx-layer').toggleClass("open");
    $(this).toggleClass("toggle-active")
  });
  if($(window).width() < 992){
      $(".submenu-list,.secodnmenu-list").slideUp('');
      $(".menu-list li.menu-item > a" ).on( "click", function() {      
        $(this).parents('.menu-list').find(".submenu-list").slideUp('');  
        $(this).parents('.menu-list').find(".secodnmenu-list").slideUp('');                
        if($(this).next(".submenu-list").is(':hidden')){
          $(this).next(".submenu-list").slideToggle('');  
        }                
      });
      $(".menu-list li.sub-menu-item > a" ).on( "click", function() {      
        $(this).parents('.menu-list').find(".secodnmenu-list").slideUp('');         
        if($(this).next(".secodnmenu-list").is(':hidden')){
          $(this).next(".secodnmenu-list").slideToggle('');  
        }                
      });  

      $(document).on("click",'.cdx-layer',function(){    
        $(".menu-list").removeClass("open");
        $(this).removeClass("open");
        $('.menu-action').removeClass("toggle-active");
      });   
    }

  // *** Password Hide Show
  $('.toggle-show').click(function(){
    var inp = $('.showhide-password');
    if (inp.attr('type') == 'password') {
      setTimeout(function(){
          inp.attr('type','text');  
          $(".toggle-show").addClass('fa-eye-slash');   
      },250);
      } else {
        setTimeout(function(){
          inp.attr('type','password');;
          $(".toggle-show").removeClass('fa-eye-slash');
        },250);        
      } 
  });


  //*** Back To Top
  $(window).scroll(function() {
    if ($(window).scrollTop() > 450) {
      $('.scroll-top').addClass('show');
    } else {
      $('.scroll-top').removeClass('show');
    } 
  });
  $(document).ready(function(){
    $(document).on("click",'.scroll-top',function(){    
      $('html, body').animate({scrollTop:0}, '450');
    });
  });



});


  //*** Customizer  
   $('.dark-customizer .dark-mode').click(function(){
      $(this).next().addClass('show');
      $('body').addClass('dark-mode');
    });
    $('.dark-customizer .light-mode').click(function(){
       $('body').removeClass('dark-mode');
      $(this).removeClass('show');
    });
    $('.toggle-color').click(function(){
      $('.pick-color').addClass('open');
    });
    $('.close-colorpick').click(function(){
      $('.pick-color').removeClass('open')
    });
    $('.color-list').on( 'click', '.color1', function() {   
      $("#cdxcolor" ).attr("href", "../assets/css/style.css" );
      return false;
    });
    $('.color-list').on( 'click', '.color2', function() {   
      $("#cdxcolor" ).attr("href", "../assets/css/color2.css" );
      return false;
    });
    $('.color-list').on( 'click', '.color3', function() {   
      $("#cdxcolor" ).attr("href", "../assets/css/color3.css" );
      return false;
    });
    $('.color-list').on( 'click', '.color4', function() {   
      $("#cdxcolor" ).attr("href", "../assets/css/color4.css" );
      return false;
    });
    $('.color-list').on( 'click', '.color5', function() {   
      $("#cdxcolor" ).attr("href", "../assets/css/color5.css" );
      return false;
    });
    $('.color-list').on( 'click', '.color6', function() {   
      $("#cdxcolor" ).attr("href", "../assets/css/color6.css" );
      return false;
    });

// $(document).on("click", function(event){
//   //***Action Menu
//   var $trigger = $(".menu-action");
//   if($trigger !== event.target && !$trigger.has(event.target).length){        
//     $(".menu-list").removeClass("open");        
//   }          
// });  

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});