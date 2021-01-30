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

