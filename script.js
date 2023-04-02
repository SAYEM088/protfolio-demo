// toggle
let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar')
menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections =document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a')
console.log(navlinks)
window.onscroll =()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -120;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');
        if(top >= offset&& top < offset + height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id +']').classList.add('active');
            })
        }
    })
    // sticky navbar
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.screenY>150);
    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');

}
// scroll revail
ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration : 2500,
     delay: 100
    });
ScrollReveal().reveal('.home-contain ,.heading , .about-heading ' ,{ origin: 'top' });
ScrollReveal().reveal('.home-img ,.service-container , .portfolio-container, form' ,{ origin: 'bottom' });
ScrollReveal().reveal('.home-contain h1 ,.img-about' ,{ origin: 'left' });
ScrollReveal().reveal('.about-contain p ,.about-contain h3 , .about-para, .home-contain p' ,{ origin: 'right' });

// animation sxript
let textani = document.querySelector(".anitor");
const textaniLoad = () =>{
    setTimeout(() =>{
        textani.textContent = "Frontend Developer";
    },0);
    setTimeout(() =>{
        textani.textContent = "learning React js";
    },5995);
    setTimeout(() =>{
        textani.textContent = "wishing to become Data Scientist";
        setInterval(textaniLoad, 6000);
    },12000);
}
textaniLoad();

