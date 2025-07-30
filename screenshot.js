import puppeteer from "puppeteer";
import fs from "fs";

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

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const screenshotFilename = `preview-${timestamp}.png`;

    // Take screenshot
    await page.screenshot({ path: screenshotFilename, fullPage: true });

    await browser.close();

    console.log(`✅ Screenshot saved as ${screenshotFilename}`);

    // Clean up old screenshots
    const files = fs.readdirSync(".");
    files.forEach(async(file) => {
      if (
        file.startsWith("preview-") &&
        file.endsWith(".png") &&
        file !== screenshotFilename
      ) {
        fs.unlinkSync(file);
        console.log(`🗑️ Deleted old screenshot: ${file}`);

        // Remove from Git as well
        const { execSync } = await import("child_process");
        execSync(`git rm --cached ${file}`);
        console.log(`📁 Removed ${file} from Git index`);
      }
    });

    // Update README.md
    const readmePath = "README.md";
    let readmeContent = fs.readFileSync(readmePath, "utf-8");

    const newMarkdown = `![preview](${screenshotFilename})`;

    const updatedContent = readmeContent.replace(
      /!\[preview\]\(.*preview-.*\.png\)/,
      newMarkdown
    );

    fs.writeFileSync(readmePath, updatedContent, "utf-8");
    console.log("📝 README.md updated with latest screenshot");
  } catch (error) {
    console.error("❌ Error taking screenshot:", error);
    process.exit(1);
  }
})();
