class User {
    constructor(name) {
        this.name = name
    }

    showMessage() {
        let msg = 'Hi, ' + this.name
        alert(msg)
    }
}

let user = new User('Olesya')
user.showMessage()