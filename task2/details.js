$(document).ready(function () {
    var contacts=[];
    function addContacts(name,phone){
        contacts.push({name:name,phone:phone});
    }
    function displayContacts(){
        $('#contact-details').html('')
            for (var i=0;i<contacts.length;i++){
                var contact=contacts[i];
                var listItem = $("<tr><td>" + contact.name + "</td><td>" + contact.phone + "</td><td>" +
                ' <button class="edit"><i class="fa fa-edit" style="font-size:24px"></i></button>' + "</td><td>" + '<button class="delete"><i class="fa fa-trash-o" style="font-size:24px"></i></button></td>');
                $('#contact-details').append(listItem);
            }
    }
    $('#save').click(function(){
        var name1=$('#name').val();
        var phone1=$('#phone').val();
        if (/^\d+$/.test(name1) || !/^\d+$/.test(phone1)){
            swal("Please enter full details");
        }else{
            var listItem = $("<tr><td>" + contact.name + "</td><td>" + contact.phone + "</td><td>" +
            ' <button class="edit"><i class="fa fa-edit" style="font-size:24px"></i></button>' + "</td><td>" + '<button class="delete"><i class="fa fa-trash-o" style="font-size:24px"></i></button></td>');
            $('#contact-details').append(listItem);
        }
    })
   
    $("#contact-details").on("click", ".delete", function() {
        $(this).closest("tr").remove();
     });
  

// $('delete').click(function(){
//     $(this).remove();
//     return false;
// });


})