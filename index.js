let dbUsers = [
    {
        username: "soo",
        password: "123456",
        name: "Soo",
        email: "soo@utem.edu.my"
    },
    {
        username: "john",
        password: "password",
        name: "John",
        email: "john@utem.edu.my"
    },
    {
        username: "ali",
        password: "654321",
        name: "Ali",
        email: "ali@utem.edu.my"
    }
]

function login(reqUsername, reqPassword) {
    let matchUser = dbUsers.find(
        x => x.username == reqUsername
    )
    if(!matchUser) return "User not found!"
    if(matchUser.password == reqPassword) {
        return matchUser
    } else {
        return "Invalid password"
    }

    // for(let i = 0; i < dbUsers.length; i++) {
    //     console.log(dbUsers[i])
    //     if(dbUsers[i].username == reqUsername)
    // }
}

function register(reqUsername, reqPassword, reqName, reqEmail) {
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail
    })
}

// try to login
console.log( login("soo", "123456") )
console.log( login("utem", "password") )

register("utem","password","fkekk","fkekk@m.com")

console.log( login("utem", "password") )


