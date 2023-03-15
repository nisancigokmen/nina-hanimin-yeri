function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const MenuOpenImg = document.querySelector(".menu-img");
const MenuCloseImg = document.querySelector(".closebtn");

MenuOpenImg.addEventListener("click", function () {
  MenuOpenImg.style.display = "none";
});

MenuCloseImg.addEventListener("click", function () {
  MenuOpenImg.style.display = "block";
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
