//basic program of function
function add(a,b){
    return a+b;
}
console.log(add(1,2))


//by using return
function add(a,b)
{
    return "hello"
    console.log(a+b)

}
 let result=add(1,4)
 console.log(result)


 //default parameter
 function hello(a=2,b=4){
 console.log(a+b)
 
 }
 hello(1,3)
 hello(1,null)


 //varying in no.of parameters&arguements
 function varying(a,c,d,e)
 {
    console.log(a,c,d,e)
 }
 varying(undefined,1,2,3,6,8,5,4,6)
 