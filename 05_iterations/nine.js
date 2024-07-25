//reduce function
const array1 = [1, 2, 3, 4, 5];


const sumWithInitial = array1.reduce(function (accumulator, currentValue) { 
     console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue }, 0);//here 0 is the initial value of the accumulator

    // accumulator: 0, currentValue: 1
    // accumulator: 1, currentValue: 2
    // accumulator: 3, currentValue: 3
    // accumulator: 6, currentValue: 4
    // accumulator: 10, currentValue: 5
    // 15


//  const sumWithInitial=array1.reduce(//same with arrow function
//     (accumulator,currentValue)=>accumulator+currentValue,0);

console.log(sumWithInitial);//15


const shoppingCart=[
    {
        itemName:"js course",
        price:100
    },
    {
        itemName:"java course",
        price:200
    },
    {
        itemName:"ruby course",
        price:300
    },
    {
        itemName:"python course",
        price:400
    }]

    const total=shoppingCart. reduce((acc,item)=> item.price+acc,0)
    console.log(total);//1000