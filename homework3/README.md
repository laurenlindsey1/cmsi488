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

#### h. !!x

Not a compile time error

### 2. State scope rules that would have caused them:

#### a. 3

#### a. 5

Scope is whole block (like JavaScript let or const), or the whole function (like JavaScript var)

#### b. undefined NaN

???
MIGHT BE ADDING UNDEFINED/NAN TO 2 AND THAT BLOWS UP? WHATS THE SCOPE THEN maybe function scope? (ada or lua)?

#### c. Error on line 3: x is not declared

The scope of the local x is the whole function body!

#### d. 75354253672

#### d. 75354253674

ADDRESS? DON’T KNOW IF IT WOULD BE SCOPE
GET THIS SHIT FROM ACCESSING IT BEFORE YOU DECLARE IT + 2 WHICH GETS YOU THE SECOND LINE FUNCTION BODY WOULD BE THE SCOPE C/C++ FOR ADDRESSING

#### e. 3

#### e. -23482937128

3 IS OKAY BUT THE SECOND ONE IS REDECLARED? EXTENSION OF THAT CANT ACCESS BEFORE DECLARING IT

#### f. Error on line 4: x used in its own declaration

JAVA VERSION CANT REDECLARE A VARIABLE DECLARED EARLIER IN THE SCOPE

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