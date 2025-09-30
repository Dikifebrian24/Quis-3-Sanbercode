describe("Login Berhasil", () => {
  it("Login dengan username dan password valid", () => {
    cy.visit("auth/login");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.intercept(
      "GET",
      "/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");
    cy.get('button[type="submit"]').click();
    cy.wait("@actionSummary").its("response.statusCode").should("eq", 200);
    cy.url().should("include", "/dashboard");
  });
});
