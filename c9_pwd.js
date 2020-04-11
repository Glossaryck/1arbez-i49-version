    function checkPswd() {
        var confirmPassword = "4720";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="c10.html";
        }
        else{
            window.alert("Password không đúng, vui lòng thử lại!");
        }
    }