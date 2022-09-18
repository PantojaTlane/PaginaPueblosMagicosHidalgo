const navMobil = document.querySelector('#nav-mobil');
const bntHamburguer = document.querySelector('#btn-hamburguer');


const containerSearch = document.querySelector('#resultados-search');
const inputSearch =  document.querySelector('#searchPlace');
var lugares = [
    {
        id: "huichapan",
        name: "Huichapan",
        idSearch: "huichapan",
        img: "./img/Huichapan.jpg",
        tipo: "magico",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29921.798278619583!2d-99.6673465525838!3d20.373619707929485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3bc15444475ed%3A0x9d612483a6d7b6c0!2sHuichapan%2C%20Hgo.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sus!4v1663458753385!5m2!1ses-419!2sus"
    },
    {
        id:"huasca",
        name: "Huasca de Ocampo",
        idSearch: "huascadeocampo",
        img: "./img/huasca (1).jpg",
        tipo: "magico",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14977.293220545544!2d-98.58474277827847!3d20.20388197069772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d103d625007315%3A0x2c57d1fd69d32265!2s43503%20Huasca%20de%20Ocampo%2C%20Hgo.%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2sus!4v1663463698852!5m2!1ses-419!2sus"
    },
    {
        id: "real",
        name: "Real del Monte",
        idSearch: "mineraldelmonte",
        img: "./img/real.png",
        tipo: "magico",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119861.38034540063!2d-98.72398117819918!3d20.147888170488923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d107d84eac0477%3A0x8ef25ce8f8048fdd!2sReal%20del%20Monte%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1663463822773!5m2!1ses-419!2smx"
    },
    {
        id: "zimapan",
        name: "Zimapan",
        idSearch: "zimapán",
        img: "./img/zimapan.jpg",
        tipo: "magico",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29851.12577880859!2d-99.39912044637335!3d20.734951720578778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3f0b37adf5363%3A0xb0e9ed053b963f21!2zWmltYXDDoW4sIEhnby4!5e0!3m2!1ses-419!2smx!4v1663463905305!5m2!1ses-419!2smx"
    },
    {
        id: "zempoala",
        name: "Zempoala",
        idSearch: "zempoala",
        img: "./img/zzempoala.jpg",
        tipo: "magico",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30010.64161289356!2d-98.68626780304494!3d19.910485443881637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a56b50b383f7%3A0x9880827147477062!2sZempoala%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1663463953239!5m2!1ses-419!2smx"
    },
    {
        id: "tecozautla",
        name: "Tecozautla",
        idSearch: "tecozautla",
        img: "./img/tecozautla.png",
        tipo: "magico",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29890.81249707408!2d-99.65678035242239!3d20.532791710649963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d39403d26378c5%3A0x874ef565c3f826e7!2sTecozautla%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1663464005744!5m2!1ses-419!2smx"
    },
    {
        id: "mineral",
        name: "Mineral del Chico",
        idSearch: "mineraldelchico",
        img: "./img/mineral.jpg",
        tipo: "magico",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7488.1893640043645!2d-98.73496022712233!3d20.213386213882174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d10eb696354b85%3A0x9ddd144ea0119885!2s42120%20Mineral%20del%20Chico%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1663464080471!5m2!1ses-419!2smx"
    },
    {
        id: "tephe",
        name: "El Tephe, Ixmiquilpan",
        idSearch: "eltepeheixmiquilpan",
        img: "./img/tephe.jpg",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.5594397911273!2d-99.16923528555476!3d20.442203262919676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1603e95f3a8d1%3A0x62f3edf61df837a4!2s42323%20El%20Teph%C3%A9%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1663465531852!5m2!1ses-419!2smx"
    },
    {
        id: "ecoalberto",
        name: "Eco Alberto, Ixmiquilpan",
        idSearch: "elecoalbertoixmiquilpan",
        img: "./img/ecoo.jpg_large",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.727780500055!2d-99.21507715014897!3d20.476370978687996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3df0cdd170747%3A0xeed7108a463970f5!2sEcoAlberto%20Parque!5e0!3m2!1ses-419!2smx!4v1663465617470!5m2!1ses-419!2smx"
    },
    {
        id: "santana",
        name: "Santa Ana, Tulancingo",
        idSearch: "santaanatulancingo",
        img: "./img/santaana.jpg",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.4563960301866!2d-98.29409168555922!3d20.156714122350994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d0f7943a7eb92d%3A0x7bc3a674c4a7321!2sParque%20Acu%C3%A1tico%20Santa%20Ana!5e0!3m2!1ses-419!2smx!4v1663465705959!5m2!1ses-419!2smx"
    },
    {
        id: "tollan",
        name: "Tollan, Ixmiquilpan",
        idSearch: "tollanixmiquilpan",
        img: "./img/tolllan.jpg",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.1716845897686!2d-99.1944351855545!3d20.458140512389445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3dff8486a0641%3A0x168cb064e96f3e6e!2sParque%20Acuatico%20El%20Tollan!5e0!3m2!1ses-419!2smx!4v1663465768348!5m2!1ses-419!2smx"
    },
    {
        id: "elgeiser",
        name: "El Geiser, Tecozautla",
        idSearch: "elgeisertecozautla",
        img: "./img/geiser.jpg",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14941.017797977438!2d-99.70173667818449!3d20.577663918619926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d390f6da26eb2d%3A0xa62d7b28d168fa08!2s42459%20El%20G%C3%A9iser%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1663465825289!5m2!1ses-419!2smx"
    },
    {
        id: "maguey",
        name: "Maguey Blanco, Ixmiquilpan",
        idSearch: "magueyblancoixmiquilpan",
        img: "./img/magueyBlanci.jpg",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.977956612755!2d-99.166683185555!3d20.42498831349188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1604b00cebb8f%3A0xa2ae27fb16170392!2sMaguey%20Blanco%2C%20Parque%20Acu%C3%A1tico!5e0!3m2!1ses-419!2smx!4v1663465861202!5m2!1ses-419!2smx"
    },
    {
        id: "baño",
        name: "Baño Grande, Mixquiahuala",
        idSearch: "bañograndemixquiahuala",
        img: "./img/bañoBig.jpg",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.359510850818!2d-99.20779658555784!3d20.243919519483107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3d7c5ed42ed07%3A0x1fe71d241ef35966!2sCam.%20a%20Ba%C3%B1o%20Grande%2C%204ta%20Demarcaci%C3%B3n%2C%2042700%20Mixquiahuala%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1663465898665!5m2!1ses-419!2smx"
    },
    {
        id: "tepathe",
        name: "Tepathe, Ixmiquilpan",
        idSearch: "tepatheixmiquilpan",
        img: "./img/tepathe.jpg",
        tipo: "balneario",
        clima:"",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.4550372944996!2d-99.17012748555472!3d20.446495512776913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d16040994b31a3%3A0xa3151ba390b3e4b8!2zVGUtUGF0aMOp!5e0!3m2!1ses-419!2smx!4v1663465936748!5m2!1ses-419!2smx"
    },
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
    let lugarBuscado = e.target.value.toLowerCase();

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
            let {id,name} = place;
            let a = document.createElement('a');
            a.setAttribute('href',('#'+id));
            a.innerHTML = `
            <span><i class="fa-sharp fa-solid fa-location-dot"></i></span>${name}`;
            containerSearch.appendChild(a);
        });
        containerSearch.classList.remove('hide-cont-search');
    }else{
        containerSearch.classList.add('hide-cont-search');
    }
}