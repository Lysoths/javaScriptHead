const html = document.querySelector("html");
const head1 = document.querySelector(".head1");
const head2 = document.querySelector(".head2");
const head3 = document.querySelector(".head3");
const headx1 = document.querySelector(".headx1");
const headx2 = document.querySelector(".headx2");
const headx3 = document.querySelector(".headx3");
let body = document.querySelector(".x")

function head1Add() {head1.classList.add("headToRight")}
function head1Remove() {head1.classList.remove("headToRight")}
function head2Add() {head2.classList.add("headToRight")}
function head2Remove() {head2.classList.remove("headToRight")}
function head3Add() {head3.classList.add("headToRight")}
function head3Remove() {head3.classList.remove("headToRight")}

function headx1Add() {headx1.classList.add("headToLeft")}
function headx1Remove() {headx1.classList.remove("headToLeft")}
function headx2Add() {headx2.classList.add("headToLeft")}
function headx2Remove() {headx2.classList.remove("headToLeft")}
function headx3Add() {headx3.classList.add("headToLeft")}
function headx3Remove() {headx3.classList.remove("headToLeft")}

function showHead1(){
    head1Add() 
    head3Remove()
    headx1Add() 
    headx3Remove()
}
function showHead2(){
    head1Remove() 
    head2Add()
    headx1Remove() 
    headx2Add()

}

function showHead3(){
    head2Remove() 
    head3Add()
    headx2Remove() 
    headx3Add()
}
function randomBg(){
  
    red = Math.floor(Math.random()*255)
    green = Math.floor(Math.random()*255)
    blue = Math.floor(Math.random()*255)

    body.style.backgroundColor = `rgba(${red},${green},${blue})`;
 

}

document.addEventListener("scroll" , scroll);

function scroll(){
    randomBg();
    if (scrollY > 99 && scrollY < 199 )  {
        head1Add()
        headx1Add()
    }else if(scrollY > 199 && scrollY < 299) {
        showHead2()
    }else if (scrollY >299 && scrollY < 399) {
        showHead3()
    }else if (scrollY > 399 && scrollY < 499) {
        showHead1();
    }else if (scrollY > 499 && scrollY < 599) {
        showHead2();
    }else if (scrollY > 599 && scrollY < 699) {
       showHead3();
    }else if (scrollY > 699 && scrollY < 799) {
        showHead1();
    }else if (scrollY > 799 && scrollY < 899) {
        showHead2();
    }else if (scrollY > 899 && scrollY < 999) {
       showHead3();
    }else if (scrollY > 999 && scrollY < 1099) {
        showHead1();
    } else {
        head1Remove();
        head2Remove();
        head3Remove();
        headx3Remove();
        headx2Remove();
        headx1Remove();
    }
}



function openRandomBG() {
    body = document.querySelector("body");
}

function closeRandomBG (){
    body = document.querySelector(".x");
    document.querySelector("body").style.backgroundColor = "white";
}