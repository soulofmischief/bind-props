const vars = require( './vars' )

module.exports = {
  test() {
    return this.value
  },

  value: vars.value,

  scoped: {
    test() {
      return this.value
    },

    value: vars.value,
  },
}
