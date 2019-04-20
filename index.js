/**
 * @Description: 这是gws-cli的工具集入口
 * @author Edward Xia
 * @date 2019-04-19
*/
const path = require('path');
const init = require('./lib/getModules.js');
const cwd = process.cwd();
const log = console.log;

let gwsUtils = init.getModules(path.resolve(cwd, './lib'),'.js');
exports = module.exports = gwsUtils;