var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Electrical Electronics Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  
let element = document.querySelector("#veri");
let addHero = document.querySelector("#ekle");
let new_ul = document.querySelector("ul#Mid-Lane");
let clickCount = 0;

function checkClicks() {
  if (clickCount === 20) {
    localStorage.clear();
    clickCount = 0;
    alert('!');
  }
}

addHero.addEventListener("click", function () {
  let new_li = document.createElement("li");
  new_li.innerHTML = element.value;
  new_ul.appendChild(new_li);
  element.value = "";
  localStorage.setItem("heroes", new_ul.innerHTML);
  clickCount++;
  checkClicks();
});

window.addEventListener("load", function () {
  if (localStorage.getItem("heroes")) {
    new_ul.innerHTML = localStorage.getItem("heroes");
  }
});


  

  
  
  
  
  
  