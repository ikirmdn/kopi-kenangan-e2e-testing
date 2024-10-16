  const assert = require('assert');
  const { Builder } = require('selenium-webdriver');
  const { describe, it, before, after } = require('mocha');
  const chrome = require('selenium-webdriver/chrome');

  describe('Website Kopi Kenangan', function () {
      let driver;

      // Menghilangkan timeout untuk seluruh suite
      this.timeout(10000); // Tidak ada batas waktu

      before(async function() {
          let options = new chrome.Options();
          options.addArguments('--headless'); // Menjalankan browser dalam mode headless (tanpa GUI)
          options.addArguments('--disable-notifications'); // Menonaktifkan notifikasi

          driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
      });

      it('Landing page Kopi Kenangan', async function() {
          await driver.get('https://kopikenangan.com');
          let URL = await driver.getCurrentUrl();
          let title = await driver.getTitle();

          // Memeriksa apakah URL sesuai
          assert.equal(URL, 'https://kopikenangan.com/');
          
          // Memeriksa apakah title halaman sesuai
          assert.equal(title, 'Kopi Kenangan');
      });

      after(() => driver && driver.quit());
  });
