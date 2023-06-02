import http from "../../api/http";
import { BookType } from "../../types/BookType";

export const GET_ALL_BOOKS = "GET_ALL_BOOKS";

export const getAllBooks = (): Promise<BookType> => {
  return http.get(`/books`);
};
