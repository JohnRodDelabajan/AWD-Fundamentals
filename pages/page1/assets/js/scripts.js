document.getElementById('submitButton').addEventListener('click', function() {
    // Variable Declaration
    let number = parseInt(document.getElementById('numberInput').value);
    let output = '';

    // Input & Output
    if (isNaN(number)) {
        output = 'Please enter a valid number.';
    } else {
        // Conditional Statements
        if (number < 0) {
            output = 'The number is negative.';
        } else if (number === 0) {
            output = 'The number is zero.';
        } else {
            output = 'The number is positive. Here are the first ' + number + ' numbers: ';
            // Looping Statements
            for (let i = 1; i <= number; i++) {
                output += i + (i < number ? ', ' : '.');
            }
        }
    }

    // Display output
    document.getElementById('output').innerText = output;
});