// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/gettingthingsdone.db3'
    },
    useNullAsDefault:true,
  },
  pool: {
    afterCreate: (connection, done) => {
      connection.run('PRAGMA foreign_keys = ON', done)
    }
  },
    migrations: {
      directory: './data/migrations'
  },
  


  

};
