const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const greeting = require('./greet.ff')

const app = express();

const greets = greeting()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index'
    )

});

// app.post('/greetings', function (req, res) {


//     greets.greet(req.body.text, req.body.radio)
//     console.log(greets.greet(req.body.text, req.body.radio));

//     res.redirect('/');
// });

app.post('/greetings', function (req, res) {
    let name = req.body.text
    let language = req.body.language

    if (name && language) {
       var msg= greets.greet(name, language)
    }
    if(!name ){
        var msg = greets.validateInputs(name,language)
    }
    if(!language){
        var msg = greets.validateInputs(name)
    }

    res.render('index',{
        msg
    })
});

app.post('/actions', function (req, res) {

});

app.post('/actions/type', function (req, res) {

});

const PORT = process.env.PORT || 3010;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
})
