import pkg from 'pg';


const { Pool } = pkg




const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : 'satiplus',
    password : 'braulio320',
    port : 5432
})

export default pool;