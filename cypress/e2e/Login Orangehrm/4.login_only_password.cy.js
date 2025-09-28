describe("Login Gagal", () => {
  it("Login dengan memasukkan password saja", () => {
    cy.visit("/auth/login");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  });
});
