a=True
while(a):
    s=input("enter paranthesis")
    stack = []
    for i in s:
        if i in ['(', '{', '[']:
            stack.append(i)
        elif i == ')' and len(stack) != 0 and stack[-1] == '(':
            stack.pop()
        elif i == '}' and len(stack) != 0 and stack[-1] == '{':
            stack.pop()
        elif i == ']' and len(stack) != 0 and stack[-1] == '[':
            stack.pop()
        elif i in [')','}',']']:
            stack.append(i)
    
    if stack==[]:
        print("true")
    else:
        print("false")

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





























