var mysql = require('mysql');
var con = require('../mysql-connection')

module.exports.login = function (req, res, next) {
	res.render('auth/login');
};
module.exports.postLogin = function (req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	con.query('SELECT * FROM users WHERE username = ?',[username], function (err, result) { //result trả về 1 array chứa object
		//console.log(result[0].username)
		if (err) throw err;
		if(result[0].username !== username) {
			res.render('auth/login', {
				errors:[
					'User does not exists'
				],
				values: req.body
			});
			return;
		}
		if(result[0].password !== password){
			res.render('auth/login', {
				errors:[
					'Wrong password!'
				],
				values: req.body
			});
			return;
		}
		res.cookie('userId', result[0].id)
		res.redirect('/users');

});
};