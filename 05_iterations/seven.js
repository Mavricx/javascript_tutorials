const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums=myNumbers.map((num)=>num+10)

const newNums = myNumbers.map((num) => num * 10).
                          map((num) => num + 1).
                          filter((num) => num >= 40);//chaining

console.log(newNums);

//map performs action without any conditions but filter separates value which fits its condition.