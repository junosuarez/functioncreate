var chai = require('chai')
chai.should()

var FunctionCreate = require('../index')
describe('FunctionCreate', function () {
  it('works like Object.create but for functions', function () {
    // because ES5 is silly

    var Greeter = FunctionCreate(function (name) {
      this.name = name

      return function () {
        return 'hey ' + this.name
      }
    })

    Greeter.prototype.callMe = function (name) {
      this.name = name
    }

    var greet = Greeter('Amy')

    greet().should.equal('hey Amy')

    greet.callMe('Maybey')

    greet().should.equal('hey Maybey')

  })
})