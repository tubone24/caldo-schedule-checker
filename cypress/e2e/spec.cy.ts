describe("UI Test", () => {
  it("access caldo", () => {
    cy.visit("https://www.hotyoga-caldo.com/mizonokuchi/studio/");
    const date = new Date();
    cy.contains("2024年3月").click();
    cy.wait(30000);
    cy.screenshot({ clip: {x: 285, y: 45, width: 1512, height: 600}});
  })
});