/*
 * @Date: 2023-03-13 01:03:27
 * @LastEditors: 夏洁琼 xiajieqiong@tuzhanai.com
 * @FilePath: \monitor\rollup.config.js
 * @Author: 夏洁琼 xiajieqiong@tuzhanai.com
 * @Description:
 * @LastEditTime: 2023-03-13 01:32:27
 */
const typescript = require('@rollup/plugin-typescript');
const clear = require('rollup-plugin-clear');
const terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/main.ts',
  output: {
    name: 'monitor',
    dir: 'dist',
    format: 'umd',
    sourcemap:  "inline"
  },
  plugins: [
    typescript(),
    clear({
      // required, point out which directories should be clear.
      targets: ['dist'],
      // optional, whether clear the directores when rollup recompile on --watch mode.
      watch: true, // default: false
    }),
    terser(),
  ],
};