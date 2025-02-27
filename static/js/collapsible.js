document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.getElementsByClassName("collapsible-button");
  Array.from(buttons).forEach(function(button) {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      content.classList.toggle("active");
    });
  });
}); 