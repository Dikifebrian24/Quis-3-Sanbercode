describe("Login Gagal", () => {
  it("Login dengan username dan password salah", () => {
    cy.visit("auth/login");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin1234");
    cy.intercept("POST", "/web/index.php/auth/validate").as("loginRequest");
    cy.get('button[type="submit"]').click();
    cy.wait("@loginRequest")
      .its("response.statusCode")
      .should("be.oneOf", [200, 302]);
    cy.get(".oxd-alert-content")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  });
});
