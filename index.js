const stockPrices = [17,3,6,9,15,8,6,1,10];

const profitCalc = (i,j) => {
    prof = j - i;
    return prof
}

const stockPicker = (prices) => {
// identify necessary variables
    let bestBuyIndex = 0
    let bestSellIndex = 0
    let maxProfit = 0

    // create for loop that iterates through current prices.
    for (let buyIndex = 0; buyIndex <= prices.length; buyIndex++) {
        const currentPrice = stockPrices[buyIndex]

        // create for loop that iterates through all index's after i aka j
        for (let sellIndex = buyIndex + 1; sellIndex < prices.length; sellIndex++) {
            profit = prices[sellIndex] - prices[buyIndex];

            if (profit > maxProfit) {
                maxProfit = profit;
                bestBuyIndex = buyIndex;
                bestSellIndex = sellIndex;
            } 
        } 
    } 
          
    return {
        buy: bestBuyIndex,
        sell: bestSellIndex
    };    
};
const arrToSort = [4,3,78,2,0,2];
const arrToSort2 = [10,5,8,11,9,3,1,18];

const bubbleSort = (items) => { 
    for (let firstNumIndex = 0; firstNumIndex < items.length; firstNumIndex++) {
        let firstNumValue = items[firstNumIndex];

        for (let secondNumIndex = firstNumIndex + 1; secondNumIndex < items.length; secondNumIndex++) {
            let secondNumValue = items[secondNumIndex];
            if (firstNumValue > secondNumValue) {
                items[secondNumIndex] = items[firstNumIndex]
                items[firstNumIndex] = secondNumValue;
            }
            
            firstNumValue = secondNumValue
        }
    }

    return items;
};

let a = 1;
let b = 2;
a, b = b, a

const thing = null;

let whatever;

const coolObject = {};
coolObject.name = null;

const chadSort = (items) => {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < items.length; i++) {
            let secondVal = items[i + 1];
            if (secondVal !== undefined && items[i] > secondVal) {
                swapped = true;
                items[i + 1] = items[i];
                items[i] = secondVal;
            }
        }
    }

    return items;
};

// if (firstNumValue = secondNumValue) {
//     continue;
// }

//console.log(bubbleSort(arrToSort2))

//write function that checks if string is a substring of another
// isSubstring("low", "below") => true
// isSubstring("retard", "whale") => false

// "low" "below"
const dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

const isSubstring = (subString, fullString) => {
    debugger;
    let foundLength = 0;
    for (let i = 0; i < fullString.length; i++) {
        if (subString[foundLength] === fullString[i]) {
            foundLength++;
        } else {
            foundLength = 0;
        }

        if (subString.length === foundLength) {
            return true;
        }
        
    }
    
    return false;
}

/*const subStringFinder = (string, stringArr) => {
    arrOfString = string.split(' ')
    let howManyTimes = 0
    for (let i = 0; i < stringArr.length; i++) {
        const currentString = stringArr[i]
       
        if (isSubstring(string, currentString) === true) {
            howManyTimes++
        }   
    } 
    return `${string}, How many times ==> ${howManyTimes}`

}*/

const subStringFinder = (string, stringArr) => {
    arrOfString = string.split(" ");
    const found ={}
    for (let i = 0; i < stringArr.length; i++) {
        const currentString = stringArr[i];
        
        for (let j = 0; j < arrOfString.length; j++) {
            const currentStringTwo = arrOfString[j];
            if (isSubstring(currentString, currentStringTwo) === true) {
                const value = found[currentStringTwo]
                found[currentStringTwo] = value ? value + 1 : 1
            }
        }
        
    
    } 
    return found
}


//console.log(subStringFinder('howdy partner im looking for a place to sit down', dictionary));

const caeserCipher = (string, num) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let capitalAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let stringToCipher = string.split('');
    let arrayOfLetters = [];
   
    
    for (let i = 0; i < stringToCipher.length; i++){
        const currentStringIndex = stringToCipher[i];
        if (currentStringIndex === ' ' || currentStringIndex === '?' || currentStringIndex === '!' || currentStringIndex === ',' || currentStringIndex === "'") {
            arrayOfLetters.push(currentStringIndex);
        }
        
        for (let j = 0; j <= alphabet.length; j++){
            let newLetter = j + num;
            let currentLetter = alphabet[j];
            let loopedIndex = (num + j) % alphabet.length;
            if (currentStringIndex === currentLetter) { 
                newLetter > alphabet.length ? arrayOfLetters.push(alphabet[loopedIndex]) : arrayOfLetters.push(alphabet[newLetter]);
            }
            if (currentStringIndex === capitalAlphabet[j]) {
                newLetter > alphabet.length ? arrayOfLetters.push(capitalAlphabet[loopedIndex]) : arrayOfLetters.push(capitalAlphabet[newLetter]);
            }
                    
        }
    }
    return arrayOfLetters.join('');
}



console.log(caeserCipher("It should work this time!", 50));




module.exports = {
    stockPicker,
    bubbleSort,
    chadSort,
    isSubstring,
};

