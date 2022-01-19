
let a = 3;
let b = 5;
let c;
let output = '';
output += 'let a = 3\n';
output += 'let b = 5\n';
output += 'let c = undefined\n';
output += '------------------\n';
output += 'a + b = ' + (a + b) + '\n' + 'a - b = ' + (a - b) + '\n' + 'a * b = ' + (a * b) + '\n' + 'a / b = ' + (a / b) + '\n' + 'a % b = ' + (a % b) + '\n' + '(a += b) : ' + (a += b) + '\n' + '(a -= b) : ' + (a -= b) + '\n' + '(a *= b) : ' + (a *= b) + '\n' + '(a /= b) : ' + (a /= b) + '\n' + '(a %= b) : ' + (a %= b) + '\n' + '(a == b) : ' + (a == b) + '\n' + '(a != b) : ' + (a != b) + '\n' + '(a > b) : ' + (a > b) + '\n' + '(a < b) : ' + (a < b) + '\n' + '(!a && !c) : ' + (!a && !c) + '\n' + '(!a || !c) : ' + (!a || !c) + '\n' ;



let first_name = 'Alexei';
let last_name = 'Quintero';
let email = 'quin0304@algonquinlive.com';

output += '-------- Task 2 ----------\n';
output += `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;

alert (output);
