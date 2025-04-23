let str ='Hello World'
str = str.toLowerCase();

let vowels ='aeiou'
let vowelsCount = 0
let consonentCount = 0

for(let i =0; i < str.length;i++){
    let char = str[i];
    if(vowels.includes(char)){
        vowelsCount++
    }else if (char >= 'a' && char <='z'){
        consonentCount++
    }
}
console.log('vowels :',vowelsCount)
console.log('consonants :', consonentCount)
