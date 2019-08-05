module.exports = async web => {
  try {
    const { liftToPromise } = require('../lib');
    const fs = require('fs');
    const fileName = '002_Afghanistan_English_US_Privacy_Policy.html'
    const openHtml = liftToPromise(fs.readFile);
    const html = await openHtml(__dirname + `/PrivacyPolicy/${fileName}`, 'utf8');
    const { texts } = require('./web.json');

    const test = texts.every(text => {
      console.log("///////////////////");
      console.log(text);
      console.log("///////////////////");
      const checkIndex = html.indexOf(text) > -1;
      return checkIndex;
    });
    console.log(test);

  } catch (error) {
    console.error(error);
  }


};