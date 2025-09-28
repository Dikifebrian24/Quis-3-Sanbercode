describe("Login Berhasil", () => {
  it("Login dengan username dan password valid", () => {
    cy.visit("auth/login");
    cy.get('input[name="username"]').type("admin");
    cy.get('input[name="password"]').type("admin1234");
    cy.get('button[type="submit"]').click();
  });
});
