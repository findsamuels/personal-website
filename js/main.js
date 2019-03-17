
// alert("Loaded!");


var items = document.querySelector('.nav__item');
var toggler = document.querySelector('.nav__toggle');




    toggler.addEventListener("click", function(){
        alert("Loaded!");
        if (items.style.display === "none") {
            items.style.display = "block";
            items.style.opacity = "1";

        }
        else {
            items.style.display = "block";
        }
    });
        
        


   






