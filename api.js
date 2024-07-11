
export function getLoginDetails(form) {
    var body = JSON.stringify(Object.fromEntries(new FormData(form)));
    return new Promise((res, rej) => fetch("https://localhost:7082/api/Login", {
        method: 'POST',
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body
    }).then(response => {
        res(response);
    }).catch(err => {
        console.log(err);
        rej(err);
    }))
}