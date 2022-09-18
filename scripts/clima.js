

function consultarAPI(pais,ciudad){
    const apiId = "84d70eb0548ae3641b62fbc3332ef7a1";

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => procesarDatos(datos))
}



function procesarDatos(datos){
    if(datos.cod =="404"){
        mostrarMensaje("Ubicacion invalida");
        return;
    }

    const {main:{temp,temp_min,temp_max},name,weather} = datos;

    console.log(temp);

    const temperatura = parseInt(temp - 272.15);
    const temperaturaMin = parseInt(temp_min - 272.15);
    const temperaturaMax = parseInt(temp_max - 272.15);


    if(weather[0].main == "Clouds"){
        insertarDatos(temperatura,temperaturaMin,temperaturaMax,name,"Nubes","clouds.png");
    }
    if(weather[0].main == "Hize"){
        insertarDatos(temperatura,temperaturaMin,temperaturaMax,name,"Neblina","hize.png");
    }
    if(weather[0].main == "Clear"){
        insertarDatos(temperatura,temperaturaMin,temperaturaMax,name,"Despejado","clear.png");   
    }
    if(weather[0].main == "Rain"){
        insertarDatos(temperatura,temperaturaMin,temperaturaMax,name,"Lluvia","rain.png"); 
    }
}






function insertarDatos(temp,temp_min,temp_max,name,weather,imagen){
    const clima = document.querySelector('#clima');
    clima.innerHTML = `
        
            <div class="temperatura">
                <h1>${name}</h1>
                <h2>${temp}&#8451</h2>
                <div><h4>Min: ${temp_min}&#8451</h4><h4>Max: ${temp_max}&#8451</h4></div>
            </div>
            <div class="clima">
                <div><h4>${weather}</h4></div>
                <img src="./img/${imagen}" alt="${imagen}">
            </div>
       
    `;
}


consultarAPI('México','Pachuca');



let climasPueblos = new Array();

function obtenerClimaPueblosMagicos(pais,estado,ciudad){
    const apiId = "84d70eb0548ae3641b62fbc3332ef7a1";
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${estado},${pais}&appid=${apiId}`;
    
    return fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => obtenerTemperatura(datos,ciudad))
}

function obtenerTemperatura(datos,ciudad) {
    const containerPueblos = document.querySelector('#pueblos');
    const {main:{temp}} = datos;
    const temperatura = parseInt(temp - 271.15);
    ciudad = ciudad.replace(/\s+/g, '');
    ciudad = ciudad.toLowerCase();
    
    containerPueblos.innerHTML = "";

    lugares.forEach(lugar => {
        if(lugar.tipo != "balneario"){
            if(lugar.idSearch == ciudad){
                //console.log("Coincide " + ciudad);
                lugar.clima = temperatura;
                //console.log(lugar.idSearch + ": " + lugar.clima);
            }
            const div = document.createElement('div');
            div.setAttribute('id',lugar.id);
            div.setAttribute('data-map',lugar.mapaUrl);
            div.classList.add('scale');
            div.innerHTML = 
            `
                <img src="${lugar.img}" />
                <div id="say-weather">
                <p>${lugar.name}</p>
                <button id="ver-mas">Ver</button>
                <i class="fa-solid fa-temperature-three-quarters"></i>
                <h4>${lugar.clima}°C</h4>
                </div>
            `;
            containerPueblos.appendChild(div);
        }
    });


    const scale = document.querySelectorAll('.scale');
    scale.forEach(item => {
        item.addEventListener('mouseover',e=>{//Sobre
            e.stopPropagation();
            item.childNodes[3].classList.add('show-say');
        });
        item.addEventListener('mouseout',e=>{//Sobre
            e.stopPropagation();
            item.childNodes[3].classList.remove('show-say');
        });
    });

    /*Esta es la logica para obtener los datos y mostrarlos en un modal */
    const btnVerMasPueblo = document.querySelectorAll('#ver-mas');
    btnVerMasPueblo.forEach(btn => {
        btn.addEventListener('click',e=>{
            let mapURL = e.target.parentElement.parentElement.getAttribute('data-map');
            let name = e.target.parentElement.childNodes[1].textContent;
            showModal(mapURL,name);
        });
    })
    /*Esta es la logica para obtener los datos y mostrarlos en un modal */
}

obtenerClimaPueblosMagicos('México','Hidalgo','Huichapan');
obtenerClimaPueblosMagicos('México','Hidalgo','Huasca de Ocampo');
obtenerClimaPueblosMagicos('México','Hidalgo','Mineral del Monte');
obtenerClimaPueblosMagicos('México','Hidalgo','Zimapán');
obtenerClimaPueblosMagicos('México','Hidalgo','Zempoala');
obtenerClimaPueblosMagicos('México','Hidalgo','Tecozautla');
obtenerClimaPueblosMagicos('México','Hidalgo','Mineral del Chico');



const containerBalnearios = document.querySelector('#balnearios');

lugares.forEach(lugar => {
    if(lugar.tipo == "balneario"){
        const div = document.createElement('div');
        div.setAttribute('id',lugar.id);
        div.setAttribute('data-map',lugar.mapaUrl);
        div.classList.add('scale');
        div.innerHTML = 
        `
        <img src="${lugar.img}" />
        <div id="say-weather">
          <p>${lugar.name}</p>
          <button id="ver-mas">Ver</button>
        </div>
        `;
        containerBalnearios.appendChild(div);
    }
});