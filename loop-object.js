const bike={
    color:'black',
    brand:"yemaha",
    miles:"35 kilometer",
    stability:"strong",
    pillion:2
}
for(const dream in bike){
    console.log(dream);
    console.log(bike[dream]);
}