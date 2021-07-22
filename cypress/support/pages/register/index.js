const el = require("./elements").ELEMENTS;

class register {
  accessUsersTab() {
    cy.visit("/usuarios");
  }

  registerAndCheckUsername() {
    cy.get(el.username).type("Teste")
      .should("contain", "Teste");
  }

  registerAndCheckEmail() {
    cy.get(el.email)
      .type("teste@gmail.com")
      .should("contain", "teste@gmail.com");
  }

  saveData() {
    cy.get(el.saveButton).click();
  }
}

export default new register();
