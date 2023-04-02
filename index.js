

///loader


const loader = document.querySelector("#preloader");
window.addEventListener("load", function(){
    loader.style.display = 'none';
})
///slick slider
$(document).ready(function(){
    $('.testimonials').slick({
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    });
  });

// text animation
const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front-end Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Back-end Developer";
    }, 5000);
    setTimeout(() => {
        text.textContent = "Programer";
    }, 10000);

}
textLoad();
setInterval(textLoad, 15000);

///sidebar

const about = document.querySelector("#about");
const resume = document.querySelector("#resume");
const project = document.querySelector("#project");
const contact = document.querySelector("#contact");

const aboutLink = document.querySelector("#aboutlink");
const resumeLink = document.querySelector("#resumelink");
const projectLink = document.querySelector("#projectlink");
const contactLink = document.querySelector("#contactlink");

const data = [about, resume, project, contact]
const dataLink = [aboutLink, resumeLink, projectLink, contactLink]
dataLink.map((item, index)=>{
    item.addEventListener('click', function(){
        data.map((a, i)=>{
            if(i !== index)
            {
                console.log(i);
                a.classList.add('lg:hidden', 'fadeOutLeft');
                a.classList.remove('fadeInLeft');
                a.classList.remove('lg:active');
                
            }
        })
        data[index].classList.add('lg:active', 'fadeInLeft');
        data[index].classList.remove('fadeOutLeft');
        data[index].classList.remove('lg:hidden');
        
    })
})

///popup project

const elementProject = document.querySelectorAll('.overlayx');
const popup = document.querySelector(".popup_project");
const close = document.querySelector(".close-btn");
const nameProject = document.querySelector('.image-name');
const imageProject = document.querySelector(".large-image");
const layoutProject = document.querySelector(".layout_project");
for (i = 0; i < elementProject.length; i++) {
    console.log(elementProject[i]);
    (function(i) {
     elementProject[i].addEventListener('click', function() {
        let name =elementProject[i].getAttribute('name');
        let image =elementProject[i].getAttribute('img');
        console.log(name, image);
        nameProject.innerHTML = name;
        imageProject.setAttribute('src', image)
        popup.classList.add('active_project');
      });
    })(i);
  }
  close.addEventListener('click', function(){
    popup.classList.remove('active_project')
  })
  layoutProject.addEventListener('click', function(e){
    e.stopPropagation();
    popup.classList.remove('active_project')
  })







