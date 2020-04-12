# Homework #3

### 1. Classify the following as a syntax error, semantic error, or not a compile time error. In the case where code is given, assume all identifiers are properly declared and in scope. All items refer to the Java language.

#### a. x+++-y

Not a compile time error

#### b. x---+y

Not a compile time error

#### c. incrementing a read-only variable

Semantic error

#### d. accessing a private field in another class

Semantic error

#### e. Using an uninitialized variable

Semantic error

#### f. Dereferencing a null reference

Not a compile time error

#### g. null instanceof C
Not a compile time error

#### h. !!x

Not a compile time error

### 2. State scope rules that would have caused them:
```JavaScript
var x = 3;          // line 1
function f() {      // line 2
  print(x);         // line 3
  var x = x + 2;    // line 4
  print(x);         // line 5
}                   // line 6
f();                // line 7
```

#### a.  3  5
This would happen when the scope begins after the line of code declaring it has completed. When printing on line 3, since line 4 appears after, the outer scope (nonlocal value) of x is used, 3.  After line 4 finishes, the inner x value, 5,  is now used in the print statement on line 5. 

#### b. `undefined` `NaN`
Something like this could happen when the scope of the x declaration on line 3 is the function in which it is declared. Thus, when entering new function f, x becomes `undefined` since the program cannot "see" the declaration outside of the function. Then, on line 4, the program is attempting to add 2 to `undefined`, which will result in `NaN` when printed on line 6. This is an example of scope similar to JavaScript `var`.

#### c. `Error on line 3: x is not declared`
This is an example of scope similar to that of JavaScript `let`. x on line 1 is declared in the outer scope, and once the function f begins, so does the Temporal Dead Zone. Thus, attempting to access x on line 3 will throw the error that x cannot be accessed since it has not been initialized nor declared. 

#### d. 75354253672  75354253674
As usual, the declaration on line 1 is the outer x scope, and function f uses the inner x declared on line 4. When getting printed on line 3, x is bound to its memory address, but since there is no declaration by line 3, garbage (75354253672) is printed out, and stored as x. On line 4, x now becomes whatever the garbage printed + 2 (75354253672 + 2 = 75354253674).

#### e. 3  -23482937128

This is an example of the scope starting at the point of declaration, but does not wait for the declaration to be finished. On line 3, the x printed out is still the x from the outer scope on line 1, since no other x has been declared inside of the function. Because of the declaration not needing to be complete in scoping, the identifier can be used right away. In line 4: `var x = x + 2;`, the x in `var x` is the x that is going to be used in the declaration. Since that inner x has not been declared, it contains garbage. Thus the inner x value is whatever garbage + 2. The print statement on line 5 then refers to the inner x declared on line 4.

#### f. `Error on line 4: x used in its own declaration`

For this, the scope rule can either be the whole function or the point of declaration, but the language and the compiler itself will not allow for a variable to be used in its own declaration. This code will not print anything out, since this error will cause program failure at compile time. 

### 3. Describe the semantics of `private` in Ruby and C#. 
Generally speaking, in C#, `private` pertains to and entire class and all of the instances of that class, where in Ruby, `private` only refers to the object. One could say that `private` in C# is class-based, where `private` in Ruby is object-based.

Below is an example of using `private` in C#:

```C#
using System;

public class C
{
    private int x;
    
    public C(int x) 
    { 
        this.x = x;
    } 
    public void display(C c)
    {
        Console.WriteLine("x is: " + c.x);
    }
    public static void Main(String[] args) 
    { 
        C c1 = new C(3);
        c1.display(c1); //output 3
        C c2 = new C(5); 
        c2.display(c2); //output 5
        c2.display(c1); //output 3
    } 
}
```

Notice that class C takes in a `private` integer x, and there are two instances of class C, c1 and c2. In C#, you are able to call a method on c2, but pass in c1 as a parameter; thus returning the `private` x value of c1. In C#, the boundary of `private` pertains to the class, since instance of a class are able to access other `private` variables in other instances of the same class. C# is `private` to the class, and not to the specific object. 

If you were to attempt something similar in Ruby, you would not be able to. Ruby is `private` to objects, so being in the same class does not mean instances can access other instances `private` variables. 

Below is an example of using `private` in Ruby:
``` Ruby
class C  
  def initialize(x)  
    @x = x  
  end  
  
  def function  
    puts "the value of x is #{@x} "  
  end  
end  

c1 = C.new('3') 
c1.function # output 3
c2 = C.new('5')  
c2.function # output 5
```

Ruby has what is known as recievers, or the object on which the method is called. Since functions in Ruby do not take in parameters, the program can only call a function on the object, and cannot mimic behavior in C#, where another instance of a class can call a method and pass in a different instance of a class. 