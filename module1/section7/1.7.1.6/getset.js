let contact = {
    _tel: "207-662-5412",
    get tel() {
        return this._tel;
    },
    set tel(t) {
        this._tel = t
    }
}

console.log(contact.tel);
contact.tel = "100-100-1000";
console.log(contact.tel);
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);