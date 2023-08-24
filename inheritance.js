class Player {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    display() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Crickter extends Player {
    constructor(name, age, centuries){
        super(name,age);
        this.centuries = centuries;
    }
}

class Footballer extends Player {
    constructor(name, age, goals){
        super(name,age);
        this.goals = goals;
    }
}

const shakib = new Crickter('Shakib', 34, 44);
const salah = new Footballer('Salah', 33, 200);

console.log(`Centuries = ${shakib.centuries}`, shakib.display());
console.log(`Goals = ${salah.goals}`, salah.display());