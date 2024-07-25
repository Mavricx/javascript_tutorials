//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("five is the best number");
    }
    console.log(element);
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value ${j} outer loop value: ${i}`);
        console.log(i + '*' + j + '=' + i * j);
    }

}

let myArray = ["flash", "arrow", "superman", "batman", "wonderwoman"];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);

}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);}