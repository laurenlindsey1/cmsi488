# Problem 3

### a. What can you say about the relative precedences of and and or?
"and" and "or" exist on the same grammar line in Exp, therefore they have the same precedence. 
### b. If possible, give an AST for the expression X and Y or Z. (Assume, of course, that an Exp5 can lead to identifiers and numbers, etc.) If this is not possible, prove that it is not possible.
Start with Exp, and choose Exp1 ("and" Exp1)*. Now you must generate "Y or Z" out of Exp1. However, the way this grammar is written will only allow for Exp1 to access Exp2, Exp3, Exp4, and Exp5. Since Exp5 only leads to identifiers and numbers, it seems that there is no way to get back to Exp (the statement we would need so that we can access the "or identifier"), from Exp1. Similarly, if we started from Exp and chose Exp1 ("or" Exp1)*, there would be no way to "go back" to Exp from Exp1 to access the "and" identifier.
### c. What are the associativities of the additive operators? The relational operators?
Both the additive and relational operators are right associative because both parenthesis are in the format of Exp (addop/mulop Exp).
### d. Is the not operator right associative? Why or why not?
The not operator is right associative.
### TODO: explain why
### e. Why do you think the negation operator was given a lower precedence than multiplication?
Having the negation and the multiplication operators have difference precedences will lead to a lack of ambiguity, since a multiplication operation with a negative number will be computed, then negated if neccessary. If both values were negative, the value would be computed without considering negatives, and then later the negation operator would negate twice, resulting in a positive value. If one number was positive and the other negative, the numbers would again be computed without regard to sign, and then negated once so that the product has the correct sign.
### TODO: explain why this would not work if the negation operator was given a higher precedence than multiplication
### f. Give an abstract syntax tree for the expression -8 * 5.
### g. Suppose the grammar were changed by dropping the negation from Exp2 and adding - Exp5 to Exp4. Give the abstract syntax tree for the expression -8 * 5 according to the new grammar.
