var myPriceList = [4545, 3434, 23, 34, 45, 2, 3];
var sum = 0;
for (var i = 0; i < 7; i++){
    sum = sum + myPriceList[i];
    //document.write(myPriceList[i]);
    //document.write("<br/>");
}
//document.write("Sum=" + sum);

// WAP to sum all the element of array.

// WAP to identify the maximum and mininum value in the array.
var myPriceList = [4545, 3434, 23, 11, 45, 324, 4654, 5756, 868, 35, 34, 31, 575, 8578, 45, 2, 3];
var max = myPriceList[0];
var min = myPriceList[0];

for (var i = 1; i < myPriceList.length; i++){
    if (max < myPriceList[i]) {
        max = myPriceList[i];
    }
    if (min > myPriceList[i]) {
        min = myPriceList[i];
    }
}

// Write a function to check given number is prime or not.
function isPrime(n) {
    for (var i = 2; i < n / 2; i++){
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
// display the prime number only from give array. 
for (var i = 0; i < myPriceList.length; i++){
    if (isPrime(myPriceList[i])) {
        document.write(myPriceList[i] + "<br/>");
    }
}

// document.write("<br/>");
// document.write("Max = " + max);
// document.write("<br/>");
// document.write("Min= " + min+"<br/>");

// document.write(isPrime(57));
