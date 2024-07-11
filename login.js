import {getLoginDetails} from './api.js'
import { storeLoginDetails } from './session-manager.js';

const form = document.forms['login-form'];
function handleError(error) {
    if (error.message === "404") {
        const invalidUserDetails = document.createElement('p');
       const username =  document.getElementById('username');
       invalidUserDetails.innerHTML = "Invalid username or password";
       invalidUserDetails.id = "invalid-user";
       invalidUserDetails.setAttribute('aria-live', 'polite');
       form.insertBefore(invalidUserDetails, username);
       return;
    }
    alert('There seems to be an error logging you in')
}

document.forms['login-form'].addEventListener('submit', (event) => {
    event.preventDefault();
    const invalid =  document.getElementById('invalid-user');
    if (!!invalid) {
        invalid.remove();
    }
    getLoginDetails(event.target).then((response) => {
        if (response.status === 404) {
            throw new Error(response.status)
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }).then((body) => {
        storeLoginDetails(JSON.stringify(body));
        window.location.href = './index.html'
    }).catch((error) => {
        handleError(error)
    });
});