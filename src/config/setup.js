const connection = require("./mysql")

const { DataBaseError } = require("../utils/error")

const DropMoviesTable = `DROP TABLE IF EXISTS Movies;`;

const MoviesTable = `
    CREATE TABLE IF NOT EXISTS "Movies"(
        id INT AUTO_INCREMENT PRIMARY KEY,
        api VARCHAR (255),
        parameter JSON,
        cratedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );  
`;

connection.query(DropMoviesTable, (error, response) => {
  if (error) throw new DataBaseError("Failed to drop movies table")
  connection.query(MoviesTable, (error, response) => {
    console.log(error)
    if (error) throw new DataBaseError("Successfully create movies table")
    connection.end()
  })
})

