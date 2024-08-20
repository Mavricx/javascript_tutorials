const User = {
    _email: 'email@email.com',
    _password: 'password',

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    }
}

const harish = Object.create(User);
console.log(harish.email);

