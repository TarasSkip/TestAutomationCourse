let Vehicle = require('./Vehicle');
class Car extends Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		super(carModel, carYear, maxSpeed);
		this.type = "car";
	}
	displayInfo() {
		console.log(`
		It's a car model: ${this.model};
		made in year: ${this.year};
		car max speed: ${this.maxSpeed};`);
	}
}


module.exports = Car;