//EX1 use map method and add prefix

const list = ['john','trish','pat'];

const map1 = list.map ((value,index) => {
  return "test-" + value;   
 
}
)  

//console.log(map1);

//EX2 create array of objects, use map method to add property to each object

const list2 = [{name: 'john'}, {name: 'trish'}, {name: 'pat'}
];

console.log(list2);

const map2 = list2.map ((value,index) => {
  value.age = 15;
  console.log(value);
return value;
}

)  


 list2.forEach((user) => {
  user.age = 10;
 }); 

console.log(map2);


