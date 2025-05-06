let btn15 = document.querySelector("#btn1");
let btn25 = document.querySelector("#btn2");
let btn35 = document.querySelector("#btn3");
let btn45 = document.querySelector("#btn4");
let btn55 = document.querySelector("#btn5");
let Ürünler = document.querySelector("#Ürünler");
let card1 = document.querySelector("#card1");
let card2 = document.querySelector("#card2");
let card3 = document.querySelector("#card3");
let card4 = document.querySelector("#card4");
let card5 = document.querySelector("#card5");
let isimP = document.querySelector("#isimP");
let fiyatP = document.querySelector("#fiyatP");
let aciklamaP = document.querySelector("#aciklamaP");
let pSatinAl = document.querySelector("#pSatinAl");
let list = document.querySelector("#list");
let sepetButton = document.querySelector("#sepet");
let sepet = document.querySelector(".sepet");

btn1.addEventListener("click", calistir);
btn2.addEventListener("click", calistir2);
btn3.addEventListener("click", calistir3);
btn4.addEventListener("click", calistir4);
btn5.addEventListener("click", calistir5);

{
  /* <li class="list-group-item">
<img id="resim" src="resim/ayakkabı.jpg" alt="" />
<br />
<p class="text-center">Ayakkabı</p>
<p class="text-center">139,95 TL</p>
<br />
<button class="btn btn-outline-danger">
  <i class="bi bi-trash-fill"></i>
</button>
<button class="btn btn-outline-success">
  <i class="bi bi-check-lg"></i>
</button>
</li> */
}

sepetButton.addEventListener("click", function () {
  if (list.style.opacity == 1) {
    list.style.opacity = 0;
  } else {
    list.style.opacity = 1;
    if (list.innerHTML == "") {
      alert("Sepete Herhangi Bir Ürün Eklemediniz.");
    } else {
    }
  }
});

function calistir() {
  btn15.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const img = document.createElement("img");
    img.id = "resim";
    img.src = "resim/indir (5).jpg";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.classList.add("text-center");
    p2.classList.add("text-center");
    p1.innerText = "Tıraş Bıçağı";
    p2.innerText = "149,95 TL";
    const btn1 = document.createElement("btn");
    btn1.classList.add("btn");
    btn1.classList.add("btn-outline-success");
    const i1 = document.createElement("i");
    i1.classList.add("bi");
    i1.classList.add("bi-check-lg");
    const btn2 = document.createElement("btn");
    btn2.classList.add("btn");
    btn2.classList.add("btn-outline-danger");
    const i2 = document.createElement("i");
    i2.classList.add("bi");
    i2.classList.add("bi-trash-fill");

    btn1.appendChild(i1);
    btn2.appendChild(i2);
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(btn1);
    li.appendChild(btn2);
    list.appendChild(li);

    btn2.addEventListener("click", function () {
      list.removeChild(li);
    });
  });
}

function calistir2() {
  btn25.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const img = document.createElement("img");
    img.id = "resim";
    img.src = "resim/indir (6).jpg";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.classList.add("text-center");
    p2.classList.add("text-center");
    p1.innerText = "Tıraş Köpüğü";
    p2.innerText = "139,95 TL";
    const btn1 = document.createElement("btn");
    btn1.classList.add("btn");
    btn1.classList.add("btn-outline-success");
    const i1 = document.createElement("i");
    i1.classList.add("bi");
    i1.classList.add("bi-check-lg");
    const btn2 = document.createElement("btn");
    btn2.classList.add("btn");
    btn2.classList.add("btn-outline-danger");
    const i2 = document.createElement("i");
    i2.classList.add("bi");
    i2.classList.add("bi-trash-fill");

    btn1.appendChild(i1);
    btn2.appendChild(i2);
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(btn1);
    li.appendChild(btn2);
    list.appendChild(li);

    btn2.addEventListener("click", function () {
      list.removeChild(li);
    });
  });
}

function calistir3() {
  btn35.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const img = document.createElement("img");
    img.id = "resim";
    img.src = "resim/indir (7).jpg";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.classList.add("text-center");
    p2.classList.add("text-center");
    p1.innerText = "Nemlendirici";
    p2.innerText = "299,95 TL";
    const btn1 = document.createElement("btn");
    btn1.classList.add("btn");
    btn1.classList.add("btn-outline-success");
    const i1 = document.createElement("i");
    i1.classList.add("bi");
    i1.classList.add("bi-check-lg");
    const btn2 = document.createElement("btn");
    btn2.classList.add("btn");
    btn2.classList.add("btn-outline-danger");
    const i2 = document.createElement("i");
    i2.classList.add("bi");
    i2.classList.add("bi-trash-fill");

    btn1.appendChild(i1);
    btn2.appendChild(i2);
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(btn1);
    li.appendChild(btn2);
    list.appendChild(li);

    btn2.addEventListener("click", function () {
      list.removeChild(li);
    });
  });
}

function calistir4() {
  btn45.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const img = document.createElement("img");
    img.id = "resim";
    img.src = "resim/indir (8).jpg";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.classList.add("text-center");
    p2.classList.add("text-center");
    p1.innerText = "Hacı Şakir Sabun";
    p2.innerText = "99,95 TL";
    const btn1 = document.createElement("btn");
    btn1.classList.add("btn");
    btn1.classList.add("btn-outline-success");
    const i1 = document.createElement("i");
    i1.classList.add("bi");
    i1.classList.add("bi-check-lg");
    const btn2 = document.createElement("btn");
    btn2.classList.add("btn");
    btn2.classList.add("btn-outline-danger");
    const i2 = document.createElement("i");
    i2.classList.add("bi");
    i2.classList.add("bi-trash-fill");

    btn1.appendChild(i1);
    btn2.appendChild(i2);
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(btn1);
    li.appendChild(btn2);
    list.appendChild(li);

    btn2.addEventListener("click", function () {
      list.removeChild(li);
    });
  });
}

function calistir5() {
  btn55.addEventListener("click", () => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const img = document.createElement("img");
    img.id = "resim";
    img.src = "resim/indir (9).jpg";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.classList.add("text-center");
    p2.classList.add("text-center");
    p1.innerText = "Güneş Kremi";
    p2.innerText = "399,95 TL";
    const btn1 = document.createElement("btn");
    btn1.classList.add("btn");
    btn1.classList.add("btn-outline-success");
    const i1 = document.createElement("i");
    i1.classList.add("bi");
    i1.classList.add("bi-check-lg");
    const btn2 = document.createElement("btn");
    btn2.classList.add("btn");
    btn2.classList.add("btn-outline-danger");
    const i2 = document.createElement("i");
    i2.classList.add("bi");
    i2.classList.add("bi-trash-fill");

    btn1.appendChild(i1);
    btn2.appendChild(i2);
    li.appendChild(img);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(btn1);
    li.appendChild(btn2);
    list.appendChild(li);

    btn2.addEventListener("click", function () {
      list.removeChild(li);
    });
  });
}

{
}
