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
    // Get _linkedRooms functions
    get linkedRooms() {
        return this._linkedRooms;
    }
    // Get _linkedItems functions
    get linkedItems() {
        return this._linkedItems;
    }
    // Get _linkedCharacters functions
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

    constructor(name, description, location) {
        this._name = name;
        this._description = description;
        this._position = location;
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

    constructor(name, description, conversation) {
        this._name = name;
        this._description = description;
        this._conversation = conversation;
    }
    // Get _name function
    get name() {
        return this._name;
    }
    // Get _description function
    get description() {
        return this._description;
    }
    //Get _conversation
    get conversation() {
        return this._conversation;
    }
    // Get _room
    get room() {
        return this._room;
    }
    // Set _name function
    set name(newName) {
        if (newName.length < 4) {
            alert("Name is too short.");
        }
        this._name = newName;
    }
    // Set _description function
    set description(newDescription) {
        if (newDescription.length > 150) {
            alert("Description is too long.");
        }
        this._description = newDescription;
    }
    // Set new conversation text
    set conversation(newConversation) {
        this._conversation = newConversation;
    }
    // Set location within the room where the item is
    set room(newRoom) {
        // Add check this this is an exisitng room
        this._room = newRoom;
    }
    // Function to output item description text
    talk() {
        return this._name + ": " + this._conversation;
    }
}

// MAYBE DEFINE A CLASS FOR BACKPACK (This could be upgradable though the game hence the need for a subclass)


// Define subclass Enemy
class Enemy extends Character {
    constructor(name, weakness, strength) {
        super(name, "Bad Guy", "I'm a badddd guy. Derder-de-derderderder.");
        this._weakness = weakness;
        this._strength = strength;
    }

    // Add dead or alive property

    // Fight function
    fight(item) {
        if (item = this._weakness) {
            // Update dead property
            return true;
        }
        return false;
    }
}
