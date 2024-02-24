describe("UI Test", () => {
  it("access caldo", () => {
    cy.visit("https://www.hotyoga-caldo.com/mizonokuchi/studio/");
    const today = new Date();
    today.setMonth(today.getMonth() + 1);
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // getMonth()は0から始まるため、実際の月の数に1を加える
    const formattedMonth = month < 10 ? '0' + month : month; // 1桁の月を2桁の文字列に変換する
    const result = year + '年' + formattedMonth + '月';
    cy.contains(result).click();
    cy.wait(30000);
    cy.screenshot({ clip: {x: 285, y: 45, width: 1512, height: 600}});
  })
});