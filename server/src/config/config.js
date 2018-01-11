module.exports = {
  ports: {
    client: 'http://localhost:8080',
    server: process.env.PORT || 8081
  },
  DB: {
    dataBase: process.env.DB_NAME || 'hlymboo200',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'hakyn',
    options: {
      dialect: process.env.DB_DIALECT || 'mysql',
      host: process.env.DB_HOST || '127.0.0.1'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'enMiguelyaceOsoUnSanAteo'
  },
  email: {
    host: process.env.EMAIL_HOST || 'server203.web-hosting.com',
    port: process.env.EMAIL_PORT || 465,
    account: {
      user: process.env.EMAIL_USER || 'hlymboo@hlymboo.com',
      password: process.env.EMAIL_PASSWORD || '9Pol3Zey21'
    }
  }
}
