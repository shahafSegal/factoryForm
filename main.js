function factoryValid(){
    
}
  

function validFirstName(){
    return fNameInp.value[0]!=fNameInp.value[0].toLowerCase()
}
function validLastName(){
    return lNameInp.value.length>0 && lNameInp.value.length<=20;
}
function getAgeFromBirthDate(date1){
    var currDate= new Date()
    var age= currDate.getFullYear()-date1.getFullYear();
    if(currDate.getMonth()<date1.getMonth())
    {
        age--;
    }
    else if( currDate.getMonth()==date1.getMonth() && currDate.getDay()<date1.getDay()){
        age--
    }
    return age;
}

function validAge(){
    var userAge= getAgeFromBirthDate(new Date(birthDateInp.value))
    if (userAge>16&&userAge<65){
        birthDateLabel.innerHTML=""
        birthDateInp.style.border=""
        return true;
    }
    birthDateLabel.innerHTML="*age not between 16 and 65"
    birthDateInp.style.border="1px solid red"
    return false;
}
function validEmail(){
    if( emailInp.value.substr(-4)==".com" || emailInp.value.substr(-6)==".co.il")
    {
        emailLabel.innerHTML=""
        emailInp.style.border=""
        return true;
    }
    emailLabel.innerHTML="*age not between 16 and 65"
    emailInp.style.border=""
    return false;
}

function validTelephone(){

    var isTelNumber= +userTelInp && userTelInp.value.indexOf('e')==-1;
    if( userTelInp.value[0]==0 && isTelNumber)
    {
        emailLabel.innerHTML=""
        emailInp.style.border=""
        return true;
    }
    emailLabel.innerHTML="*age not between 16 and 65"
    emailInp.style.border=""
    return false;
}
