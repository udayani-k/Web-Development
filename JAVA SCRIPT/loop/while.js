let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}
//
let j=1
for(j=0;j<=1;j++){
    console.log(j)
}
//
for(k=5;k>=0;k--)
{
    console.log(k)
}

//iife(immediately invoked function expression)
(function() {
  console.log("Hello")
})()
//
let n=4;
for(i=1;i<=n;i++){
  let  row="";
for(j=1;j<= n;j++){
    row+="* "
}
console.log(row);
}
//right triangle
let m = 4;

for (let i = 1; i <= m; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "* ";
  }

  console.log(row);
}
//reverse number triangle
let h=4;
for(i=h;i>=1;i--){
    let row=" ";
    for(j=1;j<=i;j++){
        row+=j+" ";
    }
    console.log(row)
}
//reverse rectangle

let u=4;
for(i=u;i>=1;i--){
 let row=" ";
  for(j=1;j<=i;j++){
    row +=" *";
  }
  console.log(row);
}
//finding the largest number and smallest number
let arr=[12,34,56,76,43]
let max=arr[0]
let min=arr[0]
  for(i=1;i<arr.length;i++){
    if(arr[i]>max){
    max=arr[i]
  }
  if(arr[i]<min){
min=arr[i] 
 }
}
console.log("Largest number:" +max);
console.log("Smallest number:" +min);

//
i=1;
do{
  console.log(i)
  i++
}
while(i<=20)
//
  i=0;
  while(i<=20)
  {
    console.log(i)
  }