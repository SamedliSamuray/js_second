var start=confirm("Kod Baslasin?");
if(start){
alert("Task1 : İlk olaraq daxil etdiyiniz ədədin mürəkkəb, yoxsa sadə olmağını yoxlayacayıq.")
let num=+prompt("Ədədi daxil edin:");

// Task1

if(num!=0){

for(let i=0;i<=num;i++){

    if(num%i===0 && i!=num && i!=1){
        
        console.log(`Task 1: Daxil etdiyiniz ${num} ədədi mürəkkəb ədəddir`);
        break;
    }
    else if(i==num){

        console.log(`Task 1: Daxil etdiyiniz ${num} ədədi sadə ədəddir.`);
    }

    else{
        continue;        
    }
}}
else{
  
  alert(`Task 1 : "${num}" ədədi heç bir ədədə bölünmür.Xahiş edirik təkrar yoxlayın.`);
}

// Task2

alert("Task 2 : Daxil etdiyiniz ədədin mükəmməlliyini yoxlayaq.");

let num2=+prompt("Ədədi daxil edin:");
let sum=0;
for(let i=1;i<num2;i++){
    if(num2%i==0){

        sum+=i;
    
        if(sum==num2){
            console.log(`Task 2: Daxil etdiyiniz ${num2} ədədi mükəmməl ədəddir`)
        }

    }
    else if(sum!=num2 && i==num2-1){
        console.log(`Task 2: Daxil etdiyiniz ${num2} ədədi mükəmməl deyil.`)
    }
    else{
        continue;
    }
    
}



// Task 3
alert("Task 3: İki ədəd daxil edirsiz, səyfə bu iki ədəd arasında mükəmməl ədədləri sizə qaytarır.")
let num3=+prompt("Araliq secmek ucun ilk reqemi secin.");
let num4=+prompt("Araliq secmek ucun ikinci reqemi secin.");

if(num3<num4 && num3!==0 && num4!==0){
   

for(let i=num3;i<=num4;i++){
    let sum1=0;
    for(let j=1;j<i;j++){
        if(i%j===0){
           sum1+=j;
           } 
        } 
        if(sum1===i){
            console.log(`Task 3: ${i} ədədi mükəmməl ədəddir`)};
    }

}
else if(num3>num4 && num3!==0 && num4!==0){
    
for(let i=num4;i<=num3;i++){
    let sum1=0;
    for(let j=1;j<i;j++){
        if(i%j===0){
           sum1+=j;
           } 
        } 
        if(sum1===i){
            console.log(`${i} ədədi mükəmməl ədəddir`)};
    }
}
    
else{
    console.log('Daxil etdiyiniz ededler "0" ola bilməz ve iki eded bir-birine beraber ola bilmez')
}


// Task 4
alert("Task 4: Daxil etdiyiniz 2 eded arasinda sade ededler gosterilecek:")

let num5=prompt("Araliq secmek ucun ilk reqemi secin.");
let num6=prompt("Araliq secmek ucun ilk reqemi secin.");
if(num5<num6){
for(i=num5;i<num6;i++){
    for(j=1;j<=i;j++){

    if(i%j===0 && j!==i && j!==1){
        break;
    }
    else if(j===i){
        console.log(`Task 4 :${i} sade ededdir`)
    }
    }
}}
else if(num5>num6){
    for(i=num6;i<num5;i++){
        for(j=1;j<=i;j++){
    
        if(i%j===0 && j!==i && j!==1){
            break;
        }
        else if(j===i){
            console.log(`Task 4 :${i} sade ededdir`)
        }
        }
    }}

else{
    console.log("Daxil edilen ededler eyni ola bilmez.");
}



//Task 5
alert("Task 5: Ilk iki eded 'eded araligini' , 3-cu eded ise hansi ededle bitenleri axtardiginizi gosterir.");

let num7=prompt("Araliq secmek ucun ilk reqemi secin.");
let num8=prompt("Araliq secmek ucun ilk reqemi secin.");

let yoxla=prompt("Sonu hansi eded ile bitsin?");
if(num7<num8){
for(i=num7;i<num8;i++){

    if(i.toString().endsWith(yoxla))
    {
        console.log(`Task 5: ${i} ədədi ${yoxla} ilə bitir`)
    }
}
}
else if(num7>num8){
    for(i=num8;i<num7;i++){
    
        if(i.toString().endsWith(yoxla))
        {
            console.log(`Task 5: ${i} ədədi ${yoxla}  ilə bitir`)
        }
    }
    }
else(
    console.log('Daxil etdiyiniz simvol sadece reqem olmalidir ve iki eded bir-birine beraber ola bilmez')
)




};

else{};

