(function(){

	const config = {
		apiKey: "AIzaSyA9MChyacQJ0YRLU3aFbG_3B7z0-fB7vVw",
    	authDomain: "b-smart-8df01.firebaseapp.com",
    	databaseURL: "https://b-smart-8df01.firebaseio.com",
    	storageBucket: "b-smart-8df01.appspot.com",
	}
	firebase.initializeApp(config)

	const txtEmail = document.getElementById('txtEmail')
	const txtPassword = document.getElementById('txtPassword')
	const btnSignUp = document.getElementById('btnSignUp')
	const btnCancel = document.getElementById('btnCancel') // script js pour changer de page ou href

	btnSignUp.addEventListener('click', e =>{
		const email = txtEmail.value
		const pass = txtPassword.value
		const auth = firebase.auth()

		const promise = auth.createUserWithEmailAndPassword(email, password)
		//promise.catch(e => console.log(e.message)) : catch exception, créer event équivalent à chaque exception
	})

})