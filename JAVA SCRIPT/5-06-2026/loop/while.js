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
//reverse rtangle

let u=4;
for(i=u;i>=1;i--){
 let row=" ";
  for(j=1;j<=i;j++){
    row +=" *";
  }
  console.log(row);
}
