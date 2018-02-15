function validate() {
    if (document.registration.fname.value == "") {
        alert("Please provide your First Name!");
        document.registration.fname.focus();
        return false;
    }

    var email = document.registration.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.registration.email.focus();
        return false;
    }

    if (document.registration.email.value != document.registration.reemail.value) {
        alert("email id should be same")
        document.registration.reemail.focus();
        return false;
    }

    if ((registration.sex[0].checked == false) && (registration.sex[1].checked == false)) {
        alert("Please select Male or Female");
        return false;
    }

    if (document.registration.phone.value == "" ||
        isNaN(document.registration.phone.value) ||
        document.registration.phone.value.length != 10) {
        alert("Please provide valid  Mobile number");
        document.registration.phone.focus();
        return false;
    }

    return (true);
}
