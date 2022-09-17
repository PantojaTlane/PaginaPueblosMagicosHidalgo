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