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


function getInfo() {
    $.ajax({
        type: 'GET',
        url: 'https://reqres.in/api/users/10',
        async: false,
        dataType: 'json',
        success: function (data) {
            var stringData = JSON.stringify(data);
            var myData = JSON.parse(stringData);
            document.getElementById("#myid").innerHTML = myData.data.id;
            document.getElementById("#fname").innerHTML = myData.data.first_name;
            document.getElementById("#lname").innerHTML = myData.data.last_name;
            document.getElementById("#avatar").innerHTML = myData.data.avatar;
        },
        failure: function (data) {

            console.error(data)
        }
    })
    ;
}

getInfo()



