function topFunction() {
  var mainContainer = document.getElementById("mainContainer");
  mainContainer.scrollTop = 0;
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}