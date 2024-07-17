const marvel_heros = ["thor", "ironman", "captain america", "black widow", "hulk"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);//stores dc_heros as last element

//    [ 'thor',
//     'ironman',
//     'captain america',
//     'black widow',
//     'hulk',
//     [ 'superman', 'flash', 'batman' ]
//   ]


// const all_heros = marvel_heros.concat(dc_heros); //concat returns a new array by combaining both arrays
// console.log(all_heros);

//-->[
//   'thor',
//   'ironman',
//   'captain america',
//   'black widow',
//   'hulk',
//   'superman',
//   'flash',
//   'batman'
// ]

//--------spreading arrays//Spread operator-----------

const all_new_heros = [...marvel_heros, ...dc_heros]; //does same functions of combaining arrays.

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const real_another_array = another_array.flat(Infinity); //flattens the array to a single level, we have to pass an number upto which depth we have to flatten. //[1,2,3,4,5,6,7,8,9,10,11]

// console.log(real_another_array);

console.log(Array.isArray("Priyanshu"));//false
console.log(Array.from("Priyanshu"));//['P', 'r', 'i', 'y', 'a', 'n', 's', 'h', 'u']//converts objects,strings,etc into array
console.log(Array.from({ name: "Priyanshu" }));//[]//empty array..
//The code tries to make an array from an object that doesn't have the right structure to be turned into an array. So, it ends up creating an empty array instead.


let score1 = 100;
let score2 = 200;
let score3 = 300;

const scores = Array.of(score1, score2, score3);
console.log(scores);