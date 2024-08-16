import React, {useEffect, useState} from "react";

function Discover() {
const [books, setBooks]=useState([]);

   
   useEffect(()=> {
        fetch('https://potterapi-fedeperin.vercel.app/en/books')
        .then(res=>res.json())
        .then(data=>setBooks(data));

    }, [])




return (
    <div className="discover">
      <div className="book-list">

        {books.map(book => (
          <div key={book.id} className="book-card">
             <h1>{book.number}</h1>
             <h1>Title:{book.title}</h1>
             <h1>Date:{book.releaseDate}</h1>
             <h1>Description:{book.description}</h1>
             <h1>Pages:{book.pages}</h1>
             <img src={book.cover} alt='cover'></img>

           
          </div>
        ))}
      </div>
    </div>




   
);
}



export default Discover;
