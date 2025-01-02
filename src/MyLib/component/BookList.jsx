import axios from "axios";
import { Children, useEffect, useState } from "react";
import Card from "./Card";
import ImageSlide from "./ImageSlide";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://openlibrary.org/people/mekBot/books/want-to-read.json"
        );
        setBooks(response.data.reading_log_entries);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {books.slice(0, 12).map((book) => (
          <Card
            title={book.work.title}
            author={book.work.author_names}
            key={book.work.cover_id}
          >
            <img
              src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-L.jpg`}
              className="h-48"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BookList;
