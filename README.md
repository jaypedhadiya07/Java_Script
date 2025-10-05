# JavaScript

## JavaScript Execution Context

Understand how JavaScript manages code execution with this **interactive diagram**:

[🌐 View the Execution Context Diagram](https://app.eraser.io/workspace/yvagU7qY5Eu2xJJAFLGX)

> This diagram illustrates how JavaScript handles **Global, Function, and Eval Execution Contexts**, including:
> - **Call Stack** – Tracks the order of function calls  
> - **Memory Allocation** – Manages variables and function declarations  
> - **Scope Chain** – Determines variable accessibility

---

# JavaScript and Classes

## Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a programming paradigm that structures code into reusable and modular components called **objects**.  
Each object contains **data (properties)** and **behavior (methods)** that operate on that data.

---

## Objects

An **object** in JavaScript is a collection of **properties** (key-value pairs) and **methods** (functions associated with the object).

**Example:**
```js
const user = {
  name: "Jay",
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

user.greet(); // Output: Hello, Jay!
```

**Common Built-in Object Methods:**
- `toLowerCase()`
- `toUpperCase()`
- `hasOwnProperty()`
- `Object.keys()`
- `Object.values()`

---

## Why Use OOP?

OOP helps developers:
- Organize and structure large codebases.
- Reuse and extend existing code easily.
- Improve maintainability and readability.
- Model real-world entities and relationships.

---

## Parts of OOP in JavaScript

### 1. Object Literal
Used for creating single, specific objects.

```js
const car = {
  brand: "Tesla",
  drive() {
    console.log("Driving...");
  }
};
```

### 2. Constructor Function
Before ES6 classes, constructor functions were used to create multiple instances of similar objects.

```js
function Car(brand) {
  this.brand = brand;
  this.drive = function() {
    console.log(`${this.brand} is driving...`);
  };
}

const car1 = new Car("Tesla");
const car2 = new Car("BMW");
```

### 3. Prototypes
Prototypes allow objects to share methods without redefining them for each instance.

```js
Car.prototype.honk = function() {
  console.log(`${this.brand} honks!`);
};
```

### 4. Classes (ES6+)
Modern, cleaner syntax for creating objects and handling inheritance.

```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving...`);
  }
}

const car = new Car("Audi");
car.drive();
```

### 5. Instances (`new`, `this`)
Using the `new` keyword creates an instance of a class or constructor function.  
`this` refers to the specific instance created.

```js
const carInstance = new Car("Volvo");
```

---

## The Four Pillars of OOP

### 1. Abstraction
Hiding complex implementation details and showing only essential features.

```js
class CoffeeMachine {
  start() {
    console.log("Starting machine...");
    this._heatWater();
  }

  _heatWater() {
    console.log("Heating water...");
  }
}
```

### 2. Encapsulation
Restricting direct access to object data and methods. Helps protect internal state.

```js
class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

### 3. Inheritance
Creating new classes based on existing ones.

```js
class Vehicle {
  move() {
    console.log("Vehicle is moving...");
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Car honks!");
  }
}
```

### 4. Polymorphism
Ability of different classes to respond to the same method in different ways.

```js
class Animal {
  speak() {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => animal.speak());
```

---

**Summary:**  
JavaScript supports OOP through **objects**, **prototypes**, and **classes**.  
Modern OOP in JS uses `class` syntax, but under the hood, everything relies on prototypes.
