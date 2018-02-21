function validate() {

    if (nameValidate() &&
        emailValidate() &&
        reEmailValidate() &&
        genderCheck() &&
        mobileValidate()) {
        return true;
    }
    else {
        return false;
    }
}

function nameValidate() {
    if (document.registration.fname.value == "") {
        document.getElementById("name1").innerHTML = "Please provide your First Name";
        document.getElementById("name1").style.color = "red"
        document.registration.fname.focus();
        return false;
    }
    else {
        document.getElementById("name1").innerHTML = "";
        return true;
    }
}


function emailValidate() {
    var email = document.registration.email.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        document.getElementById("email1").innerHTML = "Please enter valid email ID";
        document.getElementById("email1").style.color = "red";
        document.registration.email.focus();
        return false;
    }
    else {
        document.getElementById("email1").innerHTML = "";
        return true;
    }
}

function reEmailValidate() {
    if (document.registration.reemail.value != document.registration.email.value) {
        document.getElementById("reemail1").innerHTML = "email id should be same ";
        document.getElementById("reemail1").style.color = "red";
        document.registration.reemail.focus();
        return false;
    }
    else {
        document.getElementById("reemail1").innerHTML = "";
        return true;
    }
}

function genderCheck() {
    if ((registration.sex[0].checked == false) && (registration.sex[1].checked == false)) {

        document.getElementById("gender").innerHTML = "please select gender ";
        document.getElementById("gender").style.color = "red";
        return false;
    }
    else {
        document.getElementById("gender").innerHTML = "";
        return true;
    }
}

function mobileValidate() {
    if (isNaN(document.registration.phone.value) || document.registration.phone.value.length != 10) {
        document.getElementById("phone1").innerHTML = "enter 10 digit mobile number ";
        document.getElementById("phone1").style.color = "red";
        return false;
    }
    else {
        document.getElementById("phone1").innerHTML = "";
        return true;
    }
}


function getInfo() {
    $.ajax({
        url: 'https://reqres.in/api/users/10',
        dataType: 'json',
        async: false,
        type: "GET",
        success: function (data) {
            var row = $('<tr><td>' + data.data.id + '</td><td>' + data.data.first_name + '</td><td>' + data.data.last_name + '</td><td><img src="' + data.data.avatar  + '" height="50" width="50"></td></tr>');
            $('#myTable').append(row);
        },
        error: function (data) {
            console.log(data);
        }
    });
}

getInfo();

// function getInfo() {
//     $.ajax({
//         type: 'GET',
//         url: 'https://reqres.in/api/users/10',
//         async: false,
//         dataType: 'json',
//         success: function (data) {
//             var stringData = JSON.stringify(data);
//             var myData = JSON.parse(stringData);
//             document.getElementById("myid").innerHTML = myData.data.id;
//             document.getElementById("fname").innerHTML = myData.data.first_name;
//             document.getElementById("lname").innerHTML = myData.data.last_name;
//             document.getElementById("avatar").innerHTML = myData.data.avatar;
//         },
//         failure: function (data) {
//
//             console.error(data)
//         }
//     })
//     ;
// }




