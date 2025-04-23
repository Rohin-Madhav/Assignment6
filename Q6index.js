let temp = 100
let unit = 'f'

if(unit === 'c'){
    let fahrenheit=(temp* 9/5)+32
    console.log(`${temp}\u00b0C is ${fahrenheit}\u00b0F`);
}else if(unit ==='f'){
    let celsius =(temp-32)* 5/9
    console.log(`${temp}\u00b0F is ${celsius.toFixed(2)}\u00b0C`);
}else{
    console,log('Invalid unit.Use "c"for celsius or "f" for fahrenheit');
}