var n = Number(prompt('write the number'));
document.write('recursion n-ne f= ' + f(n) + '<br>');

function f(n) {
    if (n <= 2) {
        return 1;
    } else {
        return f(n - 1) + f(n - 2);
    }
}

n = Number(prompt('write the number'));
var array_f = [1, 1];
document.write('array n-ne f= ' + fArray(n));

function fArray(n) {
    for (var i = 1; i < n - 1; i++) {
       array_f.push(array_f[i] + array_f[i - 1]);
    }
    return array_f[array_f.length - 1];
}