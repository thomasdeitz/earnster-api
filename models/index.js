const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(config.connectionString)

fs
  .readdirSync(__dirname)
  .filter(fname => fname !== 'index.js')
  .forEach(fname => {
    const model = sequelize.import(path.join(__dirname, fname))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db