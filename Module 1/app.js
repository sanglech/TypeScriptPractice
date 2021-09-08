//Unioion type operator
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; //+converts variable to a number
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
//literal types
console.log("Adding two numbers " + combine(1, 2, 'as-number'));
console.log(combine("hello ", "world", 'as-string'));
console.log("Adding numbers" + combine("5 ", "4", 'as-number'));
