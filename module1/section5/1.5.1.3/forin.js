let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
}

for (x in contact) {

    console.log(`${x} : ${contact[x]}`);

}

let keys = Object.keys(contact)

console.log(keys)