// function doubleIt(num){
//    return num *2;
// }

// const add = (x,y) => x+y;
// const doubleIt = (num1,num2) => num1*2 + num2*2;
const doMath = (num1,num2 = 0) => {
   const sum = num1+num2;
   const Subtraction = num1-num2;
   return sum,Subtraction;

}
const result1 = doMath(5,2);
console.log(result1);
