//const btnVerMas = document.querySelectorAll('#ver-mas');

//console.log(btnVerMas);
const modalMapaLugar = document.querySelector('#mapa-lugar');

function showModal(urlMap,name) {
    modalMapaLugar.innerHTML = "";
    modalMapaLugar.innerHTML = 
    `
    <div id="info-arrive">
        <i class="fa-solid fa-square-xmark"></i>
        <aside><h3>Como llegar a ${name}</h3></aside>
        <iframe
        src="${urlMap}"
        width="100%"
        height="95%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
    `;
    modalMapaLugar.classList.remove('hide-mapa-lugar');
    const btnCloseModalMapa = document.querySelector('.fa-square-xmark');
    btnCloseModalMapa.addEventListener('click',()=>{
        modalMapaLugar.classList.add('hide-mapa-lugar');
    });
}