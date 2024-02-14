// 

// if you scroll down 20px from the top, add a class to the navbar dont use jquery
window.onscroll = function () {
  var logo = document.getElementById("logo");
  if (window.scrollY >= 20) {
    logo.classList.add("logo_small");
  }

  console.log(window.scrollY);
  if (window.scrollY == 0) {
    logo.classList.remove("logo_small");
  }

}
