const address="Netokuna";
const sliceAddress=address.slice(2,5);
console.log(sliceAddress);


const sentence="I am good and hardworking person";
console.log(sentence.split("a"));
const name='rahim ,karim, lahim, jahim, fahim, dahim';
const people=name.split(',');
console.log(people);
const friends=['rahim','rani','jani','pani','nani'];
console.log(friends);
console.log(friends.join('|'));
console.log(friends.join('-'));


// string concat korar

const first='Jahid';
const last='Hasan';
const full_name=first+' '+last;
console.log(full_name);
console.log(first.concat('') .concat(last));
console.log(last.includes('s'));
