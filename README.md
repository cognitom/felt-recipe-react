# felt-recipe-react

[![Build Status][travis-image]][travis-url]

A recipe for [Felt](https://github.com/cognitom/felt) with React.
This recipe is based on @yamafaktory's [buble-react-rollup-starter](https://github.com/yamafaktory/buble-react-rollup-starter).

## Usage via CLI

```bash
$ npm install -g felt felt-recipe-react
$ felt --recipe react --src public
```

## Usage via Express

```bash
$ npm install felt felt-recipe-react
```

```javascript
'use strict'
const
  express = require('express'),
  felt = require('felt'),
  recipe = require('felt-recipe-react')

const
  app = express(),
  flavor = { src: 'public' }

app.use(felt(recipe, flavor))
app.use(express.static('public'))
app.listen(3000)
```

[travis-image]:https://img.shields.io/travis/cognitom/felt-recipe-react.svg?style=flat-square
[travis-url]:https://travis-ci.org/cognitom/felt-recipe-react
