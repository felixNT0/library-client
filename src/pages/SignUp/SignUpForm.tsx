/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import navigationStrings from "../../navigations/navigationStrings";
import { signUpUser } from "../../queries/SignUpMutation/SIgnUpMutation";
import { dataURIToBlob, resizeFile } from "../../utils/uploadImage";
import styles from "./SignUp.module.css";
import UploadProfilePictureButton from "./UploadProfilePictureButton";

function SignUpForm() {
  const [add, setAdd] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // const [displayError, setDisplayError] = useState(false)

  const [value, setValue] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [profile_picture, setprofile_picture] = useState("");

  const handleChange = (event: any) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const navigate = useNavigate();

  const { mutate } = useMutation(signUpUser, {
    onSuccess: (data) => {
      console.log(data);
      // navigate(navigationStrings.HOME);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const uploadImage = async (event: any) => {
    const file = event.target.files[0] || "";
    if (!file) return;
    const image = await resizeFile(file);
    const newFile = dataURIToBlob(image);
    const reader = new FileReader();
    reader.onload = (event: any) => {
      setprofile_picture(event?.target?.result as any);
    };
    reader.readAsDataURL(newFile);
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    mutate({ ...value, imageUrl: profile_picture });
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
        <h3 className={styles.h3}>Create An Account</h3>
        <p className={styles.error}>{add}</p>
        <div className={styles.userIcon}>
          <i className="fas fa-user-plus"></i>
        </div>
        <form onSubmit={handleSubmitForm}>
          <input
            className={styles.input}
            required
            placeholder="Username"
            onChange={handleChange}
            name="username"
            type="text"
            autoComplete=""
          />
          <input
            className={styles.input}
            placeholder="First Name"
            onChange={handleChange}
            name="first_name"
            required
            type="name"
          />

          <input
            className={styles.input}
            placeholder="Last Name"
            onChange={handleChange}
            name="last_name"
            required
            type="name"
          />

          <input
            className={styles.input}
            placeholder="Email"
            onChange={handleChange}
            name="email"
            required
            type="email"
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

          <UploadProfilePictureButton
            setprofile_picture={setprofile_picture}
            uploadImage={uploadImage}
          />

          {profile_picture && (
            <img
              src={profile_picture}
              className="w-40 h-40 m-auto rounded-full shadow"
            />
          )}

          <button className={styles.submit}>Create Account</button>

          <div className={styles.change}>
            <p>
              Already Registered{" "}
              <Link className={styles.text} to={navigationStrings.SIGN_IN}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
