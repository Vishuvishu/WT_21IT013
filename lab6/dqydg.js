//DWRFTEHIJOYM KJVFBGDFHJJNHGN
class PERSON {

    constructor(name, MOBILE) {
        this.NAME = name;
        this.MOBILE = MOBILE;
    }

};
class STUDENT extends PERSON {


    constructor(name, ID, MOBILE, EMAIL) {
        super(name, MOBILE);
        this.EMAIL = EMAIL;
        this.ID = ID;
        this.SEMESTER = 3;

    }
    //EMAIL,
    // PASSWORD,

};




function MYFUN()
{

console.log("call");
    let NAME = document.getElementById("ID1");
    let id = document.getElementById("ID2");

    const obj = new STUDENT(NAME.value, id.value, "974832584", "RKHEOWHF@GAMI");

    for (i in obj) {
console.log(obj[i]);

        tr = document.createElement("tr");
        const trkey = document.createElement("td");
        const rvalue = document.createElement("td");

        trkey.textContent = i;
        rvalue.textContent = obj[i];

        tr.appendChild(trkey);
        tr.appendChild(rvalue);

       TRKEY = document.getElementById("table_id").appendChild(tr);

    }




}