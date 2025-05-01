
// Answer 1

const countDigits=(number)=>{
    if(number === 0){
        number = -number
    }else if(number === 0){
        return 1;
    }

    let count = 0
    while(number>0){
        number = parseInt(number/10)
        count++;
    }
    return count;
}
let num1 =98765
console.log('Number of Digits :',countDigits(num1));

// Answer 2

const productOfDigits=(number)=>{
    if(number < 0){
        number = -number
    }else if(number ===0){
        return 0;
    }

    let product = 1
    while(number !== 0){
        let digit = number%10;
        product *= digit
        number =parseInt(number/10)

    }
    return product;
}
let num2 =234
console.log('product of digits :',productOfDigits(num2));

// Answer 3

const wordCount=(str)=>{
    return str.trim().split(/\s+/).length;
}   
console.log(wordCount('Hello world, how are you?'))

// Answer 4

const reverseWord =(sentance)=>{
    return sentance.trim().split(/\s+/).reverse().join('');
}

let input ='JavaScript is fun'
console.log(reverseWord(input))

// Answer 5


const isPangram=(sentance)=>{
    let letters = new Set();
    
    for(let i=0;i<sentance.length; i++){
        let char =sentance[i].toLowerCase();
        if(char >= 'a' && char <='z'){
            letters.add(char);
        }
    }
    return letters.size
}
let input2 = 'The quick broun fox jumbed on the lazy fox'

if(isPangram(input2)){
    console.log('its a pangram')
}else{
    console.log('its not a pangram')
}


