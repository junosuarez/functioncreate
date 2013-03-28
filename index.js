function FunctionCreate(cons, proto) {
  var fn = function () {
    var o = Object.create(fn.prototype)
    var it = cons.apply(o, arguments)
    if (typeof it === 'function') {
      it = it.bind(o)
    }
    inherit(it, o)
    return it
  }
  fn.prototype = proto || {}
  return fn;
}

function inherit(obj, parent) {
  for(var x in parent) {
    if (typeof parent[x] === 'function') {
      obj[x] = parent[x].bind(parent)
    } else {
      obj[x] = parent[x]
    }
  }
  return obj
}

module.exports = FunctionCreate