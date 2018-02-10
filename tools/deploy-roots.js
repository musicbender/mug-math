/* eslint-disable no-console */
import Rsync from 'rsync';

console.log('Deploying roots to live server. This will take a moment...');

const rsync = new Rsync()
  .flags('av')
  .source([
    'index.js',
    'package.json',
    'robots.txt',
    '404.html',
    '.foreverignore'
  ])
  .destination('patjacobs:/var/www/mug-math/')
  .set('delete');

rsync.execute((error, code, cmd) => {
    if (error) {
      console.log(error.message);
    }
    console.log(`Rync of root files a success!`);
    console.log(cmd);
}, (data) => {
  console.log(`OUT: ${data}`);
}, (data) => {
  console.log(`ERR: ${data}`);
});
