// ## CLASS DEFINITIONS ##

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

    constructor(name, description) {
        this._name = name;
        this._description = description;
    }
    // Get _name function
    get name() {
        return this._name;
    }
    // Get _description function
    get description() {
        return this._description;
    }
    // Set _name function
    set name(newName) {
        this._name = newName;
    }
    // Set _description function
    set description(newDescription) {
        this._description = newDescription;
    }
    // Function to output item description text
    describe() {
        return "The " + this._name + " is " + this._description + ".";
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
    set strength(newStrength) {
        this._strength = newStrength;
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
        return this._conversation;
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

        // Check if item is of Class Item
        if (item instanceof Item) {
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
        }

        // When item is give as text 
        else {
            // Try to find the item in pockets
            pockets.forEach(thing => {
                if (thing.name.toLowerCase() === item) {
                    item = thing;
                }
            });
            // Try to find the item in hands
            hands.forEach(thing => {
                if (thing.name.toLowerCase() === item) {
                    item = thing;
                }
            });
        }

        // Run the same chack and clacs as above 
        if (item instanceof Item) {
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
        }

        // When the item can't be found
        else {
            alert(item + " can not be found.");
        }


    }
}

// Define subclass Friend
class Friend extends Character {

    constructor(name, description, pronoun, conversation) {
        super(name, description, pronoun, conversation);
    }
    // Function to give this character a pint and changes strength acordingly
    givePint(drink) {

        // Check item is a Beer
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

        // When the name of a drink is given as text         
        else {
            // Try to find the drink in hands
            hands.forEach(item => {
                if (item.name.toLowerCase() === drink) {
                    drink = item;
                }
            });

            // Run the same chack and clacs as above 
            // Check item is a Beer
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

            // When the drink provided can't be found
            else {
                alert(drink + " can not be found.");
            }
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


// ## DISPLAY FUNCTIONS ##

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

// Display pockets
function displayPockets() {

    let itemText = "";
    console.log(pockets);
    // Display items in pockets
    if (pockets.length > 0) {
        pockets.forEach(el => itemText += "<p><i>" + el.name + "</i></p>");
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

// Display hands
function displayHands() {

    let itemText = "";

    // Display items in hands
    if (hands.length > 0) {
        hands.forEach(el => itemText += "<p><i>" + el.name + "</i></p>");
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

// Display interaction commands with a Character
function displayInteraction(room, name) {

    // Declare character variable
    var character;

    // Get full character info (not just name as text)
    room.linkedCharacters.forEach(chara => {
        if (name === chara.name.toLowerCase()) {
            character = chara;
        }
    });

    // For all characters
    let text = "<p>Actions:<br><i>chat</i><br>see <i>strength</i>";

    // For characters of Class Enemy
    if (character instanceof Enemy) {
        text += "<br><i>fight</i> + name of an item in your hands or pockets";
        text += "<br>see <i>weaknesses</i>";
    }
    // For characters of Class Friend
    else if (character instanceof Friend) {
        text += "<br><i>give</i> + name of a drink in your hands";
    }

    // Display section title
    document.getElementById("convo-title").innerHTML = character.name;
    // Display item text in convo-text section
    document.getElementById("convo-text").innerHTML = text;
    // Focus on the command input box
    document.getElementById("user-text").focus();

    // Return the active character
    return character;
}

// Display conversation of the provided character
function displayConvo(character) {
    // Display section title
    document.getElementById("convo-title").innerHTML = "Conversation with " + character.name;
    // Display item text in item-text section
    document.getElementById("convo-text").innerHTML = character.talk();
    // Focus on the command input box
    document.getElementById("user-text").focus();
}

// Display strength
function displayStrength(character) {
    // Display section title
    document.getElementById("convo-title").innerHTML = character.name + " Strength";
    // Display item text in item-text section
    document.getElementById("convo-text").innerHTML = character.strength + " / 10";
    // Focus on the command input box
    document.getElementById("user-text").focus();
}

// Display weaknesses
function displayWeaknesses(character) {
    // Check character is of Class Enemy
    if (character instanceof Enemy) {
        // Display section title
        document.getElementById("convo-title").innerHTML = character.name + " Weaknesses";
        // Display item text in item-text section
        let text = "<p>";
        character.weakness.forEach(item => {
            text += item.name + "<br>";
        });
        text += "</p>";
        document.getElementById("convo-text").innerHTML = text;
        // Focus on the command input box
        document.getElementById("user-text").focus();
    }
    else {
        alert(character.name + " is not an Enemy.");
    }
}

// Display cheers messages after giving pint
function displayCheers(drink, character) {

    let text = "<p>";

    text += "Thanks for the " + drink + ".</p>";
    text += "<p>" + character.name + "'s strength increased to " + character.strength + " / 10</p>";

    // Display section title
    document.getElementById("convo-title").innerHTML = "Gave Pint";
    // Display item text in item-text section
    document.getElementById("convo-text").innerHTML = text;
    // Focus on the command input box
    document.getElementById("user-text").focus();
}

// Display the aftermath of a fight
function displayAftermath(item, character) {

    var text = "<p>You hit " + character.name + " with a " + item + ".</p>"

    // When the characters strength is greater than zero
    if (character.strength === 0) {
        text += "<p>" + character.name + " passed out.</p>";
        text += "<p>You're one step closer to winning this thing.</p>";
    }
    else {
        text += "<p>" + character.name + "'s strength decreased to " + character.strength + " / 10</p>";
        text += "<p>Continue fighting using the command <i>fight</i> + an item in your hands or pockets.</p>";
    }

    // Display section title
    document.getElementById("convo-title").innerHTML = "<i>Fight</i>";
    // Display item text in item-text section
    document.getElementById("convo-text").innerHTML = text;
    // Focus on the command input box
    document.getElementById("user-text").focus();
}

// Display descriptive text of the item with provided name
function displayItemInfo(input, itemName) {

    // When input is a Room
    if (input instanceof Room) {
        input.linkedItems.forEach(item => {
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
    else if (Array.isArray(input)) {
        input.forEach(item => {
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
}

// display thoughts 
function displayThoughts(...type) {

    let text = "";

    // Bladder warning
    if (type[0].includes("bladder")) {
        text += "<p>I need a wee! Bladder is " + bladder + "% full</p>";
    }
    // Hunger warning
    if (type[0].includes("hunger")) {
        text += "<p><b>rumble rumble</b> I'm hungry. Stomach is " + hunger + "% full</p>";
    }
    // Display text in thoughts text div
    document.getElementById("thoughts-text").innerHTML = text;
}

// Display help messages
function help() {
    // hide game area elements
    hide("room-area", "item-area", "dir-area", "convo-area", "thoughts-area");
    // show 
    show("phone-area");

    let text = "<h5>Outgoing Call</h5>";
    text += "<p><i>Ring Ring ... Ring Ring ... Ring Ring</i></p>";
    text += "<p>Dionysus: Oh hey. Do you need some help?</p>";
    text += "You: Yes please.</p>";
    text += "<p>Here are the commands that you can use:</p>";
    text += "<p><i>north, east, south</i> and <i>west</i> to navigate between rooms.</p>";
    text += "<p><i>pockets</i> will show you what items are in your pockets.</p>";
    text += "<p><i>hands</i> will show you what items are in your hands.</p>";
    text += "<p><i>items</i> will show you a list of items in the room you are in. This list is auto populated every time you move into a new room.</p>";
    text += "<p>Typing the name of an item will show you more information about that item.</p>";
    text += "<p><i>people</i> will list all of the people in the room you are in. This list auto populates when you move into a new room.</p>";
    text += "<p>Typing a person's name will start a conversation with them.</p>";

    text += "</p>";

    // Add aim of the game
    text += "<p><br>You: But what's the point of it all?</p>";
    text += "<p>Dionysus: Well that's a tough question but simply put you should buy your friends a few pints to increase their strength and 'deal with' people that are causing trouble.";
    text += "<br>I'm sure you'll come across someone causing some serious trouble that you must beat to win this game.";
    text += "<br>Oh, and make sure you don't get too hungry or have a little accident.</p>";

    // Hangup command
    text += "<p>Use the command <i>hangup</i> to end the call.</p>";

    document.getElementById("phone-area").innerHTML = text;
}

// Function to display an incoming call
function incomingCall() {
    // hide game area elements
    hide("room-area", "item-area", "dir-area", "convo-area", "thoughts-area");
    // show 
    show("phone-area");

    let text = "<h5>Incoming Call</h5>";
    text += "<p><em>didilerder didilerder didilerderder</em></p>";
    text += "<p>Dionysus: Hello! I'm just having a pint at the Museum!</p>";
    text += "<p>You: Are you enjoying it?</p>";
    text += "<p>Dionysus: Nah, it's rubbish! It's total rubbish! How are you?</p>";
    text += "<p>You: I'm not sure what is going on to be honest.</p>";
    text += "<p>Dionysus: Oh no. Here are a few tips for you then."
    text += "<br>All words shown in <i>italics</i> are valid commands. Try them out to see what happens.";
    text += "<br>Use commands <i>north, east, south</i> and <i>west</i> to navigate between rooms.";
    text += "<br>The commands <i>hands</i> and <i>pockets</i> will show you what items you have in your hands and pockets.";
    text += "<br>At any time if you need help then just call me using the command <i>phone</i>.";
    text += "<p>You: OK I'll try to remember all of that. If not, I'll give you a call.</p>";

    // Hangup command
    text += "<p>Use the command <i>hangup</i> to end the call.</p>";

    document.getElementById("phone-area").innerHTML = text;
}

// Function to hangup a call and return to the main game view
function hangup() {
    // show game area element
    show("room-area", "item-area", "dir-area", "convo-area", "thoughts-area");
    // show 
    hide("phone-area");
}


// ## INTERACTION FUNCTIONS ##

// Fight sequence
function fightSequence(character, item) {

}


// ## BASIC FUNCTIONS ##

// Function for hiding the element with provided id
function hide(...id) {

    id.forEach(el => {
        document.getElementById(el).style.display = "none";
    });
}

// function for showing the element with provided id
function show(...id) {

    id.forEach(el => {
        document.getElementById(el).style.display = "block";
    });
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

// List items in room, or an array
function itemsIn(input) {

    let list = [];

    // When a Room is provided
    if (input instanceof Room) {

        input.linkedItems.forEach(item => {
            list.push(item.name.toLowerCase());
        });
    }

    // When input is an array (used for pockets and hands)
    else if (Array.isArray(input)) {

        input.forEach(item => {
            list.push(item.name.toLowerCase());
        });
    }

    // When input is a beer
    else if (input === "beer in hands") {

        hands.forEach(item => {
            if (item instanceof Beer) {
                list.push("give " + item.name.toLowerCase());
            }
        });
    }

    // When input is fight
    else if (input === "fight") {

        // Add items from hands
        hands.forEach(item => {
            list.push("fight " + item.name.toLowerCase());
        });

        // Add items from pockets
        pockets.forEach(item => {
            list.push("fight " + item.name.toLowerCase());
        });
    }

    return list;
}

// Remove signle use items from hands and pockets after a fight
function fightItem(item) {

    // Try to find the item in pockets
    pockets.forEach(thing => {
        if (thing.name.toLowerCase() === item) {
            item = thing;
        }
    });
    // Try to find the item in hands
    hands.forEach(thing => {
        if (thing.name.toLowerCase() === item) {
            item = thing;
        }
    });
    
    // Single use fight items are Beers
    if (item instanceof Beer) {

        // Remove item from pockets
        pockets = pockets.filter(thing => {
            return thing != item;
        });
        // Remove item from hands
        hands = hands.filter(thing => {
            return thing != item;
        });
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


// Update cash in wallet
function updateCash(value, change) {
    // Update cash variable
    value = value + change;
    // Update Wallet description
    var newDescription = "dirty and half fallen apart. It contains £" + String(value);
    Wallet.description = newDescription;
    // return the new cash value
    return value;
}

/* THIS FUNCTION WILL NOT ACTUALLY DELETE VARIABLES
// Delete item
function deleteItem(item, location) {
    // When item is of Class Item
    if (item instanceof Item) {
        delete item;
    }
    // When item is text and location is of Class Room
    else if (location instanceof Room) {
        location.linkedItems.forEach(thing => {
            if (item === thing.name.toLowerCase()) {
                delete thing;
            }
        });
    }
    // When item is text and location is hands
    else if (location === "hands") {
        
        hands.forEach(thing => {
            if (item === thing.name.toLowerCase()) {
                console.log(thing);
                delete thing;
            }
        });
    }
    // When item is text and location is pockets
    else if (location === "pockets") {
        pockets.forEach(thing => {
            if (item === thing.name.toLowerCase()) {
                delete thing;
            }
        });
    }
    
} */

// ## START AND END GAME FUNCTIONS ##

// Function to start the game in the Grand Enterance Hall
function startGame(currentRoom) {
    displayRoom(currentRoom);
    displayDirections(currentRoom);
    displayItems(currentRoom);
    displayCharaters(currentRoom);
}

// game over function
function gameOver(...type) {

    let text = "<h2>GAME OVER</h2>";

    // If game over due to bladder reaching 100%
    if (type[0].includes("bladder")) {
        text += "<h4><i>Oops</i></h4><h4>You wet yourself.</h4>";
    }
    // If game over due to hunger reaching 0%
    if (type[0].includes("hunger")) {
        text += "<h4>You'er so hungry you passed out.<h4>";
    }

    text += "<p>Refresh the webpage to try again.</p>";

    // Display game over text
    let gameArea = document.getElementById("game-area");

    // Style the game area div
    gameArea.innerHTML = text;
    gameArea.style.backgroundColor = "rgba(255, 0, 0, 0.80)";
    gameArea.style.color = "white";
    gameArea.style.textAlign = "center";
    gameArea.style.borderRadius = "7px";
    gameArea.style.padding = "0.5rem";
    gameArea.style.margin = "0.5rem";
}