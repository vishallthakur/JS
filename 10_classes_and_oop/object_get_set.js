const User = {
    _email: "coder.com",
    _password: "ABC",

    get email () {
        return this._email.toUpperCase()
    },

    set email (value) {
        this._email = value
    }
}

const coder = Object.create(User)
console.log(coder.email);
