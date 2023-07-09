//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

String.prototype.toTitleCase = function() {
  let words = this.split(' ');
  let capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
  return capitalizedWords.join(' ');
};

let person = "Yaqoob Junejo";
console.log({
  lowerCase: person.toLowerCase(),
  upperCase: person.toUpperCase(),
  titleCase: person.toTitleCase()
});
