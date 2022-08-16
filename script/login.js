document.getElementById('submit').addEventListener('click', function () {
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    // console.log(email, password);

    if (email === 'pola@baap.com' && password === '123456') {
        alert('Yor are a valid user');
    } else {
        alert('Sorry! Your user name or password invalid')
    }
})