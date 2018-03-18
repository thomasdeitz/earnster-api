module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'job',
    {
      work_description: DataTypes.STRING,
      work_id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      work_status: DataTypes.INTEGER,
      work_value: DataTypes.INTEGER,
      worker_id: DataTypes.STRING
    }
  )

  return Job
}