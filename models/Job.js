module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define(
    'Job',
    {
      job_description: DataTypes.STRING,
      job_id: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      job_status: DataTypes.INTEGER,
      job_value: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      worker_id: DataTypes.STRING
    }
  )

  return Job
}