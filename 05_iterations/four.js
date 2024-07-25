//it is suggested to use for in loop in case of iteration of objects
const myObject ={
    js:'javascript ',
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {//new for in loop 
   console.log(key);
}//js
// cpp
// rb
// swift
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
 }
//  js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

//for  in loop in array

const programming=["js","rb","java","py","cpp"];
for(const key in programming){
  console.log(key);//0,1,2,3,4
  console.log(programming[key]);//js,rb,java,py,cpp
}
const map=new Map();
map.set ('IN',"India");
map.set('USA',"United states of america");
map.set('FR',"France");
map.set ('IN',"India");

for(const key in map){//not iteratable
    console.log(key);
}

//it is suggested to use for of loop in case of arrays and for in loop in case of objects