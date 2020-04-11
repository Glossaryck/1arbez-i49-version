    function checkPswd() {
        var confirmPassword = "i49galday";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="c_pre6.html";
        }
        else{
            window.alert("Password không đúng, vui lòng thử lại!");
        }
    }