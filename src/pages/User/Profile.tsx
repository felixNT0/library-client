import { useEffect, useState } from "react";
import styles from "./User.module.css";

function Profile() {
  const [currentUser, setCurrentUser] = useState<any>();
  // const currentUser = getCurrentUser()
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    // setCurrentUser(getCurrentUser());
  }, [localStorage.getItem("currentUser")]);

  return (
    <div>
      {currentUser && (
        <div>
          <button
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Profile"
            className={styles.profile}
            onClick={() => setEdit(!edit)}
          >
            <i className="fas fa-user"></i>
          </button>

          {edit && (
            <div className={styles.user}>
              {currentUser.email}

              <button
                onClick={() => setEdit(!edit)}
                className={styles.profileButton}
              >
                More Details
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
