 $(document).ready(function(){
  var input = $('#num');
  
  $(".clc").click(function(){
      $(".calc-display").val($(".calc-display").val() + $(this).val());
  });

  $('.clear').click(function(){
      input.val('');
  });

  $('.equal').click(function(){ 
      var exp = input.val();
      var numbers = exp.split(/[-+*/]/);
      var operators = exp.split(/[0-9.]+/).filter(Boolean);
      
      for (var i = 0; i < numbers.length; i++) {
          var parts = numbers[i].split('.');
          if (parts.length > 2) { 
              var integerPart = parts.shift(); 
              var decimalPart = parts.join(''); 
              numbers[i] = integerPart + '.' + decimalPart; 
          }
      }

      var newexp = numbers[0];
      for (var i = 0; i < operators.length; i++) {
          newexp += operators[i] + numbers[i+1];
      }

      var result = eval(newexp);
      input.val(result);
  });
 });