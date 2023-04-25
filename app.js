'use strict';

// login
const loginForm = document.querySelector('#login');
const loginSuccess = document.querySelector('.login-success');
const loginError = document.querySelector('.input-form-error-message');

// create account
const createAccountForm = document.querySelector('#createAccount');
const createSuccess = document.querySelector('.account-success');
const createError = document.querySelector('.input-form-error-message');
const createPage = document.querySelector('#linkCreateAccount');

// authentication admin function
const authentication = function (username, password) {
	if (username === 'admin' && password === 'password') return true;
	else {
		return false;
	}
};

// login handler
loginForm.addEventListener('submit', function (e) {
	e.preventDefault();

	const username = loginForm.username.value;
	const password = loginForm.password.value;

	const authenticated = authentication(username, password);

	if (authenticated) {
		loginForm.classList.add('hidden');
		loginSuccess.classList.remove('hidden');
	} else {
		loginError.innerHTML = `Incorrect username or password`;
	}
});

// create account handler
createPage.addEventListener('click', function (e) {
	e.preventDefault();
	loginForm.classList.add('hidden');
	createAccountForm.classList.remove('hidden');

	createAccountForm.addEventListener('submit', function (e) {
		e.preventDefault();

		const createUser = document.querySelector('.username');
		const createPassword = document.querySelector('.password');
		const createEmail = document.querySelector('.email');
		const createConfirm = document.querySelector('.confirm-password');

		if (
			createConfirm.value === '' ||
			createEmail.value === '' ||
			createPassword.value === '' ||
			createUser.value === ''
		) {
			alert('Fill in all required fields!');
		} else {
			createAccountForm.classList.add('hidden');
			createSuccess.classList.remove('hidden');
		}
	});
});
