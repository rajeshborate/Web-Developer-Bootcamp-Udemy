console.log("BEFORE CONDITIONALS");
if (1 + 1 === 2) {
    console.log("Math still works!");
}
console.log("AFTER CONDITIONALS");


let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5!!");
    console.log(random);
}



const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
    console.log("UGHHH I hate Mondays");
}
else if (dayOfWeek === 'Saturday') {
    console.log('Yay I love saturdays');
}