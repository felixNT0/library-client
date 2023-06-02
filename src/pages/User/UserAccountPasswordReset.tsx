import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";

function UserAccountPasswordReset() {
  // const { id, title, author } = book;
  // const [edit, setEdit] = useState(false);

  // const [value, setValue] = useState({
  //   PasswordReset: PasswordReset,
  //   Password: Password,
  // });
  // const [updated, setUpdated] = useState(false);

  const handleChange = (event: any) => {
    // setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const navigate = useNavigate();
  const handleGoBackLogin = (e: any) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleSubmitForm = (e: any) => {
    //     e.preventDefault();
    //     let currentUser = getUsersDataFromLocalStorage();
    //    const currentUserCheck = currentUser.find((user) => user.Password === value.Password)
    //     const currentUserIndex = currentUser.findIndex((user) => user.id === id);
    //     currentUser[currentUserIndex].PasswordReset = value.PasswordReset;
    //     currentUser[currentUserIndex].Password = value.Password;
    //     if (currentUserCheck) {
    // }
    //     localStorage.setItem("currentUser", JSON.stringify(currentUser));
    //     // setUpdated(true);
    //     // setEdit(false);
    //     navigate("/");
  };
  return (
    <div>
      <button onClick={handleGoBackLogin} className={styles.login}>
        Login
      </button>
      {/* {add && <p>You have just successfully borrow a book from the library</p>} */}
      <div className={styles.root}>
        <h3 className={styles.h3}>Reset Password</h3>
        <div className={styles.userIcon}>
          <i className="fa-solid fa-key"></i>
        </div>
        <form onSubmit={handleSubmitForm}>
          <input
            required
            className={styles.input}
            type="password"
            placeholder="Last Password"
            onChange={handleChange}
            //  name="PasswordReset"
            // defaultValue={user.PasswordReset}
            // value={data}
          />

          <input
            required
            className={styles.input}
            type="password"
            placeholder="New Password"
            onChange={handleChange}
            // name="Password"
            //  defaultValue={user.Password}
            // //  value={data}
          />

          <button className={styles.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserAccountPasswordReset;
