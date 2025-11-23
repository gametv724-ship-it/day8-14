class Transport {
  constructor(name, maxSpeed) {
    this.name = name;
    this._maxSpeed = maxSpeed; 
  }

  get speed() {
    return `${this._maxSpeed} км/ч`;
  }

  set speed(newSpeed) {
    if (newSpeed < 0) {
      console.log(`⛔ Ошибка: Скорость не может быть отрицательной!`);
      return;
    }
    this._maxSpeed = newSpeed;
    console.log(`✅ Скорость для ${this.name} установлена на ${this.speed}.`);
  }

  move() {
    console.log(`Транспорт ${this.name} начинает движение.`);
  }
}

class Car extends Transport {
  constructor(name, maxSpeed, fuelType) {
    super(name, maxSpeed); 
    
    this.fuelType = fuelType;
  }

  move() {
    console.log(`Легковой автомобиль ${this.name} едет на ${this.fuelType} топливе.`);
  }

  beep() {
    console.log(`Би-бип!`);
  }
}

class Truck extends Car {
  constructor(name, maxSpeed, fuelType, maxLoad) {
    super(name, maxSpeed, fuelType); 
    
    this.maxLoad = maxLoad;
    this._currentLoad = 0; 
  }
  
  move() {
      super.move(); 
      console.log(`Грузовик готов перевозить до ${this.maxLoad} тонн.`);
  }

  set currentLoad(tons) {
    if (tons > this.maxLoad) {
      console.log(`❌ Невозможно: Перегруз! Максимальная загрузка: ${this.maxLoad} тонн.`);
      return;
    }
    this._currentLoad = tons;
    console.log(`📦 Груз в ${tons} тонн успешно загружен.`);
  }

  get currentLoad() {
    return `${this._currentLoad} тонн`;
  }
}

const myCar = new Car("Mercedes E-Class", 240, "Бензин");
const myTruck = new Truck("Kamaz 6520", 90, "Дизель", 20);

console.log('--- Тестируем Car ---');
myCar.move();                 // Вызывает переопределенный move() из Car
myCar.beep();                 // Уникальный метод Car
console.log(myCar.speed);     // Вызывает геттер из Transport: "240 км/ч"
myCar.speed = 250;            // Вызывает сеттер из Transport
myCar.speed = -50;            // Сработает валидация в сеттере Transport

console.log('\n--- Тестируем Truck ---');
myTruck.move();               // Вызывает move() из Truck, который вызывает super.move() (из Car)
console.log(`Макс. нагрузка: ${myTruck.maxLoad} тонн`);

myTruck.currentLoad = 10;     // Вызывает сеттер Truck
console.log(`Текущая нагрузка: ${myTruck.currentLoad}`); // Вызывает геттер Truck
myTruck.currentLoad = 30;     // Сработает валидация в сеттере Truck (maxLoad = 20)