while(2==2){
    console.log('I will run forever!');
    break;
}

let index=0;
while(index<=10){//first checks then executes
    console.log(`value of the index ${index}`);
    index=index+2;
}
let myArray = ["flash", "arrow", "superman", "batman", "wonderwoman"];

let arr=0;
while(arr<myArray.length){
    console.log(`value of the index ${myArray[arr]}`);
    arr++;
}
let score = 11

do {///first executes then checks
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);