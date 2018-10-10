function isEven(n) {
    return n % 2 == 0;
 }

 function isOdd(n) {
    return Math.abs(n % 2) == 1;
 }

var array = [];

for (i = 0; i <= 9; i++) {
    var random = Math.floor((Math.random() * 10) + 1);
    array[i] = random;
}

function generateNum (array, randNumber, randNumber2) {
   while (array.length < 10) {
     if(array.length == 8 || 9) {
       array.push(randNumber2);
       generateNum(array, randNumber, randNumber);
     } else {
       array.push(randNumber);
       generateNum(array, randNumber, randNumber2);
     }
   }
   return array;
}

array.pop();
array.pop();
array.pop();

var randNumber = array[Math.floor(Math.random()*array.length) + 1];
var randNumber2 = array[Math.floor(Math.random()*array.length) + 1];

generateNum(array, randNumber, randNumber2);

array.forEach(element => {
    console.log(element);
});

var odd = [];
var even = [];

array.forEach(element => {
    if (isEven(element)) {
        even.push(element);
    } else {
        odd.push(element);
    }
});

odd.forEach(element => {
    var li = "<li>" + element + "</li>"
    $('.left ul').append(li);
});

even.forEach(element => {
    var li = "<li>" + element + "</li>"
    $('.right ul').append(li);
});
