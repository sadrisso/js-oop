class Player {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    display() {
        return `${this.#name} is ${this.#age} years old`;
    }

    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
}

class Crickter extends Player {
    constructor(name, age, centuries) {
        super(name, age);
        this.centuries = centuries;
    }

    display() {
        return `${this.getName()} amr nam ebong amr boyos ${this.getAge()} bochor`;
    }
}

class Footballer extends Player {
    constructor(name, age, goals) {
        super(name, age);
        this.goals = goals;
    }
}

const shakib = new Crickter('Shakib Al Hasan', 33, 44);
const ronaldo = new Footballer('Ronaldo', 35, 300);

console.log(shakib.display());
console.log(ronaldo.display());