/** 
 * Filename: complex_js_code.js
 * 
 * This code represents a complex JavaScript program that simulates a virtual pet game.
 * It includes various features such as different pet species, feeding and training mechanisms,
 * mood tracking, and levels of growth for the pet. The code is made up of multiple classes
 * and functions to create a comprehensive virtual pet experience.
 */

// Constants
const PET_SPECIES = ['Dog', 'Cat', 'Rabbit', 'Bird'];
const PET_AGE_LEVELS = ['Baby', 'Teen', 'Adult'];

// Pet class
class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.age = 0;
    this.mood = 100;
    this.isHungry = true;
    this.isTrained = false;
  }

  // Method to feed the pet
  feed() {
    this.isHungry = false;
    this.mood += 10;
    console.log(`${this.name} has been fed.`);
  }

  // Method to train the pet
  train() {
    this.isTrained = true;
    this.mood += 20;
    console.log(`${this.name} has been trained.`);
  }

  // Method to update pet's age
  updateAge() {
    this.age++;
    console.log(`${this.name} is now ${PET_AGE_LEVELS[this.age]}.`);
  }

  // Method to check if pet is happy
  isHappy() {
    return this.mood > 50;
  }
}

// Game class
class Game {
  constructor() {
    this.pets = [];
  }

  // Method to add a new pet to the game
  addPet(name, species) {
    const pet = new Pet(name, species);
    this.pets.push(pet);
    console.log(`A new ${pet.species}, ${pet.name}, has joined the game.`);
  }

  // Method to remove a pet from the game
  removePet(petName) {
    const petIndex = this.pets.findIndex(pet => pet.name === petName);
    if (petIndex !== -1) {
      const pet = this.pets.splice(petIndex, 1)[0];
      console.log(`${pet.name} the ${pet.species} has been removed from the game.`);
    } else {
      console.log(`Pet with name ${petName} not found.`);
    }
  }

  // Method to feed all pets
  feedAllPets() {
    this.pets.forEach(pet => {
      pet.feed();
    });
  }

  // Method to train all pets
  trainAllPets() {
    this.pets.forEach(pet => {
      pet.train();
    });
  }

  // Method to update ages of all pets
  updateAges() {
    this.pets.forEach(pet => {
      pet.updateAge();
    });
  }

  // Method to check happiness of all pets
  checkHappiness() {
    this.pets.forEach(pet => {
      console.log(`${pet.name} is${pet.isHappy() ? '' : ' not'} happy.`);
    });
  }
}

// Create a new game instance
const game = new Game();

// Add pets to the game
game.addPet('Buddy', PET_SPECIES[0]);
game.addPet('Whiskers', PET_SPECIES[1]);
game.addPet('Fluffy', PET_SPECIES[2]);

// Perform actions on pets
game.feedAllPets();
game.trainAllPets();
game.updateAges();
game.checkHappiness();

// Remove a pet from the game
game.removePet('Fluffy');