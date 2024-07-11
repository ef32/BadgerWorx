
export function storeLoginDetails(userDetails) {
    window.sessionStorage.setItem('loggedInDetails', userDetails);
}

export function clearLoginDetails() {
    window.sessionStorage.removeItem('loggedInDetails');
}

export function getUserLoginDetails() {
    const loggedInDetails =  window.sessionStorage.getItem('loggedInDetails');
    if (!loggedInDetails) {
        return null;
    }
    return JSON.parse(loggedInDetails);
}