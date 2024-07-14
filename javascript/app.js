let user = 0;
let comp = 0;
let draw = 0;

let choices = document.querySelectorAll(".box");

let showWin = document.querySelector(".showWin");
// let showPara = document.querySelector("#showPara");

const userScore=document.querySelector("#userWinVal");
const compScore=document.querySelector("#compWinVal");


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        user++;
        userScore.innerText=user;
        showWin.innerText=`You win! Your ${userChoice} beats ${compChoice}`
        showWin.style.backgroundColor="green";
        showWin.style.color="white";
        showWin.style.fontSize="40px";

        
    }else{
        comp++;
        compScore.innerText=comp;
        showWin.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        showWin.style.backgroundColor="red";
        showWin.style.color="white";
        showWin.style.fontSize="40px";
    }
}

// generate computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    // (* 3) is write when we want to generate number less then this no
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
// Choice the user Choice
choices.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id");
        playGame(userChoice);
    })
});

const drawGame=()=>{
    draw++;
    showWin.innerText="Draw Game Because both choice same";
    drawWinVal.innerText=draw;
    showWin.style.backgroundColor="#081b31";
    showWin.style.color="white";
    showWin.style.fontSize="40px";
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice()
    if(userChoice=== compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false :true;
        }else if(userChoice==="paper")
        {
            //rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}