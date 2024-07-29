let contato = {
    age: 36,
    firstName: "David",
    lastName: "Taylor",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    get newAge() {
        return this.age
    },
    set newAge(x) {
        if (x > 0) {
            this.age = x
        }
    }
}

console.log(contato.fullName)
console.log(contato.age)
contato.newAge = 10
console.log(contato.age)