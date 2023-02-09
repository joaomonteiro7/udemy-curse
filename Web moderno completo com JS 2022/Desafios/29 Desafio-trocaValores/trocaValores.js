let a = 7;
let b = 94;
let c;

c = a; // c->7
a = b; // a->94
b = c; // b->7

console.log("a-> " + a);
console.log("b-> " + b);

let d = 7;
let e = 94;
[d,e] = [e,d];
console.log("d-> " + d);
console.log("e-> " + e);
