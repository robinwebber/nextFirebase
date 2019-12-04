import React, { useState } from "react";
import { NextPage } from "next";
import { connect } from "react-redux";
import { loginUser, getUserIdToken } from "../../redux/modules/auth/index";
import { AppState } from "../../redux/reducers";
import Link from "next/link";

import { withStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const styles = () => ({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
});

const Login: NextPage = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { classes, loginError } = props;

  const handleSubmit = () => {
    const { dispatch } = props;
    dispatch(loginUser(email, password));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={e => setPassword(e.target.value)}
        />
        {loginError && (
          <Typography component="p" className={classes.errorText}>
            Incorrect email or password.
          </Typography>
        )}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </Paper>
      <Link href="/topsecretfiles">
        <a title="Top Secret Files">Top Secret Files</a>
      </Link>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => ({
  isLoggingIn: state.authReducer.isLoggingIn,
  loginError: state.authReducer.loginError,
  user: state.authReducer.user
});

export default withStyles({
  "@global": {
    body: {
      backgroundColor: "#fff"
    }
  },
  paper: {
    marginTop: 100,
    display: "flex",
    padding: 20,
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#f50057"
  },
  form: {
    marginTop: 1
  },
  errorText: {
    color: "#f50057",
    marginBottom: 5,
    textAlign: "center"
  }
})(connect(mapStateToProps)(Login));
