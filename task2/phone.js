$(document).ready(function () {
    var details = [];

    function addDetails(name, phone) {
        details.push({ name: name, phone: phone });
    }

    function displayDetails() {
        $('#contact-details').html('')
        for (var i = 0; i < details.length; i++) {
            var contact = details[i];
            var listItem = $("<tr><td>" + contact.name + "</td><td>" + contact.phone + "</td><td>" +
                ' <button class="edit"><i class="fa fa-edit" style="font-size:24px"></i></button>' +
                ' <button class="delete"><i class="fa fa-trash-o" style="font-size:24px"></i></button></td></tr>');
            $('#contact-details').append(listItem);
        }
    }

    function PhoneExists(phone) {
        return details.some(function (contact) {
            return contact.phone === phone;
        });
    }

    $('#save').click(function () {
        var name2 = $('#name').val();
        var phone2 = $('#phone').val();

        if (!name2.trim() || /^\d+$/.test(name2)) {
            swal("Please enter a valid name");
        }else if (!phone2.trim() || !/^\d+$/.test(phone2)|| phone2.length!=10) {
            swal("Please enter a valid phone number");
        }else if (PhoneExists(phone2)) {
            swal("This phone number already exists");
        } else {
            addDetails(name2, phone2);
            displayDetails();

            $('#name').val('');
            $('#phone').val('');
            return true;
        }
    });

    $("#contact-details").on("click", ".delete", function () {
        var index = $(this).closest('tr').index();
        details.splice(index, 1);
        displayDetails();
    });

   
    $("#contact-details").on("click", ".edit", function () {
        var index = $(this).closest('tr').index();
        var contact = details[index];

        var updatedName = prompt('Edit Name:', contact.name);
        var updatedPhone = prompt('Edit Phone:', contact.phone);

        if (updatedName !== null && updatedPhone !== null) {
            if (!updatedName.trim() || /\d/.test(updatedName)) {
                swal("Please enter a valid name");
            } else if (!updatedPhone.trim() || !/^\d+$/.test(updatedPhone)|| updatedPhone.length!=10) {
                swal("Please enter a valid phone number");
            } else if (PhoneExists(updatedPhone)) {
                swal("This phone number already exists");
            } 
            else {
                details[index] = { name: updatedName, phone: updatedPhone };
                displayDetails();
            }
        }
    });
});
