while(True):
    password=input("enter password")
    low,up,digit,special=0,0,0,0
    symbol=['!','@','#','$','%','^','&','_']

    if((len(password)<8 or len(password)>12)):
        print('length should be between 8 and 12')
        continue
    
    for i in password:
        if(i.islower()):
            low+=1
        if(i.isupper()):
            up+=1
        if(i.isdigit()):
            digit+=1
        if i in symbol:
            special+=1
   
    if ' ' in password:
        print("Spaces between is not allowed")
    if(low<1):
        print('Password should have at least one lowercase letter') 
    if(up<1):
        print('Password should have at least one uppercase letter')
    if(digit<1):
        print('Password should have at least one numeral')
    if(special<1):
        print('Password should have at least one special symbol')
    if(low>=1 and up>=1 and digit>=1 and special>=1):
        print("valid") 
        break


