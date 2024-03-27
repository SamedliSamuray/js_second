let num5=prompt("Araliq secmek ucun ilk reqemi secin.");
let num6=prompt("Araliq secmek ucun ilk reqemi secin.");

for(i=num5;i<num6;i++){
    for(j=1;j<=i;j++){

    if(i%j===0 && j!==i && j!==1){
        break;
    }
    else if(j===i){
        console.log(`${i} sade ededdir`)
    }
    }
}