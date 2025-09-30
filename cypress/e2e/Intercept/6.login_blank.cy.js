describe("Login Gagal", () => {
  it("Login dengan tidak memasukkan username dan password", () => {
    cy.visit("auth/login");
    cy.intercept("POST", "/web/index.php/auth/validate").as("loginRequest");
    cy.get('button[type="submit"]').click();
    cy.get("@loginRequest.all").should("have.length", 0);
    cy.get('input[name="username"]')
      .closest(".oxd-input-group")
      .find(".oxd-input-group__message")
      .should("be.visible")
      .and("contain", "Required");
    cy.get('input[name="password"]')
      .closest(".oxd-input-group")
      .find(".oxd-input-group__message")
      .should("be.visible")
      .and("contain", "Required");
  });
});
