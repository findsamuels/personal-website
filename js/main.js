
// alert("Loaded!");


var items = document.querySelector('.nav__item');

var toggler = document.querySelector('.nav__togglecontainer');


var isDisplay;

// var show = function(items){
//     items.classList.add("is-visible");
// }
// var hide = function (items) {
//     items.classList.remove("is-visible");
// }

if ((window.innerWidth > 800) && (window.getComputedStyle(items).display === "none") || (window.getComputedStyle(items).display === "block")) {

    items.style.display = "none";


}

    toggler.addEventListener("click", function(){

        items.classList.toggle("is-visible");
        
       
        
    });

        
        


   






