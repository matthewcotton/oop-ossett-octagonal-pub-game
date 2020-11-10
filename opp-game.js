
// Declare rooms (instances of the class Room)
const Commonside = new Room("Commonside", "a street with two pubs opposite one another. One is painted red and the other green. The red one says closed above the door. The green one has a wide-open front door");
const Hallway = new Room("Hallway", "a brown door into the pub");
const Sung = new Room("Snug", "light shining through the yellow and red stained-glass window. Fitted brown leather seating wrapping all the way around the south side of the room. An old fireplace, currently not lit, with two figures moulded into the surround")
const GamesRoom = new Room("Games Room", "eight tables and numerous stools with brown leather seating wrapping around two sides of the room. A small wood burning stove had a large gold trimmed mirror above it. There is a slew of board games stacked along the window sill");
const BarArea = new Room("Bar Area", "five hand pull beers and loads of draught on the bar plus bar rails behind. Opposite the bar the wall is filled with posters for upcoming events");
const Lounge = new Room("Lounge", "a comfy looking sofa in the far corner next to the fire and lots of wooden tables and chairs. Amazingly there is also a bar in here which has another four hand pull beers and six draft beers");
const SnookerRoom = new Room("Snooker Room", "a full-size snooker table with a zebra print light hanging above and surrounded by wooden paneled walls and brown fitted seating ");
const Toilet = new Room("Toilet", "smells quite fresh, for a pub toilet at least. There are two urinals and one cubical");
const Stairs = new Room("Stairs", "a corrugated plastic roof covering some steep stairs down into the unknown");
const Basement = new Room("Basement", "three sofas, a load of tables, chairs, and picnic benches. Oddly for a basement the far side is open to the outside, but this is clearly sign posted as a no smoking area");
const BeerGarden = new Room("Beer Garden", "four picnic benches on a wooden deck. Past the trees and bins there is a wide across to the far side of Sheffield");
const BarberPlace = new Room("Barber Place", "a street full of parked cars and terraced houses");

// Declare items (instances of the class Item)
const Phone = new Item("Phone", "a very old but still functional Nokia 3210. To call for help use the command <i>call</i>");
const Wallet = new Item("Wallet", "dirty and half fallen apart. It contains £0.00")
const Atm = new Item("ATM", "big gray box");
const ChocCake = new Item("Chocolate Cake", "rich cake made with a local breweries fruit beer");

// Declare Beer items (instances of subclass Beer)
const Landlord = new Beer("Landlord", "Timothy Taylor's", "pint", "The drinkers’ favourite, a classic pale ale with a complex citrus and hoppy aroma. A recent survey revealed that Landlord has the highest proportion of drinkers who call it their favourite ale");
const Jaipur = new Beer("Jaipur", "Thronbridge", "half pint", "This American style IPA has a complexity of flavours created by a six-dimensional hop experience. Jaipur's hoppiness builds in the mouth and bursts with powerful citrus fruit flavours, culminating in a remarkably smooth finish and making it a deliciously drinkable IPA");

// Declare Food items (instances of subclass Food)
const MapleBurger = new Food("Tragically Maple Burger", "20", "An 8 oz. juicy beef patty topped with maple bacon, house-made maple bacon jam, bacon sticks, Canadian cheese curds, arugula & bacon roasted garlic aoli")
const WhamBar = new Food("Wham Bar", "1", "Sticky it'll pull out your teeth");

// Declare characters (instances of the class Character or subclasses)
const TimTaylor = new Friend("Tim Taylor", "middle aged landlord", "he", "What 'ger want?");
const SamSmith = new Enemy("Sam Smith", "grumpy old man", "he", "Put that phone away.", ChocCake);
const ThorBridge = new Character("Thor Bridge", "nice guy with dirt under his fingernails", "he", "Do you want to see my allotment?")

// Link rooms
Commonside.linkRoom("north", Hallway);
Hallway.linkRoom("east", GamesRoom);
Hallway.linkRoom("south", Commonside);
Hallway.linkRoom("west", Sung);
GamesRoom.linkRoom("north", Toilet);
GamesRoom.linkRoom("west", Hallway);
Sung.linkRoom("north", BarArea);
Sung.linkRoom("east", Hallway);
BarArea.linkRoom("north", Lounge);
BarArea.linkRoom("east", Stairs);
BarArea.linkRoom("south", Sung);
Lounge.linkRoom("east", SnookerRoom);
Lounge.linkRoom("south", BarArea);
SnookerRoom.linkRoom("south", Toilet);
SnookerRoom.linkRoom("west", Lounge);
Toilet.linkRoom("north", SnookerRoom);
Toilet.linkRoom("south", GamesRoom);
Stairs.linkRoom("north", Basement);
Stairs.linkRoom("west", BarArea);
Basement.linkRoom("south", Stairs);
Basement.linkRoom("west", BeerGarden);
BeerGarden.linkRoom("north", BarberPlace);
BeerGarden.linkRoom("east", Basement);
BarberPlace.linkRoom("south", BeerGarden);

// Link items to rooms
Basement.linkItem(Atm);
Lounge.linkItem(MapleBurger);
Commonside.linkItem(WhamBar);
Commonside.linkItem(ChocCake);

// Link characters to rooms
Commonside.linkCharacter(ThorBridge);
Commonside.linkCharacter(TimTaylor);
Sung.linkCharacter(SamSmith);


// Adjust characters strength values 
TimTaylor.strength = 5;

// Declare pockets and hand vairables with starting items
let pockets = [Wallet, Phone];
let hands = [Jaipur, Landlord];

// Declare bladder variable (range 0-100) Set starting value to 25
let bladder = 25;
// Declare hunger variable (range 0 -100) Set starting value to 50
let hunger = 50;

// Declare cash variable
let cash = 0.00;
// Set starting cash ballance 
cash = updateCash(cash, 25.35);

// Declare variable to track the active character
let activeCharacter = "";

// Declare count down timer for incoming call
let callTimer = 3;

// Event Listener
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        var command = document.getElementById("user-text").value;
        command = command.toLowerCase();

        // Define valid command words
        const directions = ["north", "south", "east", "west"];
        const pocketCommands = ["pockets", "pocket"];
        const pocketItems = itemsIn(pockets);
        const handCommands = ["hands", "hand"];
        const handItems = itemsIn(hands);
        const itemCommands = ["items", "item", "room"];
        const itemActions = itemsIn(currentRoom);
        const peopleCommands = ["people", "person"];
        const characterSelectCommands = charactersInRoom(currentRoom);
        const chatCommands = ["chat", "talk"];
        const strengthCommands = ["strength", "see strength"];
        const fightCommands = itemsIn("fight");
        const weaknessCommands = ["weaknesses", "weakness", "see weaknesses", "see weakness"];
        const givePintCommands = itemsIn("beer in hands");
        const helpCommands = ["call", "help"];
        const hangupCommands = ["hangup", "hang up", "close"];
        const pickupCommands = itemsIn("take item");


        // Actions for move commands
        if (directions.includes(command)) {

            currentRoom = currentRoom.move(command);
            displayRoom(currentRoom);
            displayDirections(currentRoom);
            displayItems(currentRoom);
            displayCharaters(currentRoom);

            // Reset activeCharacter
            activeCharacter = "";

            // Declare a warning variable
            var warnings = [];

            // If new currentRoom is the Toilet then empty bladder
            if (currentRoom === Toilet) {
                bladder = 0;
            }
            else {
                // Update bladder by +1
                bladder = countInRange(bladder, 1);
            }

            // Game over if bladder hits 100%
            if (bladder === 100) {
                gameOver("bladder");
            }
            // Bladder empty massage is baldder is 0%
            else if (bladder === 0) {
                warnings.push("bladder-empty");
            }
            // Warning if bladder is 70% or above
            else if (bladder >= 70) {
                warnings.push("bladder");
            }

            // Update hunger by -1
            hunger = countInRange(hunger, -1);

            // Game over if hunger hits 100%
            if (hunger === 0) {
                gameOver("hunger");
            }
            // Warning if bladder is 70% or above
            else if (hunger <= 15) {
                warnings.push("hunger");
            }

            // Display warnings in thoughts
            displayThoughts(warnings);

            // Check if incoming call should be displayed
            callTimer--;
            if (callTimer === 0) {
                incomingCall();
            }

        }
        // Actions for lisiting items in pockets
        else if (pocketCommands.includes(command)) {

            displayPockets();
        }
        // Actions for listing items in hands
        else if (handCommands.includes(command)) {

            displayHands();
        }
        // Actions for listing items in room
        else if (itemCommands.includes(command)) {
            displayItems(currentRoom);
        }
        // Actions to see a list of interactions with a character
        else if (characterSelectCommands.includes(command)) {
            activeCharacter = displayInteraction(currentRoom, command);
        }
        // Actions for conversations a character
        else if (chatCommands.includes(command)) {
            // When activeCharacter is defined
            if (activeCharacter != "") {
                displayConvo(activeCharacter);
            }
            // When activeCharacter is not defined
            else {
                alert("A character has not been selected. Please select a character");
            }
        }
        // Actions for seeing an characters strength
        else if (strengthCommands.includes(command)) {
            // When activeCharacter is defined
            if (activeCharacter != "") {
                displayStrength(activeCharacter);
            }
            // When activeCharacter is not defined
            else {
                alert("A character has not been selected. Please select a character");
            }
        }
        // Actions for seeing a characters weaknesses
        else if (weaknessCommands.includes(command)) {
            // When activeCharacter is defined
            if (activeCharacter != "") {
                displayWeaknesses(activeCharacter);
            }
            // When activeCharacter is not defined
            else {
                alert("A character has not been selected. Please select a character");
            }
        }
        // Actions for fighting a character
        else if (fightCommands.includes(command)) {
            // When activeCharacter is defined
            if (activeCharacter != "") {

                // Split command and find Item from item string
                var command = command.split(" ");
                var takeItem = command.slice(1).join(" ");
                takeItem = findIn(takeItem, currentRoom);
                console.log(takeItem)
                activeCharacter.fight(takeItem);

                // Display cheers message
                displayAftermath(takeItem, activeCharacter);

                // Remove single use items from hands or pockets
                fightItem(takeItem);
            }
            // When activeCharacter is not defined
            else {
                alert("A character has not been selected. Please select a character");
            }
        }
        // Actions for giving a pint
        else if (givePintCommands.includes(command)) {
            // When activeCharacter is defined
            if (activeCharacter != "") {
                // Give pint to character after spliting command string (as command includes the first word 'give')
                var drink = command.split(" ");
                drink = drink[1];
                activeCharacter.givePint(drink);

                // Display cheers message
                displayCheers(drink, activeCharacter);

                // Remove pint from hands
                hands = hands.filter(item => {
                    return item.name.toLowerCase() != drink;
                });
            }
            // When activeCharacter is not defined
            else {
                alert("A character has not been selected. Please select a character");
            }
        }
        // Actions for listing people in the room
        else if (peopleCommands.includes(command)) {
            displayCharaters(currentRoom);

            // Reset activeCharacter
            activeCharacter = "";
        }
        // Actions for items 
        else if (itemActions.includes(command)) {
            displayItemInfo(currentRoom, command);
        }
        // Actions to use phone to call for help
        else if (helpCommands.includes(command)) {
            help();
        }
        // Actions to hangup phone call
        else if (hangupCommands.includes(command)) {
            hangup();
        }
        // Actions to display items in pockets
        else if (pocketItems.includes(command)) {
            displayItemInfo(pockets, command);
        }
        // Actions to display items in hands
        else if (handItems.includes(command)) {
            displayItemInfo(hands, command);
        }
        // Actions for picking up an item from the current room
        else if (pickupCommands.includes(command)) {

            // Split command and find Item from item string
            var command = command.split(" ");
            var takeItem = command.slice(1, command.length - 1).join(" ");
            takeItem = findIn(takeItem, currentRoom);

            // If picked up item is Food
            if (takeItem instanceof Food) {

                // Increase hunger by Food value
                hunger = countInRange(hunger, Number(takeItem.value));

                // Display hunger thoughts
                displayThoughts("eating");
            }
            // If picked up item is NOT Food
            else {
                // Add item to hands
                if (command[command.length - 1] === "hands") {
                    hands.push(takeItem);
                }
                // Add item to pockets
                else if (command[command.length - 1] === "pockets") {
                    pockets.push(takeItem);
                }
            }
            // Remove item from room (unlink)
            currentRoom.unlinkItem(takeItem);

            // Update display for items in room 
            displayItems(currentRoom);
        }
        // Actions for 


        // Actions for invalid commands 
        else {
            alert("This is not a valid command.");
        }

        // Clear input text field
        clearInput("user-text");
    }
});


// Declare staring room
let currentRoom = Commonside;

// Start game 
startGame(currentRoom);

// TEST ZONE
