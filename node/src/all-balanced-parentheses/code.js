function balancedParens(N) {
  var legit = (combo) => {
    if (combo.length == 0) { return true ; }
    if (combo.length % 2 == 1 ) { return false; }
    if (combo[0] == ')' || combo[combo.length - 1] == '(') { return false; }
    var base = 0, isLegit = true ;
    for (p in combo) {
      if (combo[p] == '(') { base++; } else { base--; } ;
      if (base < 0) { isLegit = false; break; }
    }
    console.log("legit", combo, isLegit);
    return isLegit;
  };

  var combo = (a, x) => {
    a.push('('+ x +')');
    a.push(')'+ x +')');
    a.push('('+ x +'(');
    a.push(')'+ x +'(');
  };
  var generate = (num, ar) => {
    if (num <= 0) { return ar; } ;
    var output = [];
    for (x in ar) { combo(output, ar[x]); }
    return generate(num-1, output);
  };
  return generate(N, [""]).filter(legit);
}

console.log(balancedParens(2));
