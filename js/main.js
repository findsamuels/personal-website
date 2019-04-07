
// alert("Loaded!");



//  init();

var items = document.querySelector('.nav__item');
var toggler = document.querySelector('.nav__togglecontainer');

var allTab = document.querySelector('#all');
var funTab = document.querySelector('#fun');
var communityTab = document.querySelector('#community');
var businessTab = document.querySelector('#business');

var funItem = document.querySelectorAll('.fun-content');

var communityItem = document.querySelectorAll('.community-content');
var businessItem = document.querySelectorAll('.business-content');

var tabItems = document.querySelectorAll('.card-1');

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





       
    function clickedTab(tabName){

            return function (item) {
                tabName.addEventListener('click', function () {
                switch (true) {
                    case tabName === funTab:
                        for (var i = 0; i < item.length; i++) {
                        hideBusinessItems();
                        hideCommunityItems();
                        funTab.classList.add('wineBack');
                        item[i].style.display = 'block';
                        allTab.classList.remove('wineBack');
                        }
                        break;

                    case tabName === businessTab:
                        for (var i = 0; i < item.length; i++) {
                        hideFunItems();
                        hideCommunityItems();
                        hideAllTabColor();
                        item[i].style.display = 'block';
                        businessTab.classList.add('wineBack');
                        }
                        break;

                    case tabName === communityTab:
                        for (var i = 0; i < item.length; i++) {
                        hideFunItems();
                        hideBusinessItems();
                        hideAllTabColor();
                        item[i].style.display = 'block';
                        communityTab.classList.add('wineBack');
                        }
                        break;

                    case tabName === allTab:
                        for (var i = 0; i < item.length; i++) {
                        item[i].style.display = 'block';

                        allTab.classList.add('wineBack');
                        businessTab.classList.remove('wineBack');
                        funTab.classList.remove('wineBack');
                        communityTab.classList.remove('wineBack');
                        }
                        break;
                        default:
                        console.log('Error');

                }
                });
            }
        

        
    }

    clickedTab(funTab)(funItem);
clickedTab(businessTab)(businessItem);
       clickedTab(communityTab)(communityItem);
clickedTab(allTab)(tabItems);


   
   

   ///////////////////FUNCTIONS DECLARATIONS
   function hideAllTabColor(){
       allTab.classList.remove('wineBack');
   }

function hideBusinessItems() {
    for (var i = 0; i < businessItem.length; i++) {
        businessItem[i].style.display = 'none';
        businessTab.classList.remove('wineBack'); 
    }
}
function hideFunItems() {
    for (var i = 0; i < funItem.length; i++) {
        funItem[i].style.display = 'none';
        funTab.classList.remove('wineBack');

    }
}
function hideCommunityItems() {
    for (var i = 0; i < communityItem.length; i++) {
        communityItem[i].style.display = 'none';
        communityTab.classList.remove('wineBack'); 
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


   






