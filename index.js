/**
 * @Description: 这是gws-cli的工具集入口
 * @author Edward Xia
 * @date 2019-04-19
*/
const path = require('path');
const init = require('./lib/getModules.js');
// const cwd = process.cwd();
// const rootPath = path.resolve(__dirname, "../");
const log = console.log;

// let gwsUtils = init.getModules(path.join(__dirname, './lib'),'.js');

exports = module.exports = {
    arraySort: require(path.join(__dirname, './lib','arraySort.js'))
}