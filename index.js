#!/usr/bin/env node

const {packageJson} = require('mrm-core');
const argv = require('minimist')(process.argv.slice(2));
const {name, cmd} = argv;

if ((typeof name !== 'string') || !name) {
  throw new TypeError('climod-add-script script name not specified.');
} else if (typeof cmd !== 'string') {
  throw new TypeError('climod-add-script command not specified.');
}

packageJson().appendScript(name, cmd).save();
