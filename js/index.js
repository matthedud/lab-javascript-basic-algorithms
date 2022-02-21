// Iteration 1: Names and Input
const driver = "Alex";
console.log(driver);

const navigator = "Matt";
console.log(navigator);

// Iteration 2: Conditionals

if (driver.length > navigator.length) {
	console.log(
		`The driver has the longest name, it has ${driver.length} characters.`
	);
} else if (driver.length < navigator.length) {
	console.log(
		`It seems that the navigator has the longest name, it has ${navigator.length} characters`
	);
} else {
	console.log(
		`Wow, you both have equally long names, ${navigator.length} characters!.`
	);
}

// Iteration 3: Loops
let driverUpperCase = "";

for (let i = 0; i < driver.length; i++) {
    driverUpperCase += driver[i].toUpperCase()
    if(driver[i+1]){
        driverUpperCase += " "
    }
    // if(i<driver.length-1){
    //     driverUpperCase += " "
    // }
}
console.log(driverUpperCase);



let driverRevers = "";

for (const letter of driver) {
    driverRevers = letter + driverRevers
}

console.log(driverRevers);
