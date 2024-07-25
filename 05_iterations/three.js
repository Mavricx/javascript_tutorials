//for of

const arr = [1, 2, 3, 4, 5];

for(const num of arr){
    console.log(num);
}

const greetings="hello world"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//maps

const map=new Map();
map.set ('IN',"India");
map.set('USA',"United states of america");
map.set('FR',"France");
map.set ('IN',"India");//does not add again in the map as in already exist
console.log(map);

for(const key of map){//returns array of key and value
    console.log(key);
}

// [ 'IN', 'India' ]
// [ 'USA', 'United states of america' ]
// [ 'FR', 'France' ]
for(const [key,value] of map){//can print key and value separately
    console.log(key,':-',value);
}
// IN :- India
// USA :- United states of america
// FR :- France

const myObject={
    'game1':'NFS',
    'game2':'FIFA',
}

for(const [key,value] of map){//not iteratable in the case of object -->requires special syntax
    console.log(key,':-',value);
}