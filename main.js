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
      this.isHeathly = false;
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
  getAvailableSeatCount() {}
  join(traveler) {}
  shouldQuarantine() {}
  totalFood() {}
}
