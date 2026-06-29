// Object:An object is a collection of the functionality and related data and stored as properties and methods
//or: An Object is a collection of the key value pairs,and enclosed in curely braces{}, key and value  are spreated by colon and the each key value pair are sepreted by comma(,)
//4 types
//1.object literal
let a={}
console.log(a) 
//2.New Keyword
let b=new Object()
console.log(b)
//3.class: a  class  is  a  blueprint  that contains the data and functions thats used to create the objects
class student{
    name="udayani"
    age=20
    display()
    {
        console.log(this.name)
        console.log(this.age)
    }
}
s1=new student()
s1.display()
//4.constructor:A constructor is special method in a class that is automatically called when object was created.
class students{  
     constructor(name,age){
    this.name=name
    this.age=age
     }
    display ()
    {
        console.log(this.name)
        console.log(this.age)

    }
}
s2=new students("hasya",14)
s2.display()


//
let obj={empid:989,empname:"pavan",salary:45000,phn:6863763865,bloodgroup:"B positive"}
console.log(obj)
console.log(obj.salary)
console.log(obj.empid)
console.log(obj.empname)
console.log(obj["phn"])
console.log(obj["bloodgroup"])
console.log(obj["empname"])

//adding of an element
obj.empname ="shanmukh"
console.log(obj)
obj.empid=6788
console.log(obj)
obj.phn=9898976777
console.log(obj)
delete obj.empid
console.log(obj)
//finding the keys 
let mobile={ 
    brand:"samsung",
    price:"20000"
}
for(value of mobile)
{
    console.log(value)
}
