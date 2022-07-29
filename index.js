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
    
    res.render('index', {

    });
})

app.post('/greetings', function (req, res) {
    let name = req.body.text
    let language = req.body.language

    if (!language) {
        var msgs = greets.validateInputs(name, "")
    }
    if (name && language) {
       // greets.setNames(name)
        var msg = greets.greet(name, language)
    }
    if (!name) {
        var msgs = greets.validateInputs(name, language)
    }
    if (!name && !language) {
        var msgs= greets.validateInputs("", "")
    }
    if (name) {
      greets.setNames(name);
        var count = greets.nameCount()
    }
    if(name){
        // var msg = undefined
        var reset = greets.reseted()
        
    }

    res.render('index', {
        msg,
        msgs,
        count,
        reset
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
