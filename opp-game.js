
// Function to display room within the textarea
function displayRoom(room) {
    document.getElementById("textarea").innerHTML = room.describe();
    document.getElementById("usertext").focus();
}

// Function to start the game in the Grand Enterance Hall
function startGame(currentRoom) {
    displayRoom(currentRoom);
}

// Define rooms (instances of the class Room)
const Kitchen = new Room("Kitchen", "filthy room with broken applicances");
const CardRoom = new Room("Card Room", "a lot of dust covering a green velvet card table");
const Enterance = new Room("Grand Enterance Hall", "what appears to once have been a very grand staircase although it now looks dangerous")
const Pantry = new Room("Pantry", "a squalid little room containing mostly rotten food");

// Define items (instances of the class Room)

// Define characters (instances of the class Character or subclasses)

// Link rooms
Enterance.linkRoom("east", Kitchen);
Enterance.linkRoom("west", CardRoom);
Kitchen.linkRoom("west", Enterance);
Kitchen.linkRoom("north", Pantry);
CardRoom.linkRoom("east", Enterance);
Pantry.linkRoom("south", Kitchen);

// Add items to rooms

// Add characters to rooms

// ** MAIN FUNCTION **

// Start game 
startGame(Enterance);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var command = document.getElementById("usertext").value;
        const directions = ["north", "south", "east", "west"];
        if (directions.includes(command.toLowerCase())) {
            currentRoom = currentRoom.move(command); // try adding toLowerCase here
            displayRoom(currentRoom);
            document.getElementById("usertext").value = "";
        }
        else {
            document.getElementById("usertext").value = "";
            alert("This is not a valid command.");
        }
    }
});