module.exports = {
  development: {
    client: 'postgres',
    connection: {
      database: 'priotix',
      user: 'postgres',
      port: 5432,
      password: 'qwerty1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations_lda'
    }
  },
  production: {
    client: 'postgres',
    connection: {
      database: 'priotix',
      user: 'postgres',
      password: 'qwerty1',
      port: 5432,
      host: 'priotix'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations_lda'
    }
  }
};