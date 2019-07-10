// set for rems
document.querySelector("html").style.fontSize = "62.5%";

// make btn
let startBtn = document.createElement("button");
startBtn.textContent = "Start Timer";
startBtn.style.marginTop = "5rem";
startBtn.style.fontSize = "2rem";
startBtn.style.padding = "1rem 2rem";
startBtn.style.borderRadius = ".8rem"
startBtn.onclick = startTimer;

// maFke reset btn
let resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Timer";
resetBtn.style.marginTop = "2rem";
resetBtn.style.fontSize = "2rem";
resetBtn.style.padding = "1rem 1.6rem";
resetBtn.style.borderRadius = ".8rem"
resetBtn.onclick = resetTimer;

// Make body flex column
let body = document.querySelector("body");
body.style.display = "flex";
body.style.flexFlow = "column";
body.append(startBtn);
body.append(resetBtn);

// Set selectors for digits
let tenS = document.querySelector("#secondTens");
let oneS = document.querySelector("#secondOnes");
let hundMS = document.querySelector("#msHundreds");
let tenMS = document.querySelector("#msTens");

// Timer function
function startTimer()
{
    startBtn.onclick = "";
    let timeCount = 0;

    tenS.textContent = 0, oneS.textContent = 0, hundMS.textContent = 0, tenMS.textContent = 0;

    resetBtn.addEventListener('click', event => 
    {
        clearInterval(intervalCounter);
        startBtn.onclick = startTimer;
    })

    digitPlace = function ()
    {
        timeCount++;
        let tempTime = timeCount;

        if (tempTime >= 1000) 
        { 
            clearInterval(intervalCounter);
            startBtn.onclick = startTimer;
        }

        tenS.textContent = Math.floor(tempTime/1000);
        tempTime %= 1000;

        oneS.textContent = Math.floor(tempTime/100);
        tempTime %= 100;

        hundMS.textContent = Math.floor(tempTime/10);
        tempTime %= 10;

        tenMS.textContent = tempTime;
    }
    let intervalCounter = window.setInterval(digitPlace, 10);
}

// Reset implementation
function resetTimer()
{
    tenS.textContent = 0, oneS.textContent = 0, hundMS.textContent = 0, tenMS.textContent = 0;
}

