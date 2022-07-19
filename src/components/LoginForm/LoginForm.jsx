import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import * as authService from "../../services/authService";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    pw: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    props.updateMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await authService.login(formData);
      props.handleSignupOrLogin();
      navigate("/");
    } catch (err) {
      props.updateMessage(err.message);
    }
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
        <p>
          <Link to="/forget-password">Forgot Password?</Link>
        </p>
      </div>
      <Stack spacing={2} direction="row">
        <Button variant="contained" type="submit" sx={{width: "300px"}}>Log In</Button>
      </Stack>
      <Stack>
        
      </Stack>
      <div>
        <p>
          Don't have an account?:<Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
