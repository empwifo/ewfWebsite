function topFunction() {
  var mainContainer = document.getElementById("mainContainer");
  mainContainer.scrollTop = 0;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
  */

  if (max_num <= 0){
    var element = document.getElementById(id)
    element.classList.toggle(String(tClass))
  }else{
    for (i=start; i<= max_num; i++){
      var element = document.getElementById(id+`-${i}`);
      element.classList.toggle(String(tClass));
    }
  }

  for (i=0; i<self.children.length; i++){
    self.children[i].classList.toggle(String(tClass))
  }
}