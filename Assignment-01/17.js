//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestList = ["Ali", "Hassan", "Hussain", "Umer"];
let maxGuests = 2;

// Printing a message about the limited space
console.log("Attention: Due to unforeseen circumstances, we can only invite " + maxGuests + " people for dinner.");

// Removing guests until only two names remain
while (guestList.length > maxGuests) {
  let removedGuest = guestList.pop();
  console.log("Sorry, " + removedGuest + ", we won't be able to invite you to dinner.");
}

// Printing invitation messages to the remaining two guests
guestList.forEach(function(guest) {
  console.log("As-salamu Alaykum, Dear " + guest + ", you are cordially invited to dinner. Please join us!");
});

// Printing the final list to verify it is empty
console.log("Guest list:", guestList);