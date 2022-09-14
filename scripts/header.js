const txtTitle =  document.querySelector('#txtTitle');


var titulo1 = "Hidalgo";
var i = 0;
var mnsg = ""; 


setInterval(() => {
    
    if(i==titulo1.length){
        i = 0;
        mnsg = "";
    }

    mnsg += titulo1.charAt(i);

    txtTitle.textContent = "";
    txtTitle.textContent = mnsg;

    i++;

}, 300);