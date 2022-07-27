const assert = require('assert');

const greeting = require('../greet.ff'); 

describe("Greet function", function () {


    it("Should greet the name that was entered and greet with the language selected", function () {
        const greets = greeting()
       
        assert.equal("Hello, Joe", greets.greet("Joe", "eng"));

    })

    it("Should store the names entered into empty array", function () {
        const greets = greeting()

        greets.setNames('fdfd')
        assert.deepEqual(['fdfd'], greets.getNames());

    })



    it("Should get the length of the names stored", function () {
        const greets = greeting()

        greets.setNames('zee')
        greets.setNames('mako')
  
          assert.equal(2, greets.nameCount());
  
      })

    //   it("Should get error message when theres a duplicate", function () {
    //     const greets = greeting()

    //     greets.setNames('zee')
    //     greets.setNames('mako')
    //     greets.setNames('zee')
  
    //       assert.equal('false' ,greets.errorMessenges());
  
    //   })

})