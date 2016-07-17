'use strict'

/**
 * Standard recipe for Felt
 */

const
  rollup = require('felt-rollup'),
  babel = require('rollup-plugin-babel'),
  nodeResolve = require('rollup-plugin-node-resolve'),
  nodeGlobals = require('rollup-plugin-node-globals'),
  commonjs = require('rollup-plugin-commonjs'),
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  autoprefixer = require('autoprefixer')

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        babel({
          babelrc: false,
          exclude: 'node_modules/**',
          presets: ['es2015-rollup', 'stage-0', 'react']
        }),
        commonjs({
          exclude: 'node_modules/process-es6/**',
          include: [
            'node_modules/fbjs/**',
            'node_modules/object-assign/**',
            'node_modules/react/**',
            'node_modules/react-dom/**'
          ]
        }),
        nodeGlobals(),
        nodeResolve({ main: true, browser: true })
      ],
      sourceMap: true
    }),
    '.css': postcss({
      plugins: [
        postcssImport(),
        autoprefixer()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
