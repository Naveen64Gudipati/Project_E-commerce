// login
function login(){
    document.getElementById("login-container").classList.toggle("loginstyle");
 }

 //Banner
 const slide = document.querySelectorAll(".slide");
 let prevbtn=document.getElementsByClassName("prevbtn");
 let nextbtn=document.getElementsByClassName("nextbtn");
 let dots=document.querySelectorAll(".dot");
 let currentSlide = 0;
 
 function imageSlide() {
     slide[currentSlide].classList.remove("active");
     currentSlide = (currentSlide + 1) % slide.length;
     slide[currentSlide].classList.add("active");
 }
 setInterval(imageSlide, 4000);
 //dots
 let count=0
 function dotmove() {
    dots[count].classList.remove("activedot");
    count = (count + 1) % dots.length;
    dots[count].classList.add("activedot");
}
setInterval(dotmove, 4000);

//next button
let button=0;
function nextclick() {
    slide[button].classList.remove("active");
    button = (button + 1) % slide.length;
    slide[button].classList.add("active");
   
}

//prev button
let prevbutton=0
function backclick() {
    slide[prevbutton].classList.remove("active");
    prevbutton = (prevbutton - 3 ) % slide.length;
    slide[prevbutton].classList.add("active");

}

// Menu bar
function menu(){
   document.getElementById("frame1").classList.toggle("style");
}

// Add to cart
function opencart(){
    document.getElementById("cartmenu").classList.toggle("addtocart")
}

// Select Quantity
let counter_value=0
let counter=document.getElementById("counter")
function increment(){
    counter_value++;
    counter.textContent=counter_value;
    }
    

function decrement(){
    if (counter_value<=0) {
        counter=0;
    }else{
        counter_value--;
    }counter.textContent=counter_value;
    
}

//VR Image change
function changeimg(imagename) {
    let display=document.querySelector("#productimg");
    display.setAttribute('src',imagename);
}