
// Declare pockets and hand vairables with starting items
let pockets = ["wallet", "phone"];
let hands = [];

// Declare bladder variable (range 0-100) Set starting value to 25
let bladder = 25;
// Declare hunger variable (range 0 -100) Set starting value to 50
let hunger = 50;

// Define rooms (instances of the class Room)
const Commonside = new Room("Commonside", "text1");
const Hallway = new Room("Hallway", "text2");
const Sung = new Room("Snug", "text3")
const GamesRoom = new Room("Games Room", "text4");
const BarArea = new Room("Bar Area", "text5");
const Lounge = new Room("Lounge", "text6");
const SnookerRoom = new Room("Snooker Room", "text7");
const Stairs = new Room("Stairs", "text7");
const Basement = new Room("Basement", "text8");
const BeerGarden = new Room("Beer Garden", "text9");
const BarberPlace = new Room("Barber Place", "text10");

// Define items (instances of the class Room)
const Atm = new Item("ATM", "big gray box", "just outside the loo");
const Tenner = new Item("A Tenner", "folded in half", "on the floor");
const ChocCake = new Item("Chocolate Cake", "rich cake made with a local breweries fruit beer", "in Sam Smiths hands");
const Landlord = new Beer("Landlord", "Timothy Taylor's", "pint", "The drinkers’ favourite, a classic pale ale with a complex citrus and hoppy aroma. A recent survey revealed that Landlord has the highest proportion of drinkers who call it their favourite ale.", "on the bar");
const Jaipur = new Beer("Jaipur", "Thronbridge", "half pint", "This American style IPA has a complexity of flavours created by a six-dimensional hop experience. Jaipur's hoppiness builds in the mouth and bursts with powerful citrus fruit flavours, culminating in a remarkably smooth finish and making it a deliciously drinkable IPA.", "on a table");

// Define characters (instances of the class Character or subclasses)
const TimTaylor = new Friend("Tim Taylor", "middle ages landlord", "he", "What 'ger want?");
const SamSmith = new Enemy("Sam Smith", "grumpy old mad", "he", "Put that phone away.", ChocCake);

// Link rooms
Commonside.linkRoom("north", Hallway);
Hallway.linkRoom("south", Commonside);
Hallway.linkRoom("east", GamesRoom);
Hallway.linkRoom("west", Sung);
GamesRoom.linkRoom("west", Hallway);
Sung.linkRoom("east", Hallway);
Sung.linkRoom("north", BarArea);
BarArea.linkRoom("south", Sung);
BarArea.linkRoom("east", Stairs);
BarArea.linkRoom("north", Lounge);
Lounge.linkRoom("south", BarArea);
Lounge.linkRoom("east", SnookerRoom);
SnookerRoom.linkRoom("west", Lounge);
Stairs.linkRoom("west", BarArea);
Stairs.linkRoom("north", Basement);
Basement.linkRoom("south", Stairs);
Basement.linkRoom("west", BeerGarden);
BeerGarden.linkRoom("east", Basement);
BeerGarden.linkRoom("north", BarberPlace);
BarberPlace.linkRoom("south", BeerGarden);

// Link items to rooms


// Link characters to rooms


// Event Listener
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var command = document.getElementById("user-text").value;

        // Define valid direction commands
        const directions = ["north", "south", "east", "west"];

        // Define valid other commands  (need to split out into different valiables)
        const pocketCommands = ["pockets", "check pockets", "hands", "hand"];
        const handCommands = ["hands", "hand", "left hand", "right hand"];

        // Actions for move commands
        if (directions.includes(command.toLowerCase())) {
            currentRoom = currentRoom.move(command.toLowerCase());
            displayRoom(currentRoom);
            document.getElementById("user-text").value = "";
        }
        // Actions for lisiting items in pockets
        else if (pocketCommands.includes(command.toLowerCase())) {
            // ** Add display functionality **
        }
        else if (handCommands.includes(command.toLowerCase())) {
            // ** Add display functionality **
        }

        else {
            document.getElementById("user-text").value = "";
            alert("This is not a valid command.");
        }
    }
});


// Declare staring room
let currentRoom = Commonside;

// Start game 
startGame(currentRoom);

// TEST ZONE
console.log(Commonside);