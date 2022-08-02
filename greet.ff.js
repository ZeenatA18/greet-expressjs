module.exports = function Greetings() {

    var storedNames = {}


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
        if (name === "" && !language) {
            return "please enter valid name and select language"
        }
        else {if(name === "") {
            return "please Enter name"
        }
        if (!language) {
            return "please select language"
        }
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
        return Object.keys(storedNames)
    }

    function nameCount() {
       var naamlist = Object.keys(storedNames);

        return naamlist.length;
    }

    function naam(){
        var listed = Object.values(storedNames);
        return listed
    }

    function getUsercounter(naam){
    return storedNames[naam]
    }

    function reseted(){
        // return storedNames = {}
        
        
    }


    return {
        greet,
        setNames,
        getNames,
        nameCount,
        errorMessenges,
        validateInputs,
        reseted,
        naam,
        getUsercounter
    }
}
