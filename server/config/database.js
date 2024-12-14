const Sequelize = require('sequelize');
const config = require('./config.json');
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const database = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect
})

database
.authenticate()
.then(() => {
    console.log('Database Connection Successfully!');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = database;