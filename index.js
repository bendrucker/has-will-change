'use strict'

var window = require('global/window')
var document = require('global/document')
var toArray = require('to-array')

var regex = /will\-change/

module.exports = hasWillChange()

function hasWillChange () {
  if (!window.getComputedStyle) return false
  var styles = window.getComputedStyle(document.documentElement, '')
  return regex.test(toArray(styles).join(''))
}
