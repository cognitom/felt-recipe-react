# felt-recipe-react

A recipe for [Felt](https://github.com/cognitom/felt) with React.

```bash
$ npm install felt-recipe-react
```

## Usage via CLI

```bash
$ felt --recipe react --src public
```

## Usage via Express

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
