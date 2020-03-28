const data = {
    "badCode": {
        displayName: "John",
        password: 123456,
    }
}
const greetingUser = (userName, password) => {
    let displayName = "";
    if (data[userName] !== undefined) {
        displayName = data[userName].password === password ? data[userName].displayName : "Anonymous";
    }
    console.log(`Welcome on board ${displayName}`);
}

