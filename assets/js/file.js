
 


//======== header scroll  =============	

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('menu').style.backgroundColor= scrolled==0?"white":"blue";
}
 


 //======== burgerMenu =============
 
 function burgerMenu(icon) {
    icon.classList.toggle("change");
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


