let contact = {}
Object.defineProperty(contact, "age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
})

Object.keys(contact)
console.log(contact.age)