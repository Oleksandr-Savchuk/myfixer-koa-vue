const { Pool } = require('pg');

class Database {
  constructor() {
    this.config = {
      user: 'sblmlate',
      host: 'dumbo.db.elephantsql.com',
      database: 'sblmlate',
      password: '650_ImAzXWYoH_DLV_ecENg_eEWXsSE4',
      port: 5432,
    };

    this.pool = new Pool(this.config);
  }
  query(sql) {
    return this.pool.query(sql);
  }
  close() {
    this.pool.end();
  }
}
module.exports = new Database();