let sign=prompt("enter sign + ,-,*,/")

let no1=parseInt(prompt("enter first number"))
let no2=parseInt(prompt("enter 2nd number"))
let ans=0;

var anss="";

if(sign=="+")
{
ans=no1+no2;
anss = "sum is "+ans
console.log("sum is " + parseInt(no1+no2));
}
if(sign=="-")
{
    ans=no1-no2;
    anss="minus is "+ans
console.log("minus is "+parseInt(no1-no2));
}
if(sign=="*")
{
    ans=no1*no2
    anss="mul is "+ans
    console.log("mul is "+parseInt(no1*no2));
}
if(sign=="/")
{
    ans=no1/no2;
    anss="div is "+ans
    console.log("dv is "+parseInt(no1/no2));
}
document.getElementById("get").innerHTML = anss;
//document.getElementById("get").textContent = 12;

//document.getElementById("get").innerHTML = toString(ans);
