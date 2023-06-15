async function login(page) { 
  await page.goto("https://www.vtmedicaid.com/secure/logon.do");
  await page.setViewport({ width: 1920, height: 1080 });
  await page.screenshot({ path: "website.png", fullPage: true });

}

export default login;
