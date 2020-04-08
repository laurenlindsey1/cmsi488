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

### 3. Describe the semantics of private in Ruby and C#. (Hint: they’re quite different.)
In Ruby, the keyword private can only be applied to classes and members cannot be private.
In C#, the keyword private can only be applied to members and classes cannot be private.
