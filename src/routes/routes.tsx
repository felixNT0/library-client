import AddBook from "../pages/AddBook/AddBook";
import BookDetail from "../pages/BookDetail/BookDetail";
import BookList from "../pages/BookList/BookList";
import BorrowBooks from "../pages/BorrowBooks/BorrowBooks";
import Home from "../pages/Home";
import LoginForm from "../pages/Login/LoginForm";
import SignUpForm from "../pages/SignUp/SignUpForm";
// import UserAccountPasswordReset from "./pages/User/UserAccountPasswordReset";
import ReadBook from "../pages/ReadBook/ReadBook";
// // import User from "./pages/User/User";
// import MakeAdmin from "./pages/User/MakeAdmin";
// import MakeUser from "./pages/User/MakeUser";
import navigationString from "../navigations/navigationStrings";

const allRoutes = [
  {
    // key: 1,
    element: <Home />,
    path: navigationString.HOME,
  },
  {
    // key: 2,
    element: <SignUpForm />,
    path: navigationString.SIGN_UP,
  },
  {
    //  key: 3,
    element: <LoginForm />,
    path: navigationString.SIGN_IN,
  },
  {
    //  key: 4,
    element: <BookDetail />,
    path: `${navigationString.BOOK_DETAIL}/:id`,
  },
  {
    // key: 5,
    element: <BookList />,
    path: navigationString.BOOK_LIST,
  },
  {
    // key: 6,
    element: <AddBook />,
    path: navigationString.CREATE_A_BOOK,
  },
  {
    // key: 7,
    element: BorrowBooks,
    path: navigationString.BORROWED_BOOK,
  },
  {
    // key: 8,
    element: <ReadBook />,
    path: `${navigationString.READ_BOOK}/:id`,
  },
  //   {
  //     key: 9,
  //     component: ViewPlanDetailScreen,
  //     name: navigationString.VIEW_SPECIFIC_PLAN,
  //   },
  //   {
  //     key: 10,
  //     component: ErrorScreen,
  //     name: navigationString.ERROR_SCREEN,
  //   },
];

export default allRoutes;

//  <Route path="/" exact element={<Home />} />
//           <Route path="/make-admin" element={<MakeAdmin />} />
//           <Route path="/make-user" element={<MakeUser />} />
//           <Route path="/book/:id" element={<BookDetail />} />
//           <Route path="/add-book" element={<AddBook />} />
//           <Route path="/currentUser/id" element={<AddBook />} />
//           <Route path="/borrow-book" element={<BorrowBooks />} />
//           <Route path="/book-list" element={<BookList />} />
//           <Route path="/read-book/:id" element={<ReadBook />} />
//           <Route path="/login" exact element={<LoginForm />} />
//           <Route path="/signup" exact element={<SignUpForm />} />
//           <Route path="/resetpassword" element={<UserAccountPasswordReset />} />
