// 1.ways to print in js
// console.log("hello world");
//         alert("me");
//         document.getElementsByTagName('h1')[0].style.fontsize = "99px"
//         document.getElementsByTagName('h1')[0].style.background = "red"
//         document.getElementsByTagName('h1')[0].style.visibility = "hidden"
//         document.write("This is document")
//         // 2.js console api
//         console.warn("This is warning");
//         console.error("this is error");
//         console.assert(4==6);
//         console.assert(4==(6-2));
        // 3.variables
// containers to store the data values
// var number = 32;
// var number1 = 67;
// console.log(number+number1);
// 4.Datatypes
// strings
var str1="This is a string";
var str2='his is a string';
// numbers
var n=90;
var m=90.9;
//objects
var marks={
        r:90,
        m:9,
        k:89
}
console.log(marks)
// //4. booleans
    // var a=true;
    // var b=false;
    // console.log(a)
    // // 5.undefined
    // var und;
    // console.log(und);
    //6.null
    // var n=null;
    // console.log(n);
    //7.arrays
//     var arr=[1,2,3];
//    console.log(arr)
   //operators
//    1.arithmetic operators
// var a=90;
// var b=90;
// console.log("The value of a+b is",a+b);
// console.log("The value of a-b is",a-b);
// console.log("The value of a*b is",a*b);
// console.log("The value of a/b is",a/b);

// 2.assignment operators
// var c=b;
// c-=2;
// console.log(c);
// c+=2;
// c*=2;
// c/=2;

//3.comparision operators
// var x=6;
// var y=9;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x!=y);
// 4.logical operators
// console.log(true&&true);
// console.log(true||true);
// console.log(true&&false);
// console.log(true||false);
//logical not
// console.log(!true)
// functions
// function avg(a,b){
//     return (a+b)/2;
// }
// c1=avg(8,2);
// c2=avg(4,16);
// console.log(c1,c2);
// conditionals
// if-else
/*
var age=20;
if(age>18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");
}
// if
var a=90
if(a!=9){
    console.log("not equal")
}
// if else ladder
var a=5;
if (a>7){
    console.log("a is greater than 7")
}
else if(a<7){
    console.log("a is less than 7")
}
else{
    console.log("no number")
}
console.log("end of ladder")
*/
var arr=[1,2,3]
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
//alternative step
// arr.forEach(function(element){
// console.log(element);
// })
//while
// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++
// }
// do{
//     console.log(arr[j]);
//     j++
// }while(j<arr.length);
//continue and break
// continue-leave this iteration and proceed to next iteration
//break-stop looping
// var arr=[1,2,3,4,5]
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i]);
// }
//array methods
// a=[12,3,"likki"]
//1. a.pop();
// console.log(a)
//2. a.push("lav")
// console.log(a)
//3. a.shift();
//4.a.toString();
//5.a.sort();
// console.log(a)
// let m="likki is a good girl";
// console.log(m.length)
// console.log(m.indexOf("good"))
// console.log(m.lastIndexOf("good"))
// console.log(m.slice(1,4))
// console.log(m.replace("good","bad"))
// let mydate=new Date();
// console.log(mydate)
// console.log(mydate.getDay())
// console.log(mydate.getTime())
// console.log(mydate.getFullYear())
