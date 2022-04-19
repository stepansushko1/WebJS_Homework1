function reverseStringForLoop(string) {
    let result = "";

    for(let i = string.length - 1; i > -1; i--) {
        result += string[i];
    }

    return result;
}

function reverseStringForLoop2(string) {
    let reversed = '';
    for (let i = 0; i < string.length; ++i) {
        reversed += string.charAt(string.length - i - 1);
    }

    return reversed
}

function reverseStringWhileLoop(string) {
    let result = "";

    let i = string.length - 1
    
    while (i > -1) {
        result += string[i];
        i--;
    }

    return result;
}

function reverseStringRecursion(string) {
    if (!string) {
        return ""
    } 
    
    else {
        return reverseStringRecursion(string.substring(1)) + string.charAt(0);
    }
}


function reverseStringConditionalOperator(string) {
    return (string === '') ? '' : reverseStringConditionalOperator(string.substr(1)) + string.charAt(0);
}

function reverseStringSplit1(string) {
    return [...string].reverse().join("");
}

function reverseStringSplit2(string) {
    return string.split('').reverse().join('');
}


function reverseStringUsingArrays (string){
    reversed = Array.from(string).reverse().join('');
    return reversed;
}

function reverseStringUsingPop(string) {
    string = [...string];
    let reversed = '';
    
    while (string.length > 0) {
        reversed += string.pop();
    }

    return reversed

}

function reverseStringUsingReduce(string) {
    string = string.split("")
    return string.reduce((param1, char)=> char + param1, ''); 
}







console.log(reverseStringForLoop('Hello JS'));
console.log(reverseStringForLoop2('Hello JS'));
console.log(reverseStringWhileLoop('Hello JS'));
console.log(reverseStringRecursion('Hello JS'));
console.log(reverseStringUsingArrays('Hello JS'));
console.log(reverseStringConditionalOperator('Hello JS'));
console.log(reverseStringSplit1('Hello JS'));
console.log(reverseStringSplit2('Hello JS'));
console.log(reverseStringUsingPop('Hello JS'));
console.log(reverseStringUsingReduce('Hello JS'));
