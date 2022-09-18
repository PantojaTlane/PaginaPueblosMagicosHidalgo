const containerBalneariosMagicosDescripcion = document.querySelector('#balnearios-magicos-descripcion');
const balnearios = document.querySelector('#balnearios');


window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let containerBalnearios = containerBalneariosMagicosDescripcion.scrollHeight;
    
    if(scrollY - 1650 > containerBalnearios){
        containerBalneariosMagicosDescripcion.classList.remove('hide-left');
    }else{
        containerBalneariosMagicosDescripcion.classList.add('hide-left');
    }
});


window.addEventListener('scroll',()=>{
    let scrollY = window.scrollY;
    let containBal = balnearios.scrollHeight;
    
    if(scrollY - 1150 > containBal){
        balnearios.classList.remove('hide-right');
    }else{
        balnearios.classList.add('hide-right');
    }
});