
$(document).ready(function () {
    // get the value of input  box on the button click/
    $('#sub_button').on('click', function () {
        let store_name_value = $('#username').val();
        let name_regexp = /^[a-zA-z]{3,50}$/;
        if (store_name_value == '') {
            $('#name_error').text("Please Enter Your Name");
            $('#name_error').css('color', '#e74c3c');
            $('#username').focus();
            return false;
        }
        if (store_name_value.length < 3) {
            $('#name_error').text("Please Enter Correct Name");
            $('#name_error').css('color', '#ed4c67');
            $('#username').focus();
            return false;
        }
        if (!store_name_value.match(name_regexp)) {
            $('#name_error').text("Please Enter Correct Name");
            $('#name_error').css('color', '#co392b');
            $('#username').focus();
            return false;
        }
    });
});


$("#passcheck").hide();
let passwordError = true;
$("#password").keyup(function () {
    validatePassword();
});
function validatePassword() {
    let passwordValue = $("#password").val();
    if (passwordValue.length == "") {
        $("#passcheck").show();
        passwordError = false;
        return false;
    }
    if (passwordValue.length < 3 || passwordValue.length > 10) {
        $("#passcheck").show();
        $("#passcheck").html(
            "**length of your password must be between 3 and 10"
        );
        $("#passcheck").css("color", "red");
        passwordError = false;
        return false;
    } else {
        $("#passcheck").hide();
    }
}



$("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#conpassword").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#conpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Password didn't Match");
            $("#conpasscheck").css("color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $("#conpasscheck").hide();
        }
    }


    $("#submitbtn").click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        if (
            usernameError == true &&
            passwordError == true &&
            confirmPasswordError == true &&
            emailError == true
        ) {
            return true;
        } else {
            return false;
        }
    })