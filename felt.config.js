'use strict'

/**
 * A recipe for Felt with React
 */

const
  rollup = require('felt-rollup'),
  buble = require('rollup-plugin-buble'),
  nodeResolve = require('rollup-plugin-node-resolve'),
  nodeGlobals = require('rollup-plugin-node-globals'),
  commonjs = require('rollup-plugin-commonjs'),
  replace = require('rollup-plugin-replace'),
  postcss = require('felt-postcss'),
  postcssImport = require('postcss-import'),
  cssnext = require('postcss-cssnext')

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        buble(),
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
        replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
        nodeResolve({
          browser: true,
          main: true
        })
      ],
      sourceMap: true
    }),
    '.css': postcss({
      plugins: [
        postcssImport(),
        cssnext()
      ],
      options: {
        map: { inline: false }
      }
    })
  }
}
