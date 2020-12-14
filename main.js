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
  constructor(max) {
    this.capacity = max;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }

  join(traveler) {
    if (this.getAvailableSeatCount() > 0) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      // console.log(this.passengers[i].isHealthy);
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }

  totalFood() {
    for (let i = 0; i < this.passengers.length; i++) {
      return this.passengers[i].food;
    }
  }
}
