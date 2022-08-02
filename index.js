const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const greeting = require('./greet.ff');

const flash = require('express-flash');
const session = require('express-session');

const app = express();

const greets = greeting()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(session({
    secret: "This is my long String that is used for session",
    resave: false,
    saveUninitialized:true
}));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash());


app.get('/', function (req, res) {

    res.render('index', {

    });
})

app.post('/greetings', function (req, res) {
    let name = req.body.text
    let language = req.body.language

    // if (!language) {
    //     // var msgs = greets.validateInputs(name, "")
    //     req.flash('msg','Please select language')
    // }
    if (name && language) {
        // greets.setNames(name)
        var msg = greets.greet(name, language)
    }else {
        req.flash('error', greets.validateInputs(name,language))
    }

    // if (!name) {
    //     var msgs = greets.validateInputs(name, language)
    // }
    // if (!name && !language) {
    //     var msgs = greets.validateInputs("", "")
    // }


    if (name) {
        greets.setNames(name);
        var count = greets.nameCount()
    }
    if (name) {
        // var msg = undefined
        var reset = greets.reseted()

    }

    res.render('index', {
        msg,
        // msgs,
        count,
        reset
    })
});


app.get('/list', function (req, res) {

    res.render('actions', {
        name: greets.getNames()
    })
console.log(greets.getNames()
)
});

app.get('/count/:naam', function (req, res) {
    let username = req.params.naam
    let counter = greets.getUsercounter(username);
    let output = `${username} has been greeted ${counter} times.`;

    console.log(output)

    res.render('count', {
        output
    })
});

app.get('/actions/type', function (req, res) {

    let listedNames = req.body.text

    res.render("getNames", {
        getNames: listedNames
    })

});

const PORT = process.env.PORT || 3010;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
})
