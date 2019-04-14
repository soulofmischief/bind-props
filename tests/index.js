const o = require( 'ospec' )
const ctrl = require( './ctrl' )
const vars = require( './vars')
const bindProps = require( '../lib' )

const Test = new class C_Test {
  constructor( value ){
    // Assign properties
    Object.assign( this, { value })

    // Bind methods
    this.ctrl = bindProps( this, ctrl )
  }
}( vars.value )


o.spec( 'Test bound items', function () {
  o( 'regular', function () {
    o( Test.ctrl.test()).equals( Test.value )
  })

  o( 'scoped', function () {
    o( Test.ctrl.scoped.test()).equals( Test.value )
  })
})

o.spec( 'Test non-bound items', function () {
  o( 'regular', function () {
    o( Test.ctrl.value ).equals( vars.value )
  })

  o( 'scoped', function () {
    o( Test.ctrl.scoped.value ).equals( vars.value )
  })
})