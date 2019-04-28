const routes = require('next-routes');

module.exports = routes()
    .add('Homepage', '/', 'index')
    .add('Event Detail Page', '/event/:id', 'event-detail')
    .add('Search', '/search/:search', 'search');
