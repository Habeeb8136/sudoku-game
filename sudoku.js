var numSelected = null;
var tileselected =null;
var errors = 0;

var board=  [
"---26-7-1",
"68--7--9-",
"19---45--",
"82-1---4-",
"--46-29--",
"-5---3-28",
"--93---74",
"-4--5--36",
"7-3-18---",
]

var solution = [
    "435269781",
    "682571493",
    "197834562",
    "826195347",
    "374682915",
    "951743628",
    "519326874",
    "248957136",
    "763418259",   
]

window.onload = function() {
    setGame();
}

//funtion to fill the board and 1-9 digit selecter
function setGame() {
    // for digits 1-9
    for (let i=1 ; i<=9 ; i++) {
    
       let number=document.createElement("div");
       number.id = i
       number.innerText = i;
       number.addEventListener("click", selectNumber);     //listen for click input and call selectNumber()
       number.classList.add("number");
       document.getElementById("digits").appendChild(number);
    }

    //for 9x9 board
    for (let r = 0; r < 9; r++) {                           
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }

            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }

            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
    }
}
}

//fuctionality to select a number from digits 1-9
function selectNumber(){
    // remove the selected number
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    //select number 0-9
    numSelected = this;
    numSelected.classList.add("number-selected");
}

//to input number to board
function selectTile() {
 
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        
        let coords = this.id.split("-"); 
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        //place selected number to board if solution matches else error increases
        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}
