'use strict'

const argv = require('yargs-parser')

module.exports = function parseArgs (args) {
  const parsedArgs = argv(args, {
    number: ['port', 'body-limit', 'plugin-timeout'],
    boolean: ['pretty-logs', 'options', 'help', 'watch', 'repl'],
    string: ['log-level', 'address', 'prefix', 'file'],
    envPrefix: 'FASTIFY_',
    alias: {
      help: ['h'],
      file: ['f'],
      address: ['a'],
      port: ['p'],
      options: ['o'],
      prefix: ['r'],
      watch: ['w'],
      repl: ['-RP'],
      'log-level': ['l'],
      'pretty-logs': ['P'],
      'plugin-timeout': ['T']
    },
    default: {
      'log-level': 'error',
      'pretty-logs': false,
      'watch': false,
      'repl': false,
      'options': false,
      'plugin-timeout': 10 * 1000,
      'file': 'src/index.js'
    }
  })

  return Object.assign({}, {
    _: parsedArgs._,
    help: parsedArgs.help,
    address: parsedArgs.address,
    bodyLimit: parsedArgs.bodyLimit,
    file: parsedArgs.file,
    logLevel: parsedArgs.logLevel,
    options: parsedArgs.options,
    repl: parsedArgs.repl,
    pluginTimeout: parsedArgs.pluginTimeout,
    port: parsedArgs.port,
    prefix: parsedArgs.prefix,
    watch: parsedArgs.watch,
    prettyLogs: parsedArgs.prettyLogs
  })
}
