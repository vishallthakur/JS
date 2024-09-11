class User {
    constructor (username) {
        this.username = username
    }

    logMe () {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor (username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse () {
        console.log(`A new course was added by ${this.username}`);
    }
}

const coder = new Teacher("coder", "coder.com", 123)
coder.addCourse()
coder.logMe()

const developer = new User("developer")
developer.logMe()

console.log(coder instanceof Teacher);
