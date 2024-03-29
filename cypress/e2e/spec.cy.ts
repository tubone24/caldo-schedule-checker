describe("UI Test", () => {
  beforeEach(() =>
  cy.intercept(/.*\.pdf$/, (req) => {
    const pdfName = req.url.split("/").at(-1);
    console.log("Downloading pdf instead of opening in browser", {
      url: req.url,
      pdfName,
    });

    req.continue((res) => {
      res.headers["Content-Disposition"] = `attachment; filename=${pdfName};`;
    });
  })
);
  it("access caldo", () => {
    cy.visit("https://www.hotyoga-caldo.com/mizonokuchi/studio/");
    const today = new Date();
    today.setMonth(today.getMonth() + 1);
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // getMonth()は0から始まるため、実際の月の数に1を加える
    const result = year + '年' + month + '月';
    cy.contains(result).click();
    // cy.wait(30000);
    // cy.screenshot({ clip: {x: 285, y: 45, width: 1512, height: 600}})
  })
});
