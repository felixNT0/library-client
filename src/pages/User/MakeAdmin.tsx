import NavBar from "../../components/NavBar/NavBar";
import styles from "./UserSwitch.module.css";

function MakeAdmin() {
  const users: any = [];

  const handleMakeUserAdmin = (id: any) => {
    console.log(id);
    const userIndex = users.findIndex((user: any) => user.id === id);

    let updatedUser: any = [...users];
    console.log(updatedUser);
    updatedUser[userIndex].type = "admin";
  };

  return (
    <div>
      <NavBar />
      <br />
      <h1>Make Admin Page</h1>
      <div className={styles.root}>
        {users.map((user: any) => (
          <div key={user.id}>
            <div className={styles.list}>
              <p className={styles.user}>
                <div className={styles.show}>
                  {user.username}
                  {/* {user.email} */}
                </div>
              </p>
              <button
                className={styles.submit}
                onClick={() => handleMakeUserAdmin(user.id)}
              >
                Make User Admin
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MakeAdmin;
