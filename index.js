"use strict"

const pify = require("pify")
const averageColour = pify(require("image-average-color"))
const is = require("@sindresorhus/is")
const rgbHex = require("rgb-hex")

module.exports = async (path) => {
    if (!is.string(path)) throw new TypeError("`path` is not a string!")

    const [red, green, blue] = await averageColour(path)

    return {
        red,
        green,
        blue,
        rgb: `rgb(${red}, ${green}, ${blue})`,
        hex: `#${rgbHex(red, green, blue)}`,
    }
}
