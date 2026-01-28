let subject='Chemistry';
let book='chemistry';
if(subject.toLowerCase()===book.toLowerCase()){
    console.log("I will read the book");
}
else{
    console.log("I won't read the book");
}



// whit space related problem
let city='dhaka';
let dis='dhaka ';
if(city.trim()===dis.trim()){
    console.log('I will go to the village');

}
else{
    console.log(" I won't go to the village");
}