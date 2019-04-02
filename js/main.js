
// alert("Loaded!");



//  init();

var items = document.querySelector('.nav__item');
var toggler = document.querySelector('.nav__togglecontainer');

var allTab = document.querySelector('#all');
var funTab = document.querySelector('#fun');
var communityTab = document.querySelector('#community');
var businessTab = document.querySelector('#business');

var funItem = document.querySelectorAll('#fun-item');
var allItem = document.querySelectorAll('#all-item');
var communityItem = document.querySelectorAll('#community-item');
var businessItem = document.querySelectorAll('#business-item');

var tabItems = document.querySelectorAll('.tabs-col-4__items');

var tabHead = document.querySelectorAll('.tabs-col-4__head');
var tabHeadText = document.querySelectorAll('tabs-col-4__head__headingStyle');
    


var isDisplay;
    toggler.addEventListener("click", function(){
        items.classList.toggle("is-visible");
    });


// for (var i = 0; i < tabHead.length; i++) {
//     var tabHeader = tabHead[i];
//     tabHeader.addEventListener('click', function() {

//         tabHeader.classList.toggle('wineBack');
//     });

    
// }



tabToggle();

   function tabToggle(){

       


       funTab.addEventListener('click', function () {
           for (var i = 0; i < funItem.length; i++) {

               hideTabItems();
               funTab.classList.add('wineBack');
               funItem[i].style.display = 'block';
               

               allTab.classList.remove('wineBack');
             
               communityTab.classList.remove('wineBack'); 
               businessTab.classList.remove('wineBack'); 

           }
       });

       businessTab.addEventListener('click', function () {
           for (var i = 0; i < businessItem.length; i++) {

               hideTabItems();
               businessItem[i].style.display = 'block';

               businessTab.classList.add('wineBack'); 
               allTab.classList.remove('wineBack');
               communityTab.classList.remove('wineBack');
               funTab.classList.remove('wineBack'); 


           }
       });
       communityTab.addEventListener('click', function () {
           for (var i = 0; i < communityItem.length; i++) {

               hideTabItems();
               communityItem[i].style.display = 'block';

               communityTab.classList.add('wineBack');
               businessTab.classList.remove('wineBack');
               allTab.classList.remove('wineBack');
               funTab.classList.remove('wineBack'); 
           }
       });

       allTab.addEventListener('click', function () {
           for (var i = 0; i < tabItems.length; i++) {
               tabItems[i].style.display = 'block';

               allTab.classList.add('wineBack');
               communityTab.classList.remove('wineBack');
               businessTab.classList.remove('wineBack');
               funTab.classList.remove('wineBack');

           }
       });
   }



   
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


   






