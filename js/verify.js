// Validation for

function name_validation(text, id) {
    const name_regex = /[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (id != null){
        if (!name_regex.test(text)) {
            document.getElementById(id).style = "border-color: red";
            return true;
        } else {
            document.getElementById(id).style = "";
            return false;
        }
    }
}

function number_validation(text, id) {
    const number_regex = /^\d+$/;

    if (id != null) {
        if (!number_regex.test(text)) {
            document.getElementById(id).style = "border-color: red";
            return true;
        } else {
            document.getElementById(id).style = "";
            return false;
        }
    }
}

function email_validation(text, id) {
    const email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (id != null) {
        if (!email_regex.test(text)) {
            document.getElementById(id).style = "border-color: red";
            return true;
        } else {
            document.getElementById(id).style = "";
            return false;
        }
    }
}

function not_empty_validation(text, id){
    if (id != null) {
        if (text === "") {
            document.getElementById(id).style = "border-color: red";
            return true;
        } else {
            document.getElementById(id).style = "";
            return false;
        }
    }
}

function validate_entries(){
    const first_name = document.getElementById("first-name").value;
    const last_name = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const first_name_valid = name_validation(first_name, "first-name");
    const last_name_valid = name_validation(last_name, "last-name");
    const age_valid = number_validation(age, "age");
    const email_valid = email_validation(email, "email");
    const subject_valid = name_validation(subject, "subject");
    const message_valid = not_empty_validation(message, "message");

    if (first_name_valid && age_valid && last_name_valid && email_valid && subject_valid && message_valid){
        alert("Please ensure your entries are correct");
    }
}

function click_action(){
    console.log("clicked!");
    validate_entries();
}