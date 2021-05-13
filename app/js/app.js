let createDiamond = (diamond) => { //function to generate diamond

    let diamondPrint = ``; //empty string to store diamond content

    if (diamond % 2 !== 0) { //if the size input is odd
        for (let length = 1; length <= diamond; length += 2) {
            for (let height = 0; height < length; height++) {
                diamondPrint += `*`; //prints asterisks
            }
            diamondPrint += `<br>`; //add new line
        }

        for (let length = diamond - 2; length > 0; length -= 2) {
            for (let height = 0; height < length; height++) {
                diamondPrint += `*`;
            }
            diamondPrint += `<br>`;
            document.querySelector(`div`).style.lineHeight = `60%`;
        //changes line style height for odd diamonds
        }
    }

    else {

        diamondPrint = `* `; //extra asterisk for even

        for (let length = 0; length <= diamond + 1; length += 2) {
            for (let height = 0; height < length; height++) {
                diamondPrint += `* `; //added spaces in between asterisks
            }
            diamondPrint += `<br>`;
        }

        for (let length = diamond - 2; length > 0; length -= 2) {
            for (let height = 0; height < length; height++) {
                diamondPrint += `* `;
            }
            diamondPrint += `<br>`;
        }
        diamondPrint += `* `;
    }
    document.querySelector(`div`).innerHTML = diamondPrint;
    //sets the innerHTML of the div to the string content of diamondPrint
};

window.onload = () => { //everything that is loaded when page loads

    let diamond = parseInt(prompt(`Enter diamond size as a number`, `0`));
    //prompts user for size
    let diamondSet = document.querySelector(`div`); //allows animation of div

    createDiamond(diamond); //function call

    if (diamond < 0 || isNaN(diamond)) { //if not a valid number, reload
        window.location.reload();
    }

    let pos = 1; //initial position
    let left = diamondSet.offsetLeft;

    setInterval(() => { //animates diamond-container div

        let windowSize = window.innerWidth; //gets width of window
        let width = diamondSet.offsetWidth; //gets width of diamond

        if (left < 0) {
            pos = 1;
        }

        if (left > windowSize - width) { //moves diamond
            pos = -1;
        }

        left += pos;
        diamondSet.style.left = left + `px`;

    }, 1); //interval for animation set at 1 ms)
};
