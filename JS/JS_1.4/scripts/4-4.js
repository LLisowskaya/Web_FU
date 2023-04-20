let users = []
    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }

    let user = new User("Никита");
    users.push(user)

    let user2 = new User("Алексей");
    users.push(user2)

     let user3 = new User("Ваня");
    users.push(user3)
     let user4 = new User("Валерия");
    users.push(user4)
     let user5 = new User("Олеся");
    users.push(user5)
     let user6 = new User("Юля");
    users.push(user6)
     let user7 = new User("Ольга");
    users.push(user7)
     let user8 = new User("Максим");
    users.push(user8)
    let user9 = new User("Евгений");
    users.push(user9)
    let user10 = new User("Борис");
    users.push(user10)

    for (el of users) {
        console.log(el.name)
    }
