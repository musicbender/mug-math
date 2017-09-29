/* eslint-disable no-console */
import Rsync from 'rsync';

process.env.NODE_ENV = 'production';
process.env.LIVE = 'true';

console.log('Deploying to live server. This will take a moment...');

const rsync = new Rsync()
  .flags('avz')
  .source('dist/')
  .destination('patjacobs:/home/patjacob/mug-math/dist/')
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
