const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
    host: 'localhost',
    port: 3306,
    database: 'mydb',
    username: 'root',
    password: 'root',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
