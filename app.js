let gameSeq=[];
let userSeq=[];
let btns=["yellow", "green", "red", "purple"]

let strated=false;
let level=0;
let h2 =document.querySelector("h2");
let h3 =document.querySelector("h3");
let lastscore=0;
let highScore=0;

document.addEventListener("keypress",()=>{
    if(strated==false){
        console.log("Game is stated");
        strated=true;
        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Lavel ${level}`;
    let random=Math.floor(Math.random()*(btns.length));
    console.log(random);
    let btn=document.querySelector('.'+btns[random]);
    let randomColor=btns[random];
    console.log(btn);
    console.log(randomColor);
    gameSeq.push(randomColor); 
    console.log(gameSeq);
    console.log(userSeq);
    gameFlash(btn);
    
}
function chackAns(idx){
    // console.log("current lavel is : ", level);
    
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
           setTimeout(levelUp,1000);
        }
    }else{
        lastscore=level;
        if(lastscore>=highScore){
            highScore=lastscore;
        }
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor="white";
        },150);
        h3.innerHTML=`High Score is: ${highScore}`;
        h2.innerHTML=`Game Over! your score was<b> ${lastscore}</b> <br/> press any key to start. `;
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    let userColor=this.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    if(level>=1){

    chackAns(userSeq.length-1);
    }
   
    }


let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
    }

function reset(){
    gameSeq=[];
    userSeq=[];
    strated=false;
    level=0;
}