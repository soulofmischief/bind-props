# bind-props

[![codecov.io](https://img.shields.io/codecov/c/github/soulofmischief/bind-props/master.svg?style=flat-square)](http://codecov.io/gh/soulofmischief/bind-props?branch=master)

## About

This module binds each function property of an object to a new context. This is useful for defining class methods in separate files in order to reduce module size and increase code clarity.

## Example

###### index.js
```js
import { Test } from './Test'

Test.ctrl.test()

// -> Sup
```


###### Test.js
```js
import * as ctrl from './ctrl'

export class Test {
  constructor() { 
    super()
    this.message = 'Sup'
  }

  ctrl = bindProps( this, ctrl )
}
```

###### ctrl.js
```js
export function test() {
  console.log( this.message )
}
```