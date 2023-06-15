import puppeteer from "puppeteer";
import login from "./login.js";


async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await login(page);
  await page.waitForTimeout(6000);
}

run();
