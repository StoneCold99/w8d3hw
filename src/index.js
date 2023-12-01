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
// Create a User
class User {
    constructor(name) {
        this.name = name;
        this.cart = new ShoppingCart();
    }
    addToCart(item) {
        if (shop.getAvailableItems().includes(item)) {
            this.cart.addItem(item);
        }
        else {
            console.log(`${item} is not available in the shop.`);
        }
    }
    viewCart() {
        console.log(`${this.name}'s Cart:`);
        this.cart.viewCart();
    }
    removeFromCart(item) {
        this.cart.deleteItem(item);
    }
    removeQuantityFromCart(item, quantity) {
        for (let i = 0; i < quantity; i++) {
            this.removeFromCart(item);
        }
    }
}
const user = new User("John");
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
class Shop {
    constructor() {
        this.items = ["Sword", "Bow and Arrow", "Club", "Shield", "Armor", "Tunic"];
    }
    getAvailableItems() {
        return this.items;
    }
}
const shop = new Shop();
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
ogreCart.addItem("Club");
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
// for user 
user.addToCart("Sword");
user.addToCart("Bow and Arrow");
user.addToCart("Shield"); // This item is not available in the shop
user.viewCart();
user.removeFromCart("Bow and Arrow");
user.viewCart();
user.removeQuantityFromCart("Sword", 2);
user.viewCart();
