 const arr=[1,2,3,4,2,5,3,6,7,5]
 console.log([...new Set(arr)])

// 
// const arr=[1,2,3,4,2,5,3,6,7,5]
// var m=[]

// object
var emp={empid:647647,empname:"udayani",dept:"IT",salary:89970}
console.log(emp)
emp.exp="2 years"
console.log(emp)
for(let key in emp ){
   console.log(`${key} : ${emp[key]}`);
}
