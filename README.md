# bind-props

[![build](https://img.shields.io/travis/soulofmischief/bind-props/master.svg?style=flat-square)](https://travis-ci.org/soulofmischief/bind-props)
[![coverage](https://img.shields.io/codecov/c/github/soulofmischief/bind-props/master.svg?style=flat-square)](http://codecov.io/gh/soulofmischief/bind-props?branch=master)
[![size](https://img.shields.io/bundlephobia/min/@soulofmischief/bind-props.svg?style=flat-square)](https://www.npmjs.com/package/@soulofmischief/bind-props)

## About

This module binds each function property of an object to a new context. This is useful for defining class methods in separate files in order to reduce module size and increase code clarity.

## Motivation

Modularity is awesome. Javascript classes aren't very modular. Class methods must be defined inside the scope of the definition if they wish to inherit the class context! And the standard way for adding static methods doesn't work with namespaced methods. 
 
 `bind-props` helps to bring sanity back to your classes by allowing you to define large methods in separate files, namespacing them how you choose.

Private methods are achievable simply by using `Function.prototype.call` on a non-exported method with `this` while inside of any exported instance method. 

## Install

```$ npm install @soulofmischief/bind-props --save```

## Example

###### Test.js
```js
import * as ctrl from './ctrl'

export class Test {
  constructor() { 
    super()
    this.message = 'Howdy!'
  }

  ctrl = bindProps( this, ctrl )
}
```

###### index.js
```js
import { Test } from './Test'

Test.ctrl.test()

// -> Public: Howdy!
// -> Private: Howdy!

Test.ctrl.testPrivate()

// -> undefined
```

###### ctrl.js
```js
export function test() {
  console.log( 'Public: ', this.message )
  testPrivate.call( this )
}

function testPrivate() {
  console.log( 'Private: ', this.message )
}
```

