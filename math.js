const result = Math.pow(3, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    console.log('You guys can be friends');
}
else{
    console.log('you guys stay apart');
}



const number = 2.4598;
const fullNumber = Math.round(number);
// console.log(fullNumber);
const resul2 = Math.ceil(number);
const result3 = Math.floor(456.9999);
// console.log(result3);

// Random
// console.log(Math.random());
// const random = Math.random()*100;
const random = Math.round(Math.random()*100);
console.log(random);

for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
