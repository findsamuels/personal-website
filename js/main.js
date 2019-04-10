
// alert("Loaded!");







    
  
//     var allTab = document.querySelector('#all');
//     var funTab = document.querySelector('#fun');
//     var communityTab = document.querySelector('#community');
//     var businessTab = document.querySelector('#business');

//     var funItem = document.querySelectorAll('.fun-content');

//     var communityItem = document.querySelectorAll('.community-content');
//     var businessItem = document.querySelectorAll('.business-content');

//     var tabItems = document.querySelectorAll('.card-1');

// var tabhead = document.querySelectorAll('.tabs-col-4__head');
//     var tabHeadText = document.querySelectorAll('tabs-col-4__head__headingStyle');




        
    

 
        var AppUI  = (function(){
////// Initialise App for UI
    
//////// Use initialised Dom for event
           
            var getDOM = {
               toggler: '.nav__togglecontainer',
                items: '.nav__item',
                allTab: '#all',
                funTab: '#fun',
                communityTab: '#community',
                businessTab: '#business',
                funItem: '.fun-content',
                communityItem: '.community-content',
                businessItem: '.business-content',
                tabItems: '.card-1',
                tabHead: '.tabs-col-4__head',
                tabHeadText: 'tabs-col-4__head__headingStyle',
            }

            return{
                returnGetDom: function(){
                    return getDOM;
                   
                }
        
            };

        })();



///App Controller or work calculation
        var AppController = (function(){

        })();

/////////////////////////////////////////////////////////////////////////////////////
        /////Controller
        var Controller = (function(UIApp, ControllerApp){

        var initialiseEvent = function(){
            var handleUI = UIApp.returnGetDom();

            var toggleNavBar = document.querySelector(handleUI.toggler);
            var showNav = document.querySelector(handleUI.items);

            var navfunTab = document.querySelector(handleUI.funTab);
            var navbusinessTab = document.querySelector(handleUI.businessTab);
            var navcommunityTab = document.querySelector(handleUI.communityTab);
            var navallTab = document.querySelector(handleUI.allTab);

            var navfunItem = document.querySelectorAll(handleUI.funItem);
            var navbusinessItem = document.querySelectorAll(handleUI.businessItem);
            var navcommunityItem = document.querySelectorAll(handleUI.communityItem);
            var navallItem = document.querySelectorAll(handleUI.tabItems);

//////////////////////////////////dom declaration
           

           
            toggleNavBar.addEventListener("click", toggleNav);
            navfunTab.addEventListener('click', toggleFunTab);
            navbusinessTab.addEventListener('click', toggleBusinessTab);
            navcommunityTab.addEventListener('click', toggleCommunityTab);
            navallTab.addEventListener('click', toggleAllTab);
                 
//////////////////////////////////EVENT LISTENER
            function toggleNav() {
                showNav.classList.toggle("is-visible");
                console.log('hello');
            }
                function toggleFunTab(){
                    for (var i = 0; i < navfunItem.length; i++) {
                        hideBusinessItems();
                        hideCommunityItems();
                        navfunTab.classList.add('wineBack');
                        navfunItem[i].style.display = 'block';
                        navallTab.classList.remove('wineBack');
                    }
                }
            function toggleBusinessTab() {
                for (var i = 0; i < navbusinessItem.length; i++) {
                    hideFunItems();
                    hideCommunityItems();
                    hideAllTabColor();
                    navbusinessItem[i].style.display = 'block';
                    navbusinessTab.classList.add('wineBack');
                }
            }
            function toggleCommunityTab() {
                for (var i = 0; i < navcommunityItem.length; i++) {
                    hideFunItems();
                    hideBusinessItems();
                    hideAllTabColor();
                    navcommunityItem[i].style.display = 'block';
                    navcommunityTab.classList.add('wineBack');
                }
            }
            function toggleAllTab() {
                for (var i = 0; i < navallItem.length; i++) {
                    navallItem[i].style.display = 'block';

                    navallTab.classList.add('wineBack');
                    navbusinessTab.classList.remove('wineBack');
                    navfunTab.classList.remove('wineBack');
                    navcommunityTab.classList.remove('wineBack');
                }
            }
            

     
            function hideAllTabColor() {
        navallTab.classList.remove('wineBack');
    }

    function hideBusinessItems() {
        for (var i = 0; i < navbusinessItem.length; i++) {
            navbusinessItem[i].style.display = 'none';
            navbusinessTab.classList.remove('wineBack');
        }
    }
    function hideFunItems() {
        for (var i = 0; i < navfunItem.length; i++) {
            navfunItem[i].style.display = 'none';
            navfunTab.classList.remove('wineBack');

        }
    }
    function hideCommunityItems() {
        for (var i = 0; i < navcommunityItem.length; i++) {
            navcommunityItem[i].style.display = 'none';
            navcommunityTab.classList.remove('wineBack');
        }
    }

            




        }
            
//////////////////////////RETURN DOM///////////////////////////////////////////////
            return{
                init: function(){
                    initialiseEvent(); 
                },
                
            }

        })(AppUI, AppController);


Controller.init();






