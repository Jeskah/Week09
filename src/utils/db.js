import pg from "pg";

export const db = new pg.Pool({
    connectionString: process.env.DB_CONN});

// import {connect} from "@utils"
// const db = connect()