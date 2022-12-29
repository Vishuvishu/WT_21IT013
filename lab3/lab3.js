console.log("connected...")

arr1 = [];
function getorg(arr1){

    console.log("getorg")

for(let i=0;i<arr1.length;i++)
{
    const ele12 = document.createElement("li")
    ele12.textContent = arr1;

  
        
    document.getElementById("ulid").appendChild(ele12);

}

}
function getsort(arr1)
{
    console.log("getsort")
    arr1.sort();
    for(let i=0;i<arr1.length;i++)
    {
        const ele12 = document.createElement("li")
        ele12.textContent = arr1;
    
      
            
        document.getElementById("ulid").appendChild(ele12);
    
    }
}

let arr=[];

function getfun(){
    console.log("function called");
    
    //const ele = document.getElementById("getid");
    arr.push(document.getElementById("getid").value);

    arr.sort();

}
function change(){

    const hello = document.getElementById("selid");
    if(hello.value=="sort")
    {
        getsort(arr);
    }
    else
    {
        getorg(arr);
    }

}
   // const ele1 = document.createElement("li")
    //ele1.textContent = arr;

  
        
  //  document.getElementById("ulid").appendChild(ele1);

