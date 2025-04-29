// JavaScript with Cypress for E2E testing

// Application Code (Login Page)

<!-- index.html -->
<form id="login-form">
  <input type="text" id="username" placeholder="Username" />
  <input type="password" id="password" placeholder="Password" />
  <button type="submit">Login</button>
</form>

<script>
  const form = document.getElementById('login-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate login logic
    if (username === 'admin' && password === 'password123') {
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials');
    }
  });
</script>

// E2E Test with Cypress

// login.spec.js
describe('Login Flow', () => {
  it('should login with correct credentials and redirect to dashboard', () => {
    cy.visit('/'); // Visiting the login page
    cy.get('#username').type('admin'); // Type username
    cy.get('#password').type('password123'); // Type password
    cy.get('button[type="submit"]').click(); // Click login button

    // Check for successful login
    cy.url().should('include', '/dashboard'); // Ensure redirection to dashboard
    cy.contains('Welcome, admin').should('be.visible'); // Verify welcome message
  });

  it('should show an error for invalid credentials', () => {
    cy.visit('/');
    cy.get('#username').type('admin');
    cy.get('#password').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid credentials').should('be.visible'); // Error message
  });
});
