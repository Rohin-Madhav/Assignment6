function isPalindrome(str){
    let lowerStr = str.toLowerCase();

    let reversedstr = lowerStr.split('').reverse('').join('');
    return lowerStr === reversedstr;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("Hello"));