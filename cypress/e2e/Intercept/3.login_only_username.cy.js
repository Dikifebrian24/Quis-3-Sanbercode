describe("Login Gagal", () => {
  it("Login dengan memasukkan username saja", () => {
    cy.visit("auth/login");
    cy.get('input[name="username"]').type("Admin");
    cy.intercept("POST", "/web/index.php/auth/validate").as("loginRequest");
    cy.get('button[type="submit"]').click();
    cy.get("@loginRequest.all").should("have.length", 0);
    cy.get('input[name="password"]')
      .closest(".oxd-input-group")
      .find(".oxd-input-group__message")
      .should("be.visible")
      .and("contain", "Required");
  });
});
