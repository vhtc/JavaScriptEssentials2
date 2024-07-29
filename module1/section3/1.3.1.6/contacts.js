let contato = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
}

contato.firstName = "Ronald"
contato.lastName = "Murphy"

contato.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com"
}

console.log(contato.email.work)

delete contato.email.work

console.log(contato.email)