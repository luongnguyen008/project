var mysql = require('mysql')
var con = require('../mysql-connection')
const shortid = require('shortid')

module.exports.index = function (req, res) {
    con.query('SELECT * FROM users', function (err, result) { // retrieve data 
    if (err) throw err;
    res.render('./users/users', { users: result});

  });
};

module.exports.create = function (req, res) {
  res.render('./users/create.pug', {})
};

module.exports.viewUser = function(req, res){
  var id = req.params.id;
  con.query('SELECT * FROM users WHERE id = ?', id, function (err, result) { 
  if (err) throw err;
  res.render('./users/viewUser', { users: result});
});
};

module.exports.postCreate = function (req, res) {
	req.body.id = shortid.generate(); //generate random id
	var values = [req.body.id, req.body.name, req.body.username, req.body.password]; // create an array that include user inputs
	console.log(req.body) //test
    con.query('INSERT INTO users (id, name, username, password) VALUES (?)',[values], function(err, result){
        if(err) throw err;
            console.log("1 record inserted"); //checked
        });
  res.redirect("/users")// update added dream
};
