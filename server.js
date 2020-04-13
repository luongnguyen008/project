const express = require('express')
const app = express()
const port = 3000
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'))

app.use('/users', userRoute)
app.use('/auth', authRoute)

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('about');
});


app.listen(port, () => console.log('Example app listening at http://localhost:' + port))