const containerOtrosLugaresDescripcion = document.querySelector('#otros-lugares-descripcion');



window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let containerLugaresD = containerOtrosLugaresDescripcion.scrollHeight;
    
    if(scrollY - 2400 > containerLugaresD){
        containerOtrosLugaresDescripcion.classList.remove('hide-left');
    }else{
        containerOtrosLugaresDescripcion.classList.add('hide-left');
    }
});