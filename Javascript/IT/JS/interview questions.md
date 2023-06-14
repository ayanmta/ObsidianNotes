
[[interview questions]]

## Q - what is the difference between let var and const ?

they have diff in terms of Hoisting , Scope, mutability 

### 1.  `let` :
 * can be reassigned ( value can be changed)
 * only accessible within block 
 * not hoisted to the top of scope  
 * if we call them before they are defined they give reference error as they are in temporal deadzone before defining 
 ```javascript
 function exampleLet() { console.log(message); 
 // Error: ReferenceError: Cannot access 'message' before initialization 
 let message = "Hello"; console.log(message);
  // Output: Hello 
  }
   exampleLet();
 
```
### 3.  `var`:
- `var` is the older way of declaring variables in JavaScript, available before ES6.
- Variables declared with `var` are function-scoped, meaning they are accessible within the entire function they are declared in.
- `var` variables can be reassigned, just like `let`.
- `var` variables are hoisted to the top of their scope, which means they can be accessed before they are declared.
``` javascript
			
	function exampleVar() { var counter = 0; if (true) { var counter = 10; console.log(counter); // Output: 10
	 } console.log(counter); // Output: 10 
	 } exampleVar();
	```

### 4. `const`:
- Variables declared with `const` are constant, meaning their values cannot be reassigned once they are defined. However, the immutability only applies to the variable binding, not to the value itself if it is an object or an array.
- The variable is only accessible within the block where it is defined.
- `const` variables are not hoisted to the top of their scope.
```javascript
function exampleConst() { const PI = 3.14159; if (true) { const PI = 3.14; 
 console.log(PI); // Output: 3.14 
} console.log(PI); 
// Output: 3.14159 
 exampleConst();
```


## Q - how to shallow and deep copy object in js ?


### Shallow Copy:
 * creates new obj but properties still refer the original object memory location
 * implies any change in new object will effect the property of the original object 
 *  they share common reference (original - new )



