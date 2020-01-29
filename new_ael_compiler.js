// An interpreter for Ael.
//
// Example usage:
// THAT'S THE PROGRAM WITH ITS INPUT AND ITS OUTPUT 
//   $ node ael-interpreter.js 'print 2; x = 22; print 1 + x / 2;'
//   2
//   12


// use ohm js library 
const ohm = require('ohm-js');

// uses grammar module can take multiline string representing a grammar 

// the -- things on the right hand side are not comments later on you will see this come up as Statement_assign for example
// you need this to tag them dont need to tag the base cases
const aelGrammar = ohm.grammar(`Ael {
  Program = (Statement ";")+
  Statement = id "=" Exp       --assign
            | print Exp        --print
  Exp       = Exp "+" Term     --plus
            | Exp "-" Term     --minus
            | Term
  Term      = Term "*" Factor  --times
            | Term "/" Factor  --divide
            | Factor
  Factor    = "-" Primary      --negate
            | Primary
  Exponentiated = Primary "**" Primary --exponentiation               
  Primary   = "(" Exp ")"      --parens
            | number
            | id
  number    = digit+
  print     = "print" ~alnum
  id        = ~print letter alnum*
}`);

const memory = new Map();

// This language is so simple, we don't need an AST.
// abstract syntax tree below 
const semantics = aelGrammar.createSemantics().addOperation('exec', {
  Program(ss, _semicolons) { ss.exec(); },
  Statement_assign(i, _eq, e) { memory.set(i.sourceString, e.eval()); },
  Statement_print(_, e) { console.log(e.eval()); },
}).addOperation('eval', {
  Exp_plus(e, _op, t) { return e.eval() + t.eval(); }, // need to include but just include you can ignore them with leading _ 
  Exp_minus(e, _op, t) { return e.eval() - t.eval(); },
  Term_times(t, _op, f) { return t.eval() * f.eval(); },
  Term_divide(t, _op, f) { return t.eval() / f.eval(); },
  Factor_negate(_op, p) { return -p.eval(); },
  Primary_parens(_open, e, _close) { return e.eval(); },
  Exponentiated_exponentiation(t, _op, f){return t.eval() ** f.value()},
  number(_chars) { return +this.sourceString; }, // ohm means this is the number that is being created + turns a string to a number 
  id(_firstChar, _restChars) { 
      if(!memory.has(this.sourceString)) {
          throw new Error (`${this.sourceString} has not been defined`);
      }
      return memory.get(this.sourceString);
    },
}); // this second parameter is an object that is passed in and you dont need properties key value pairs because function syntax
// exp_plus : function (shit) {}
// this is an object with 8 functions as it parses it fires each of the functions off its like post order traversal without ordering yourself


// parse by checking the match function otherwise throw an error 
const match = aelGrammar.match(process.argv[2]);
if (match.succeeded()) {
  semantics(match).exec();
} else {
  console.error(match.message);
  process.exitCode = 1;
}

// npm init
// npm install ohm.js

// $ node ael-interpreter.js '8 *    (22   - 3) / 4'
// 38
// $ node ael-interpreter.js '8 * (22 ^  - 3) / 4'
// Line 1, col 9:
// > 1 | 8 * (22 ^  - 3) / 4
//               ^
// Expected ")"
// $ node ael-interpreter.js '8 ('
// Line 1, col 3:
// > 1 | 8 (
//         ^
// Expected end of input

// get third party library from npm 