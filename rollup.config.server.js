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

module.exports = {
  input: 'web/server.ts',
  output: {
    name: 'server',
    dir: 'webdist',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    clear({
      targets: ['dist'],
      watch: true,
    }),
  ],
};
