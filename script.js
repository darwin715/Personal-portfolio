const btn=document.getElementsByClassName('btn')[0];
const navbar=document.getElementsByClassName('navbar-links')[0];

btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');


function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove('active-link');
}
for(tabcontent of tabcontents){
    tabcontent.classList.remove('active-tab');
}
event.currentTarget.classList.add('active-link');
document.getElementById(tabname).classList.add('active-tab');
}
var sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
// services box
const boxViews = document.querySelectorAll(".services-box"),
  boxBtns = document.querySelectorAll(".services-button"),
  boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
  boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) => {
  boxBtn.addEventListener("click", () => {
    box(i);
  });
});

boxCloses.forEach((boxClose) => {
  boxClose.addEventListener("click", () => {
    boxViews.forEach((boxView) => {
      boxView.classList.remove("active-box");
    });
  });
});
