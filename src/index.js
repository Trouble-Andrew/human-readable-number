module.exports = function toReadable (number) {
    let numArray = number.toString().split('');
    let readableNumber = '';  
    
    const getSimpleNumber = (num) => {
      switch (num) {
        case '0':
          return 'zero';
        case '1': 
          return 'one';
        case '2': 
          return 'two';
        case '3': 
          return 'three';
        case '4': 
          return 'four';
        case '5': 
          return 'five';
        case '6': 
          return 'six';
        case '7': 
          return 'seven';
        case '8': 
          return 'eight';
        case '9': 
          return 'nine';
        case '10': 
          return 'ten';
        case '11': 
          return 'eleven';
        case '12': 
          return 'twelve';
        case '13': 
          return 'thirteen';
        case '14': 
          return 'fourteen';
        case '15': 
          return 'fifteen';
        case '16': 
          return 'sixteen';
        case '17': 
          return 'seventeen';
        case '18': 
          return 'eighteen';
        case '19': 
          return 'nineteen';
        case '20': 
          return 'twenty';
        default:
          '';
      }
    }
  
    const getHundreds = (hundreds) => {
      if (hundreds[0] === '0') {
        return 'zero';
      }
      let firstTwoNumbers = numArray.slice(-2).join('');
      let readableNumber = '';
  
      if (firstTwoNumbers[0] === '0') {
        firstTwoNumbers = firstTwoNumbers.substring(1, 2);
      }
  
      if (getSimpleNumber(firstTwoNumbers) === undefined) {
        getSimpleNumber(firstTwoNumbers[1]);
        getTens(firstTwoNumbers[0]);
        readableNumber = `${getTens(firstTwoNumbers[0])} ${getSimpleNumber(firstTwoNumbers[1])}`
      } else {
        readableNumber = `${getSimpleNumber(firstTwoNumbers)}`
      }
  
      numArray.splice(-2, 2);
  
      if (numArray.length != 0) {
        readableNumber = `${getSimpleNumber(numArray[numArray.length - 1])} hundred ` + readableNumber;
        numArray.splice(-1, 2);
      }
  
      return readableNumber.replace(' zero', '');
    }
  
    const getTens = (number) => {
      switch (number) {
        case '2': 
          return 'twenty';
        case '3': 
          return 'thirty';
        case '4': 
          return 'forty';
        case '5': 
          return 'fifty';
        case '6': 
          return 'sixty';
        case '7': 
          return 'seventy';
        case '8': 
          return 'eighty';
        case '9': 
          return 'ninety';
        default:
          '';
      }
    }
  
    return getHundreds(numArray);
}
