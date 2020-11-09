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
        return "You enter the " + this._name + " and see " + this._description + ".";
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
        // Display room description in room-text section
        document.getElementById("room-text").innerHTML = room.describe();
        // Focus on the command input box
        document.getElementById("user-text").focus();
    }
    else {
        alert(room.name + " is not a room");
    }
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

// display directions function
function displayDirections(room) {
    // Check room is an instance of class Room
    if (room instanceof Room) {

        let directionText = "";

        // Cycle through each linked room to build html text
        Object.keys(room.linkedRooms).forEach(key => {
            directionText += "<p><i>" + key + "</i>: " + room.linkedRooms[key].name + "</p>";
        });

        // Display direction text in dir-text section
        document.getElementById("dir-text").innerHTML = directionText;
        // Focus on the command input box
        document.getElementById("user-text").focus();
    }
    else {
        alert(room.name + " is not a room");
    }
}

// display items
function displayItems(room) {
    // Check room is an instance of class Room
    if (room instanceof Room) {

        let itemText = "";

        // Cycle through each linked item to build html text
        Object.keys(room.linkedItems).forEach(key => {
            itemText += "<p><i>" + room.linkedItems[key].name + "</i></p>";
        });

        // Display section title
        document.getElementById("item-title").innerHTML = "<i>Items</i> In Room";
        // Display item text in item-text section
        document.getElementById("item-text").innerHTML = itemText;
        // Focus on the command input box
        document.getElementById("user-text").focus();
    }
    else {
        alert(room.name + " is not a room");
    }
}

// display characters in conversation section
function displayCharaters(room) {
    // Check room is an instance of class Room
    if (room instanceof Room) {

        let characterText = "";

        // Cycle through each linked character to build html text
        Object.keys(room.linkedCharacters).forEach(key => {
            characterText += "<p><i>" + room.linkedCharacters[key].name + "</i></p>";
        });

        // Display section title
        document.getElementById("convo-title").innerHTML = "<i>People</i> In Room";
        // Display character text in convo-text section
        document.getElementById("convo-text").innerHTML = characterText;
        // Focus on the command input box
        document.getElementById("user-text").focus();
    }
    else {
        alert(room.name + " is not a room");
    }
}

// display pockets
function displayPockets() {

    let itemText = "";

    // Display items in pockets
    if (pockets.length > 0) {
        pockets.forEach(el => itemText += "<p><i>" + el + "</i></p>");
    }
    // If pockets are empty
    else {
        itemText = "empty";
    }
    // Display section title
    document.getElementById("item-title").innerHTML = "Items In <i>Pockets</i>";
    // Display item text in item-text section
    document.getElementById("item-text").innerHTML = itemText;
    // Focus on the command input box
    document.getElementById("user-text").focus();
}

// display hands
function displayHands() {

    let itemText = "";

    // Display items in hands
    if (hands.length > 0) {
        hands.forEach(el => itemText += "<p><i>" + el + "</i></p>");
    }
    // If hands are empty
    else {
        itemText = "empty";
    }
    // Display section title
    document.getElementById("item-title").innerHTML = "Items In <i>Hands</i>";
    // Display item text in item-text section
    document.getElementById("item-text").innerHTML = itemText;
    // Focus on the command input box
    document.getElementById("user-text").focus();
}

// display conversation
function displayConvo(room, name) {
    // Display conversation of the character with provided name
    room.linkedCharacters.forEach(character => {
        if (character.name.toLowerCase() === name) {
            // Display section title
            document.getElementById("convo-title").innerHTML = "Conversation";
            // Display item text in item-text section
            document.getElementById("convo-text").innerHTML = character.talk();
            // Focus on the command input box
            document.getElementById("user-text").focus();
            return
        }
    });
}

// display item information
function displayItemInfo(room, itemName) {
    // Display descriptive text of the item with provided name
    room.linkedItems.forEach(item => {
        if (item.name.toLowerCase() === itemName) {
            // Display section title
            document.getElementById("item-title").innerHTML = "Item Description";
            // Display item text in item-text section
            document.getElementById("item-text").innerHTML = item.describe();
            // Focus on the command input box
            document.getElementById("user-text").focus();
            return
        }
    });
}


// Fight sequence
function fightSequence(character, item) {

}

// Clear input function
function clearInput(id) {
    document.getElementById(id).value = "";
}

// Function to add character names in the current room to an array
function charactersInRoom(room) {
    let list = [];
    room.linkedCharacters.forEach(character => {
        list.push(character.name.toLowerCase());
    });
    return list;
}

// Function to add items in the current room to an array
function itemsInRoom(room) {
    let list = [];
    room.linkedItems.forEach(item => {
        list.push(item.name.toLowerCase());
    });
    return list;
}

// Function to start the game in the Grand Enterance Hall
function startGame(currentRoom) {
    displayRoom(currentRoom);
    displayDirections(currentRoom);
    displayItems(currentRoom);
    displayCharaters(currentRoom);
}