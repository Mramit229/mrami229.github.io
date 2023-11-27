function Display() {
    var x = document.getElementById("num").value
    let text = ""
    let result = ""
    for (var i = 1; i <= 10; i++) {
        if (x <= 0) {
            document.getElementById("demo8").innerHTML = "<br> Please , Enter a Positive Integer"
        }
        else {
            text = x * i
            result += `${x} x ${i} = ${text} <br>`
            document.getElementById("demo8").innerHTML = `<br> table of ${x} is  <br> ${result}`
        }

    }
    // document.body.style.backgroundColor = "grey"

}

function Factoralize() {
    var x = document.getElementById("num").value
    let text = ""
    if (x < 0) {
        document.getElementById("demo8").innerHTML = "<br> error!! The Factorial of negative number is not defined"
    }
    else if (x === 0) {
        text = 1
        document.getElementById("demo8").innerHTML = `<br> the factorial of ${x} is ${text}`
    }

    else {
        let fact = 1;
        for (i = 1; i <= x; i++)
            fact *= i;
        text = fact
        document.getElementById("demo8").innerHTML = `<br> the factorial of ${x} is ${text}`
    }

}

function fibIteration() {
    let x = document.getElementById("num").value
    let fib = [0, 1]
    if(x == 0){
        document.getElementById("demo8").innerHTML = `<br> The fibonacci series of ${x} is 0`
    } else if (x < 0) {
        document.getElementById("demo8").innerHTML = "<br> Please , Enter a Positive Integer"
    }
    else if(x == 1) {
        document.getElementById("demo8").innerHTML = `<br> The fibonacci series of ${x} is 0,1`
    } else {
        for (let i = 2; i <= x; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
            document.getElementById("demo8").innerHTML = `<br> The fibonacci series of ${x} is ${fib}` // Output will be show like 0,1,1,2,3,5,...
        }
    }
}

function fibIteration1() {
    let x = document.getElementById("num").value
    let fib = [0, 1]
    if(x == 0){
        document.getElementById("demo8").innerHTML = `<br> The fibonacci no of ${x} is 0`
    } else if (x < 0) {
        document.getElementById("demo8").innerHTML = "Please , Enter a Positive Integer"
    }
    else if(x == 1) {
        document.getElementById("demo8").innerHTML = `<br> The fibonacci no of ${x} is 1`
    } else {
        for (let i = 2; i <= x; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
            document.getElementById("demo8").innerHTML = `<br> The fibonacci no of ${x} is ${fib[x]}` // Output will be show like 0,1,1,2,3,5,...
        }
    }

}

function armstrong_Number() {
    let sum = 0;
    let x = document.getElementById("num").value
    let number2 = x.length
    let number1 = x;

    while (number1 > 0) {
        let remainder = number1 % 10;
        sum += remainder ** number2;
        number1 = parseInt(number1 / 10);
    }

    if (x == sum) {
        document.getElementById("demo8").innerHTML = "<br> given no is an armstrong number"

    }
    else {
        document.getElementById("demo8").innerHTML = "<br> given no is not an armstrong number"
    }

}
function Palindrome() {
    var rem, temp, final = 0;
    var x = Number(document.getElementById("num").value);

    temp = x;
    while (x > 0) {
        rem = x % 10;
        x = parseInt(x / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        document.getElementById("demo8").innerHTML = "<br> Given number is Palindrome"
    }
    else {
        document.getElementById("demo8").innerHTML = "<br> Given number is not palindrome"
    }
}


