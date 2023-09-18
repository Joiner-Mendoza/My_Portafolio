  const menuAndroip = document.querySelector('.modal-navbar__background');
  const iconMenu = document.querySelector('.header__menu-icon');
  const closeMenuAndroip = document.querySelector('.navbar-responsive__close-icon');
  const verMasButton = document.getElementById('ver-mas');
  const all = document.querySelector('.all');
  const allLinks = document.querySelectorAll('a');



iconMenu.addEventListener('click', toogleIconMenu)


closeMenuAndroip.addEventListener('click', () =>{
  menuAndroip.classList.toggle('inactive')
  
})



let isExpanded = false;

verMasButton.addEventListener('click', () => {
  isExpanded = !isExpanded;
  if (isExpanded) {
    all.classList.toggle('inactive');
  } else {
    all.classList.toggle('inactive');
  }
});

// Prevent default de los elementos A

allLinks.forEach(link => {
link.addEventListener('click',events => {
  events.preventDefault();
})

});

// enlaces



document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("header nav a");
  
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      const targetSection = document.querySelector(link.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});



document.addEventListener("DOMContentLoaded", function(){
    const navLinksResponsive = document.querySelectorAll('.modal-navbar__background nav a');

    navLinksResponsive.forEach(link => {
      link.addEventListener('click', function(event){
        event.preventDefault();

        const sectionLinks = document.querySelector(link.getAttribute("href"));
        sectionLinks.scrollIntoView({ behavior: "smooth" });
      })
    });
    
});


document.addEventListener("DOMContentLoaded", function() {
  const socialLinks = document.querySelectorAll(".home-sci a");
  
  socialLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      
      const targetURL = link.getAttribute("href");
      window.open(targetURL, "_blank");
    });
  });
  
  const verMasButton = document.querySelector(".ver-mas");
  
  verMasButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Cambiar el texto del botón
    const buttonText = verMasButton.textContent;
    verMasButton.textContent = buttonText === "Ver Mas" ? "Ver Menos" : "Ver Mas";
    

  });
});

document.addEventListener("DOMContentLoaded", function() {
  const smoothScrollButtons = document.querySelectorAll(".btn-box a");
  
  smoothScrollButtons.forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      
      const targetSelector = button.getAttribute("href");
      const targetElement = document.querySelector(targetSelector);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// boton flecha del footer

// este lo hice yo y no sirvio

// document.addEventListener("DOMContentLoaded", function() {
//   const smoothScrollArrow = document.querySelector(".bx");

//   smoothScrollArrow.addEventListener('click', function(event) {
//     event.preventDefault();

//     const targetSelector = smoothScrollArrow.getAttribute('href');
//     const targetElement = document.querySelector(targetSelector);

//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });


// end chat gtp
document.addEventListener("DOMContentLoaded", function() {
  const footerIconTop = document.querySelector(".footer__icon-top");

  footerIconTop.addEventListener('click', function(event) {
    event.preventDefault();

    const homeSection = document.querySelector("#home");

    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Resto del código...
});

// fin chat gtp
// Funciones


function toogleIconMenu(){
  menuAndroip.classList.toggle('inactive')
}
const slider = document.querySelector('.slider');
let slideIndex = 0;

function showSlide(slideIndex) {
  slider.style.transform = `translateX(-${slideIndex * 34}%)`;
  

}

function nextSlide() {
  slideIndex = (slideIndex + 1) % 3;
  showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Cambiar de imagen cada 3 segundos
// funcion para ancho d epantalla

function checkWindowWidth(){
  const screenWidth =window.innerWidth;
  const maxWidth = 920;//aqui defino el ancho de l apantalla

  if (screenWidth <= maxWidth){
    slider.style.transform = `translateX(-${index * 100}%)`
  
  }
}
// aqui llamo a la funcion para verificar cuando la pantalla a llegado a las dimensiones requeridas
checkWindowWidth();
window.addEventListener('resize', () => {
  checkWindowWidth();
});
 






// aqui
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a')

window.onscroll = () => {
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);
}































