//======== header scroll  =============	

window.onscroll = function() {
  const scrolled = window.pageYOffset; //|| document.documentElement.scrollTop;
  // document.getElementById('menu').style.backgroundColor= scrolled==0?"white":"blue";
  
  // уменьшать размер меню если scrolled > 0
}

 //======== burgerMenu =============

function burgerMenu(icon) { // this - это тот элемент на который кликнули
    icon.classList.toggle("change");

    const isMenuOpened = icon.classList.contains("change")
    const header = document.querySelector(".header")

    console.log('isMenuOpened=> ', isMenuOpened)
    console.log('header=> ', header)

    if (isMenuOpened) {
      header.classList.add("header_opened")
    } else {
      header.classList.remove("header_opened")
    }
}


// let omg = document.getElementById('nav');
// if(burgerMenu()){
//     omg.style.display ="block"
// }

// function opa (){

// }

// function click () {
//     let arr = document.getElementsByClassName('nav');

//     arr.style.display = 'block'
// }





//======== slider =============

let slideIndex = 1;

function move(n) {
  let slides = document.getElementsByClassName("intro__item");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }

  for (let s of slides) {
      s.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";    
}

move(slideIndex);

function next() {
    move(slideIndex += 1);
}

function previous() {
    move(slideIndex -= 1);  
}

function currentSlide(n) {
    move(slideIndex = n);
}
