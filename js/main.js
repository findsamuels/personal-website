
// alert("Loaded!");



//  init();

var items = document.querySelector('.nav__item');
var toggler = document.querySelector('.nav__togglecontainer');

var allTab = document.querySelector('#all');
var funTab = document.querySelector('#fun');
var communityTab = document.querySelector('#business');
var businessTab = document.querySelector('#comminity');

var funItem = document.querySelectorAll('#fun-item');
var allItem = document.querySelectorAll('#all-item');
var communityItem = document.querySelectorAll('#business-item');
var businessItem = document.querySelectorAll('#comminity-item');

var tabItems = document.querySelectorAll('.tabs-col-4__items');
    hideTabItems();


var isDisplay;
    toggler.addEventListener("click", function(){
        items.classList.toggle("is-visible");
    });


funTab.addEventListener('click', function(){
    for (var i = 0; i < funItem.length; i++) {
        funItem[i].style.display = 'block';

    }
});

allTab.addEventListener('click', function(){
    for (var i = 0; i < tabItems.length; i++) {
        tabItems[i].style.display = 'block';

    }
});

   
function hideTabItems(){
    for (var i = 0; i < tabItems.length; i++) {
        tabItems[i].style.display = 'none';

    }
}
        
//Initialise
// function init() {

//     var items = document.querySelector('.nav__item');
//     var toggler = document.querySelector('.nav__togglecontainer');

//     var allTab = document.querySelector('#all');
//     var funTab = document.querySelector('#fun');
//     var communityTab = document.querySelector('#business');
//     var businessTab = document.querySelector('#comminity');
//     var tabItems = document.querySelectorAll('.tabs-col-4__items');

// }


   






