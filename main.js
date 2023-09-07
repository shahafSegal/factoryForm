
function clearLabelRemoveBord(lblEl,inpEl,textInLbl){
    lblEl.innerText=textInLbl
    lblEl.style.color=""
    inpEl.style.border=""
}
function changeInputWrong(lblEl,inpEl,textInLbl){
    lblEl.style.color="red"
    inpEl.style.border="1px solid red"
    lblEl.innerText= textInLbl
}

function createFactory(){
    var newFactory={
        fName:fNameInp.value,
        lName:lNameInp.value,
        birthDate:birthDateInp.value,
        email: emailInp.value,
        telephone:userTelInp.value,
        occupation:occupationInp.value
    }
    return newFactory
}

function validFirstName(){
    if(fNameInp.value[0]!=fNameInp.value[0].toLowerCase()){
        clearLabelRemoveBord(fNameLabel,fNameInp,"first name:")
        return true
    }
    changeInputWrong(fNameLabel,fNameInp,"*need to start with upper case")
    return false
}
function validLastName(){
    if( lNameInp.value.length>0 && lNameInp.value.length<=20){
        clearLabelRemoveBord(lNameLabel,lNameInp,"Last Name:")
        return true
    }
    changeInputWrong(lNameLabel,lNameInp,"*need to be between 1-20")
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
        clearLabelRemoveBord(birthDateLabel,birthDateInp,'Birth Date:')
        return true;
    }
    changeInputWrong(birthDateLabel,birthDateInp,"*age not between 16 and 65")
    return false;
}
function validEmail(){
    if( emailInp.value.substr(-4)==".com" || emailInp.value.substr(-6)==".co.il")
    {
        clearLabelRemoveBord(emailLabel,emailInp,'Email:')
        return true;
    }
    changeInputWrong(emailLabel,emailInp,"*email does end correctly(.co.il/.com)")
    return false;
}

function validTelephone(){
    var isANumber= +(userTelInp.value) && userTelInp.value.indexOf('e')==-1;
    if( userTelInp.value[0]==0 && isANumber&& userTelInp.value.length==10)
    {
        clearLabelRemoveBord(userTelLabel,userTelInp,'Telephone:')
        return true;
    }
    changeInputWrong(userTelLabel,userTelInp,"*not a phone number(10 digits, starts with 0)")
    return false;
}


function getClockTime(thisDate){
    return `${thisDate.getHours()}:${thisDate.getMinutes()}:${thisDate.getSeconds()}`;
}
function printClockTime(){
    clockDiv.innerHTML = getClockTime(new Date())
}



var tryCounter=0
var secondsCoolDown=0;
var coolDownInterval;

function factoryValid(){
    var validArr= [validFirstName(),validLastName(),validAge(),validEmail(),validTelephone()]
    for (let i = 0; i < validArr.length; i++) {
        if(!validArr[i])
        {
            tryCounter++
            if(tryCounter==4){
                disableForm()
                secondsCoolDown=30;
                coolDownInterval=setInterval(countDownForm,1000)
                
                tryCounter=0
            }
            return false
        }
    }
    console.log(createFactory())
    return true
}

function countDownForm(){
    if(secondsCoolDown==0){
        clearInterval(coolDownInterval)
        enableForm()
        coolDownCount.innerText= ""
    }
    else{
        coolDownCount.innerText= `retry in : ${secondsCoolDown} seconds`
    }
    secondsCoolDown--;
}


function disableForm(){
    var inpInFormArr=factoryForm.getElementsByTagName("input")
    for (let i = 0; i < inpInFormArr.length; i++) {
        inpInFormArr[i].disabled=true
    }
    factoryBtn.disabled=true
}

function enableForm(){
    var inpInFormArr=factoryForm.getElementsByTagName("input")
    for (let i = 0; i < inpInFormArr.length; i++) {
        inpInFormArr[i].disabled=false
    }
    factoryBtn.disabled=false
}

mainTitle.innerHTML=`<h1 >Welcome Factory worker</h1> <h2 id="clockDiv"></h2>`

setInterval(printClockTime,1000)
