const body = document.getElementsByTagName(`body`)[0];

const corpo = document.getElementsByClassName(`corpo`);
const corpoArray = Array.from(corpo);

const footer = document.getElementsByTagName(`footer`)[0];

const footerA = document.querySelectorAll('footer link');
const footerAArray = Array.from(footerA);

const menu = document.getElementsByClassName('menu');
const menuArray = Array.from(menu);

const navLink = document.getElementsByClassName('nav-link');
const navLinkArray = Array.from(navLink);

const btnDark = document.getElementById(`button-dark-mode`)

const titulo = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulo);

const subtitulo = document.getElementsByClassName('subtitulo');
const subtituloArray = Array.from(subtitulo);

function darkMode(){
    btnDark.classList.toggle(`dark-mode`);
    body.classList.toggle(`dark-mode`);
    footer.classList.toggle(`dark-mode`);

    if (body.classList.contains(`dark-mode`)){
        btnDark.innerHTML = `Modo claro`
    }else {
        btnDark.innerHTML = `Modo escuro`
    }
}

function darkModeBody(){
    footerAArray.map((item) => {item.classList.toggle(`dark-mode`)});
    menuArray.map((item) => {item.classList.toggle(`dark-mode`)});
    navLinkArray.map((item) => {item.classList.toggle(`dark-mode`)});
    tituloArray.map((item) => {item.classList.toggle(`dark-mode`)});
    subtituloArray.map((item) => {item.classList.toggle(`dark-mode`)});
    corpoArray.map((item) => {item.classList.toggle(`dark-mode`)});
}

btnDark.addEventListener(`click`, darkMode);

btnDark.addEventListener(`click`, darkModeBody);