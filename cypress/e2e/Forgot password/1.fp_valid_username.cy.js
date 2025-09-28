describe("Reset password berhasil", () => {
  it("Memasukkan username yang benar", () => {
    cy.visit("auth/login");
    cy.contains("Forgot your password?").click();
    cy.url().should("include", "/requestPasswordResetCode");
    cy.get('input[name="username"]').type("Admin");
    cy.get('button[type="submit"]').click();
  });
});
