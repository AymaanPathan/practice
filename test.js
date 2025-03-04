// Output based Question -2
// Get All Spices And Name Of An Animal by using call method

const animal = [
  {
    species: "Lion",
    name: "King",
  },
  {
    species: "Whale",
    name: "Queen",
  },
];
function printAnimals(i) {
  this.print = function () {
    console.log(i + " " + this.species + " " + this.name);
  };
  this.print();
}

for (let i = 0; i < animal.length; i++) {
  printAnimals.call(animal[i], i);
}
