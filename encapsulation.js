class Player {

    #Name;
    #Skill;
    constructor(Name, Age, Skill, Salary) {
        this.#Name = Name;
        this.Age = Age;
        this.#Skill = Skill;
        this.Salary = Salary;
    }

    getTwoMonthSalary() {
        return (this.Salary * 2);
    }


}

const Shakib = new Player("Shakib", 32, "All-Rounder", 200000);
console.log(Shakib.getTwoMonthSalary());