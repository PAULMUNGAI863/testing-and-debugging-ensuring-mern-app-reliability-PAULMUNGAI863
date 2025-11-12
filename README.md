# Testing and Debugging MERN Applications

## Assignment Overview
This project implements testing strategies for a MERN stack application, including:

- Unit testing for React components and server functions
- Integration testing for API endpoints
- End-to-end testing for critical user flows
- Debugging techniques for common MERN stack issues

## Project Structure
See repository files.

## Tools Used
- **Jest** for unit testing
- **React Testing Library** for React components
- **Supertest** for API testing
- **Cypress** for end-to-end testing
- **MongoDB Memory Server** for testing database operations

## Testing Strategy
1. **Unit Tests**
   - Tested React components (`Counter`) for UI and state changes.
   - Tested server functions for proper behavior.

2. **Integration Tests**
   - Tested API routes (`/api/users`) with in-memory MongoDB.
   - Verified database creation and error handling.

3. **End-to-End Tests**
   - Tested critical user flows in the browser using Cypress.

## Debugging Techniques
- Used console logs to trace issues in React and Node.js.
- Applied `try/catch` blocks in controllers for error handling.
- Verified API calls using Postman and Supertest.
- Used Jest coverage reports to identify untested code.

## Test Coverage
- Unit test coverage: > 70%
- Integration and end-to-end tests ensure functionality of key flows.

## Running the Tests
**Client:**
\`\`\`bash
cd client
npm install
npm test
\`\`\`
**Server:**
\`\`\`bash
cd server
npm install
npm test
\`\`\`
**Cypress:**
\`\`\`bash
cd client
npx cypress open
\`\`\`

## Screenshots
*Add screenshots of coverage reports here.*