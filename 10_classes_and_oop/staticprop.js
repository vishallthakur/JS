class User {
    constructor (username) {
        this.username = username
    }

    logMe () {
        console.log(`Username: ${this.username}`)
    }

    static createId () {
        return '123'
    }
}

const coder = new User("coder")
// console.log(coder.createId())

class Teacher extends User {
    constructor (username, email) {
        super(username)
        this.email = email
    }
}

const developer = new Teacher("developer", "developer.com")
developer.logMe()