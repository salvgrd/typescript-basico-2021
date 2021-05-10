#!/usr/bin/env node

import inquirer from "inquirer"
import chalk = require("chalk")
import figlet from "figlet"
import { Producto, Carrito } from './interfaces'
import { stringify, jsonParse } from './utils'
import fs = require('fs')

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
  carrito: Carrito = { productos: [], cantidadProductos: 0, total: 0 }
  readonly options = { 
    addCredit: "agregar crédito" ,
    addProduct: "agregar producto"
  }
  readonly availableProducts: Producto[] = []

  get productsNames(){
    return this.availableProducts.map(p => p.nombre)
  }

  constructor() {
    this.availableProducts = this.fetchProducts()
    this.start();
  }

  fetchProducts() {
    const productsString = fs.readFileSync("productos.json","utf-8")
    const productsParsed = jsonParse<Producto[]>(productsString) 

    return productsParsed
  }

  start() {
    
    this.displayMainMenu()
  }

  async displayMainMenu() {
    console.clear()
    this.displayLogo()
    console.log({ credito: this.credito })
    console.log({ carrito: this.carrito })
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'option',
        choices: Object.values(this.options)
    })
    this.executeOption(answer)
  }

  displayLogo () {
    console.log(
      chalk.green(
        figlet.textSync('MercaScript', { horizontalLayout: 'full' })
      )
    );
  }
  executeOption(answer: { option: string }) {
    switch (answer.option) {
      case this.options.addCredit:
        this.agregarCredito()
        break;
      
      case this.options.addProduct:
        this.agregarProductoCarrito()
        break;
    }
  }
  
  async agregarCredito() {
    console.clear()
    const { creditoAdicional } = await inquirer.prompt([
      {
        type: "number",
        name: "creditoAdicional",
        message: "Cuanto credito?",
        default: 0
      }
    ])
    this.credito += creditoAdicional;
    this.displayMainMenu();
  }

  async agregarProductoCarrito() {
    
    const { selectedProduct } = await inquirer.prompt([
      {
        type: "list",
        name: "selectedProduct",
        message: "Qué producto deseas añadir?",
        choices: this.productsNames
      }
    ])

    // this.carrito.productos = [...this.carrito.productos, selectedProduct]
    // this.carrito.cantidadProductos = this.carrito.productos.length
    // this.carrito.total = 0


    this.displayMainMenu()

  }

  async buildCart(productName: string) {
      const selectedProduct = this.availableProducts.find( p => p.nombre === productName)
      const productList = selectedProduct ? [...this.carrito.productos,selectedProduct] : this.carrito.productos

  }


}


new App();