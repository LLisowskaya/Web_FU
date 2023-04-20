class Reverse {
    constructor(name) {
        this.name = name
    }

    reverseName() {

        alert(this.name.split("").reverse().join(""))
    }
}

let user = new Reverse('Olesya')
user.reverseName()