'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('           王宗禹'),
  handle: chalk.white('wangzy'),
  work: chalk.white('前端开发 / 未来推理小说家'),
  juejin: chalk.gray('https://juejin.cn/user/') + chalk.cyan('1063982984594861'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~sl2782087'),
  github: chalk.gray('https://github.com/') + chalk.green('sl2782087'),
  web: chalk.cyan('https://zongyu.wang'),
  npx: chalk.red('npx') + ' ' + chalk.white('wangzy'),
  labelWork: chalk.white.bold('    Work:'),
  labelJuejin: chalk.white.bold('    掘金:'),
  labelnpm: chalk.white.bold('     npm:'),
  labelGitHub: chalk.white.bold('  GitHub:'),
  labelWeb: chalk.white.bold('     Web:'),
  labelCard: chalk.white.bold('    Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const juejining = `${data.labelJuejin}  ${data.juejin}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               juejining + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
