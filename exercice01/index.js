// console.log('Hello world');
// var a = 34;
// var b = '45';
// console.log(a+parseInt(b));
// console.log(0.1 + 0.2)
// var c=15;
// console.log(c%3)
// if(b>43){
//     console.log('hello')
// } else{
//     console.log ('you can not enter this room');
// }
// console.log(false)
// if(!0){
//     console.log(false)
// }
// if(!undefined){
//     console.log(false)
// }
// if(!NaN){
//     console.log(false)
// }
// if(!null){
//     console.log(false)
// }
// var a ='3';
// if(a === 3){
//     console.log('c\'est ok');
// } else{
//     console.log('Not ok')
// }
// var mesCourses = new Array();
// mesCourses.push('bannanes','oranges','viande');
// console.log(mesCourses)
// console.log(mesCourses[1])
// var mesCourses2=['bannanes','oranges','viande'];
// var doubleArray =[
//     ["a",1],
//     ["b",2]
// ];
// console.log(doubleArray[1][1])
// for (var i = 0; i < mesCourses.length; i++) {
//     var element = mesCourses[i];
//     console.log(element);
// }
// console.log(sayHello('gilles'));
// function sayHello(personna){
//     return personna + ' vous dit bonjour';
// }

//  var b = "gilles";
// function test () {
//   var a="vincent";
//   console.log(a);
// }
// test();
// console.log(a);
// (function(){
//     for (var i = 0; i < 10; i++) {
//         console.log(i);
//     }
// })();
// (function(){
// for (var i=0;i<10;i++){
//     console.log(i)
// }
// })();

var obj ={
    name:'gilles',
    age:43,
    toString:function(){
        return this.name +' '+ this.age;
    }
}

console.log(obj.age)
console.log(obj['age'])
console.log(obj.toString())

function call(func){
    function test(){
        console.log('call test');
    }
    function reTest(){
        console.log('call re test');
    }
    eval(func)();
}

call('test')
call('reTest')