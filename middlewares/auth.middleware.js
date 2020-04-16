var mysql = require('mysql')
var con = require('../mysql-connection')

module.exports.requireAuth = function (req, res, next){
	if(!req.cookies.userId){
		res.redirect('/auth/login');
		return;
	}
	con.query('SELECT * FROM users WHERE id = ?', req.cookies.userId, function (err, result) { 
  		if (err) throw err;
  		if(!result[0]){
  			res.redirect('/auth/login');
  	}
  		next()
	});
	
};