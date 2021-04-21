# Bibit Coding Test

The are 4 question in this coding test
- SQL Test (query.sql)
- Movie App (app.js)
- Refactor Function (refactor.js)
- Logi Test (logic.js)
## Installation

Before using movie app, you need to install mysql on your computer and install sequelize-cli.

```bash
npm install
sequelize db:create 
sequelize db:migrate
npm run dev
```

## API

**Search**
----

* **URL**

  /movie/search

* **Method:**

  `GET`

*  **URL Params**

   {
   "title": "Superman",
   "year": 2020,
   "plot": long
   }
   
* **Success Response:**

    * **Code:** 200 <br />
      **Content:** `
      {
      "status": "Success",
      "message": "Successfully find movie by search item",
      "data": {
      "Title": "Superman",
      "Year": "1978",
      "Rated": "PG",
      "Released": "15 Dec 1978",
      "Runtime": "143 min",
      "Genre": "Action, Adventure, Drama, Sci-Fi",
      "Director": "Richard Donner",
      "Writer": "Jerry Siegel (character created by: Superman), Joe Shuster (character created by: Superman), Mario Puzo (story), Mario Puzo (screenplay), David Newman (screenplay), Leslie Newman (screenplay), Robert Benton (screenplay)",
      "Actors": "Marlon Brando, Gene Hackman, Christopher Reeve, Ned Beatty",
      "Plot": "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
      "Language": "English",
      "Country": "USA, UK, Canada, Switzerland, France",
      "Awards": "Nominated for 3 Oscars. Another 17 wins & 20 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.3/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "94%"
      },
      {
      "Source": "Metacritic",
      "Value": "80/100"
      }
      ],
      "Metascore": "80",
      "imdbRating": "7.3",
      "imdbVotes": "160,988",
      "imdbID": "tt0078346",
      "Type": "movie",
      "DVD": "15 Aug 2008",
      "BoxOffice": "$134,451,603",
      "Production": "Dovemead Films",
      "Website": "N/A",
      "Response": "True"
      }
      }
      `

* **Error Response:**
  
    * **Code:** 500 <br />
      **Content:** `{
      "code": "500",
      "type": "Internal Server Error"
      }`

