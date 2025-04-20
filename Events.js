// ========= EVENT REGISTRATION =========
console.log("=== EVENT REGISTRATION ===");

const button = document.createElement('button');
button.textContent = 'Click me';
document.body.appendChild(button);

// 1. Traditional method (onclick)
button.onclick = function() {
  console.log('Handler 1 (onclick)');
};

// 2. addEventListener (multiple handlers)
button.addEventListener('click', function() {
  console.log('Handler 2 (addEventListener)');
});

// 3. Arrow function with addEventListener
button.addEventListener('click', () => {
  console.log('Handler 3 (Arrow Function)');
});

// ========= EVENT PROPAGATION =========
console.log("\n=== EVENT PROPAGATION ===");

const container = document.createElement('div');
container.style.padding = '20px';
container.style.backgroundColor = '#eee';
container.innerHTML = '<p>Click this text</p>';
document.body.appendChild(container);

// Capture phase (third parameter true)
container.addEventListener('click', () => {
  console.log('Container (Capture)');
}, true);

// Bubble phase (default)
container.addEventListener('click', () => {
  console.log('Container (Bubble)');
});

const paragraph = container.querySelector('p');
paragraph.addEventListener('click', (e) => {
  console.log('Paragraph (Bubble)');
  // e.stopPropagation(); // Uncomment to stop propagation
});

// ========= DEFAULT EVENT BEHAVIOR =========
console.log("\n=== PREVENTING DEFAULT BEHAVIOR ===");

const link = document.createElement('a');
link.href = 'https://example.com';
link.textContent = 'Link (will not navigate)';
document.body.appendChild(link);

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Default navigation prevented');
});

// ========= EVENT DELEGATION =========
console.log("\n=== EVENT DELEGATION ===");

const list = document.createElement('ul');
list.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;
document.body.appendChild(list);

// Single handler for multiple elements
list.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI') {
    console.log(`Clicked on: ${e.target.textContent}`);
  }
});

// ========= CUSTOM EVENTS =========
console.log("\n=== CUSTOM EVENTS ===");

const customEventTarget = document.createElement('div');

customEventTarget.addEventListener('statusChange', (e) => {
  console.log(`Status changed to: ${e.detail.status}`);
});

// Dispatch custom event
const event = new CustomEvent('statusChange', {
  detail: { status: 'active' }
});
customEventTarget.dispatchEvent(event);

// ========= EVENT OBJECT PROPERTIES =========
console.log("\n=== EVENT OBJECT PROPERTIES ===");

button.addEventListener('click', (e) => {
  console.log('Event object properties:');
  console.log(`Target: ${e.target.tagName}`);
  console.log(`Current Target: ${e.currentTarget.tagName}`);
  console.log(`Event Phase: ${e.eventPhase} (1:Capturing, 2:AtTarget, 3:Bubbling)`);
  console.log(`Coordinates: (${e.clientX}, ${e.clientY})`);
});
