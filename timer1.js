const process = require('process');
let input  = process.argv.splice(2);

// timer is a alarm function that takes the trailing number following 'node timer1.js' in the console and returns an alarm message at each second. ex. 'node timer1.js 10 15' will return the message at 10 and 15 second.

const timer = function(arr) {
  if (arr.length === 0) {
    return;
  }
  for (let ele of arr) {
    if (isNaN(ele)) {
      return;
    } else if (ele < 0) {
      return;
    }
    let mSec = ele * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`Beep!Beep!Beep! Alarm of ${ele} seconds has gone off!`);
    }, mSec);
  }
};

timer(input);