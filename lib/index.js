
/** Bind each function property of an object to a new context. */
module.exports = function bindProps( context, obj ) {
  // Get entries, map each key/value pair to a new key/value pair
  // that's bound to the context.
  // Reduce back to an object.
  // Recurse for any objects, which are assumed to be Modules.
  // This allows for namespacing.

  return Object.entries( obj )
    .map( entry => {
      return typeof entry[ 1 ] === 'function'
        /* $FlowFixMe map */
        ? [ entry[ 0 ], entry[ 1 ].bind( context )]
        : typeof entry[ 1 ] === 'object'
          ? [ entry[ 0 ], bindProps( context, entry[ 1 ])]
          : entry
    }).reduce(( a, c ) => { a[ c[ 0 ]] = c[ 1 ]; return a }, {})
}