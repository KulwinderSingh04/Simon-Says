let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("Game is started");
        started = true;
        
        levelUp();
    }
    
});

function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 100);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    gameFlash(randBtn);
}

function redFlash() {
    let body = document.querySelector("body");
    body.classList.add("redFlash");
    setTimeout(() => {
        body.classList.remove("redFlash");
    }, 100);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        redFlash();
        h2.innerHTML = `game Over! your score was <b>${level}</b> <br> press any key to start`;
        reset();
    }
}

function userFlash (btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 100);
}
function btnPress () {
    let btn = this;
    userFlash(btn);
    let userColor = btn.id;
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}