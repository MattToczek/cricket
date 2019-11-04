let input = '.......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W'



let convert = (str) => {                    //converts string to array of strings and numbers
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '1' || arr[i] == '2' ||arr[i] == '3' ||arr[i] == '4' ||arr[i] == '6' ) {
            arr[i] = parseInt(arr[i], 10)
        }

    }
    return arr;
} 

let inputArray = convert(input);

//console.log(inputArray);


let isEven = (num) => {             //tested and works for a string number (eg. '4')
    return num % 2 === 0;
}

class Players {
    constructor(name){
        this.name = name;
        this.count = 0;
        this.out = 'not out';
    }

    // nameCall () {
    //     return this.name
    // }

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


let batsmen = [];
batsmen.push(batsman1, batsman2, batsman3 , batsman4, batsman5, batsman6, batsman7, batsman8, batsman9, batsman10, batsman11);
let overs = 0;
let overCount = 0;
let batterInd = 1;
let scoreCount = 0;
let outCount = 0;


let func = (index) => {
    let batX = batsmen.slice(index,index+1);
              
    console.log(batX[0].name + ': ' + batX[0].count + ' ' + batX[0].out )   // using indicies to access and change properties of objects
}



currentPs = [batsmen[0], batsmen[1]];

// console.log(currentPs);                  //works fine
// console.log(currentPs + ' current');     //changes to [object Object], [object Object] current
// console.log(`these arethe current players: ${currentPs[0]}, ${currentPs[1]}`)        //changes to these arethe current players: [object Object], [object Object]



let switchPs = () => {                          //tested and works
    currentPs = [currentPs[1], currentPs[0]]
}

// switchPs();
// console.log(currentPs);


for (let i = 0; i < inputArray.length; i++) { 

    
    let batX = currentPs[0];
    overCount++

    


    if (typeof inputArray[i] == 'number'){

        for (let ind = 0; ind < inputArray[i]; ind++) {        //
            batX.count ++;
            scoreCount++;
        }
        


        if(!isEven(inputArray[i])){
 
             
            switchPs();          // currentPs[0] = player in play switchPs = changes player being acted upon
        
        }
    } else if (inputArray[i] == 'W'){

        batX.out = 'out';                               //changes obj to out
        batterInd ++;                                   //updates batterInd to allow for next batter to enter
        currentPs.splice(0, 1, batsmen[batterInd]);     // deletes batter from currentPs[] and adds next player as batter
        outCount ++;
        
    }

    if (overCount == 6) {       //check overCount if overCount == 6 => overs++ and overCount = 0
        overs ++;               //                                  => batsman switch
        switchPs();   
        overCount = 0;          
      
    }

   

}

for (let i = 0; i < batsmen.length; i++) {
    func(i);
    
}


console.log('TOTAL: ' + scoreCount + ' / ' + outCount);
