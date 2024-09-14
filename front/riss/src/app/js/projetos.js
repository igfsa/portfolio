$(document).ready(function(){

    const btnDwl = document.getElementById('button_download');
    const imgDwl = document.getElementById('img_download');

    const loadImgDwl = () => {
        imgDwl.src = 'media/download.png'
    }

    const loadImgDwlHover = () => {
        imgDwl.src = 'media/download_hover.png'
    }

    btnDwl.addEventListener('mouseover', loadImgDwlHover);
    btnDwl.addEventListener('mouseleave', loadImgDwl)

});