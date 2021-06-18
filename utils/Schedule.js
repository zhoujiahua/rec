const schedule = require('node-schedule');
/**
 * https://www.jianshu.com/p/8d303ff8fdeb
 * 每分钟的第30秒触发： '30 * * * * *'
 * 每小时的1分30秒触发 ：'30 1 * * * *'
 * 每天的凌晨1点1分30秒触发 ：'30 1 1 * * *'
 * 每月的1日1点1分30秒触发 ：'30 1 1 1 * *'
 * 2016年的1月1日1点1分30秒触发 ：'30 1 1 1 2016 *'
 * 每周1的1点1分30秒触发 ：'30 1 1 * * 1'
 * */

const scheduleCronstyle = (rules) => {
  schedule.scheduleJob(rules, () => {
    console.log(`The data acquisition task is performed at the beginning-${Date()}`.cyan);
    require('./TFloor')();
  });
}

module.exports = (rules = '0 0 * * * *') => scheduleCronstyle(rules)