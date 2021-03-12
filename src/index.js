module.exports = function toReadable (number) {
    let edin = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let des = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hun = number;

    number = ('' + number).split('').map(item => Number(item));
    let part = Number("" + number[number.length-2] + number[number.length-1]);
  
    if (number.length > 2 && (hun/number[0]) == 100){
        return `${edin[number[0]]} hundred`;
  
    }else if (number.length > 2 && part >= 20 && (part/number[1]) != 10){
        return `${edin[number[0]]} hundred ${des[number[1]-2]} ${edin[number[2]]}`;
    
    }else if (number.length > 2 && part >= 20 && (part/number[1]) == 10){
        return `${edin[number[0]]} hundred ${des[number[1]-2]}`;
    
    }else if(number.length > 2 && part < 20){
        return `${edin[number[0]]} hundred ${edin[part]}`;
    
    }else if (number.length == 2 && part >= 20 && (part/number[0]) != 10){
        return `${des[number[0]-2]} ${edin[number[1]]}`;
    
    }else if (number.length == 2 && part >= 20 && (part/number[0]) == 10){
        return `${des[number[0]-2]}`;
    }else {
        return edin[hun];
    }
}