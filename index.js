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
        let secondNumIndex = firstNumIndex + 1;

        for (; secondNumIndex <= items.length; secondNumIndex++) {
            let secondNumValue = items[secondNumIndex];
            if (firstNumValue > secondNumValue) {
                [items[firstNumIndex], items[secondNumIndex]] = [items[secondNumIndex], items[firstNumIndex]];
            } 
            if (firstNumValue = secondNumValue) {
                continue;
            }
        }
    }
    return items;
    //test
    //return [0,2,2,3,4,78];
};

console.log(bubbleSort(arrToSort2))
module.exports = {
    stockPicker,
    bubbleSort,
};
