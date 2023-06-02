import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import navigationStrings from "../../navigations/navigationStrings";
import styles from "./AddBook.module.css";

const getDataFromLocalStorage = () => {
  //  const { id } = useParams();
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function AddBook() {
  const [currentUser, setCurrentUser] = useState<any>();
  const [add, setAdd] = useState("");
  const [value, setValue] = useState({
    title: "",
    author: "",
  });

  const handleChange = (event: any) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let books = getDataFromLocalStorage();
    books.push({ ...value, id: new Date().toJSON() });

    localStorage.setItem("books", JSON.stringify(books));
    setValue(value);
    setAdd("You have just successfully borrow a book from the library");
    navigate(navigationStrings.BOOK_LIST);
  };

  useEffect(() => {
    //  setCurrentUser();
  }, [localStorage.getItem("currentUser")]);

  return (
    <div>
      <NavBar />
      <br />
      {!currentUser && (
        <p>Sorry Create an Account first before You can be able to Add Books</p>
      )}
      {currentUser && (
        <div className={styles.root}>
          <h3 className={styles.headerText}>Add Book to The Library</h3>
          <p className={styles.report}>{add}</p>

          <form onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Book Title"
              onChange={handleChange}
              name="title"
              required
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Book Autor"
              onChange={handleChange}
              name="author"
              required
            />
            <button className={styles.submit} type="submit">
              Add Books
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddBook;
