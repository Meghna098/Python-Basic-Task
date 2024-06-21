$(function() {
    function ValidateName(){
        var name = $("#Name").val();
        if (name.length < 3 || /\d/.test(name)) {
            $("#error_name").text("Name should have a minimum of 3 letters and should not contain numbers.");
                return false;
        } else {
        $("#error_name").text("");
            return true;
        }
    }

    function ValidateEmail(){
        var email = $("#Name").val();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            $("#email").val("");
            $("#error_email").text("Email is not valid");
            return false;
        } else {
            return true;
        }
    }

    function validatePassword() {
        var password = $("#password").val();
        var confirmPassword = $("#confpassword").val();
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-]).{8,}$/;
        if (password !== confirmPassword) {
            $("#confpassword").val("");
            $("#error_confpassword").text("Password and Confirm Password do not match.");
            return false;
        } else {
            $("#error_confpassword").text("");
            return true;
        }
    }

    $("#dob").on("change",function () {
        var start_date = new Date($("#dob").val());
        var date = new Date();
        var end_date = new Date(start_date);
       end_date.setFullYear(date.getFullYear()-start_date.getFullYear());
        $("#age").val(end_date.getFullYear());
    });
    
    $("#toggler").on("click",function () {
        var passwordField = $("#password");
        var type = passwordField.attr("type") === "password" ? "text" : "password";
        passwordField.attr("type", type);
    });

    $("form").on("submit",function (event) {
        if (!validateName() || !validateEmail() || !validatePassword()) {
            event.preventDefault();
        } else {
            window.location.href = "http://www.cybrosys.com";
        }
    });

});