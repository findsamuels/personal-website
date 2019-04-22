// import { setTimeout } from "timers";


// AOS.init();

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
let showSkills = document.querySelectorAll('.skills');
let showPortfolio = document.querySelectorAll('.portfolio');

///////////////////////////////FORM CONTROL///////////////////////////////

function formValidate(form) {
    const emailvalidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    console.log('clicked');
    if (emailvalidator.test(form.email.value)) {
        
        document.querySelector('.emailInvalid').classList.remove('show');
return true;
    } else  {
      
        document.querySelector('.emailInvalid').classList.add('show');
       form.email.focus();
       return false;
    }
   
}

// let btnSubmit = document.querySelector('.submitForm');

// btnSubmit.addEventListener('click', () => {
    
//     let formControl = document.querySelector('.form');
   
   
// });

//  function formControl() {
    
// }


//////////////////////////////SKILL- CLASS////////////////////////////////////
const skillList = Array.from(document.querySelectorAll('.skills-list__title'));
const skilldesc = document.querySelectorAll('.skill-desc');



console.log(skilldesc);
class SkillClass{
    constructor(mySkillLists, mySkillDescription){
        this.mySkillLists = mySkillLists;
        this.mySkillDescription = mySkillDescription;
    }

    showskilldescription(){
        const myskilldesc = this.mySkillDescription;

        
  for(let el1 of this.mySkillLists){
    el1.addEventListener('click' , (event) =>{
        for (let el2 of myskilldesc ){
           
                el2.classList.toggle('show');
            
          
            // el2.style.display = 'block';
    

}
     
  
    });
  }
    }
}
const skilllist1 = new SkillClass(skillList, skilldesc);

const skillControl = function(s){
s.showskilldescription();
}
skillControl(skilllist1);

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
            if (currentScrollPos > prevScrollpos  || currentScrollPos){
            
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







