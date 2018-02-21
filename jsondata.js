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