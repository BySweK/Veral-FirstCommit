let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let indirim = document.querySelector("#indirim");
let ih4 = document.querySelector(".ih4");
let b1 = document.querySelector("#b1");
let kapat = document.querySelector("#kapat");
let karsilama = document.querySelector("#karsilama");
let ortasayfa = document.querySelector(".ortaSayfa");
let buton1 = document.querySelector("#xyz");
let body = document.querySelector("body");
let main = document.querySelector(".main");
let mainalt = document.querySelector(".main-altı");
let mainsorgu = document.querySelector("#main-sorgu");
let list = document.querySelector("#list");
let searchlist = document.querySelector(".search-list");

window.addEventListener("load", hosgeldin);

function hosgeldin() {
  main.style.opacity = 0;
  mainalt.style.opacity = 0;
  ortasayfa.style.opacity = 0;
  karsilama.style.opacity = 1;
  body.style.opacity = 0.75;
  setTimeout(() => {
    main.style.opacity = 1;
    mainalt.style.opacity = 1;
    ortasayfa.style.opacity = 1;
    karsilama.style.opacity = 0;
    body.style.opacity = 1;
  }, 2000);
}

mainsorgu.addEventListener("click", function () {
  searchlist.style.display = "block";
  list.style.display = "block";
  mainalt.style.opacity = 0.25;
  ortasayfa.style.opacity = 0.25;

  mainsorgu.addEventListener("keyup", function () {
    let x = document.getElementsByClassName("btnler");
    let value = mainsorgu.value.toLowerCase();

    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(value)) {
        x[i].style.display = "none";
      } else {
        x[i].style.display = "block";
      }
    }
  });
});

document.querySelector("#btb").addEventListener("click", function () {
  searchlist.style.display = "none";
  mainalt.style.opacity = 1;
  ortasayfa.style.opacity = 1;
});
