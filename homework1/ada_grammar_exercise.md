# Problem 3

### a. What can you say about the relative precedences of and and or?
"and" and "or" are non-comparable since the statement x and y or z is not legal according to this grammar.
### b. If possible, give an AST for the expression X and Y or Z. (Assume, of course, that an Exp5 can lead to identifiers and numbers, etc.) If this is not possible, prove that it is not possible.
Start with Exp, and choose Exp1 ("and" Exp1)*. Now you must generate "Y or Z" out of Exp1. However, the way this grammar is written will only allow for Exp1 to access Exp2, Exp3, Exp4, and Exp5. Since Exp5 only leads to identifiers and numbers, it seems that there is no way to get back to Exp (the statement we would need so that we can access the "or identifier"), from Exp1. Similarly, if we started from Exp and chose Exp1 ("or" Exp1)*, there would be no way to "go back" to Exp from Exp1 to access the "and" identifier.
### c. What are the associativities of the additive operators? The relational operators?
Nothing can be said about the associativity of the additive operator from the grammar. Relational operator is non-associative since Exp2 cannot generate relops. For example, Exp1 can generate Exp2 or Exp2 relop Exp2, but Exp2 cannot generate any more relops.
### d. Is the not operator right associative? Why or why not?
Nothing can be said about the associativity of the not operator since associativity cannot be applied to unary operators.
### e. Why do you think the negation operator was given a lower precedence than multiplication?
Although the precedence of negation in comparison to multiplication does not affect the answer produced, giving negation higher precedence would allow the programmer to write x*-y which would lead to their expectation being allowed to write x+-y and x--y which would be incorrect. Being able to write x--y would be understood by the compiler as x and then a comment containing the string y instead of x-(-y). This grammar forces the programmer to put parentheses around the negation when doing math operations.
### f. Give an abstract syntax tree for the expression -8 * 5.
### g. Suppose the grammar were changed by dropping the negation from Exp2 and adding - Exp5 to Exp4. Give the abstract syntax tree for the expression -8 * 5 according to the new grammar.
