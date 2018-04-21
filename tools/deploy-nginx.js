/* eslint-disable no-console */
import Rsync from 'rsync';

console.log('Deploying nginx config to live server. This will take a moment...');

const rsync = new Rsync()
  .flags('av')
  .source('server/nginx/mugmath.conf')
  .destination('pjacobs:/etc/nginx/conf.d/')

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
