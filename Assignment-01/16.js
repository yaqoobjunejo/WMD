//ore Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.

let guestList = ["Ali", "Hassan", "Hussain", "Umer"];
let canceledGuest = "Hassan";
let newGuest = "Hamza";

// Finding the index of the canceled guest
let canceledGuestIndex = guestList.indexOf(canceledGuest);

// Printing the name of the canceled guest
console.log("Unfortunately, " + canceledGuest + " can't make it to the dinner.");

// Replacing the canceled guest with the new guest
guestList[canceledGuestIndex] = newGuest;

// Moving the existing "Hussain" to the middle of the array
let hussainIndex = guestList.indexOf("Hussain");
guestList.splice(hussainIndex, 1);
guestList.splice(Math.floor(guestList.length / 2), 0, "Hussain");

// Adding one guest to the end of the array
guestList.push("Babar");

// Printing the message about the bigger dinner table
console.log("Alhmdulillah! We found a bigger dinner table!");

// Sending out new invitations
for (let i = 0; i < guestList.length; i++) {
  console.log("As-salamu Alaykum, Dear " + guestList[i] + ", you are cordially invited to dinner. Please join us!");
}
