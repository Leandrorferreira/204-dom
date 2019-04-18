let emocionalDaAna = document.querySelector("p");
emocionalDaAna.style.fontSize = "29pt";
let button = document.querySelector("#dar");
let esquecer = document.querySelector("#esquecer");
let body = document.querySelector("body");
let img = document.querySelector("img");
let h2 = document.querySelector("h2");
let choco = 0;

button.onclick = function (){   
    choco++;
    if(choco == 5){
        img.src = "https://vignette.wikia.nocookie.net/divertidamentebr/images/8/8b/Nojinho.png/revision/latest?cb=20150711002519&path-prefix=pt-br";
        h2.innerHTML = "Ana foi ao banheiro e já volta!";
        h2.style.color = "white";
        emocionalDaAna.innerHTML = "Você deu chocolate demais!!!";
        body.style.backgroundColor = "brown";   
        esquecer.innerHTML = "ESQUECER MATERIA";
        esquecer.style.display = "block"; 
        button.style.display = "none"; 
        choco = 0;
    }
    else{
        emocionalDaAna.innerHTML = "Ana Está Feliz";  
        body.style.backgroundColor = "yellow";
        img.src = "https://vignette.wikia.nocookie.net/pixar/images/b/bf/Alegria.png/revision/latest?cb=20161010230252&path-prefix=pt-br";
    }   
}

esquecer.onclick = function(){
    body.style.backgroundColor = "black";   
    emocionalDaAna.innerHTML = "Ana está triste!";
    h2.innerHTML = "";
    esquecer.style.display = "none";
    button.style.display = "block"; 
    img.src = "https://vignette.wikia.nocookie.net/disney/images/8/82/SADNESS_Fullbody_Render.png/revision/latest?cb=20150619201454&path-prefix=pt-br"; 
}