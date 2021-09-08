console.log("Hello World");
//Defaults to any type unless otherwise specfied
function add(n1, n2, flg, phrase) {
    var result = n1 + n2;
    if (flg) {
        return phrase + " " + result;
    }
    else {
        return 0;
    }
}
var num = 5.3; //number type is both double and int
var show = true;
var phrase = "WORDDD UPPP";
var result = add(5, 6, show, phrase);
var result2 = add(num, num, show, phrase);
console.log(result);
console.log(result2);
