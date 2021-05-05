#!/usr/bin/env node

import inquirer from "inquirer"
import chalk = require("chalk")
import figlet from "figlet"
// import { Producto, Carrito } from './interfaces'
// import { stringify, jsonParse } from './utils'
// import fs = require('fs')

/**
 * Proyecto final: Crear una herramienta de CLI que permita exportar un JSON de tipo "Carrito", y que ademas:
 * Nos permita cargar "credito"
 * Nos permita agregar y quitar productos del carrito
 * Nos permita utilizar el credito para pagar el carrito de compras
 * Nos permita ver los productos disponibles y sus precios
 */

// npm run build && npm run local

console.clear()

class App {
  credito: number = 0;

  constructor() {
    this.start();
  }

  start() {
    console.log(
      chalk.green(
        figlet.textSync('MercaScript', { horizontalLayout: 'full' })
      )
    );
    this.promptOptions()
  }

  async promptOptions() {
    console.log({ credito: this.credito })
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'option',
        choices: [
            "Agregar credito",
            "choice 2"
        ]
    })
    this.executeOption(answer)
  }

  executeOption(answer: { option: string }) {
    switch (answer.option) {
      case "Agregar credito":
        this.agregarCredito()
        break;
      
      case "choice 2":
        console.log(`mostrar credito: ${this.credito}`);
      break;
    }
  }
  
  async agregarCredito() {
    const { creditoAdicional } = await inquirer.prompt([
      {
        type: "number",
        name: "creditoAdicional",
        message: "Cuanto credito?",
        default: 0
      }
    ])
    this.credito += creditoAdicional;
  }
}

new App();