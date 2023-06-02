import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import navigationStrings from "../../navigations/navigationStrings";
import styles from "./Login.module.css";

function LoginForm() {
  // const [add, setAdd] = useState(false);
  // const [updated, setUpdated] = useState(false);
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: any) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const navigate = useNavigate();
  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    let users: any = [];

    let user = users.find(
      (user: any) =>
        user.email === value.email && user.password === value.password
    );

    if (!user) {
      setError("Invalid email/password");
      return;
    }
    // setUpdated(true);
    navigate(navigationStrings.HOME);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    const password =
      (document.getElementById("show-password") as HTMLInputElement) || null;
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  return (
    <div>
      <div className={styles.root}>
        <h1 className={styles.h1}>Welcome To Tsowa Ndakolo Felix Library</h1>
        <h3 className={styles.h3}>LogIn to your account</h3>
        <div className={styles.userIcon}>
          <i className="fas fa-user-circle"></i>
        </div>
        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmitForm}>
          <input
            required
            className={styles.input}
            placeholder="Email"
            onChange={handleChange}
            name="email"
            type="text"
          />

          <div className="relative">
            <input
              required
              className={styles.input}
              type="password"
              id="show-password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
            <span
              onClick={toggleShowPassword}
              className="absolute top-4 right-3 cursor-pointer"
            >
              {showPassword ? (
                <AiFillEye color="#5f9ea0" size={20} />
              ) : (
                <AiFillEyeInvisible color="#5f9ea0" size={20} />
              )}
            </span>
          </div>

          <div className={styles.option}>
            <label>
              <input type="checkbox" name="" />
              Remember Me
            </label>
            <Link className={styles.text} to="/resetpassword">
              Forget Your Password
            </Link>
          </div>

          <button className={styles.submit}>LogIn</button>

          <div>
            <p className={styles.change}>
              Not Registered?{" "}
              <Link className={styles.text} to={navigationStrings.SIGN_UP}>
                Create an Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
