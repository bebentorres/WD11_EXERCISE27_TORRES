//  color generator
function rgbGenerator(){
    let r = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let rgb = [r,g,b];
     document.body.style.backgroundColor = `rgb(${rgb})`;
     document.body.style.transition = "all 0.9s";

    let placeholder = document.getElementById("placeholder");
    let label = document.createElement("h1");
    label.innerHTML = `this color is RGB (${rgb})`;
    placeholder.replaceChild(label, placeholder.firstElementChild);

};

let startB = document.getElementById("start");
let timerB = document.getElementById("timer");
let countdown = document.getElementById("countdown");
let countlabel = document.createElement("h1");
let changetime = document.getElementById("changetime").value;

// start button

function start(){
    interval = setInterval(rgbGenerator, 1000);
    startB.setAttribute("disabled","");
    timerB.setAttribute("disabled","");
    countlabel.innerHTML = `Default color change is set to 1 sec.`;
    countdown.appendChild(countlabel);
}

function stop(){
    clearInterval(interval);
    startB.removeAttribute("disabled","");
    timerB.removeAttribute("disabled","");
    clearfield();
    clearInterval(countInterval);
}

function timer(){
    let changetime = document.getElementById("changetime").value;
    let newtime = changetime * 1000;
    if (changetime <= 0 ){
        alert("please input time more than 1 second");
    }
    else if(changetime <=0.999999){
        alert("please input time more than 1 second");
    }
    else{
        interval = setInterval(rgbGenerator, newtime);
        timerB.setAttribute("disabled","");
        startB.setAttribute("disabled","");
        countInterval = setInterval(function(){
            changetime --;
            countlabel.innerHTML = `The color will change in... ${changetime} secs.`;
            countdown.appendChild(countlabel);
    
            if(changetime <=0){
                clearInterval(countInterval);
                clearInterval(interval);
                timer();
            }
        }, 1000); 
    } 
}

function setTimer(){
    let timercount = document.getElementById("timercount").value;
    let timerspace = document.getElementById("timerspace");
    let timerlabel = document.createElement("h1");
    let time = Number(timercount) * 1000;
    setTimeout(stop,time);
    timerInterval = setInterval(function(){
        timercount --;
        timerlabel.innerHTML = `The program will stop in ...${timercount} secs`;
        timerspace.appendChild(timerlabel);

        if(timercount <=0){
            clearInterval(timerInterval);
            timerspace.removeChild(timerspace.firstElementChild);
        }

    }, 1000);
    
}

function clearfield(){
    document.getElementById("changetime").value = "";
    document.getElementById("timercount").value = "";
    countdown.removeChild(countdown.firstElementChild);
}


function reload(){
    document.location.reload();
}

