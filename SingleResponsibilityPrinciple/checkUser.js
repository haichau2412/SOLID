const data = {
    "goodCode": {
        displayName: "John",
        password: 123456,
    }
}
const checkUser = (userName, password) => {
    let displayName = "";
    if (data[userName] !== undefined) {
        displayName = data[userName].password === password ? data[userName].displayName : "Anonymous";
    }
    return displayName;
}
