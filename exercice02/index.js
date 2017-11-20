// {
//     const name = 'gilles';
//     console.log(name);
//     const myArray = [];
//     Object.freeze(myArray);
//     myArray.push('gilles');
//     console.log(myArray);
// }
// function somme(p1,p2){
//     return p1 + p2;
// }
// let somme2 = function(p1,p2){
//     return p1 + p2;
// }
// let somme3=(p1,p2)=>{
//     return p1 + p2;
// }
// // console.log(somme(1,3));
// // console.log(somme2(1,3));
// // ;
// // console.log(somme2(1,3))
// console.log(somme3(1,3))
const name = "gilles";
const address= "rue des galibiers,54 8500 ailleurs";
const phone= '0032485687452'

// console.log('user is '+name);
// console.log('user address is'+address);
// console.log('user phone is'+phone);
// console.log(`user is ${name} 
// user address is ${address} 
// user phone is ${phone}`);
let [a,b]=[4,"gilles"];
// console.log(a)
const numbers = [1,2,3,4,5,6];
const doubleNumbers = function(arr){
    const tmpArr = [];
    for (let i = 0, l = arr.length; i < l; i++) {
       tmpArr.push(arr[i]*2);   
    }
    return tmpArr;
}
const doubleNumbersMap = function(arr){
  return arr.map((item)=>{return item*2});
}

// console.log(doubleNumbers(numbers))
// console.log(doubleNumbersMap(numbers))

// console.log(numbers.filter((item)=>{return item%2===0}))

console.log(numbers.reduce((prev,current)=>{
    return prev+current
},0));






























