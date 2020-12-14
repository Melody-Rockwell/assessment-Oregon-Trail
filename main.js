class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food = this.food + 2;
  }
  eat() {
    if (this.food < 1) {
      this.isHealthy = false;
    } else if (this.food >= 1) {
      this.food = this.food - 1;
    }
  }
}

class Wagon {
  constructor(c) {
    this.capacity = c;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }

  join(traveler) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      return true;
    }
  }

  totalFood() {
    for (let i = 0; i < this.passengers.length; i++) {
      return this.passengers[i].food;
    }
  }
}
