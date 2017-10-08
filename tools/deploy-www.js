/* eslint-disable no-console */
import Rsync from 'rsync';

console.log('Deploying files to live server. This will take a moment...');

const rsync = new Rsync()
  .flags('av')
  .source([
    '.htaccess',
  ])
  .destination('patjacobs:/home/patjacob/public_html/mugmath.com/')
  .set('delete');

rsync.execute((error, code, cmd) => {
    if (error) {
      console.log(error.message);
    }
    console.log(`Rync of public_html/ files a success!`);
    console.log(cmd);
}, (data) => {
  console.log(`OUT: ${data}`);
}, (data) => {
  console.log(`ERR: ${data}`);
});
