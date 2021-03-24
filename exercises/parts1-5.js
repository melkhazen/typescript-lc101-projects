// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedMph;
var daysToMars = hoursToMars / 24;
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`the spacecraft ${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to get to mars.`);
// console.log(`the spacecraft ${spacecraftName} will take ${getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph, milesPerKilometer) {
        if (milesPerKilometer === void 0) { milesPerKilometer = 0.621; }
        this.name = name;
        this.speedMph = speedMph;
        this.milesPerKilometer = milesPerKilometer;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        var daysTolocation = hoursToLocation / 24;
        return daysTolocation;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("the spacecraft " + spaceShuttle.name + " will take " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to get to mars.");
console.log("the spacecraft " + spaceShuttle.name + " will take " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to get to the moon.");
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
