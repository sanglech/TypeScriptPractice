function add(n1, n2) {
    return n1 + n2;
}
function printResult(n1) {
    console.log(n1);
}
function strange(n1, n2) {
    console.log(n1 + n2);
    return;
}
function addAndPrint(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
//Specific fucntion type
var combineValues;
// Defining that variable can only accept a function call that takes 2 numbers as input
// and returns a number as a result
combineValues = add;
addAndPrint(5, 10, function (result) {
    console.log(result);
});
//combineValues = printResult //error
