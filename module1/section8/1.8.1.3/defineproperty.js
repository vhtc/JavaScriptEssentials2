let contact = {}

Object.defineProperty(contact, "_age", {
    value: contact._age,
    writable: false, //configurar para true, vai poder colocar o valor 100 na variavel 
    enumerable: false,
    configurable: true
});

contact._age = 100;
console.log(contact._age);

console.log(Object.keys(contact)) //mostrar as keys
console.log(Object.getOwnPropertyNames(contact)) //mostrar todas as keys