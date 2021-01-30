1. The value of i will be printed because i is a var variable, which means it's function-scoped even if declared inside a for loop block.
2. The value of discountedPrice will be printed because it's a var variable, which means it's function-scoped even if declared inside a for loop block.
3. The value of finalPrice will be printed becuase it's a var variable and function-scoped.
4. The function will return `[50,100,150]` because for each value in an array, the function multiplies the value by the percentage of its value after applying a discount.

5. There will be a ReferenceError because i is a let variable, meaning it's not visible through blocks (in this case, the for loop).
6. There will be a ReferenceError because discountedPrice is a let variable, meaning it's not visible through blocks (in this case, the for loop).
7. There value of finalPrice will be printed because even though it's a let variable, it is declared inside the function scope.
8. The function will return `[50,100,150]` because for each value in an array, the function multiplies the value by the percentage of its value after applying a discount.

9. There will be a ReferenceError because i is a let variable, meaning it's not visible through blocks (in this case, the for loop).
10. There will be a ReferenceError because discountedPrice is a const variable, which has the same scope as let variables and is therefore not visible through the for loop block.
11. There will be an error because finalPrice was declared as a const variable but the code inside the for loop is trying to change the primitive value it references.
12. The function will throw an error before returning a value because of the for loop attempting to change const finalPrice.

13-a. `student.name`  
13-b. `student["Grad Year"]`  
13-c. `student.greeting();`  
13-d. `student["Favorite Teacher"]["name"]`  
13-e. `student["courseLoad"][0]`  

14-a. The output is 32 because the '2' gets converted to a string and addition of strings gives "32".
14-b. The output is NaN because you can't subtract something from a string.
14-c. The output is 3 because adding null to 3 gives 3 back.
14-d. The output is '3' because adding null to a string gives the string itself back.
14-e. The output is 4 because true is represented with a value of 1.
14-f. The output is 0 because false is represented with a value of 0 and adding null doesn't add anything.
14-g. The output is undefined because any operation with something undefined cannot be defined.
14-h. The output is undefined because any operation with something undefined cannot be defined.

15-a. The output is true because the '2' gets converted to a number and 2 > 1.
15-b. The output is false because '2' is greater than '12' in lexicographical order.
15-c. The output is true because '2' gets converted to a number, which is equal to 2.
15-d. The output is false because the types of 2 and '2' are different.
15-e. The output is false because true is represented by 1 and 1 != 2.
15-f. The output is true because Boolean(2) becomes true since 2 is not considered an "empty value".

16. The == operator checks if the two operands are equal after different types have been converted to numbers, while the === operator checks if two operands are equal and of the same type.

17. 'How are you?' is printed because 2 == true evaluates to false (since true is 1), and then 2 gets evaluated as a Boolean (and Boolean(2) is true).

18. see js file

19. The result will be `[6,8,10]` because modifyArray will call doSomething which will call a function that returns x\*2. So for input `[1,2,3]`, modifyArray calls doSomething on each element of the array, and doSomething calls x\*2 on 2 + the value of the element.

20. see js file

21. The output is 
    ``` 1  
    3
    4   
    2 ```


