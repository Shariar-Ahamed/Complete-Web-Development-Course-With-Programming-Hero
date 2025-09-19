export default function Book({ book_name }) {
  return (
    <h3>
      Name: {book_name.name} Price: {book_name.price}{" "}
    </h3>
  );
}
