$(document).ready(function () {
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
}







/*
$(document).ready (function () {  

$("#Name").on("blur", function() {
    if ( $(this).val().match('^[a-zA-Z]{3,16}$') ) {
        alert( "Valid name" );
    } else {
        alert("Invalid name");
    }
    });
    $("#email").blur(function() {
    var email = $(this).val();
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
		msg: "Please enter a valid email address."
    }
    });

    $("#dob").change(function () {
        var start_date = new Date($("#dob").val());
        var date = new Date();
        var end_date = new Date(start_date);
       end_date.setFullYear(date.getFullYear()-start_date.getFullYear());
        $("#age").val(end_date.getFullYear());
    });

    if (password.length < 8) {
        $('.password').after('<span class="error">Password must be at least 8 characters long</span>');
    }

        $('input#submit').click(function(event){
            $("div#errMsg").html("");
            var email = $("input#email").val();
            var confEmail = $("input#confEmail").val();
            
            if(email!="" && confEmail!="") {
                if(email!=confEmail) {
                    $("div#errMsg").css("background-color", "red");
                    $("div#errMsg").html("Confirm email does not match with email");
                }
            } else {
                var errMsg = "<ul>";
                if(email=="")
                    errMsg = errMsg+"<li>Please enter email address</li>";
                if(confEmail=="")
                    errMsg = errMsg+"<li>Please enter confirm email</li>";
                    
                errMsg=errMsg+"</ul>";
                $("div#errMsg").css("background-color", "red");
                $("div#errMsg").html(errMsg);
            }   
        });
    

      $("#basic-form").submit(function(){
        alert("Submitted");
      });
    
});
  


  
<html>
<head>  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>  
<script>  
$(document).ready (function () {  
 $('#basic_form').submit (function (e) {  
    e.preventDefault();  
    var Name = $('#name').val();  
    var email = $('#email').val();  
    var password = $('#password').val();  
var number = $('#number').val();  
  $(".error").remove();  
if (Name.length < 1) {  
      $('#name').after('<span class="error">This field is required</span>');  
    }  
if (number.length < 1) {  
      $('#number').after('<span class="error">This field is required</span>');  
    }  
    if (email.length < 1) {  
      $('#email').after('<span class="error">This field is required</span>');  
    } else {  
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;  
      var validEmail = regEx.test(email);  
      if (!validEmail) {  
        $('#email').after('<span class="error">Enter a valid email</span>');  
      }  
    }  
    if (password.length < 8) {  
      $('#password').after('<span class="error">Password must be at least 8 characters long</span>');  
    }  
  })
});

  </script> 
  </head>
  </html>