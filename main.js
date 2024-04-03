const cell = [
            [document.getElementById('td-1'), document.getElementById('td-2'), document.getElementById('td-3')],
            [document.getElementById('td-4'), document.getElementById('td-5'), document.getElementById('td-6')],
            [document.getElementById('td-7'), document.getElementById('td-8'), document.getElementById('td-9')]
        ]; 
        let XorOWins = document.getElementById("decide");
        let popUp = document.getElementById("winOrLose");
        let firstPlayer = "O";
        let secondPlayer = "X";
        let count = 0;
        let gameOver = false;
for (let i = 0; i < cell.length; i++){
    for (let j = 0; j < cell[i].length; j++){
        cell[i][j].addEventListener('click', ()=> {
            if(cell[i][j].innerHTML === ""){
                if (count % 2 === 0){
                    cell[i][j].innerHTML = secondPlayer;
                    count++
                } else{
                    cell[i][j].innerHTML = firstPlayer;
                    count++
                }
                if(cell[0][0].innerHTML !== "" && cell[0][1].innerHTML !== "" && cell[0][2].innerHTML !== ""){
                    if ( cell[0][0].innerHTML === secondPlayer && cell[0][1].innerHTML === secondPlayer && cell[0][2].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[0][0].innerHTML === firstPlayer && cell[0][1].innerHTML === firstPlayer && cell[0][2].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    }
                }
                if(cell[1][0].innerHTML !== "" && cell[1][1].innerHTML !== "" && cell[1][2].innerHTML !== ""){
                    if ( cell[1][0].innerHTML === secondPlayer && cell[1][1].innerHTML === secondPlayer && cell[1][2].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[1][0].innerHTML === firstPlayer && cell[1][1].innerHTML === firstPlayer && cell[1][2].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    }   
                }
                if(cell[2][0].innerHTML !== "" && cell[2][1].innerHTML !== "" && cell[2][2].innerHTML !== ""){
                    if ( cell[2][0].innerHTML === secondPlayer && cell[2][1].innerHTML === secondPlayer && cell[2][2].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[2][0].innerHTML === firstPlayer && cell[2][1].innerHTML === firstPlayer && cell[2][2].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    } 
                }
                if(cell[0][0].innerHTML !== "" && cell[1][0].innerHTML !== "" && cell[2][0].innerHTML !== ""){
                    if ( cell[0][0].innerHTML === secondPlayer && cell[1][0].innerHTML === secondPlayer && cell[2][0].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[0][0].innerHTML === firstPlayer && cell[1][0].innerHTML === firstPlayer && cell[2][0].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    }  
                }
                if(cell[0][1].innerHTML !== "" && cell[1][1].innerHTML !== "" && cell[2][1].innerHTML !== ""){
                    if ( cell[0][1].innerHTML === secondPlayer && cell[1][1].innerHTML === secondPlayer && cell[2][1].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[0][1].innerHTML === firstPlayer && cell[1][1].innerHTML === firstPlayer && cell[2][1].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    } 
                }
                if(cell[0][2].innerHTML !== "" && cell[1][2].innerHTML !== "" && cell[2][2].innerHTML !== ""){
                    if ( cell[0][2].innerHTML === secondPlayer && cell[1][2].innerHTML === secondPlayer && cell[2][2].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[0][2].innerHTML === firstPlayer && cell[1][2].innerHTML === firstPlayer && cell[2][2].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    } 
                }
                if(cell[0][0].innerHTML !== "" && cell[1][1].innerHTML !== "" && cell[2][2].innerHTML !== ""){
                    if ( cell[0][0].innerHTML === secondPlayer && cell[1][1].innerHTML === secondPlayer && cell[2][2].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[0][0].innerHTML === firstPlayer && cell[1][1].innerHTML === firstPlayer && cell[2][2].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    }   
                }
                if(cell[0][2].innerHTML !== "" && cell[1][1].innerHTML !== "" && cell[2][0].innerHTML !== ""){
                    if ( cell[0][2].innerHTML === secondPlayer && cell[1][1].innerHTML === secondPlayer && cell[2][0].innerHTML === secondPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = secondPlayer;
                    } else if( cell[0][2].innerHTML === firstPlayer && cell[1][1].innerHTML === firstPlayer && cell[2][0].innerHTML === firstPlayer){
                        popUp.style.display = "flex";
                        XorOWins.innerHTML = firstPlayer;
                    }
                }
                checkGameOver();
            }
        })
        
    }
}
let drawPop = document.getElementById("draw");
function checkGameOver() {
    let cellsFilled = 0;
    for (let i = 0; i < cell.length; i++) {
        for (let j = 0; j < cell[i].length; j++) {
            if (cell[i][j].innerHTML !== "") {
                cellsFilled++;
            }
        }
    }
    if (cellsFilled === 9 && popUp.style.display !== "flex"){
        drawPop.style.display = "flex";
    }
}


let theGame =  document.getElementById("change");
let startPanel = document.getElementById("startPanel");
let startButton = document.getElementById("newGame");
let loading = document.getElementById("loading");

let reloadButton1 = document.getElementById("reloading");
reloadButton1.addEventListener("click", () => {
    location.reload();
});
let reloadButton = document.getElementById("reloadButton");
reloadButton.addEventListener("click", () => {
    location.reload();
});