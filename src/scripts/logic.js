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
  var prev_window_width = $(window).width();
  
  $("#nav-toggle").click(function(){
    var data_holder = $("#nav-content")
    
    var target_height = 0
    if (data_holder.hasClass("invisible")){
      data_holder.height(0)
      target_height = data_holder.get(0).scrollHeight;
    }

    var isexpanding = false
    if (data_holder.hasClass("invisible")){
      isexpanding = true
      data_holder.toggleClass("invisible")
      data_holder.toggleClass("h-0")
    }
    
    data_holder.animate({height: target_height+10}, 100, function(){
      if (!isexpanding){
        data_holder.toggleClass("invisible")
        data_holder.toggleClass("h-0")
      }
    });
    // hamburger menu animation
    $('#hamburger_top').toggleClass("-translate-y-1.5").toggleClass("rotate-45")
    $('#hamburger_center').toggleClass("opacity-0")
    $('#hamburger_bottom').toggleClass("translate-y-1.5").toggleClass("-rotate-45")
  })

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

  $(".category_toggle_button").click(function(){
    var id = $(this).attr("id");
    var data_holder = $("#data_"+id);

    data_holder.children().toggleClass("hidden")
    
    var target_height = 0
    if (data_holder.hasClass("invisible")){
      data_holder.height(0)
      target_height = data_holder.get(0).scrollHeight;
    }

    var isexpanding = false
    if (data_holder.hasClass("invisible")){
      isexpanding = true
      data_holder.toggleClass("invisible")
      data_holder.toggleClass("h-0")
    }
    
    data_holder.animate({height: target_height}, 200, function(){
      if (!isexpanding){
        data_holder.toggleClass("invisible")
        data_holder.toggleClass("h-0")
      }
      // removing style to handle transition between 
      // different layouts (on screen rotate) better
      data_holder.removeAttr("style")
    });

    $(this).children().toggleClass("hidden");
  });

  $("#info_card_left").click(function(){
    var current_visible_card = $("#info_card_container > .active");
    if (current_visible_card.prev().length == 0)
      return

    var position_of_card = current_visible_card.attr("id").split("-")[1];
    var translation_value = (position_of_card-2) * 100;
    
    $("#info_card_container").children().animate({right: `${translation_value}%`}, 250)
    current_visible_card.toggleClass("active");
    current_visible_card.prev().toggleClass("active");

    if ($("#info_card_container > .active").prev().length == 0){
      $('#info_card_left').addClass("invisible");
    }
    
    if ($("#info_card_container > .active").next().length > 0){
      $("#info_card_right").removeClass("invisible");
    }
  })

  $(window).resize(function(e){
    // handle jump between screen classes and the translation 
    // of the info cards. Simply reset the cards on each resize
    if (!(prev_window_width < 1024 && $(this).width() >= 1024)){
      prev_window_width = $(this).width();
      return
    }
    prev_window_width = $(this).width();
    $('#info_card_container').children().css({right: `0%`});
    $('#info_card_left').addClass("invisible");
    $('#info_card_right').removeClass("invisible");
    $('#info_card_container').children().removeClass("active");
    $('#infocard-1').addClass("active");
  });


  // slide show logic
  setInterval(function() {
    var slider = $("#banner_images_slider").children();
    slider.each(function(index){
      if ($(this).hasClass("active_banner_img")){
        var active_banner = $(this);
        active_banner.find("img").css({opacity: 1}).animate({opacity: 0.0}, 3000, function(){
          active_banner.toggleClass("hidden").toggleClass("active_banner_img");
        })

        var next_banner_index = Math.floor(Math.random() * slider.length);

        //if (index+1 < slider.length)
        // next_banner_index = index+1;

        $(slider[next_banner_index]).toggleClass("active_banner_img").toggleClass("hidden");
        $(slider[next_banner_index]).find("img").css({opacity: 0.0}).animate({opacity: 1}, 3000)

        return false;
      }

    });
  }, 10000)
  

});
