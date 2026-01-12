class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetail) {
    this.#brand = carDetail.brand;
    this.#model = carDetail.model;
  }

  displayInfo() {
    return `${this.#brand} ${this.#model}, Speed: ${this.speed} Km/h, isTrunkOpen: ${this.isTrunkOpen}`;
  }

  go() {
    if (!this.isTrunkOpen) {
      if (this.speed < 200 && this.speed >= 0) {
        this.speed += 5;
      }
    }
  }

  brake() {
    if (this.speed <= 200 && this.speed >= 5) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetail) {
    super(carDetail);
    this.acceleration = carDetail.acceleration;
  }

  go() {
    if (this.speed < 300 && this.speed >= 0) {
      this.speed += this.acceleration;
    }
  }

  openTrunk() {
    this.isTrunkOpen = false;
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

const car = [
  {
    brand: "Toyota",
    model: "Corolla",
  },
  {
    brand: "Tesla",
    model: "Model 3",
  },
  {
    brand: "McLaren",
    model: "F1",
    acceleration: 30,
    type:'raceCar',
  }
].map((carDetail) => {
  if(carDetail.type === 'raceCar'){
    return new RaceCar(carDetail);
  }
  return new Car(carDetail);
});

car.forEach((cars, index) => {
  if (index === 0) {
    cars.go();
    cars.go();
    cars.go();
    cars.go();
    cars.openTrunk();
  }
  if (index === 1) {
    cars.go();
    cars.go();
    cars.go();
    cars.brake();
    cars.brake();
    cars.brake();
    cars.brake();
    cars.openTrunk();
  }
  if (index === 2) {
    cars.go();
    cars.go();
    cars.go();
    cars.go();
    cars.openTrunk();
  }

  console.log(cars.displayInfo());
});
