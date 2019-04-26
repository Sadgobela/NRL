const routes = require('next-routes');

module.exports = routes()
    .add('Homepage', '/', 'index')
    .add('Search', '/search/:search', 'search');
