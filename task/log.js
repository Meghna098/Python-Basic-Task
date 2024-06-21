$(document).ready(function(){
    var contacts=[];

    function isPhoneExists(phone){
        return contacts.some(function(contact){
            return contact.phone === phone;
        });
    }

    function addContacts(name,phone){
        contacts.push({name:name,phone:phone});
    }

    function displayContacts(){

        $('.contact-lists').html('')
        
            for (var i=0;i<contacts.length;i++){
                var contact=contacts[i];
                var listItem = $('<li>' + contact.name + ' - ' + contact.phone + 
                ' <button class="edit">Edit</button> <button class="delete">Delete</button></li>');
                $('.contact-lists').append(listItem);
            }
        }

        $('#save').click(function(){
            var name=$('#name').val();
            var phone=$('#phone').val();

            if(name && phone){
                if (isPhoneExists(phone)){
                    alert('Phone number already exists');
                    return false;
                }else if (/^\d+$/.test(name) || !/^\d+$/.test(phone)){
                    alert('Give correct input.')

                }else{
                    addContacts(name,phone);
                    displayContacts()
                    return false;
                }
            }

        });

        $(".contact-lists").on('click', '.delete', function() {
            var index = $(this).parent().index();
            contacts.splice(index, 1);
            displayContacts();
        });
    
        $(".contact-lists").on('click','.edit', function() {
            if (isPhoneExists(phone)){
                alert('Phone number already exists')
            }else{

                var index=$(this).closest('li').index();
                var contact=contacts[index];
                displayContacts();

                var updatedName=prompt('Edit Name:',contact.name);
                var updatedPhone=prompt('Edit Phone:',contact.phone);

                if(updatedName !== null && updatedPhone !== null){
                    if (updatedPhone !== contact.phone && isPhoneExists(updatedPhone, index)){
                        alert('Phone number already exists.')
                    }else{
                        contacts[index]=({name:updatedName,phone:updatedPhone});
                        displayContacts();
                    }
                    
                }
            }
        });

});