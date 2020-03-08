const puppeteer = require('puppeteer-core');

(async () => {

    let launchOptions = { headless: false,
        //don't blame be I'm currently on my win pc
        executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // because we are using puppeteer-core so we must define this option
        args: ['--start-maximized --remote-debugging-port=9222 --no-first-run --no-default-browser-check'] };
    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();
    await page.goto('https://dev.to/sonyarianto/practical-puppeteer-playing-with-puppeteer-core-7i0');
    await page.screenshot({path: 'example.png'});

    await browser.close();

})();