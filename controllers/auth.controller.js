var mysql = require('mysql');
var con = require('../mysql-connection')

module.exports.login = function (req, res, next) {
	res.render('auth/login');
};
module.exports.postLogin = function (req, res, next) {
	var username = req.body.username;
	var password = req.body.password;
	con.query('SELECT * FROM users WHERE username = ?',username, function (err, result) { 
		if (err) throw err;
		if(!result) {
			res.render('auth/login', {
				
			})
		}
		if(result.password !== password){

		}

});
};