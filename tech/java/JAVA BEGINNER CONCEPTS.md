---
tags:
  - tech
---
[[JAVA BEGINNER CONCEPTS|JAVA BEGINNER CONCEPTS]]

## [[Function OverLoding|Function OverLoding]]:

It happens at compile time, i.e same function name can exist if given different params. 
```java
package com.ayanpractice;  
  
public class overLoading {  
    public static void main(String[] args) {  
    //function overloading happens at compile time  
        func(5);  
    }  
  
  
    static void func(int a){  
        System.out.println(a);  
    }  
    static void func(String b){  
        System.out.println(b);  
    }  
}
```


## [[Variable Length Arguments|Variable Length Arguments]]:

when we donot know how many args to pass, we can use this concept.
[[varargs|varargs]] get internally stored in an array when passed to function.
```java

package com.ayanpractice;  
  
import java.util.Arrays;  
  
public class varArgs {  
    public static void main(String[] args) {  
    //function overloading happens at compile time  
        func(5,67,67,767,67,67,67,67,67,56,56,345,345,345,34534,5);  
    }  
  
  
    static void func(int ...v){  
        System.out.println(Arrays.toString(v));  
    }  
}


//output: [5, 67, 67, 767, 67, 67, 67, 67, 67, 56, 56, 345, 345, 345, 34534, 5]

```
