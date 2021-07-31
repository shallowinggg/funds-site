import fastify from 'fastify';
import axios from 'axios';

const server = fastify();
server.get('/', async (req, resp) => {
  return 'home\n';
});

server.listen(8000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(`Server listen on ${address}`);
});


const a = 1;
