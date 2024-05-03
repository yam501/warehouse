const sequelize = require('./db')
const {DataTypes} = require('sequelize')


const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.INTEGER, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false, defaultValue: "EMPLOYEE"}


}, {timestamps: false})

const Token = sequelize.define('tokens', {
    userId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, unique: true},
    refreshToken: {type: DataTypes.TEXT, allowNull: false}
}, {timestamps: false})
// , references:{model: Users, key: 'id'}


const Items = sequelize.define('items', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    category: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}

}, {timestamps: false})

const History = sequelize.define('history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    category: {type: DataTypes.STRING, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false},
    changes: {type: DataTypes.STRING, allowNull: false, defaultValue: 0}

}, {timestamps: false})

Users.hasOne(Token)
Token.belongsTo(Users, {
    foreignKey: 'userId',
})


module.exports = {
    Users, Token, Items, History
}