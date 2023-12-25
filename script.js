let age = prompt("How old are you?");
typeConversion(age);

function typeConversion(age) {
    
    alert(`Before conversion: ${typeof age}`);
    age = Number(age);
    alert(`After conversion: ${typeof age}`);

}