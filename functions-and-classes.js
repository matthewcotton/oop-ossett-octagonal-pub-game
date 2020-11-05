// Define the class Room
class Room {

    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
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
    // Function to output room description text about what can be seen in the room
    describe() {
        return "When you walk into the " + this._name + " you see " + this._description + ".";
    }
    // Function to add linked rooms
    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
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

    constructor(name, description, location, room) {
        this._name = name;
        this._description = description;
        this._locationWithinRoom = location;
        this._room = room;
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
    //Get _locationWithinRoom
    get location() {
        return this._locationWithinRoom;
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
    // Set room that the item is in
    set location(newLocation) {
        this._locationWithinRoom = newLocation;
    }
    // CHANGE THIS SO THAT ITEMS AND ENEMIES ARE ADDED TO ROOMS IN THE ROOM AND NOT IN THE ITEM OR CHARACTER
    // Set location within the room where the item is
    set room(newRoom) {
        // Add check this this is an exisitng room
        this._room = newRoom;
    }
    // Function to output item description text
    describe() {
        return "The " + this._name + " is on the " + this._locationWithinRoom + " it looks " + this._description + ".";
    }
    // Function to interact with the item 
    /*
    interact(direction) {
        
    } */
}

// Define Character class
class Character {

    constructor(name, description, conversation) {
        this._name = name;
        this._description = description;
        this._conversation = conversation;
        this._room = room;
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
