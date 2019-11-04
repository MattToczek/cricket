let input = '.......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W'


let inputArray = input.split('');

let isEven = (num) => {             //tested and works for a string number (eg. '4')
    return num % 2 === 0;
}

class Players {
    constructor(name){
        this._name = name;
        this._count = 0;
        this._out = 'not out';
    }
}

const batsman1 = new Players('batsman 1');
const batsman2 = new Players('batsman 2');
const batsman3 = new Players('batsman 3');
const batsman4 = new Players('batsman 4');
const batsman5 = new Players('batsman 5');
const batsman6 = new Players('batsman 6');
const batsman7 = new Players('batsman 7');
const batsman8 = new Players('batsman 8');
const batsman9 = new Players('batsman 9');
const batsman10 = new Players('batsman 10');
const batsman11 = new Players('batsman 11');


let batsmen = [batsman1, batsman2, batsman3 , batsman4, batsman5, batsman6, batsman7, batsman8, batsman9, batsman10, batsman11];
let overs = 0;
let overCount = 0;
let batterInd = 1;

currentPs = [batsmen[0], batsmen[1]];

let switchPs = () => {                          //tested and works
    currentPs = [currentPs[1], currentPs[0]]
}


for (let i = 0; i < inputArray.length; i++) { 

    

 if (typeof inputArray[i] == 'number'){

        currentPs[0].count + inputArray[i];
        overCount ++;

        if(!isEven(inputArray[i])){

            switchPs();          // currentPs[0] = player in play switchPs = changes player being acted upon
        
        }
    } else if (inputArray[i] == 'W'){

        currentPs[0]._out = 'out';                       //changes obj to out
        batterInd ++;                                   //updates batterInd to allow for next batter to enter
        currentPs.splice(0, 1, batsmen[batterInd]);     // deletes batter from currentPs[] and adds next player as batter

    } else {

        overCount++;

    }
    
    if (overCount == 6) {       //check overCount if overCount == 6 => overs++ and overCount = 0
        overs ++;               //                                  => batsman switch
        switchPs();             // overCount++
      
    }

    

}

console.log( `${batsman1.name}: ${batsman1._count} ${batsman1._out}`)