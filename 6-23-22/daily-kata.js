//USD => CNY
//
//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
//Examples (Input -> Output)
//15  -> '101.25 Chinese Yuan'
//465 -> '3138.75 Chinese Yuan'
//
//The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21") 

function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
  }

//Kata Example Twist
//
//This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata). 
//Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []
for (let i = 0; i < 1000; i++) {
    websites.push('codewars')
}