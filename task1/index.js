$(document).ready(function () {
    function validateName() {
        var name1 = $("#name").val();
        if (name1 == '') {
            $("#error_name").text("");
            return false;
        }
        if(/\d/.test(name1))  {
            $("#error_name").show();
            $("#error_name").text("Name should not contain numbers.");
            $("#error_name").css("color", "red");
            return false;
        }
        if (name1.length < 3 ) {
            $("#error_name").show();
            $("#error_name").text("Name should have a minimum of 3 letters");
            $("#error_name").css("color", "red");
                return false;
        } else {
            $("#error_name").text("");
                return true;
            }  
    }

    function validateEmail() {
        var email1 = $("#email").val();
        var emailregexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email1== '') {
            $("#error_name").text("");
            return false;
        }
        if (!emailregexp.test(email1)) {
            $("#error_email").show();
            $("#error_email").text("Email is not valid");
            $("#error_email").css("color", "red");
            return false;
        } else {
            $("#error_email").text("");
            return true;
        }
    }

    function validateAddress() {
        var address1= $("#address").val();
        if (address1== '') {
            $("#error_name").text("");
            return false;
        }if (address1.length<10){
            $("#error_address").show();
            $("#error_address").text("Address must contain atleast 10 numbers");
            $("#error_address").css("color", "red");
            return false;
        }else {
            $("#error_address").text("");
            return true;
        }
    }

    function validateDob() {
        var dob1= $("#dob").val();
        if (dob1== '') {
            $("#error_name").text("");
            return false;
        }else {
            $("#error_dob").text("");
            return true;
        }
    }

    function validateAge() {
        var today = new Date();
        var birthDate = new Date($('#dob').val());
        var age = today.getFullYear() - birthDate.getFullYear();
        var month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age >= 18) {
            $('#error_age').text('');
            $('#age').val(age);
        } else {
            $('#age').text('');
            $('#error_age').text('Age is less than 18 you cant signup');
            $("#error_age").css("color", "red");
            return false
        }
    }

    function validateGender() {
        var selectedgender = $('input[type=radio][name="gender"]:checked').length==0;
        if (selectedgender) {
            return false;
        }else {
            return true;
        }
    }

    function CheckPassword(password1){
        var passwordval = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
        return passwordval.test(password1)
    }

    $('#pwd').on('input',function(){
        var password1 = $(this).val();
        var confirmpassword = $('#confirmpwd').val();

        if(CheckPassword(password1)|| password1===''){
            $('#error_password').text('')
        }
        else{
            $('#error_password').text('Password Must contain at least one number, one uppercase, lowercase letter, special characters, and at least 8 or more characters.')
            $("#error_password").css("color", "red");
        }
        if (password1 === confirmpassword || confirmpassword ==='')
        {
            $('#error_confirmpwd').text('');
        }
        else
        {
            $('#error_confirmpwd').text('Passwords do not match');
            $("#error_confirmpwd").css("color", "red");
        }  
    });

    $('#pwd').on('cut copy paste',function(event){
        event.preventDefault();
    });

    $('#confirmpwd').on('input',function(){
        var confirmpassword = $(this).val();
        var password = $('#pwd').val();
        if (confirmpassword === password || confirmpassword ==='')
        {
            $('#error_confirmpwd').text('');
        }
        else
        {
            $('#error_confirmpwd').text('Passwords do not match');
            $("#error_confirmpwd").css("color", "red");
        }

    });

    $('#confirmpwd').on('cut copy paste',function(event){
        event.preventDefault();
    });

    $("#toggler").click(function () {
        var passwordField = $("#pwd");
        var currentType = passwordField.prop("type");
        passwordField.prop("type", currentType === "password" ? "text" : "password");
    });

    $("#confirmtoggler").click(function () {
        var passwordField = $("#confirmpwd");
        var currentType = passwordField.prop("type");
        passwordField.prop("type", currentType === "password" ? "text" : "password");
    });

    $('#name').on('input', validateName);
    $('#email').on('input', validateEmail);
    $('#address').on('input', validateAddress);
    $("#dob").change(validateAge);
    $('#gender').on('click',validateGender);

    $('#signup-form').submit(function (event) {
        event.preventDefault();
        validateName();
        validateEmail();
        validateAddress();
        validateDob();
        validateGender();
        var password=$("#pwd").val()
        var confirm=$('#confirmpwd').val()
        
        
        if(validateName() && validateEmail() && validateAddress() && validateDob() && validateGender()  && CheckPassword(password) &&
        confirm === password ){
            window.location.href = 'https://www.cybrosys.com';
        }else{
            swal("Please enter full details");
    }    
        
})
}); 




