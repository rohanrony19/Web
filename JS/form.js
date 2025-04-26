// function onClick(){
//     alert("Hi sleeply people")
// }

function submitForm(){
    let val=true;
    let nameid=document.formName.nameid.value;
    let ageid=document.formName.ageid.value;
    let numberid=document.formName.numberid.value;
    let genderid=document.formName.emailid.value;
    let usnid=document.formName.usnid.value;

   
    if(nameid.length<=10 && nameid.length>=3){
        val=true;
    }else{
        val=false;
        alert("Invalid name");

    }

    if(ageid>=18){
        val=true;
    }else{
        val=false;
        alert("Invalid age");

    }

    if(numberid.length===10){
        va=true;
    }else{
        val=false;
        alert("invalid Number");     
    }

    if(val==true){
        alert("Form Submitted");
    }
     

    return val;
        
}
