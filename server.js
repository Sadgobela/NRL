const PORT = process.env.PORT || '3000';

const express = require('express');
const cookieParser = require('cookie-parser');

const next = require('next');

// server
const routes = require('./routes');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

(async () => {
    await app.prepare();
    const server = express();
    server.use(cookieParser());

    server.get('*', (req, res) => handler(req, res));

    await server.listen(PORT);
    console.log('> Ready on http://localhost:3000');
})();
