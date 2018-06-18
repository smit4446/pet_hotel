const pg = require('pg');
const Pool = pg.Pool;

const DATABASE_NAME = 'pet_hotel';
const config = {
  database: DATABASE_NAME, 
  host: 'localhost',     
  port: 5432,              
  max: 10,               
  idleTimeoutMillis: 30000 
}

const pool = new Pool(config);

pool.on('connect', (client) => {
  console.log(`Connected to database ${DATABASE_NAME} from:`, client);
})

pool.on('error', (err, client) => {
  console.log(`Error with database connection from ${client}. Error: `, err);
  process.exit(-1);
})

module.exports = pool;