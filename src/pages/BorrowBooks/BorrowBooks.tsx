import BorrowedBookList from "../../components/BorrowedBookList/BorrowedBookList";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./BorrowBooks.module.css";

function BorrowBooks() {
  const currentUser: any = {};
  const borrowedBooks: any = [];
  // const [info, setInfo] = useState("");

  return (
    <div>
      <NavBar />
      <br />
      {!currentUser && (
        <p>
          Sorry Create an Account first before You can be able to see Book Shelf
        </p>
      )}
      {currentUser && (
        <div className={styles.root}>
          <h3 className={styles.headerText}>Books Borrowed From The Library</h3>
          {borrowedBooks.length === 0 && <p>No Book Borrowed Yet</p>}
          <ul>
            {borrowedBooks.map((book: any) => (
              <BorrowedBookList {...book} key={book.id} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BorrowBooks;
