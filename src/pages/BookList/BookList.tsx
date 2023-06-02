import { useState } from "react";
import BookCard from "../../components/BookCard/BookCard";
import NavBar from "../../components/NavBar/NavBar";
import SearchBookForm from "../../components/SearchBookForm/SearchBookForm";
import styles from "./BookList.module.css";
// import { getCurrentUser } from "../../service/getCurrentUser";

export default function BookList() {
  const books: any = [];
  const [searchedBook, setSearchedBook] = useState<any>();

  const handleSearchSubmit = (value: any) => {
    let search = books.filter((book: any) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    setSearchedBook(search);
  };

  return (
    <div>
      <NavBar />
      <SearchBookForm onSearch={handleSearchSubmit} />
      <h1>Books</h1>
      <ul className={styles.list}>
        {searchedBook && !searchedBook.length && (
          <h5>Sorry, book not found!</h5>
        )}
        {(searchedBook ? searchedBook : books).map((book: any) => (
          <BookCard {...book} key={book.title} />
        ))}
      </ul>
    </div>
  );
}
