module.exports = function Greetings(list) {

    var storedNames = list || []


    function greet(personName, language) {

        if (language === "eng") {
            return "Hello, " + personName
        } else if (language === "afr") {
            return "Goeie dag, " + personName
        } else if (language === "isi") {
            return "Molo, " + personName
        }
    }
    function validateInputs(name,language){
        if (name ===""){
            return "please Enter name" 
        }
        if (language ===""){
            return "please select language"
        }
        if(name ===""  && language ===""){
            return "please enter valid name and select language"
        }  
    }
    

    function errorMessenges(name) {
        if (storedNames.includes(name)) {
            return true
        }
        return false
    }

    function setNames(personName) {
        if (errorMessenges(personName) === false) {
            storedNames.push(personName)
            return true
        }
        else {
            return false;
        }

    }

    function getNames() {
        return storedNames
    }

    function nameCount() {
        return storedNames.length
    }

    function setGreet(greet){
        
    }

    return {
        greet,
        setNames,
        getNames,
        nameCount,
        errorMessenges,
        validateInputs
    }
}
