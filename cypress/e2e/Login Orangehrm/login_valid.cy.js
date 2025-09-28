describe("Login Berhasil", () => {
  it("Login dengan username dan password valid", () => {
    cy.visit("auth/login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});
