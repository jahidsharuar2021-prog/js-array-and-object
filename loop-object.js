const bike={
    color:'black',
    brand:"yemaha",
    miles:"35 kilometer",
    stability:"strong",
    pillion:2
}
const key=Object.keys(bike);
console.log(key);
for(const dream in bike){
    console.log(dream+': '+bike[dream]);
    // console.log(bike[dream]);
}


// object declear ar system or process
const pencil=new Object();
const pen=Object.create({});
console.log(pencil);
console.log(pen);