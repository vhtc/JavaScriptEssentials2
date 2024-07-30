let contato = {
    age: 36,
    firstName: "Victor",
    lastName: "Tuy",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    get newAge() {
        return this.age
    },
    set newAge(x) {
        if (x >= 0) {
            this.age = x
        }
    }
}

let keys = Object.keys(contato)
console.log(keys)