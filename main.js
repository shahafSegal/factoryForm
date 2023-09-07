function factoryValid(){
    var validArr= [validFirstName(),validLastName(),validAge(),validEmail(),validTelephone()]
    for (let i = 0; i < validArr.length; i++) {
        if(!validArr[i])
        {
            return false
        }
        
    }
    return true
}
function clearLabelRemoveBord(lblEl,inpEl){
    lblEl.innerHTML=""
    lblEl.style.color=""
    inpEl.style.border=""
}
function changeInputWrong(lblEl,inpEl){
    lblEl.style.color="red"
    inpEl.style.border="1px solid red"
}

  

function validFirstName(){
    if(fNameInp.value[0]!=fNameInp.value[0].toLowerCase()){
        clearLabelRemoveBord(fNameLabel,fNameInp)
        return true
    }
    fNameLabel.innerHTML="*need to start with upper case"
    changeInputWrong(fNameLabel,fNameInp)
    return false
}
function validLastName(){
    if( lNameInp.value.length>0 && lNameInp.value.length<=20){
        clearLabelRemoveBord(lNameLabel,lNameInp)
        lNameInp.style.border=""
        return true
    }
    lNameLabel.innerHTML="*need to be between 1-20"
    changeInputWrong(lNameLabel,lNameInp)
    return false

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
        clearLabelRemoveBord(birthDateLabel,birthDateInp)
        return true;
    }
    birthDateLabel.innerHTML="*age not between 16 and 65"
    changeInputWrong(birthDateLabel,birthDateInp)
    return false;
}
function validEmail(){
    if( emailInp.value.substr(-4)==".com" || emailInp.value.substr(-6)==".co.il")
    {
        clearLabelRemoveBord(emailLabel,emailInp)
        return true;
    }
    emailLabel.innerHTML="*age not between 16 and 65"
    changeInputWrong(emailLabel,emailInp)
    return false;
}

function validTelephone(){
    var isANumber= +(userTelInp.value) && userTelInp.value.indexOf('e')==-1;
    if( userTelInp.value[0]==0 && isANumber&& userTelInp.value.length==10)
    {
        clearLabelRemoveBord(userTelLabel,userTelInp)
        return true;
    }
    userTelLabel.innerHTML="*not a phone number(10 digits, starts with 0)"
    changeInputWrong(userTelLabel,userTelInp)
    return false;
}
