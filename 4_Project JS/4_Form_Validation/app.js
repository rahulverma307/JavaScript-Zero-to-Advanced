let nameError=document.getElementById("name-error");
let phoneError=document.getElementById("phone-error");
let emailError=document.getElementById("email-error");
let messageError=document.getElementById("message-error");
let submitError=document.getElementById("submit-error");

function validateName(){
    let name=document.getElementById("contact-name").value;
    
    if(name.length == 0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+&/)){
         nameError.innerHTML="Write a full name";
         return false;
    }
       nameError.innerHTML = '<i class="fa-solid fa-check" style="color:#74C0FC;"></i>';

        return true;
    
}

function validatePhone() {
    let phone=document.getElementById("contact-phone").value;
    if(phone.length==0){
        phoneError.innerHTML="Phone no. is required";
        return false;
    }if(phone.length !==10){
        phoneError.innerHTML="Phone no should be 10 digits";
        return false;
    }if(phone.match(/^[0-9]{10}&/)){
         phoneError.innerHTML="Only Digit Please";
        return false
    }
        phoneError.innerHTML = '<i class="fa-regular fa-check" style="color: #74C0FC;"></i>';
         return true;
}

function validateEmail(){
    let Email=document.getElementById("contact-email").value;
    if(Email.length==0){
        emailError.innerHTML="Please Enter Email"
        return false;
    }
    if(Email.match(/^[A-za-z]\._\-[0-9]*[@][A-za-z]*[\.][a-z]{2,4} &/)){
        emailError.innerHTML="Email Invalid"
        return true;
    }
    emailError.innerHTML = '<i class="fa-regular fa-check" style="color: #74C0FC;"></i>';
     return true;
}
function validateMessage(){
    let message=document.getElementById("contact-message").value;
    var required=30;
    var left=required-message.length
    if(left>0){
       messageError.innerHTML=left+'more character required';
       return false;
    }

}
function validateForm(){
    if(!validateName()||!validatePhone()||!validateEmail()||!validateMessage()){
        submitError.innerHTML="Please fix error to submit"
        return false;
    }
}