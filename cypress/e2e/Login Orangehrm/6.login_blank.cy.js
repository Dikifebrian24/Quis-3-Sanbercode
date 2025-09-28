describe("Login Berhasil", () => {
  it("Login dengan tidak memasukkan username dan password", () => {
    cy.visit("auth/login");
    cy.get('button[type="submit"]').click();
  });
});
