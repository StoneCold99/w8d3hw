class RPGCharacter {
    constructor(public name: string, public gold: number = 0) {}

    attack(): void {
        throw new Error("Subclasses must implement the attack method");
    }

    defend(): void {
        throw new Error("Subclasses must implement the defend method");
    }

    collectGold(amount: number): void {
        this.gold += amount
    }

    changeFightingStyle(newWeapon: string): void {
        throw new Error("Subclasses must implement the changeFightingStyle method");
    }
}

// Ogre Class
class Ogre extends RPGCharacter {
    attack(): void {
        console.log(`${this.name} attacks with a club!`)
    }

    defend(): void {
        console.log(`${this.name} defends with a shield!`)
    }
}

// Peon Class
class Peon extends RPGCharacter {
    attack(): void {
        console.log(`${this.name} attacks with a club!`)
    }

    defend(): void {
        console.log(`${this.name} defends with a shield!`)
    }
}

// Knight Class
class Knight extends RPGCharacter {
    private weapon: string = "Sword"
    private armor: string = "Armor"

    attack(): void {
        console.log(`${this.name} attacks with a ${this.weapon}!`)
    }

    defend(): void {
        console.log(`${this.name} defends with ${this.armor}!`)
    }

    changeFightingStyle(newWeapon: string): void {
        this.weapon = newWeapon;
    }
}

// Archer Class
class Archer extends RPGCharacter {
    attack(): void {
        console.log(`${this.name} attacks with a Bow and Arrow!`)
    }

    defend(): void {
        console.log(`${this.name} defends with a tunic!`)
    }
}


// ShoppingCart
class ShoppingCart {
    private items: string[] = [];

    addItem(item: string): void {
        this.items.push(item);
        console.log(`Added ${item} to your cart.`);
    }

    deleteItem(item: string): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Removed ${item} from your cart.`);
        } else {
            console.log(`${item} is not in your cart.`);
        }
    }

    viewCart(): void {
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
        } else {
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
