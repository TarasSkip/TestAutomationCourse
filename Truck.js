let Vehicle = require('./Vehicle');
class Truck extends Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		super(carModel, carYear, maxSpeed);
		this.type = "truck";
	}
	displayInfo() {
		super.displayInfo();
		console.log('Please note...');
	}
}


module.exports = Truck;