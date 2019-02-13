describe ('Sixth Tests', () => {
   context ('No Todos', () => {
     it ('Adds a new todo', () => {
       cy.visit ('/');
       cy.get ('.new-task').type ('This is my new todo').type ('{enter}');
     });
   });
 });