function topFunction() {
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, 500, 'swing');
}

function expand_element_toggle(element, size=""){
  if (element.hasClass(size+"hidden")){
    element.toggleClass(size+"hidden");
    element.height(0)
    element.animate({
      height: element.get(0).scrollHeight
    }, 200, function(){
      $(this).height("auto")
    });
  }else {
    element.animate({
      height: 0
    }, 200, function(){
      element.toggleClass(size+"hidden");
      $(this).height("auto")
    });
  }
}

$(document).ready(function(){
  $(".expandLink").click(function(){
    var id = $(this).attr("id")
    $("#truncate_"+id).toggle("hidden");
    var link_text = $("#full_"+id);
    expand_element_toggle(link_text)
    
    $(this).children().toggleClass("hidden");
  })

  $(window).scroll(function() {
    if ($(document).scrollTop() > 20 && !$("#button_up_dsk").hasClass("sm:block")){
      $("#button_up_dsk").addClass("sm:block")
      $("#button_up_dsk").css({opacity: 0}).animate({opacity: 1.0}, 500);
    }else if($(document).scrollTop() == 0){
      $("#button_up_dsk").css({opacity: 1.0}).animate({opacity: 0}, 500, function(){
        $("#button_up_dsk").removeClass("sm:block")
      });
    }
  })

  $("#info_card_right").click(function(){
    var current_visible_card = $("#info_card_container > .active");
    if (current_visible_card.next().length == 0)
      return
    
    var position_of_card = current_visible_card.attr("id").split("-")[1];
    var translation_value = position_of_card * 100;
    $("#info_card_container").children().animate({right: `${translation_value}%`}, 250);

    current_visible_card.toggleClass("active");
    current_visible_card.next().toggleClass("active");

    if ($("#info_card_container > .active").prev().length > 0)
      $("#info_card_left").removeClass("invisible");

    if ($("#info_card_container > .active").next().length == 0)
      $("#info_card_right").addClass("invisible");
  })

  $("#info_card_left").click(function(){
    var current_visible_card = $("#info_card_container > .active");
    if (current_visible_card.prev().length == 0)
      return

    var position_of_card = current_visible_card.attr("id").split("-")[1];
    var translation_value = (position_of_card-2) * 100;
    
    $("#info_card_container").children().animate({right: `${translation_value}%`}, 250)
    current_visible_card.toggleClass("active");
    current_visible_card.prev().toggleClass("active");

    if ($("#info_card_container > .active").prev().length == 0)
      $('#info_card_left').addClass("invisible");
    
    if ($("#info_card_container > .active").next().length > 0)
      $("#info_card_right").removeClass("invisible");
  })

  $(window).resize(function(){
    // handle jump between screen classes and the translation 
    // of the info cards. Simply reset the cards on each resize
    /*$('#info_card_container').children().css({right: `0%`});
    $('#info_card_left').addClass("invisible");
    $('#info_card_right').removeClass("invisible");
    $('#info_card_container').children().removeClass("active");
    $('#infocard-1').addClass("active");*/
  });
  

});
