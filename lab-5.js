//Slide 6
class Car {
	constructor(carModel, carYear, maxSpeed) {
		this.model = carModel;
		this.year = carYear;
		this.maxSpeed = maxSpeed;
	}
	displayCarInfo() {
		console.log(`Name: ${this.model};
		Year: ${this.year};
		Max Speed: ${this.maxSpeed};`)
	}
}
let volvo = new Car("CS23", 2015, 220);
volvo.displayCarInfo();


//Slide 8 - INHERITANCE
class Vehicle {
	constructor(carModel, carYear, maxSpeed){
		this.model = carModel;
		this.year = carYear;
		this.maxSpeed = maxSpeed;
	}
	
	displayInfo() {
		console.log(`
		Name: ${this.model};
		Year: ${this.year};
		Max Speed: ${this.maxSpeed};
		Type: ${this.type};`);
	}
}

class Car extends Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		super(carModel, carYear, maxSpeed);
		this.type = "car";
	}
	transportPeople() {
		console.log('I am starting transporting passangers');
	}
}

class Truck extends Vehicle {
	constructor(carModel, carYear, maxSpeed) {
		super(carModel, carYear, maxSpeed);
		this.type = "truck";
	}
	transportContainer() {
		console.log('I am starting transporting heavy container');
	}
}
let volvo = new Car("CS23", 2015, 220);
volvo.displayInfo();
volvo.transportPeople();
volvo.transportContainer();


//Slide 11 - OVERRIDING
class Vehicle {
	constructor(carModel, carYear, maxSpeed){
		this.model = carModel;
		this.year = carYear;
		this.maxSpeed = maxSpeed;
	}
	
	displayInfo() {
		console.log(`
		Name: ${this.model};
		Year: ${this.year};
		Max Speed: ${this.maxSpeed};
		Type: ${this.type};`);
	}
}

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
let volvo = new Car("CS23", 2015, 220);
volvo.displayInfo();
volvo.transportPeople();
volvo.transportContainer();