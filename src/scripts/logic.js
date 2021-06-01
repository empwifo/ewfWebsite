function topFunction() {
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, 500, 'swing');
}

function expand_header(id, size="", num=0){
  if (num <= 0){
    var element = $(`#${id}`);
    expand_header_class_toggle(element);
  }else{
    for (i=2; i<= num; i++){
      var element = $(`#${id}-${i}`);
      expand_header_class_toggle(element, size);
    }
  }
}

function expand_header_class_toggle(element, size=""){
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

  $("#header-btn-dsk").click(function(){
    var all_header_batches = $(".header-card-batch-style");
    expand_header("header-batch", "sm:", all_header_batches.length)
    $(this).children().toggle("hidden");
  });

  $("#header-btn-mbl").click(function(){
    var all_header_items = $(".header-card-item-style");
    expand_header("header-card", "", all_header_items.length)
    $(this).children().toggle("hidden");
  });

  $(".expandLink").click(function(){
    var id = $(this).attr("id")
    $("#truncate_"+id).toggle("hidden");
    var link_text = $("#full_"+id);
    expand_header_class_toggle(link_text)
    
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

});
