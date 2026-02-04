let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let newBtn=document.querySelectorAll('.newBtn');
let winnerText = document.querySelector(".winner-text");
let winnerDiv = document.querySelector(".winner");
let drawDiv = document.querySelector(".draw");


let turnX=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnX = true;
    box.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winnerDiv.style.display = 'none';
    drawDiv.style.display = 'none'; // hide draw as well
};


newBtn.forEach(btn => {
    btn.addEventListener('click', resetGame);
});
resetBtn.addEventListener('click',resetGame);

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
        isDraw();
    })
})

const checkWinner=()=>{
    for(let pattern of winPattern){
        pos1Val=box[pattern[0]].innerText;
        pos2Val=box[pattern[1]].innerText;
        pos3Val=box[pattern[2]].innerText;

        if(pos1Val!=''&&pos2Val!=''&&pos3Val!=''){
            if(pos1Val==pos2Val&&pos2Val==pos3Val){
                winnerText.innerText = `Winner: ${pos1Val}`;
                winnerDiv.style.display = "flex";
            }
        }
    }
}

const isDraw = () => {
    let isDraw = true;

    box.forEach((b) => {
        if (b.innerText === "") {
            isDraw = false;
        }
    });


    if (isDraw && winnerDiv.style.display !== "flex") {
        drawDiv.style.display = "flex";
    }
};
