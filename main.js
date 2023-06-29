// Variables

let start = document.getElementById('start');
let onGame = document.getElementById('onGame');
let mainGame = document.getElementById('gaming');
let score = document.getElementById('score');
let planes = document.querySelectorAll('.plane');
let animation= document.getAnimations('planeMovement');
let actualScore= 0;


// Eventos

planes[0].addEventListener('click', (e)=>{
    actualScore= actualScore+1;
    score.value= `Score = ${actualScore}`;
     death(0, 'plane1')});

planes[1].addEventListener('click', (e)=>{
    actualScore= actualScore+2;
    score.value= `Score = ${actualScore}`;
     death(1, 'plane2')});

planes[2].addEventListener('click', (e)=>{
    actualScore= actualScore+3;
    score.value= `Score = ${actualScore}`;
     death(2, 'plane3')});

score.addEventListener('hover', (e)=>{
    score.value= "Score = 0";
});

start.onclick = () => {
    onGame.classList.add('onGameBlock');
    mainGame.classList.add('gamingNone');
}

back.onclick = () => {
    onGame.classList.remove('onGameBlock');
    mainGame.classList.remove('gamingNone');
}


// Funciones

function death(planeSelected, planeClass){
    planes[planeSelected].classList.add('death');
    setTimeout(()=>{
        planes[planeSelected].classList.remove('death');
    }, 1000);
    animationReset(planeSelected, planeClass);
}

function animationReset(planeSelected, planeClass){
    setTimeout(()=>{planes[planeSelected].classList.remove(planeClass)}, 500);
    setTimeout(()=>{planes[planeSelected].classList.add(planeClass)}, 1000);
    
}