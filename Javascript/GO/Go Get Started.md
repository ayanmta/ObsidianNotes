**Note:** In Go, any executable code belongs to the `main` package.

#### Hello world in go 

```go
package main
import("fmt")

func main(){
fmt.println("Hello world")
}

```

### Go Statements:
* Hitting the Enter key adds "`;`" to the end of the line implicitly (does not show up in the source code).
* The left curly bracket `{` cannot come at the start of a line.


### Go Variable Types:
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