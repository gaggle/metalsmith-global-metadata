"use strict";
const merge = require("merge")

module.exports = function (opts) {
  if (!opts) opts = {env: process.env}
  return function (files, metalsmith) {
    const md = merge.recursive(true, metalsmith.metadata(), opts)
    metalsmith.metadata(md)
  }
}
