const UserModel = Backbone.Model.extend({
})

UserModel.logIn =  function(email, pw){
	if(typeof email !== 'string' || typeof pw !== 'string'  ){ throw new Error(`UserModel.login() must receive string 2 string paramaters for email and password`) }

	return $.ajax({
		method: 'POST',
		data: JSON.stringify({ email: email, password: pw}),
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/auth/login'
	})
}

UserModel.register =  function(data){
	if(typeof data !== 'object' ){ throw new Error(`UserModel.register() must receive an object`) }
	if(typeof data.email === 'undefined' || typeof data.password === 'undefined'  ){ throw new Error(`UserModel.register() must receive an object w/ email + password`) }

	return $.ajax({
		method: 'POST',
		data: JSON.stringify({ email: email, password: pw}),
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/auth/register'
	})
}

UserModel.getCurrentUser =  function(){
	return $.ajax({
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		url: '/auth/current'
	})
}


UserModel.logOut =  function(){
	console.log('logging in!')
	return $.ajax({
		method: 'GET',
		url: '/auth/logout'
	})
}