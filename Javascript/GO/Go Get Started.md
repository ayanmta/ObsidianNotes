**Note:** In [[Go]], any executable code belongs to the `main` package.

#### Hello world in go 

```go
package main
import("fmt")

func main(){
fmt.println("Hello world")
}

```

### [[Go]] Statements:
* Hitting the Enter key adds "`;`" to the end of the line implicitly (does not show up in the source code).
* The left curly bracket `{` cannot come at the start of a line.


### [[Go]] Variable Types:
* ##### Declaring (Creating) Variables:
  1. with `var` keyword followed by variable name and type 
   ==syntax:
   ```go
   var variableName type = value
   //**Note:** You always have to specify either `type` or `value` (or both).
```
  2. with `:=` 
      ```go
      variableName := value
```
   * with `:=` compiler decides the `type` of the variable at runtime
   * not possible to declare variable using `:=` without assining value to it 


* ##### Declare Multiple var in single line:
```go
package main  
import ("fmt")

func main(){
	var a,b,c int = 1,2,3 //**Note:** If you use the `type` keyword, it is only possible to declare **one type** of variable per line.
	var x, y = 6, "Hello"  
  e, d := 7, "World!"
	
	fmt.println(a)
	fmt.println(b)
	fmt.println(c)
}
```

* ##### Declare in a block :

```go
package main
import ("fmt")

func main(){
	var (
		a int
		b int = 1
		c string = "hello world"
	)
}
```



### [[Go]] Variable Naming Rules:
 * variable cannot start with a number
     ❌ `var 3age`
 * only alpha-numeric characters and underscores 
     ✅ *(`a-z, A-Z`, `0-9`, and `_` ) are allowed
 * variable name cannot have spaces 
     ❌  `var na me := "foo" `
 * variable name cannot be any Go keywords
