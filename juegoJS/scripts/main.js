document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM cargado completamente");
});

const fondo = document.querySelector('.fondo');
const mapa = document.querySelector('.mapa');
const title = document.querySelector('.title');
const player = document.querySelector('.player');
let position = 0;
let initialPosition = 0;

document.addEventListener("keydown", () => {
    pressStart();
});

document.addEventListener("keydown", () =>  {
    if(fondo.style.display == "none" && title.style.display == "none"){
        if(event.key === 'ArrowUp'){
            console.log("arriba");
            moveUp();
        } else if(event.key === 'ArrowLeft'){
            console.log("izquierda");
            moveLeft();
        } else if(event.key === 'ArrowRight'){
            console.log("derecha");
            moveRight();
        }
    }

    position = position;
});

function pressStart(){
    if(event.key === 'Enter'){
        console.log("click hacemos");
        fondo.style.display = "none";
        title.style.display = "none";
        mapa.style.display = "block";
        player.style.display = "block";
    }
}

function moveUp(){
    console.log("arriba");
    if(position <= 120){
        position -= 30;
        player.style.transform = `translateY(${position}px)`;
    }
}

function resetPosition(){
    position = initialPosition;
    player.style.transform = `translateY(${position}px)`;
}

function moveLeft(){
    if(position <= 0){
        alert("no puedes hacerte mas para atras");
    } else {
        position -= 30;
        player.style.transform = `translateX(${position}px)`;
    }
}

function moveRight(){
    position += 30;
    player.style.transform = `translateX(${position}px)`;
    if(position === 120){
        alert("debes saltar");
    }
    
}

