const input = document.getElementById('timeInput');
const start = document.getElementById('startBtn');
const pauseResume = document.getElementById('pause-resumeBtn');
const reset = document.getElementById('resetBtn');
const display = document.getElementById('timer')

let seconds = 0;
let pause = false;
let timer;

function startTimer(){
    if (!pause) {
        seconds = Number(input.value);  
    }

    if(isNaN(seconds) || seconds <=0){
        alert("Ingresa en el campo de entrada el tiempo en segundos.")
        return;
    }
    
    clearInterval(timer);
    pause = false;


    timer = setInterval(() => {
        if(seconds > 0){
            seconds--;
            updateDisplay(seconds);
    }else{
        clearInterval(timer);
        alert("Time's up")
    }
    }, 1000);
}

function pResume(){
    if (pause) {
        startTimer();
        pauseResume.textContent = 'Pause';
    } else {
        pause = true;
        clearInterval(timer);
        pauseResume.textContent ='Resume';
    }
}

function updateDisplay(segs) {
    const minutes = Math.floor(segs / 60);
    const seconds = segs % 60;
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer(){
    clearInterval(timer);
    pause = false;
    seconds = 0;
    input.value = "";
    updateDisplay(0);
    pauseResume.textContent = 'Pause'
}

start.addEventListener("click",startTimer);
pauseResume.addEventListener("click",pResume);
reset.addEventListener("click",resetTimer);