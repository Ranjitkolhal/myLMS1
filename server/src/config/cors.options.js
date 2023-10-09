corsOptions = {
    origin: process.env.NODE_ENV === 'production' ? "http://65.0.134.99:80" : "http://localhost:80",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}

module.exports = corsOptions