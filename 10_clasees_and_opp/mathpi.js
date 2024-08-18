// console.log(Math.PI);

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai={
    name:"tea and cookie",
    price:34,
    isAvailable:true

}

console.log(Object.getOwnPropertyDescriptor(chai));//undefined
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// {
//     value: 'tea and cookie',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
Object.defineProperty(chai,"price",{
    writable:false,
    enumerable:false,

});

console.log(Object.getOwnPropertyDescriptor(chai,"price"));//{ value: 34, writable: false, enumerable: true, configurable: true }  

for(const [key, val] of Object.entries(chai)){
    console.log(`${key} : ${val}`); 
}