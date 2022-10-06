function evalObject(value){
  var result = 0;
  //bug is that it was missing break after each case
  //value.a new
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b;break;
    case'*': result = value.a * value.b;break;
    case'%': result = value.a % value.b;break;
    case'^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}
