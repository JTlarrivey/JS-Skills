// Simple behavior modules
const canWalk = (state) => ({
  walk: () => console.log(`${state.name} is walking.`),
});

const canEat = (state) => ({
  eat: () => console.log(`${state.name} is eating.`),
});

const canSwim = (state) => ({
  swim: () => console.log(`${state.name} is swimming.`),
});

// Compose behaviors to create complex objects
function createPerson(name) {
  const state = { name };
  return {
    ...state,
    ...canWalk(state),
    ...canEat(state),
  };
}

function createFish(name) {
  const state = { name };
  return {
    ...state,
    ...canSwim(state),
    ...canEat(state),
  };
}

// Usage
const person = createPerson("Charlie");
person.walk(); // Charlie is walking.
person.eat();  // Charlie is eating.

const fish = createFish("Nemo");
fish.swim();   // Nemo is swimming.
fish.eat();    // Nemo is eating.
