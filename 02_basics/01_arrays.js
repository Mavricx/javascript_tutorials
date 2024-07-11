//arrays

const myArr = [0, 1, 2, 3, 4, 5, true, "hi there"];
console.log(myArr[6]);

//arrays in javascript are resizable
//zero based indexing
//javascript arrays are not associative arrays-->means index only can be non-negative integers.
//javascript array-copy operations create shallow copies-->share same reference point

const myHeros = ["shaktiman", "naagraj", "balooga"];
//another way to declare arrays
const arr2 = new Array(1, 2, 3, 4, 5);

//array methods
arr2.push(6);//adds 6 next to last element 
console.log(arr2);//[ 1, 2, 3, 4, 5, 6 ]

arr2.pop();//delete last element
console.log(arr2);//[ 1, 2, 3, 4, 5 ]

arr2.unshift(9);//adds 9 before first element
console.log(arr2);//[ 9, 1, 2, 3, 4, 5 ]

arr2.shift();//deletes first element
console.log(arr2);//[ 1, 2, 3, 4, 5 ]

console.log(arr2.includes(9));//false
console.log(arr2.indexOf(3));//2

const newArr = arr2.join();//converts array into a string comma separated
console.log(newArr);//1,2,3,4,5

//slice and spice

console.log("A", arr2);//prints original array -->A [ 1, 2, 3, 4, 5 ]

const newArray1 = arr2.slice(1, 3);
console.log("B", arr2);//original array remain same even after slice function-->B [ 1, 2, 3, 4, 5 ]
console.log(newArray1);//[ 2, 3 ]last index not included in the result, only returns indices of 1 and 2

const newArray2 = arr2.splice(1, 3);
console.log("C", arr2);//C [ 1, 5 ]-->modifies the original array into a complement of the splice function
console.log(newArray2);//[ 2, 3, 4 ]//last index is included in the result and returns indices of 1 2 and 3





