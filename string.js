
// string is immutable means not changeable
let name='jahid';
let number=[10,30,40,50,60];
console.log(name);
console.log(name.length)
console.log(name[0]);
name[0]='p'; //because its immutable datatype
console.log(name);
console.log(number.length);
console.log(number);
number[0]=100; //it's change because it's mutable datatype
console.log(number);
let thana=new String('Netrokuna');
console.log(typeof(thana));