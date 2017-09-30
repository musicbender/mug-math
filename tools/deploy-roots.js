/* eslint-disable no-console */
import Rsync from 'rsync';

console.log('Deploying to live server. This will take a moment...');

const rsync = new Rsync()
  .flags('av')
  .source('manifest.json')
  .source('sw.js')
  .source('robots.txt')
  .destination('patjacobs:/home/patjacob/www/mugmath.com/')
  .set('delete');

rsync.execute((error, code, cmd) => {
    if (error) {
      console.log(error.message);
    }
    console.log(`Rync of package.json a success!`);
    console.log(cmd);
}, (data) => {
  console.log(`OUT: ${data}`);
}, (data) => {
  console.log(`ERR: ${data}`);
});
