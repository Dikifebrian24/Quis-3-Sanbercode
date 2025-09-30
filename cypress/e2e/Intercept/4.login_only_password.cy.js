describe("Login Gagal", () => {
  it("Login dengan memasukkan password saja", () => {
    cy.visit("auth/login");
    cy.get('input[name="password"]').type("admin123");
    cy.intercept("POST", "/web/index.php/auth/validate").as("loginRequest");
    cy.get('button[type="submit"]').click();
    cy.get("@loginRequest.all").should("have.length", 0);
    cy.get('input[name="username"]')
      .closest(".oxd-input-group")
      .find(".oxd-input-group__message")
      .should("be.visible")
      .and("contain", "Required");
  });
});
