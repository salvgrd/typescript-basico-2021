#!/usr/bin/env node

import inquirer from "inquirer"
import chalk = require("chalk")
import figlet from "figlet"
// import { Producto, Carrito } from './interfaces'
// import { stringify, jsonParse } from './utils'
// import fs = require('fs')

console.clear()

console.log(
    chalk.green(
      figlet.textSync('MercaScript', { horizontalLayout: 'full' })
    )
  );

async function prompOptions() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'Actions',
        choices: [
            "choice 1",
            "choice 2"
        ]
    })
    console.log(answer)
}

prompOptions()
