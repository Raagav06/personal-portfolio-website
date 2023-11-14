// header toggle

let menubtn = document.getElementById('menubtn')

menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
// <---------------------------------->
// typing effect
var typed = new Typed(".auto-input",{
    strings:["Full stack Devaloper",],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
})

// Active Link State on Scroll

// Get all links
let navLinks = document.querySelectorAll('nav ul li a')
// Get All Sections
let Sections = document.querySelectorAll('section')

window.addEventListener('scroll',function(){
    const scrollpos = window.scrollY +20
    Sections.forEach(Section => {
        if(scrollpos > Section.offsetTop && scrollpos < (Section.offsetTop + Section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(Section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    })
        
 })
