// let age = prompt("How old are you?");
// typeConversion(age);

// let num = prompt("Enter a number");
// mathModulus(num);

// comparisons();

//conditionals();

//multipleConditions();

nullCoalescing();

function nullCoalescing() {
    
    let height = prompt("Enter the height of your rectangle:");
    let width = prompt(`The height of your rectangle is: ${height}, Enter the width of your rectangle:`);

    // important: use parentheses
    // height and width are defined. Therefor, area will be calculated using user input
    let area = (height ?? 100) * (width ?? 50);

    alert(`The area of the rectangle is: ${area}`); // 5000

}

function multipleConditions() {
    
    alert("We're gonna test your age");
    let age = prompt('age?', 18);

    let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
    'What an unusual age!';

    alert( message );
}

function conditionals(_num1, _num2) {
    
    let year = prompt('In which year was ECMAScript-2015 specification published?', '');
    if (year == 2015) alert( 'You are right!' )
    else { alert(`You're wrong!`) };

    _num1 = prompt("Enter a number for a test");
    _num2 = prompt(`Enter another number for the test, your 1st number was ${_num1}`);

    alert(`We are going to test whether the 1st number is bigger than the 2nd, Okay?`);
    alert(`This statement is: ${_num1 > _num2}`);
}

function comparisons() {
    
    alert( 2 > 1 ); //true
    alert( 2 == 1 ); //false
    alert( 2 != 1 ); //true

    alert( 'Z' > 'A' ); //true
    alert( 'Glow' > 'Glee' ); //true
    alert( 'Bee' > 'Be' ); //true
}

function mathModulus(num) {
    
    alert(`Remainder of ${num}/${3} is: ${Number(num % 4)}`);

}

function typeConversion(age) {
    
    alert(`Before conversion: ${typeof age}`);
    age = Number(age);
    alert(`After conversion: ${typeof age}`);

}