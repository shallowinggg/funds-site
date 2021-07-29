import fastify from "fastify";

const server = fastify();
server.get('/', async (req, resp) => {
    return 'home\n';
})

server.listen(8000, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(-1)
    }
    console.log(`Server listen on ${address}`)
})

