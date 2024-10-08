
// Get the client
import mysql from 'mysql2/promise'

// Create the connexion to database
const connection = async () =>{
    try{
        const conn = await mysql.createConnection({
                host : 'localhost',
                user: 'root',
                database: 'test'
        })
        return conn;
    } catch(error){
        console.log(error);
        throw error
    }
}

// A Simple SELECT query
const selectAll = async () =>{
    try {
        const connectionResult = await connection();
        const [results,fields] = await connectionResult.query(
            'SELECT * FROM personne;'
        )
        console.log(results); // results contains row returned server
        console.log(fields); // fields contains extra meta data about the results, if available
        
    } catch (error) {
        console.log(error);
        throw error
    } finally {
        console.log("fin");
        
    }
}
selectAll();

// Using placeholders
const selectOne = async () =>{
    try {
        const connectionResult = await connection();
        const [results,fields] = await connectionResult.query(
            `SELECT * FROM personne 
            WHERE prenom = ?`,
            ['Tsitohaina']
        )
        console.log(results); // results contains row returned server
        console.log(fields); // fields contains extra meta data about the results, if available
        
    } catch (error) {
        console.log(error);
        throw error
    } finally {
        console.log("fin");
        
    }
}
selectOne();



