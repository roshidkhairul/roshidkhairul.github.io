let a = [];
let b = [];
let sumNet = 0;
let sumKnicks = 0;
let avgNet = 0;
let avgKnicks = 0;

for(let i=0; i<3; i++){
    a[i] = prompt(`Enter ${i+1} score of Nets`);
    sumNet += a[i];
}

for(let j=0; j<3; j++){
    b[j] = prompt(`Enter ${j+1} score of Knicks`);
    sumKnicks += b[j];
}

avgNet = sumNet/3;
avgKnicks=sumKnicks/3;

if(avgNet == avgKnicks){
    console.log("Draw");
}
else if(avgNet > avgKnicks){
    console.log("Net wins");
}

else if(avgNet < avgKnicks){
    console.log("Knick wins");
}