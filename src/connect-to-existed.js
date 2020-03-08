const puppeteer = require('puppeteer-core');

// https://medium.com/@jaredpotter1/connecting-puppeteer-to-existing-chrome-window-8a10828149e0

(async () => {

    const wsChromeEndpointurl = 'ws://127.0.0.1:54263/b76acce6-af2d-42c2-bdda-4fd2804386e0';
    const browser = await puppeteer.connect({
        browserWSEndpoint: wsChromeEndpointurl,
    });
    // const page = await browser.newPage();
    await page.setViewport({width: 1366, height: 768});
    await page.goto('https://dev.to/sonyarianto/practical-puppeteer-playing-with-puppeteer-core-7i0');
    await page.screenshot({path: 'example.png'});

    await browser.close();

})();