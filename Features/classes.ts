class Vehicle {
  color: string

  constructor (color: string) {
    this.color = color
  }

  // otra forma  ==> en esta forma ya no es necesaria la propiedad color: string declarada arriba
  // constructor (public color: string) {}

  protected honk (): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

class Car extends Vehicle {
  constructor (public wheels: number, color: string) {
    super(color)
  }

  private drive (): void {
    console.log('vroom')
  }

  startDrivingProcess (): void {
    this.drive()
    this.honk()
  }
}

const car = new Car(4, 'red')
car.startDrivingProcess()
