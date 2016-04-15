function loadJSON(e, t, n) {
    var a = new XMLHttpRequest;
    a.onreadystatechange = function() {
        a.readyState === XMLHttpRequest.DONE && (200 === a.status ? t && t(JSON.parse(a.responseText)) : n && n(a))
    }, a.open("GET", e, !0), a.send()
}
//
getSomeJson = function() {
        loadJSON('users.json',
            function(data) {
                if (data == null) {
                    redirect();
                }
                //console.log(data);
                var d, i;
                for (i = 0; i < data.length; i++) {
                    d = data[i];
                    document.getElementById('userlist').innerHTML += '<li>' + d.first_name + "</li>";
                }
            },
            function(xhr) {
                console.error(xhr);
            }
        );
    }
getSomeJson('users.json');
