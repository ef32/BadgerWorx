import { clearLoginDetails, getUserLoginDetails } from "./session-manager.js";

function updateHome(user) {
   var greeter =  document.getElementById('welcome-message');
   var login = document.getElementById('login');
   var handleLogoutListener = (event) => {
    event.preventDefault();
    event.target.innerHTML = 'Log in';
    clearLoginDetails();
    event.target.setAttribute('href', './login.html');
    greeter.innerHTML="Welcome to BadgerWorx";
    login.removeEventListener('click', handleLogoutListener, true)
}
   const {firstName, lastName} = user
   if (!!greeter) {
    greeter.innerHTML = `Hello ${firstName} ${lastName}, welcome to your badgerworx!`
   }

   if (!!login) {
    login.innerHTML = 'Logout'
    login.setAttribute('href', '#');
    login.addEventListener('click', handleLogoutListener, true)
   }
}

window.addEventListener('load', () => {
    const user = getUserLoginDetails();
    if (!user) {
        return false;
    }
    updateHome(user);
});