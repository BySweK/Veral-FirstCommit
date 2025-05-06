document.querySelector("#next").addEventListener("click", () => {
  if (document.querySelector("#kapat").textContent == "Erkek Modası") {
    document.querySelector("#kapat").textContent = "Kadın Modası";
    document.querySelector("#resim1").src = "resim/resim1.jpg";
    document.querySelector("#resim2").src = "resim/resim2.jpg";
    document.querySelector("#resim3").src = "resim/resim3.jpg";
    document.querySelector("#resim4").src = "resim/resim4.jpg";
    document.querySelector("#resim5").src = "resim/resim5.jpg";
  } else {
    document.querySelector("#kapat").textContent = "Erkek Modası";
    document.querySelector("#resim1").src = "resim/traş.jpg";
    document.querySelector("#resim2").src = "resim/saç.jpg";
    document.querySelector("#resim3").src = "resim/mont1.jpg";
    document.querySelector("#resim4").src = "resim/indir(4).jpg";
    document.querySelector("#resim5").src = "resim/ayakkabo.jpg";
  }
});

document.querySelector("#back").addEventListener("click", () => {
  if (document.querySelector("#kapat").textContent == "Erkek Modası") {
    document.querySelector("#kapat").textContent = "Kadın Modası";
    document.querySelector("#resim1").src = "resim/resim1.jpg";
    document.querySelector("#resim2").src = "resim/resim2.jpg";
    document.querySelector("#resim3").src = "resim/resim3.jpg";
    document.querySelector("#resim4").src = "resim/resim4.jpg";
    document.querySelector("#resim5").src = "resim/resim5.jpg";
  } else {
    document.querySelector("#kapat").textContent = "Erkek Modası";
    document.querySelector("#resim1").src = "resim/traş.jpg";
    document.querySelector("#resim2").src = "resim/saç.jpg";
    document.querySelector("#resim3").src = "resim/mont1.jpg";
    document.querySelector("#resim4").src = "resim/indir(4).jpg";
    document.querySelector("#resim5").src = "resim/ayakkabı.jpg";
  }
});
