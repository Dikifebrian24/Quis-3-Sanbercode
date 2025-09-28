describe("Login Gagal", () => {
  it("Login dengan memasukkan username saja", () => {
    cy.visit("/auth/login");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  });
});
