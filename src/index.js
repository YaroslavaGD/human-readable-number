module.exports = function toReadable (number) {
  const ones = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['', '','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const hundred = 'hundred';

  
  const arrayOfNumbers = String(number).split("").map((number) => { return Number(number) });
  const numLength = arrayOfNumbers.length;
  let numOnes = 0;
  let numTens = 0;
  let numHundred = 0;
  
  let result = '';

  let resHundred = '';
  let resLast = '';
  
  if (number < 20) return ones[number];
  
  if (numLength == 2) {
    numTens = arrayOfNumbers[0];
    numOnes = arrayOfNumbers[1];
  }

  if (numLength == 3) {
    numHundred = arrayOfNumbers[0];
    numTens = arrayOfNumbers[1];
    numOnes = arrayOfNumbers[2];
  }

  if (numHundred != 0) resHundred += ones[numHundred] + ' ' + hundred;

  if (numTens != 0) {
    if (numTens == 1) resLast += ones[numTens * 10 + numOnes];

    if (numTens > 1 ) {
        resLast += tens[numTens];
        if (numOnes != 0) resLast += ' ' + ones[numOnes];
    }
  } else {

      if (numOnes != 0) resLast += ones[numOnes];
  }


  result += resHundred + ' ' + resLast;
  result = result.replace(/ +/g, ' ').trim();

  return result;
}
