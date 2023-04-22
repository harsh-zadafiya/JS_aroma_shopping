// checking the dom is loaded or not
$(document).ready(() => {
  const accordion = document.getElementsByClassName("container");

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
});
