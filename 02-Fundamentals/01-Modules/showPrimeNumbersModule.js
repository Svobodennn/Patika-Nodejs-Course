function showPrimeNumbers(lownumber, highNumber) {
    for (let i =lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j ++) {
            if( i % j === 0 && j !==i) {
                isPrime = false
            }
        }

        if(isPrime) {
            console.log(i);
        }
    }
}

module.exports = showPrimeNumbers

// module.exports = {
    // showPrimeNumbers,
    // showFivePrimes
// }
// 
// export default showPrimeNumbers;
