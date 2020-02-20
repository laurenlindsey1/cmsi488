// An interpreter for Ael.
//
// Example usage:
// THAT'S THE PROGRAM WITH ITS INPUT AND ITS OUTPUT
//   $ node ael-interpreter.js 'print 2; x = 22; print 1 + x / 2;'
//   2
//   12

const ohm = require('ohm-js');

const aelGrammar = ohm.grammar(`Ael {
  Program = (Statement ";")+
  Statement = id "=" Exp       --assign
            | print Exp        --print
            | while Exp "{" Block "}"  --while
  Block     = Statement+ 
  Exp       = Exp "+" Term     --plus
            | Exp "-" Term     --minus
            | Term
  Term      = Term "*" Factor  --times
            | Term "/" Factor  --divide
            | Factor
  Factor    = "-" Expo      --negate
            | Expo
  Expo      = Primary "**" Expo --exponentiation
            | Primary
  Primary   = "(" Exp ")"      --parens
            | number
            | id

  number    = digit+
  print     = "print" ~alnum
  while     = "while" ~alnum 
  id        = ~print letter alnum*
}`);

const memory = new Map();

const semantics = aelGrammar.createSemantics().addOperation('exec', {
  Program(ss, _semicolons) { ss.exec(); },
  Statement_assign(i, _eq, e) { memory.set(i.sourceString, e.eval()); },
  Statement_print(_, e) { console.log(e.eval()); },
  Statement_while(_while, e, _open, body, _close ){
    while(e.eval()){
      body.exec();
    }
  }
}).addOperation('eval', {
  Exp_plus(e, _op, t) { return e.eval() + t.eval(); }, // need to include but just include you can ignore them with leading _
  Exp_minus(e, _op, t) { return e.eval() - t.eval(); },
  Term_times(t, _op, f) { return t.eval() * f.eval(); },
  Term_divide(t, _op, f) { return t.eval() / f.eval(); },
  Factor_negate(_op, p) { return -p.eval(); },
  Primary_parens(_open, e, _close) { return e.eval(); },
  Expo_exponentiation(p0, _op, p1){return p0.eval() ** p1.eval();},
  number(_chars) { return +this.sourceString; }, // ohm means this is the number that is being created + turns a string to a number
  id(_firstChar, _restChars) {
      if(!memory.has(this.sourceString)) {
          throw new Error (`${this.sourceString} has not been defined`);
      }
      return memory.get(this.sourceString);
    },
});

const match = aelGrammar.match(process.argv[2]);
if (match.succeeded()) {
  semantics(match).exec();
} else {
  console.error(match.message);
  process.exitCode = 1;
}
