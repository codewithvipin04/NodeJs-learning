// Asynchronous callbacks
function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    let name = "vipin";
    callback(name);
}

higherOrderFunction(greet);

/* Synchronous callbacks example

function callback() {
    document.getElementById('demo').innerHTML = 'Hello';
}
document.getElementById('btn').addEventListener('click', callback);
*/