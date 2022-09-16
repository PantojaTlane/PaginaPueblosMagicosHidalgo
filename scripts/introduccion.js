const sectionIntroduccion = document.querySelector('#introduccion');


window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let sectionHeight = sectionIntroduccion.scrollHeight;
    
    if(scrollY > (sectionHeight+50)){
        sectionIntroduccion.classList.remove('hide-left');
    }else{
        sectionIntroduccion.classList.add('hide-left');
    }
});


