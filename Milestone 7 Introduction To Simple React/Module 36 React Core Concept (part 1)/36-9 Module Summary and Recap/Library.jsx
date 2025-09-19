import Book from "./Book";

export default function Library({ bookName }) {
  return (
    <div>
      <h3>My national Central Library</h3>
      <p>Books Collection: {bookName.length}</p>
      <ul>
        {bookName.map((book) => (
          <Book key={book.id} book_name={book}></Book>
        ))}
      </ul>
    </div>
  );
}
