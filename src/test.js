function greeting() {
    return function() {
        return 'Hello World';
    }
}

var f = greeting();

console.log(f);