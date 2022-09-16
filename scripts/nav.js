const navMobil = document.querySelector('#nav-mobil');
const bntHamburguer = document.querySelector('#btn-hamburguer');


const containerSearch = document.querySelector('#resultados-search');
const inputSearch =  document.querySelector('#searchPlace');
let lugares = [
    {
        name: "Zona Arqueologica",
        idSearch: "zonaarqueologica"
    },
    {
        name: "Grutas de Tolantongo",
        idSearch: "grutastolantongo"
    },
    {
        name: "Mineral del Chico",
        idSearch: "mineraldelchico"
    },
    {
        name: "Huichapan",
        idSearch: "huichapan"
    },
    {
        name: "Los Frailes",
        idSearch: "losfrailes"
    }
];


bntHamburguer.addEventListener('click',()=>{
    navMobil.classList.toggle('hide-menu-hamburguer');
});


let liS = [...navMobil.children[0].children];
liS.forEach(li => {
    li.addEventListener('click',()=>{
        navMobil.classList.add('hide-menu-hamburguer');
    });
});


inputSearch.addEventListener('input',e=>{
    let results = [];
    let lugarBuscado = e.target.value;

    if(lugarBuscado==""){
        results = [];
    }else{
        results = lugares.filter(lugar => {
                if(lugar.idSearch.includes(lugarBuscado)){
                    return lugar;
                }
            }   
        );
    }

    mostrarResultados(results);
});


function mostrarResultados(results) {
    containerSearch.innerHTML = "";
    if(results.length){
        results.forEach(place => {
            let {name} = place;
            let p = document.createElement('p');
            p.innerHTML = `
            <span><i class="fa-sharp fa-solid fa-location-dot"></i></span>${name}`;
            containerSearch.appendChild(p);
        });
        containerSearch.classList.remove('hide-cont-search');
    }else{
        containerSearch.classList.add('hide-cont-search');
    }
}