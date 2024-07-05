// loading_Screen_Start

$(function () {
  $('.loader').fadeOut(500, function(){
    $('.loadingScreen').slideUp(500, function () {
      $('body').css('overflow' , "auto");
      $('.loadingScreen').remove()
    });
  });
});
// loading_Screen_End

/*getUp_Button_start*/

$(window).scroll(function () {
 if (  $(window).scrollTop()>=$("#sliderDown").offset().top
 ){
  $(".btnUp").fadeIn(500)
 }
 else
 {
  $(".btnUp").fadeOut(500)
 }

})

$(".btnUp").click(function () {
  $("html,body").animate({scrollTop:0} ,500)
})

/*getUp_Button_End*/

/*SideNav_Start*/

$(".openNav").click(function(){
  $("#leftMenu").animate({ width:'250px'},50)
 $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
  $("#leftMenu").animate({ width:'0px'},50)
 $("#home-content").animate({marginLeft :'0px'},50)
})
/*SideNav_End*/


/*scroller_start*/
$("#leftMenu a").click(function(){
  
  let sectionId= $(this).attr("href");
  
  let positionOfSection = $(sectionId).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},1000);
  
})
/*scroller_End*/

/*Moving_start*/


$('#sliderDown .toggle').click(function(){
    $('.inner').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
});
/*Moving_End*/


/*counter*/


window.onload = function() {
   
    countDownToTime("01 october 2024 7:00:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {countDownToTime(countTo);}, 1000);
  }
/*counter_End*/

  
// TextArea

var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $(".Characyer").text("your available character finished");
                
            }
        else{
        
        $(".Characyer").text(AmountLeft);
        }
});
// TextArea_End

