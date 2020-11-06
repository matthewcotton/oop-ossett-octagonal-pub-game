// Define the class Room
class Room {

    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
        this._linkedItems = [];
        this._linkedCharacters = [];
    }
    // Get _name function
    get name() {
        return this._name;
    }
    // Get _description function
    get description() {
        return this._description;
    }
    // Get _linkedRooms function
    get linkedRooms() {
        return this._linkedRooms;
    }
    // Get _linkedItems function
    get linkedItems() {
        return this._linkedItems;
    }
    // Get _linkedCharacters function
    get linkedCharacters() {
        return this._linkedCharacters;
    }
    // Set _name function
    set name(newName) {
        this._name = newName;
    }
    // Set _description function
    set description(newDescription) {
        this._description = newDescription;
    }
    // Function to output room description text about what can be seen in the room
    describe() {
        // ** Maybe update phrasing **
        return "When you walk into the " + this._name + " you see " + this._description + ".";
    }
    // Function to add a linked room
    linkRoom(direction, roomToLink) {
        // Check the provided argument is of the correct class 
        if (roomToLink instanceof Room) {
            this._linkedRooms[direction] = roomToLink;
        }
        else {
            alert(roomToLink.name + " is not a room");
        }
    }
    // Function to add a linked item
    linkItem(itemToLink) {
        // Check the provided argument is of the correct class 
        if (itemToLink instanceof Item) {
            this._linkedItems.push(itemToLink);
        }
        else {
            alert(itemToLink.name + " is not an item");
        }
    }
    // Function to add a linked character
    linkCharacter(characterToLink) {
        // Check the provided argument is of the correct class 
        if (characterToLink instanceof Character) {
            this._linkedCharacters.push(characterToLink);
        }
        else {
            alert(characterToLink.name + " is not an item");
        }
    }
    // Function to remove a linked item
    unlinkItem(itemToUnlink) {
        // Filter to remove the item to be unlinked from the array
        this._linkedItems = this._linkedItems.filter(el => {
            return el != itemToUnlink;
        });
    }
    // Function to remove a linked character
    unlinkCharacter(characterToUnlink) {
        // Filter to remove the item to be unlinked from the array
        this._linkedCharacters = this._linkedCharacters.filter(el => {
            return el != characterToUnlink;
        });
    }
    // Function to move between rooms
    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        }
        else {
            alert("Bump! There's a wall there");
            return this;
        }
    }
}

// Define Item class
class Item {

    constructor(name, description, position) {
        this._name = name;
        this._description = description;
        this._position = position;
    }
    // Get _name function
    get name() {
        return this._name;
    }
    // Get _description function
    get description() {
        return this._description;
    }
    //Get _position
    get position() {
        return this._position;
    }
    // Set _name function
    set name(newName) {
        this._name = newName;
    }
    // Set _description function
    set description(newDescription) {
        this._description = newDescription;
    }
    // Set _position of the item
    set position(newPosition) {
        this._position = newPosition;
    }
    // Function to output item description text
    describe() {
        // ** Maybe update phrasing **
        return "The " + this._name + " is on the " + this._position + " it looks " + this._description + ".";
    }
}

// Define Character class
class Character {

    constructor(name, description, pronoun, conversation) {
        this._name = name;
        this._description = description;
        this._pronoun = pronoun;
        this._conversation = conversation;
        this._linkedItems = [];
        this._strength = 10;
    }
    // Get _name function
    get name() {
        return this._name;
    }
    // Get _description function
    get description() {
        return this._description;
    }
    // Get _pronoun 
    get pronoun() {
        return this._pronoun;
    }
    //Get _conversation
    get conversation() {
        return this._conversation;
    }
    // Get _linkedItems function
    get linkedItems() {
        return this._linkedItems;
    }
    // Get _strength
    get strength() {
        return this._strength;
    }
    // Set _name function
    set name(newName) {
        this._name = newName;
    }
    // Set _description function
    set description(newDescription) {
        this._description = newDescription;
    }
    // Set _pronoun function
    set pronoun(newPronoun) {
        this._pronoun = newPronoun;
    }
    // Set _conversation text
    set conversation(newConversation) {
        this._conversation = newConversation;
    }
    // Set _strength
    changeStrength(strengthChange) {
        // If strengh is zero it can NOT be changed
        if (this._strength === 0) {
            return;
        }
        // Change stregth value
        this._strength += Number(strengthChange);
        // Check that strength value is within range 0 to 10
        if (this._strength < 0) {
            this._strength = 0;
        }
        else if (this._strength > 10) {
            this._strength = 10;
        }
    }
    describe() {
        // ** Maybe update phrasing **
        return this._name + " is " + this._description + ".";
    }
    // Function to output item description text
    talk() {
        return this._name + ": " + this._conversation;
    }
    // Function to add a linked item
    linkItem(itemToLink) {
        // Check the provided argument is of the correct class 
        if (itemToLink instanceof Item) {
            this._linkedItems.push(itemToLink);
        }
        else {
            alert(itemToLink.name + " is not an item");
        }
    }
    // Function to remove a linked item
    unlinkItem(itemToUnlink) {
        // Filter to remove the item to be unlinked from the array
        this._linkedItems = this._linkedItems.filter(el => {
            return el != itemToUnlink;
        });
    }
}

// Define subclass Enemy
class Enemy extends Character {

    constructor(name, description, pronoun, conversation, weakness) {
        super(name, description, pronoun, conversation);
        this._weakness = [];
        // Weakness is an optional argument when defining an instance of this class
        if (typeof weakness !== "undefined") {
            this.addWeakness(weakness);
        }
    }
    // Get weakness function
    get weakness() {
        return this._weakness;
    }
    // Add weakness function
    addWeakness(newWeakness) {
        // Check the provided argument is of the correct class 
        if (newWeakness instanceof Item) {
            this._weakness.push(newWeakness);
        }
        else {
            alert(newWeakness.name + " is not an item");
        }
    }
    // Remove weakness function 
    removeWeakness(itemToRemove) {
        // Filter to remove the item to be unlinked from the array
        this._weakness = this._weakness.filter(el => {
            return el != itemToRemove;
        });
    }
    // Fight function. Returns strength of enemy
    fight(item) {
        // Attack with weakness item results in -5 from strength
        if (this._weakness.includes(item)) {
            var weaknessAttackPoints = -5;
            this.changeStrength(weaknessAttackPoints);
        }
        // Attack from any other item results in -1 from strength
        else {
            var normaAttackPoints = -1;
            this.changeStrength(normaAttackPoints);
        }
        // Return new strength
        return this._strength;
    }
}

// Define subclass Friend
class Friend extends Character {

    constructor(name, description, pronoun, conversation) {
        super(name, description, pronoun, conversation);
    }
    // Function to give this character a pint and changes strength acordingly
    givePint(drink) {
        // Check item is a pint
        if (drink instanceof Beer) {
            // When a character is given a pint their strength increases by +2
            if (drink.size === "pint") {
                var pintPoints = 2;
                this.changeStrength(pintPoints);
            }
            // When a character is given a pint their strength increases by +1
            else if (drink.size === "half pint") {
                var halfPintPoints = 1;
                this.changeStrength(halfPintPoints);
            }
        }
        else {
            alert(drink.name + " is not a beer");
        }
    }
}

// Define subclass Pint
class Beer extends Item {

    constructor(name, brand, size, description, position) {
        super(name, description, position);
        this._brand = brand;
        // Only allow pint or half pint
        if (size.toLowerCase() === "pint" || size.toLowerCase() === "half pint") {
            this._size = size.toLowerCase();
        }
        else {
            alert("Beer size must be either 'pint' or 'half pint'.");
        }
    }
    // Get _brand function
    get brand() {
        return this._brand;
    }
    // Get _size function
    get size() {
        return this._size;
    }
    // Set _brand function
    set brand(newBrand) {
        this._brand = newBrand;
    }
    // Set _size function
    set size(newSize) {
        // Only allow pint or half pint
        if (newSize.toLowerCase() === "pint" || newSize.toLowerCase() === "half pint") {
            this._size = newSize.toLowerCase();
        }
        else {
            alert("Beer size must be either 'pint' or 'half pint'.");
        }
    }
}

// Function to display room within the text-area
function displayRoom(room) {
    // Check room is an instance of class Room
    if (room instanceof Room) {
        document.getElementById("text-area").innerHTML = room.describe();
        document.getElementById("user-text").focus();
    }
    else {
        alert(room.name + " is not a room");
    }
}

// Function to start the game in the Grand Enterance Hall
function startGame(currentRoom) {
    displayRoom(currentRoom);
}

// Function to change value default range 0-100
function countInRange(currentValue, changeValue, minRange, maxRange) {
    // Set default range if not provided
    if (typeof minRange === "undefined") {
        minRange = 0;
    }
    if (typeof maxRange === "undefined") {
        maxRange = 100;
    }
    // Change value 
    let newValue = currentValue + changeValue
    // Check newValue is within range
    if (newValue < minRange) {
        newValue = minRange;
    }
    else if (newValue > maxRange) {
        newValue = maxRange;
    }
    // return result
    return newValue;
}

