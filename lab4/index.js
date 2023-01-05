
//EDWHQHEIEWOTRCNHYV RE78776565678678
a=document.getElementById("HELOO");
//jdfwefre gku;l6wycytyvuj
//GERHTEBYIN KML43WV 54 VU6XTTV THV
const bike={
    compony:"KAVASAKI",
    price:"10laC",
    color:"GREEN",
    type:"BICYCLE",

}
const phone={
    compony:"SAMSUNG",
    model:"S22 ultra",
    price:"1LAC",
    color:"DARK GREEN",
    type:"PHONE",
}

const car={
    compony:"lAMBORGHINI",
    price:"2.5CR",

}
idcome=""
function MYFUN(idcame){
    console.log("HELLO")
    switch(idcame)
    {
        case "CAR":
          for(i in car){
           tr = document.createElement("tr");
           const trkey =document.createElement("td");
           const rvalue = document.createElement("td");
            trkey.textContent = i;
            rvalue.textContent= car[i];
            tr.appendChild(trkey);
            tr.appendChild(rvalue);

            document.getElementById("id1").appendChild(tr);
            
          }  
          break;
        case "phone":
            for(i in phone){
                console.log(phone[i])
            }
            console.log(phone);
            break;
        case "BIKE":
            for(i in bike){
                console.log(bike[i])
            }
            break;
    }
}
