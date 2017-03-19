/**
 * Created by apoorvmittal on 1/3/17.
 */
var filled=new  Array(),
    winningcombo=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    turn=1,
    cxt,
    content=new Array(),
    computerturn=false,
    player1 = "Computer's",player2="Your",
    h6=document.getElementsByTagName("h6"),
    comp,
    see=true,// to check if you are playing with computer or not
    nothing=true;
window.onload=function () {
    for(var i=0;i<9;i++){
        filled[i]=false;
        content[i]='';
    }
}
function inform() {
    player1=prompt("Enter player name who will be X","Enter Name");
    player2=prompt("Enter player name who will be O","Enter Name");
    see=false;
    h6[0].innerHTML=player2+" turn";
}
function canclk(num) {
    if (see)
        computerturn=true;
    move(num);
}
function move(num) {
    var c = "c" + num;
    var getit = document.getElementById(c);
    cxt = getit.getContext("2d");
    if(filled[num]==false){
        if(turn%2==0){
            // cxt.beginPath();
            // cxt.moveTo(10,10);
            // cxt.lineTo(40,40);
            // cxt.moveTo(40,10);
            // cxt.lineTo(10,40);
            // cxt.stroke();
            // cxt.closePath();
            cxt.font="600 100px Arial";
            cxt.fillText("X",100,100);
            content[num]='X';
        }
        else{
            // cxt.beginPath();
            // cxt.arc(25,25,20,0,Math.PI*2,true);
            // cxt.stroke();
            // cxt.closePath();
            cxt.font="600 100px Arial";
            cxt.fillText("O",100,100);
            content[num]='O';
        }
        turn++;
        filled[num]=true;
        if (nothing) {
            checkwinner(content[num]);
            if (turn == 10) {
                alert("The game is a draw");
                location.reload(true);
            }
            if (turn % 2 == 0)
                h6[0].innerHTML = player1 + " turn";
            else {

                h6[0].innerHTML = player2 + " turn";
            }
        }
    }
    else {
        alert("the box is already filled")
    }
    if (computerturn)
        randommove();

}

function checkwinner(symbol) {
    for(var a = 0; a < winningcombo.length; a++) {
        if (content[winningcombo[a][0]] == symbol && content[winningcombo[a][1]] == symbol && content[winningcombo[a][2]] == symbol) {
            if (symbol=='X') {
                alert(player1 + " WON!");
                nothing=false;
            }
            else if(symbol=='O'){
                if(player2=="Your")
                    player2="YOU" ;
                alert(player2+" WON!");
                nothing=false;
            }
            turn=0;   // due to one expection i had found showing draw even after win
            playagain();
        }
    }
}
function playagain() {
    var y=confirm("New Game?")
    if (y==true)
        location.reload(true);
    else {
        alert("Thank You for playing");
        window.history.back();
    }
}


function playwithcomp() {
    player1=prompt("Enter player name who will be X","Enter Name");
    player2="Computer";
    see=true;
    randommove();
}

function randommove() {
    comp = new Array();
    var l = 0;
    for (var i = 0; i < filled.length; i++) {
        if (filled[i] == false) {
            comp[l] = i;
            l++;
        }
    }
    computerturn=false;
    move(comp[Math.floor(Math.random() * comp.length)]);

}

