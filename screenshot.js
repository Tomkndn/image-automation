import puppeteer from "puppeteer";

(async () => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto("http://localhost:3000", {
      waitUntil: "networkidle0",
      timeout: 0,
    });

    await page.setViewport({ width: 1280, height: 800 });
    await page.screenshot({ path: "preview.png", fullPage: true });

    console.log("✅ Screenshot captured and saved as preview.png");

    await browser.close();
  } catch (error) {
    console.error("❌ Error taking screenshot:", error);
    process.exit(1);
  }
})();
