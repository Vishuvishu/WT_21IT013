
//EDWHQHEIEWOTRCNHYV RE78776565678678
a=document.getElementById("HELOO");
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
            console.log(car[i])
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