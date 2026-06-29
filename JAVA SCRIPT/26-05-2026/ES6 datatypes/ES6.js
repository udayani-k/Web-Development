//map
//the data will be stored in key value pairs but key of any datatype
 var l = new Map()
 //set:adding value
 l.set("name",`udayani`)
 l.set("date",21)
 l.set("value",true)
 console.log(l)
 //map
const map = new Map();

map.set("name", "Rahul");

console.log(map.get("name"));

//weakmap
const weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "Hello");

console.log(weakMap.get(obj));

//set
const set = new Set();

set.add(10);
set.add(20);

console.log(set);

//weakset
const sets = new Set();

set.add(30);
set.add(69);

console.log(sets);