//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guestList = ["Ali", "Hassan", "Hussain", "Umer"];
let canceledGuest = "Hassan";
let newGuest = "Hamza";

// Printing the name of the guest who can't make it
console.log("Unfortunately, " + canceledGuest + " can't make it to the dinner.");

// Replacing the canceled guest with the new guest
let canceledGuestIndex = guestList.indexOf(canceledGuest);
guestList[canceledGuestIndex] = newGuest;

// Sending out new invitations
for (let i = 0; i < guestList.length; i++) {
    console.log("As-salamu Alaykum, Dear " + guestList[i] + ", you are cordially invited to dinner. Please join us!");
}