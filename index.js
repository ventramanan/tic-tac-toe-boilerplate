var boxes=document.querySelectorAll(".box");
console.log(boxes)
var winningCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
var Attempts=[];
var Attempts1=[];
var result =document.getElementById("result");
var message= document.getElementById("message");
var button=document.getElementById("button");
boxes.forEach(box=>{
    box.onclick=handleClick;
})
var click=0;
function handleClick(e){
    console.log(e)
    var id_d=e.target.id
    // 9
    var texttobeinserted=document.createElement("p");
    boxes[id_d-1].append(texttobeinserted);
    // boxes[9].append(X)

if(click%2==0){
    Attempts.push(id_d-1);
    texttobeinserted.innerHTML = "X";
    texttobeinserted.style.color = "red";
    checkResult(winningCombinations, Attempts, "X");
}else{
    Attempts1.push(id_d-1);
    texttobeinserted.innerHTML = "O";
    texttobeinserted.style.color = "red";
    checkResult(winningCombinations, Attempts1, "O");
}
click++;
if(click==9){
    result.style.visibility = "visible";
        message.innerHTML = "It's a tie!";
}
}

function checkResult(winnigCombinations, attempts, player){
    var ans = [];
    var count = 0;
    
    for(var i=0; i<winnigCombinations.length; i++){
        if(Array.isArray(winnigCombinations[i])){
            checkResult(winnigCombinations[i], attempts, player);
        }else{
            if(attempts.includes(winnigCombinations[i])){
                ans.push(true);
                count++;
            }else{
                ans.push(false);
            }
        }
    }
    if(ans.every((answer) => answer == true) && count>2){
        result.style.visibility = "visible";
        message.innerHTML = `${player} won the game!`;
    } 
}
   


button.onclick = () =>{
window.location.reload();
}