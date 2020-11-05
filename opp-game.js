
// Function to display room within the textarea
function displayRoom(room) {
    document.getElementById("textarea").innerHTML = room.describe();
    document.getElementById("usertext").focus();
}

// Function to start the game in the Grand Enterance Hall
function startGame(currentRoom) {
    displayRoom(currentRoom);
}


// ** MAIN FUNCTION **

// Define rooms (instances of the class Room)
const Kitchen = new Room("Kitchen", "filthy room with broken applicances");
const CardRoom = new Room("Card Room", "a lot of dust covering a green velvet card table");
const Enterance = new Room("Grand Enterance Hall", "what appears to once have been a very grand staircase although it now looks dangerous")
const Pantry = new Room("Pantry", "a squalid little room containing mostly rotten food");

// Define items (instances of the class Room)
const Atm = new Item("ATM", "big gray box", "just outside the loo");
const Tenner = new Item("A Tenner", "folded in half", "on the floor");
const ChocCake= new Item("Chocolate Cake", "rich cake made with a local breweries fruit beer", "in Sam Smiths hands");

// Define characters (instances of the class Character or subclasses)
const TimTaylor = new Character("Tim Taylor", "middle ages landlord", "he", "What 'ger want?");
const SamSmith = new Enemy("Sam Smith", "grumpy old mad", "he", "Put that phone away.", ChocCake);

// Link rooms
Enterance.linkRoom("east", Kitchen);
Enterance.linkRoom("west", CardRoom);
Kitchen.linkRoom("west", Enterance);
Kitchen.linkRoom("north", Pantry);
CardRoom.linkRoom("east", Enterance);
Pantry.linkRoom("south", Kitchen);


// Link items to rooms


// Link characters to rooms


// Declare pockets and hand vairables with starting items
let pockets = ["wallet", "phone"];
let hands = [];

// Start game 
startGame(Enterance);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var command = document.getElementById("usertext").value;
        
        // Define valid direction commands
        const directions = ["north", "south", "east", "west"];

        // Define valid other commands  (need to split out into different valiables)
        const pocketCommands = ["pockets", "check pockets", "hands", "hand"];
        const handCommands = ["hands", "hand", "left hand", "right hand"];

        // Actions for move commands
        if (directions.includes(command.toLowerCase())) {
            currentRoom = currentRoom.move(command); // try adding toLowerCase here
            displayRoom(currentRoom);
            document.getElementById("usertext").value = "";
        }
        // Actions for lisiting items in pockets
        else if (pocketCommands.includes(command.toLowerCase())) {
            // ** Add display functionality **
        }
        else if (handCommands.includes(command.toLowerCase())) {
            // ** Add display functionality **
        }

        else {
            document.getElementById("usertext").value = "";
            alert("This is not a valid command.");
        }
    }
});

