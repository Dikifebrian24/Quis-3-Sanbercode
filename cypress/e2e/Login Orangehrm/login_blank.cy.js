describe("Login Berhasil", () => {
  it("Login dengan username dan password valid", () => {
    cy.visit("auth/login");
    cy.get('button[type="submit"]').click();
  });
});
