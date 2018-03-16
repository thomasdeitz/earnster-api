module.exports = {
  port: process.env.PORT || 3000,
  connectionString: process.env.DATABASE_URL || 'postgres://thomasd4_test:test1@localhost:5432/thomasd4_gp'
}