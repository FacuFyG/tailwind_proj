
const initApp = () =>{
    const hamburguerBtn = document.getElementById('hamburguer-button');
    const moobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () =>{
        moobileMenu.classList.toggle('hidden');
        moobileMenu.classList.toggle('flex');
    }

    hamburguerBtn.addEventListener('click', toggleMenu);
    moobileMenu.addEventListener('click', toggleMenu);
}


document.addEventListener('DOMContentLoaded', initApp);