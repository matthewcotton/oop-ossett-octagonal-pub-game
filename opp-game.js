
// Declare pockets and hand vairables with starting items
let pockets = ["wallet", "phone"];
let hands = [];

// Declare bladder variable (range 0-100) Set starting value to 25
let bladder = 25;
// Declare hunger variable (range 0 -100) Set starting value to 50
let hunger = 50;

// Define rooms (instances of the class Room)
const Commonside = new Room("Commonside", "a street with two pubs opposite one another. One is painted red and the other green. The red one says closed above the door. The green one has a wide-open front door");
const Hallway = new Room("the Hallway", "a brown door into the pub");
const Sung = new Room("the Snug", "light shining through the yellow and red stained-glass window. Fitted brown leather seating wrapping all the way around the south side of the room. An old fireplace, currently not lit, with two figures moulded into the surround")
const GamesRoom = new Room("the Games Room", "eight tables and numerous stools with brown leather seating wrapping around two sides of the room. A small wood burning stove had a large gold trimmed mirror above it. There is a slew of board games stacked along the window sill");
const BarArea = new Room("the Bar Area", "five hand pull beers and loads of draught on the bar plus bar rails behind. Opposite the bar the wall is filled with posters for upcoming events");
const Lounge = new Room("the Lounge", "a comfy looking sofa in the far corner next to the fire and lots of wooden tables and chairs. Amazingly there is also a bar in here which has another four hand pull beers and six draft beers");
const SnookerRoom = new Room("the Snooker Room", "a full-size snooker table with a zebra print light hanging above and surrounded by wooden paneled walls and brown fitted seating ");
const Stairs = new Room("the Stairs", "a corrugated plastic roof covering some steep stairs down into the unknown");
const Basement = new Room("the Basement", "three sofas, a load of tables, chairs, and picnic benches. Oddly for a basement the far side is open to the outside, but this is clearly sign posted as a no smoking area");
const BeerGarden = new Room("the Beer Garden", "four picnic benches on a wooden deck. Past the trees and bins there is a wide across to the far side of Sheffield");
const BarberPlace = new Room("Barber Place", "a street full of parked cars and terraced houses");

// Define items (instances of the class Room)
const Atm = new Item("ATM", "big gray box", "just outside the loo");
const Tenner = new Item("A Tenner", "folded in half", "on the floor");
const ChocCake = new Item("Chocolate Cake", "rich cake made with a local breweries fruit beer", "in Sam Smiths hands");
const Landlord = new Beer("Landlord", "Timothy Taylor's", "pint", "The drinkers’ favourite, a classic pale ale with a complex citrus and hoppy aroma. A recent survey revealed that Landlord has the highest proportion of drinkers who call it their favourite ale.", "on the bar");
const Jaipur = new Beer("Jaipur", "Thronbridge", "half pint", "This American style IPA has a complexity of flavours created by a six-dimensional hop experience. Jaipur's hoppiness builds in the mouth and bursts with powerful citrus fruit flavours, culminating in a remarkably smooth finish and making it a deliciously drinkable IPA.", "on a table");

// Define characters (instances of the class Character or subclasses)
const TimTaylor = new Friend("Tim Taylor", "middle aged landlord", "he", "What 'ger want?");
const SamSmith = new Enemy("Sam Smith", "grumpy old man", "he", "Put that phone away.", ChocCake);
const ThorBridge = new Character("Thor Bridge", "nice guy with dirt under his fingernails", "Do you want to see my allotment?")

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