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

let i=0
let validate = false // va servir dans le cas ou un nom est un raccourci de l'autre (eg. Alex et Alexandre)
while(i<driver.length || i<navigator.length){
    if(driver[i]<navigator[i]){
        console.log("The driver's name goes first.");
        validate= true
        break
    } else if(driver[i]>navigator[i]){
        console.log("Yo, the navigator goes first definitely.");
        validate= true
        break
    }
    else i++
}

if(driver===navigator){
    console.log("What?! You both have the same name?");
} else if(driver>navigator && !validate){
    console.log("Yo, the navigator goes first definitely.");
} else if(driver<navigator && !validate){
    console.log("The driver's name goes first.");
}
