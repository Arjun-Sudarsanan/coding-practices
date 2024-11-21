let myObj = {
    o1: 'test',
    o2: {
        name: "Sourav",
        contact: {
            email: "sourav@example.com",
            phone: "123-456-7890",
            check: {}
        }
    },
    o3: '3rd test'
};

const searchForKeys = (obj) => {
    let keyArray = [];
    for (key in obj) {
        keyArray.push(key);

        if(typeof obj[key] === "object" && typeof obj[key] !== null) {
            keyArray = keyArray.concat(searchForKeys(obj[key]))
        }
    }
    return keyArray;
}

console.log(searchForKeys(myObj));