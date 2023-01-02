function subtractTwo(num) {
    let a = num - 2;
    console.log(a);

}

function calculate() {
    const sumTotal = 5 + 4;
    return subtractTwo(sumTotal);
}

//calculate();

//Example of function experssion
//storing the function into variable

var sing = function () {
    console.log("ram sings well");
}

//sing();

//concept of hoisting

var foodT = function () {
    console.log('Orgi food:' + favFood)
    var favFood = 'grapes';
    console.log('New favourite fruit:' + favFood)
}

//foodT();

//converting normal function to arrow function

// var canada = function () {
//     console.log('cold');
// }

// canada();

var canada = () => {
    console.log('very cold today in canada');
}

canada();