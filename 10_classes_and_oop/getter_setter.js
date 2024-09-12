class User {
    constructor (email, password) {
        this.email = email
        this.password = password
    }

    get email () {
        return this._email.toUpperCase()
    }

    set email (value) {
        this._email = value
    }

    get password () {
        return `${this._password.toUpperCase()}coder`
    }

    set password (value) {
        this._password = value
    }
}

const developer = new User("developer.com", "abc")
console.log(developer.email)