function ValidateForm(){
var isSuccessful = true;
    var fname =document.forms["contact-form"]["first-name"].value
    var lname =document.forms["contact-form"]["last-name"].value;
    var email =document.forms["contact-form"]["email"].value;
    var subject =document.forms["contact-form"]["subject"].value;
    var message =document.forms["contact-form"][" message"].value;


    if (!fname.match(/^[a-z A-Z]+$/)) {
	isSuccessful = false;
	document.getElementById("fname_error").innerHTML = "Please enter a valid first name";
    }

   if (!lname.match(/^[a-zA-Z]+$/)) {
	isSuccessful = false;
	document.getElementById("lname_error").innerHTML = "Please enter a valid last name";
    }
	
   if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
	isSuccessful = false;
	document.getElementById("email_error").innerHTML = "Please enter a valid email";
    }

if(isSuccessful){
alert("form successfully submitted");
}
return isSuccessful;
}










 