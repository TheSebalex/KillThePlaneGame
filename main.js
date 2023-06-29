// Variables

let start = document.getElementById('start');
let onGame = document.getElementById('onGame');
let mainGame = document.getElementById('gaming');

let score = document.getElementById('score');
let record = document.getElementById('record');

let planes = document.querySelectorAll('.plane');
let timeOver= document.getElementById('timeOver')

let timer= document.getElementById('timer');
let seconds

let actualScore= 0;
let recordScore= 0;


// Eventos

planes[0].addEventListener('click', (e)=>{
    if(!planes[0].classList.contains('death')){
    actualScore= actualScore+1;
    score.value= `Score = ${actualScore}`;
     death(0, 'plane1')};
     recordChange();
});

planes[1].addEventListener('click', (e)=>{
    if(!planes[1].classList.contains('death')){
    actualScore= actualScore+2;
    score.value= `Score = ${actualScore}`;
     death(1, 'plane2')};
    recordChange();
});

planes[2].addEventListener('click', (e)=>{
    if(!planes[2].classList.contains('death')){
    actualScore= actualScore+3;
    score.value= `Score = ${actualScore}`;
     death(2, 'plane3')};
     recordChange();
});

start.onclick = () => {
    onGame.classList.add('onGameBlock');
    mainGame.classList.add('gamingNone');
    timerChange();
}

back.onclick = () => {
    onGame.classList.remove('onGameBlock');
    mainGame.classList.remove('gamingNone');
}

reset.onclick = repeat

// Funciones

function repeat(){
    timeOver.classList.remove('timeOverBlock')
    timeOver.classList.remove('timeOverTransition')
    planes[0].classList.remove('plane1');
    planes[1].classList.remove('plane2');
    planes[2].classList.remove('plane3');
    setTimeout(()=>{
    planes[0].classList.add('plane1');
    planes[1].classList.add('plane2');
    planes[2].classList.add('plane3');}, 500)
    score.value= "Score = 0";
    if(seconds==0){
        seconds=31
        timerChange
    } else{
        seconds= 31
    }
}

function timerChange(){
    seconds=30
    setInterval(()=>{
        if(seconds > 0 && seconds < 32){
            seconds--
        } else{
            clearInterval()
            timeOver.classList.add('timeOverBlock')
            setTimeout(()=>{
                timeOver.classList.add('timeOverTransition')
            }, 500)
            planes[0].classList.remove('plane1');
            planes[1].classList.remove('plane2');
            planes[2].classList.remove('plane3');
        }
        timer.value= seconds
    }, 1000)
}


function recordChange(){
    if(actualScore>recordScore){
        recordScore= actualScore
        record.value= `Record = ${recordScore}`
}
}

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