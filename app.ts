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

class App {
  credito: number = 0;

  readonly availableProducts: Producto[] = []
  cart: Carrito = { productos: [], total: 0, cantidadProductos: 0 }
  menuMessage = ''

  readonly options = {
      addCredit: "Agregar credito",
      buyProducts: "Comprar Productos",
      displayCart: "Ver Carrito",
      pay: "Pagar",
  }

  get productsNames() {
      return this.availableProducts.map( p => p.nombre)
  }

  constructor() {
    this.availableProducts = this.fetchProducts();
    this.cart = this.fetchCart();

    this.start();
  }

  start() {
    this.displayMainMenu()
  }

  fetchProducts() {
    const productsStrings = fs.readFileSync("productos.json", "utf-8");
    const products = jsonParse<Producto[]>(productsStrings)

    return products
  }

  fetchCart() {
    const cartString = fs.readFileSync("carrito.json", "utf-8");
    const cart = jsonParse<Carrito>(cartString)

    return cart
  }

  displayLogo() {
    console.log(
        chalk.green(
          figlet.textSync('MercaScript', { horizontalLayout: 'full' })
        )
      );
  }

  async displayMainMenu() {
    console.clear();
    this.displayLogo();
    console.log({ credito: this.credito }, this.menuMessage)
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: "Que desea hacer?",
        choices: Object.values(this.options)
    })
    this.executeOption(answer)
  }

  executeOption(answer: { option: string }) {
    this.menuMessage = '';
    const { options } = this

    switch (answer.option) {
      case options.addCredit:
        this.addCredit()
        break;
      
      case options.buyProducts:
        this.displayProducts();
        break;

      case options.displayCart:
        this.displayCart();
        break

      case options.pay:
        this.checkout();
        break
    }
  }
  
  async addCredit() {
    console.clear();
    const { additionalCredit } = await inquirer.prompt([
      {
        type: "number",
        name: "additionalCredit",
        message: "Cuanto credito?",
        default: 0
      }
    ])
    this.credito += additionalCredit;
    this.displayMainMenu();
  }

  async displayProducts() {
    console.clear();

    const { selectedProduct } = await inquirer.prompt({
        type: 'list',
        name: 'selectedProduct',
        message: "Elija un producto",
        choices: this.productsNames
    })

    this.addProductToCart(selectedProduct);
    this.displayMainMenu();
  }

  async addProductToCart(selectedProductName: string) {
    const selectedProduct = this.availableProducts.find( p => p.nombre === selectedProductName)
    const updatedCartProducts: Producto[] = selectedProduct ? 
        [...this.cart.productos, selectedProduct] : this.cart.productos;
    
    this.updateCart(updatedCartProducts);
  }

  updateCart(products: Producto[]) {
    const updatedCart: Carrito = { 
        productos: products, 
        cantidadProductos: products.length, 
        total: 0 
    }

    for (let p of products) {
        updatedCart.total += p.precio
    }

    this.cart = updatedCart
  }

  async displayCart() {
    console.clear();

    console.log(this.cart)

    const answer = await inquirer.prompt({
        type: 'list',
        name: 'pay',
        message: 'Desea pagar?',
        choices: [ 
            "Sí", 
            "No (Volver al menú)" 
        ]
    })

    answer.pay === "Sí" ? this.checkout() : this.displayMainMenu();
  }

  checkout() {
    console.clear()
    
    const message = this.credito >= this.cart.total ? 
        chalk.blueBright("Gracias y vuelva pronto! Su cambio es: ") : 
        chalk.redBright("Su credito es insuficiente.")

    if (this.credito >= this.cart.total) {
        this.displayLogo();
        console.log(message, this.credito - this.cart.total)
        this.exportCartJson();
    } else {
        this.menuMessage = message
        this.displayMainMenu();
    }
  }

  exportCartJson() {
    const cartJson = stringify<Carrito>(this.cart, undefined, ' ');

    fs.writeFileSync("carrito.json", cartJson)
  }

}

new App();