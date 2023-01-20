import React from "react";
import "./LoginPopup.css";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import data from "../../Data.json";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
type LoginPopupProps = {
  closePopup: any;
};
function LoginPopup(props: LoginPopupProps) {
  const users = data.users;
  //   const userData = users.find((user: any) => user.username === username);
  const [isSaveButtonDisabled, setSaveButtonDisabled] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = () => {
    console.log("username", username);
    console.log("password", password);

    // console.log("userdata", userData);
    //     console.log("userdata.password", userData.password);

    //     if (userData.length == 0) {
    //       setSaveButtonDisabled(true);
    //       alert("Invalid Username");
    //     } else {
    //       if (userData.password != password) {
    //         alert("Wrong Password!");
    //       } else {
    //         setSaveButtonDisabled(false);
    //       }
    //     }

    //     setUsername("");
    //     setPassword("");
    //
  };
  return (
    <div className="login-popup-container">
      <div className="login-popup-overlay" onClick={props.closePopup}></div>
      <div className="login-popup-body">
        <img
          src="close.png"
          alt="close"
          className="login-close-icon"
          onClick={props.closePopup}
        />
      </div>
      <div className="textfields">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            className="box"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            className="box"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
        <div className="button1">
          <Stack spacing={2} direction="row">
            <Button
              className="button"
              variant="contained"
              onClick={handleOnSubmit}
            >
              Log in
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
