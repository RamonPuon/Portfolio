const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//Show Menu
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    } )
}


//Hide Menu
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

//Remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(x => x.addEventListener('click', linkAction))


//Open/Close skills
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills(){
    let itemClass = this.parentNode.className;

    if(itemClass === "skills_content skills_open"){
       this.parentNode.className = "skills_content skills_closed"
       }
    
    if(itemClass === "skills_content skills_closed"){
        this.parentNode.className = "skills_content skills_open"
    }
    
}

skillsHeader.forEach( x=>{
    x.addEventListener("click", toggleSkills)
})


//Qualification Tabs

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        //tab.dataset
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("qualification_active")
        })
        target.classList.add("qualification_active")

        tabs.forEach(tab => {
            tab.classList.remove("qualification_active")
        })
        tab.classList.add("qualification_active")
    })
})


//Services Modal

const modalViews = document.querySelectorAll(".services_modal");
const modalBtns = document.querySelectorAll(".services_button");
const modalCloses = document.querySelectorAll(".services_modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener("click", ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click", ()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove("active-modal")
        })
    })
})

// Portfolio Swiper

let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    keyboard: true,
  });


//Show Scroll Top

function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    //When scroll is higher than 560 viewport height, add show-scoll class
    if(this.scrollY >= 560){
        scrollUp.classList.add("show-scroll")
    } else{
        scrollUp.classList.remove("show-scroll")
    }
}

window.addEventListener("scroll", scrollUp)
