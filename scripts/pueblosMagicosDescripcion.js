const pueblosMagicosDescripcion = document.querySelector('#pueblos-magicos-descripcion');
const sayWeather = document.querySelectorAll('#say-weather');

window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let sectionHeight = pueblosMagicosDescripcion.scrollHeight;
    console.log("ScrollY: " + scrollY);
    console.log("sectionHeight: " + sectionHeight);
    if(scrollY > (sectionHeight+450)){
        pueblosMagicosDescripcion.classList.remove('hide-left');
    }else{
        pueblosMagicosDescripcion.classList.add('hide-left');
    }
});



const pueblos = document.querySelector('#pueblos');


window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let sectionPueblo = pueblos.scrollHeight;
    console.log("secton pueblo: " + sectionPueblo);
    if(scrollY - 350> sectionPueblo){
        pueblos.classList.remove('hide-right');
    }else{
        pueblos.classList.add('hide-right');
    }
});
