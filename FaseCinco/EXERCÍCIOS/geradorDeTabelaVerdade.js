var p = true;
var q = false;
var r = false;
console.log(' Tabela verdade do E ');

console.log('---------------------');
for (let i = 0; i < 4; i++) {

    if ( i == 0 || i == 1 ){
      p = true;
    }
    else {
      p = false;
    }

      q = (i == 0 || i == 2);

      r = p && q;
      
console.log(p + ' | ' + q + ' | ' + r);
}