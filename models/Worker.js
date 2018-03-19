module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define(
    'Worker',
    {
      worker_id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      worker_gender: DataTypes.INTEGER,
      worker_name: DataTypes.STRING
    }
  )

  return Worker
}