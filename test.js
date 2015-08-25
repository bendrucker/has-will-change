'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('supported', function (t) {
  var has = proxyquire('./', {
    'global/window': {
      getComputedStyle: function () {
        return {
          0: 'will-change',
          length: 1
        }
      }
    }
  })
  t.ok(has)
  t.end()
})

test('unsupported', function (t) {
  var has = proxyquire('./', {
    'global/window': {
      getComputedStyle: function () {
        return {
          length: 0
        }
      }
    }
  })
  t.notOk(has)
  t.end()
})
