# Image Average Colour [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/image-average-colour/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/image-average-colour)

Find the average colour of an image.

[![NPM Badge](https://nodei.co/npm/image-average-colour.png)](https://npmjs.com/package/image-average-colour)

## Install

```sh
npm install image-average-colour
```

## Usage

```js
const imageAverageColour = require("image-average-colour");

(async () => {
    await imageAverageColour("test/image.png")
    //=> { red: 3, green: 3, blue: 3, rgb: 'rgb(3, 3, 3)', hex: '#030303' }
})()
```

## API

### imageAverageColour(path)

#### path

Type: `string`

The path to the image.
