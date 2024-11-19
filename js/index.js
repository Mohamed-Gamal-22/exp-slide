var imgs = document.querySelectorAll(".cars img");
var main = document.querySelector("#main");

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {

    var mySrc = e.target.getAttribute("src");
    main.setAttribute("src", mySrc);
  });
}
