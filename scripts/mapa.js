const mapaFrame = document.querySelector('#frame-mapa');


window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let sectionMap = mapaFrame.scrollHeight;
    
    if(scrollY > (sectionMap+50)){
        mapaFrame.classList.remove('hide-right');
    }else{
        mapaFrame.classList.add('hide-right');
    }
});