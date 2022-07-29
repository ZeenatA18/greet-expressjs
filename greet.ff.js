module.exports = function Greetings(list) {

    var storedNames = list || {}


    function greet(personName, language) {

        let alphabet = /^[a-z A-Z]+$/

        if (alphabet.test(personName)) {
            if (language === "eng") {
                return "Hello, " + personName
            } else if (language === "afr") {
                return "Goeie dag, " + personName
            } else if (language === "isi") {
                return "Molo, " + personName
            }
        }else{
            return "ERROR!! Use Alphabet only"
        }
    }
    function validateInputs(name, language) {
        if (name === "" && language === "") {
            return "please enter valid name and select language"
        }
        if (name === "") {
            return "please Enter name"
        }
        if (language === "") {
            return "please select language"
        }
    }


    function errorMessenges(name) {
        if (storedNames.includes(name)) {
            return true
        }
        return false
    }

    function setNames(personName) {
        if (storedNames[personName] == undefined) {
            storedNames[personName] =1 
        }
        else {
            storedNames[personName]++

        }

    }

    function getNames() {
        return storedNames
    }

    function nameCount() {
       var naamlist = Object.keys(storedNames);

        return naamlist.length;
    }

    function reseted(){
        nameCount()
    }


    return {
        greet,
        setNames,
        getNames,
        nameCount,
        errorMessenges,
        validateInputs,
        reseted
    }
}
