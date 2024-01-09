const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = 3001;

server.use(middlewares);
server.use((req, res, next) => {
    // Middleware to disable CORS
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server is running at port ${PORT}`);
});
