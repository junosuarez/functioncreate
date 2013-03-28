# FunctionCreate
Create functions with prototypal inheritance

AKA, let's combine the Substack pattern with the Builder pattern.

## usage example

    var FunctionCreate = require('functioncreate')

    var Greeter = FunctionCreate(function (name) {
      this.name = name

      return function () {
        return 'hey ' + this.name
      }
    })

now we can add functions to Greeter's prototype, like we would with an object:

    Greeter.prototype.callMe = function (name) {
      this.name = name
    }

    var greet = Greeter('Amy')

    greet().should.equal('hey Amy')

    greet.callMe('Maybey')

    greet().should.equal('hey Maybey')

Unlike true prototypal inheritance, properties and methods on the prototype are copied over to the new function at construction time and further runtime modifications will not be copied.

## running the tests

From package root:

    $ npm install
    $ npm test

## performance considerations

If you're are particularly concerned about performance, read through the (short) implementation and benchmark your particular use case. It was adequate for my needs.

## contributors

jden <jason@denizac.org>

## license

MIT. (c) 2013 Agile Diagnosis <hello@agilediagnosis.com>. See LICENSE.md