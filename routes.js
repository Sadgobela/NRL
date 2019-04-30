const routes = require('next-routes');

module.exports = routes()
    .add('Homepage', '/', 'index')
    .add('San Jose', '/san-jose', 'san-jose')
    .add('Event Detail Page', '/event/:id', 'event-detail');
