import random
system=str(random.randint(1000,9999))
print(system)
a=True
while(a):
    user=str(input("enter a no"))
    rabbit=0
    tortoise=0

    if(len(str(user))!=4 or user.isalpha()):
        print("invalid input")
    elif(user==system):
        print("Winner")

    else:
        for i in range(len(str(user))):
            if(user[i]==system[i]):
                rabbit+=1
            elif(user[i] in system):
                tortoise+=1

    if(rabbit>=1):
        print("you got",rabbit,"rabbit")
    if(tortoise>=1):
        print("you got",tortoise,"tortoise")
    
    while(True):
        c= input("Do you want to continue?")
        if(c=='y'): 
            break
        if(c=='n'):
            a=False
            break   
        else:
            print("Invalid input.Please enter y/n")
            continue
    
    if(user==system):
        system=str(random.randint(1000,9999))
        print(system)
    
        
