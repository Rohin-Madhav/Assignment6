let n = 10
let a =0, b=1

console.log('fibonacci series :');

for(let i =0; i <n; i++){
    console.log(a);
    let next =a+b
    a = b
    b = next
}