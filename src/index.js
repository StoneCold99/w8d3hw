"use strict";
class RPGCharacter {
    constructor(name, gold = 0) {
        this.name = name;
        this.gold = gold;
    }
    attack() {
        throw new Error("Subclasses must implement the attack method");
    }
    defend() {
        throw new Error("Subclasses must implement the defend method");
    }
    collectGold(amount) {
        this.gold += amount;
    }
    changeFightingStyle(newWeapon) {
        throw new Error("Subclasses must implement the changeFightingStyle method");
    }
}
// Ogre Class
class Ogre extends RPGCharacter {
    attack() {
        console.log(`${this.name} attacks with a club!`);
    }
    defend() {
        console.log(`${this.name} defends with a shield!`);
    }
}
// Peon Class
class Peon extends RPGCharacter {
    attack() {
        console.log(`${this.name} attacks with a club!`);
    }
    defend() {
        console.log(`${this.name} defends with a shield!`);
    }
}
// Knight Class
class Knight extends RPGCharacter {
    constructor() {
        super(...arguments);
        this.weapon = "Sword";
        this.armor = "Armor";
    }
    attack() {
        console.log(`${this.name} attacks with a ${this.weapon}!`);
    }
    defend() {
        console.log(`${this.name} defends with ${this.armor}!`);
    }
    changeFightingStyle(newWeapon) {
        this.weapon = newWeapon;
    }
}
// Archer Class
class Archer extends RPGCharacter {
    attack() {
        console.log(`${this.name} attacks with a Bow and Arrow!`);
    }
    defend() {
        console.log(`${this.name} defends with a tunic!`);
    }
}
// ShoppingCart
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        console.log(`Added ${item} to your cart.`);
    }
    deleteItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Removed ${item} from your cart.`);
        }
        else {
            console.log(`${item} is not in your cart.`);
        }
    }
    viewCart() {
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
        }
        else {
            console.log(`Items in your cart: ${this.items.join(', ')}`);
        }
    }
}
const shoppingCart = new ShoppingCart();
// Adding items to the cart
shoppingCart.addItem("Sword");
shoppingCart.addItem("Bow and Arrow");
// Viewing the cart
shoppingCart.viewCart();
// Deleting an item
shoppingCart.deleteItem("Sword");
// Viewing the updated cart
shoppingCart.viewCart();
const ogre = new Ogre("Ryan");
const peon = new Peon("Alex");
const knight = new Knight("Sir Zavala");
const archer = new Archer("Anthony");
// Creating a shopping cart for each character
const ogreCart = new ShoppingCart();
const peonCart = new ShoppingCart();
const knightCart = new ShoppingCart();
const archerCart = new ShoppingCart();
// Adding and deleting items from the carts
ogreCart.addItem("Club","Sword");
ogreCart.viewCart();
ogreCart.deleteItem("Club");
ogreCart.viewCart();
peonCart.addItem("Club");
peonCart.viewCart();
peonCart.addItem("Shield");
peonCart.viewCart();
peonCart.deleteItem("Sword");
peonCart.viewCart();
knightCart.addItem("Sword");
knightCart.viewCart();
knightCart.addItem("Armor");
knightCart.viewCart();
knightCart.deleteItem("Bow and Arrow");
knightCart.viewCart();
archerCart.addItem("Bow and Arrow");
archerCart.viewCart();
archerCart.addItem("Tunic");
archerCart.viewCart();
archerCart.deleteItem("Tunic");
archerCart.viewCart();