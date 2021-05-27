function topFunction() {
  var body = $("html, body");
  body.stop().animate({scrollTop:0}, 500, 'swing');
}

function toggle_class(self, id, tClass, max_num=0, start=2){
  /*
  Toggles the class attribute "hidden" on element with 
  given id.
  For header cards we can define the number of cards
  (on mobile only the first one is visible an the other hidden)
  Each of the header cards should have an id, like "{id}-{number}"
  such that it is unique.
  Then on function call all elements (default starting from index 2
  since index one is already visible gets toggled the "hidden" attribute)
  The toggles of the function (eg. arrow-down, arrow-up)
  should be children of the element that holds the onClick method
  that calls this function. The one that should be showed after
  a click should be "hidden".
  */

  if (max_num <= 0){
    var element = document.getElementById(id)
    element.classList.toggle(String(tClass))  
  }else{
    for (i=start; i<= max_num; i++){
      var element = document.getElementById(id+`-${i}`);
      element.classList.toggle(String(tClass))  
    }
  }

  for (i=0; i<self.children.length; i++){
    self.children[i].classList.toggle(String(tClass))
  }
}

function expand_header(id, size="", num=0){
  if (num <= 0){
    var element = document.getElementById(id)
    expand_header_class_toggle(element);
  }else{
    for (i=2; i<= num; i++){
      var element = document.getElementById(id+`-${i}`);
      expand_header_class_toggle(element, size);
    }
  }
}

function expand_header_class_toggle(element, size){
  if ($(element).hasClass(size+"hidden")){
    element.classList.toggle(size+"hidden");
    $(element).height(0)
    $(element).animate({
      height: $(element).get(0).scrollHeight
    }, 200, function(){
      $(this).height("auto")
    });
  }else {
    $(element).animate({
      height: 0
    }, 200, function(){
      element.classList.toggle(size+"hidden");
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
    $("#truncate_"+id).toggleClass("hidden");
    $("#full_"+id).toggleClass("collapseText");
    $("#full_"+id).toggleClass("expandText");
    
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
