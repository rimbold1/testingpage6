var a = +prompt('введіть коефіцієнт a (число)');
var b = +prompt('введіть коефіцієнт b (число)');
var c = +prompt('введіть коефіцієнт c (число)');
var resultFail = 'рівняння розвязку немає';


function quadraticEquation(a, b, c) {
    var d = (b * b) - 4 * a * c;
    if (d < 0) {
      return resultFail;
    }
    var x1 = (-b - (Math.sqrt(d))) / (2 * a);
    var x2 = (-b + (Math.sqrt(d))) / (2 * a);
    return 'x1 = ' + x1 +"<br>" + 'x2 = ' + x2;
}

document.write(quadraticEquation(a, b, c));