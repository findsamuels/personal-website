// import { setTimeout } from "timers";



const toggleNav = document.querySelector('.nav__togglecontainer');
const itemNav = document.querySelector('.nav__item');
const navContain = document.querySelector('.nav');

const tabAll = document.querySelector('#all');
const tabfun = document.querySelector('#fun');
const tabcommunity = document.querySelector('#community');
const tabbusiness = document.querySelector('#business');
const itemAll = document.querySelectorAll('.card-1');
const itemfun = document.querySelectorAll('.fun-content');
const itemcommunity = document.querySelectorAll('.community-content');
const itembusiness = document.querySelectorAll('.business-content');


const navScroll = () =>{
document.querySelectorAll('.nav__list').forEach((elem) => {
    elem.addEventListener('click', (event) =>{
        const block = event.target.dataset.block;
        console.log(block);
         const toBlock = document.getElementById(block); 
        // toBlock.scrollIntoView({ block: "start"});

        window.scrollTo({
            top: toBlock.offsetTop,
            left: 0,
         
        });


        setTimeout(() => {
            window.scrollBy(0, -45);
        }, 500);
        itemNav.classList.toggle('is-visible');
  
});
});

    document.querySelector('.arrowScroll').addEventListener('click', (event) =>{
        
        const block = event.target.dataset.block;
        console.log(block);
        toblock2 = document.getElementById(block);
        toblock2.scrollIntoView({ block: 'start' });
    });
}

navScroll();

let showInspiration = document.querySelectorAll('.inspiration-box');
let showSkills = document.querySelectorAll('.skills-list');
let showPortfolio = document.querySelectorAll('.portfolio');

const allDiv = [...showInspiration, ...showSkills, ...showPortfolio];
console.log(allDiv);

const scrollArrays = Array.from(allDiv);




scrollPos = 0;

windowY = window.windowY;
const prevScrollposition = window.pageYOffset;
window.addEventListener('scroll', () =>{
    for (let el of scrollArrays) {
        
        const currentScrollPosition = window.pageYOffset;
        if (currentScrollPosition > prevScrollposition){

            console.log("right");
            const scrollThis = divScroll => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(el.classList.add('show'));

                    }, 1000, divScroll);
                });
            };

            async function getscrolls() {
                const myScroll = await scrollThis();
                return myScroll;
            }
            getscrolls();
        // } else if (prevScrollposition > currentScrollPosition) {

        //     setTimeout(() => {
        //         console.log('removed');
        //         el.classList.remove('show');

        //     }, 1000);
           
        // }
        }
     }
});
   
       windowY = scrollPos;
    
    
    
    



//////////////////////////////Nav Class////////////////////////////////////
class NavClass {
    constructor(navContainer,navToggler, navItems){
        this.navContainer = navContainer;
        this.navToggler = navToggler;
        this.navItems = navItems;
    };

    navAnimation(){
        this.navToggler.addEventListener("click", () => {
            this.navItems.classList.toggle("is-visible");
        });
        const prevScrollpos = window.pageYOffset;
        window.addEventListener('scroll', () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > prevScrollpos){
            
                this.navContainer.classList.add('navScroll');
            } else {
                
                this.navContainer.classList.remove('navScroll');
            }
            
        })
    };



};
const containNav = new NavClass(navContain,toggleNav, itemNav);
containNav.navAnimation();
//////////////////////////////Tab Class//////////////////////////////////
class TabClass{
    constructor(allTab,funTab,communityTab,businessTab,allItems,funItems,cummunityItems,businessItems){
        this.allTab = allTab;
        this.funTab = funTab;
        this.communityTab = communityTab;
        this.businessTab = businessTab;
        this.allItems = allItems;
        this.funItems = funItems;
        this.cummunityItems = cummunityItems;
        this.businessItems = businessItems;  
    }
    controlTabs(){
         const hidefun = () => {
            for(let myfunitems of this.funItems){
                myfunitems.style.display = 'none';
                this.funTab.classList.remove('wineBack');
            }
        }
         const hidebusiness = () => {
            for (let myBusinessItems of this.businessItems) {
                myBusinessItems.style.display = 'none';
                this.businessTab.classList.remove('wineBack');
            }
        }

        const hidecommunity = () =>{
            for (let myCommunityItems of this.cummunityItems) {
                myCommunityItems.style.display = 'none';
                this.communityTab.classList.remove('wineBack');
            }
        }

        this.allTab.addEventListener('click', () => {
            for (var i = 0; i < this.allItems.length; i++) {
                this.allItems[i].style.display = 'block';

                this.allTab.classList.add('wineBack');
                this.businessTab.classList.remove('wineBack');
                this.funTab.classList.remove('wineBack');
                this.communityTab.classList.remove('wineBack');
            }
        });


        this.funTab.addEventListener('click', () => {
            for (var i = 0; i < this.funItems.length; i++) {
                this.funTab.classList.add('wineBack');
                this.funItems[i].style.display = 'block';
                this.allTab.classList.remove('wineBack'); 
                hidecommunity();
                hidebusiness();
            }
        });
        this.businessTab.addEventListener('click', () => {
            for (var i = 0; i < this.businessItems.length; i++) {
                
                this.businessItems[i].style.display = 'block';
                this.businessTab.classList.add('wineBack');
                this.allTab.classList.remove('wineBack'); 
                hidefun();
                hidecommunity();
            }
        });

        

        this.communityTab.addEventListener('click', () => {
            for (var i = 0; i < this.cummunityItems.length; i++) {
                
                this.cummunityItems[i].style.display = 'block';
                this.communityTab.classList.add('wineBack');
                this.allTab.classList.remove('wineBack'); 
                hidefun();
                hidebusiness();
            }
        });

    }

}

const containTabs = new TabClass(tabAll,tabfun,tabcommunity,tabbusiness,itemAll,itemfun,itemcommunity,itembusiness);

containTabs.controlTabs();







