describe("Login Gagal", () => {
  it("Login dengan memasukkan username saja", () => {
    cy.visit("/auth/login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('button[type="submit"]').click();
  });
});
