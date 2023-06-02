import { useEffect, useState } from "react";
import { FaRegTrashAlt, FaStepBackward } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import EditBooks from "../../components/EditBooks/EditBook";
import navigationStrings from "../../navigations/navigationStrings";
import styles from "./BookDetail.module.css";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState<any>();
  // const [error, setError] = useState(false);

  const [currentUser, setCurrentUser] = useState<any>();
  const navigate = useNavigate();

  const handleDeleteBook = () => {
    const books: any = [];
    const bookIndex = books.findIndex((book: any) => book.title === book.title);
    console.log(bookIndex);
    books.splice(bookIndex, 1);
    localStorage.setItem("books", JSON.stringify(books));
    navigate(navigationStrings.BOOK_LIST);
  };

  function handleGetBooks() {
    const books: any = [];
    let book = books.find((book: any) => book.id === id);
    setBook(book);
  }

  const borrowedBooks: any = [];

  const handleBorrowBook = () => {
    let books: any = [];
    const book = books.find((book: any) => book.id === id);
    const bookIndex = books.findIndex((book: any) => book.id === id);

    books.splice(bookIndex, 1);
    borrowedBooks.push(book);

    localStorage.setItem("borrowBooks", JSON.stringify(borrowedBooks));
    localStorage.setItem("books", JSON.stringify(books));
    navigate(navigationStrings.BOOK_LIST);
  };

  useEffect(() => {
    handleGetBooks();
  }, []);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{book?.title}</h2>
      <h4 className={styles.author}>{book?.author}</h4>
      <br />
      {currentUser ? (
        currentUser.type === "user" ? (
          <div className={styles.buttons}>
            <button
              className={styles.deleteButton}
              onClick={() => navigate(navigationStrings.BOOK_LIST)}
            >
              <FaStepBackward />
            </button>

            <button className={styles.deleteButton} onClick={handleBorrowBook}>
              Borrow Book
            </button>
            <button className={styles.deleteButton} onClick={handleDeleteBook}>
              <FaRegTrashAlt />
            </button>
            {book && <EditBooks book={book} onUpdate={handleGetBooks} />}
          </div>
        ) : (
          <div>
            <p>
              Sorry Create an User Account first before You can be able to see
              Book Details
            </p>
            click
            <Link to="/book-list">BookList</Link>
          </div>
        )
      ) : (
        <div>
          <p>
            Sorry Create an Account first before You can be able to see Book
            Details
          </p>
          click
          <Link to="/book-list">BookList</Link>
        </div>
      )}
    </div>
  );
}
