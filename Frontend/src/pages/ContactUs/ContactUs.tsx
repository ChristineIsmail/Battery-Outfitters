import React from "react";
import "./ContactUs.css";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Fab } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import Insta from "../../assets/socialmedia/instagram.png";
import Wp from "../../assets/socialmedia/wtspblack.png";
import Email from "../../assets/socialmedia/email.png";
function ContactUs() {
  return (
    <div className="icons-logo-image">
      <div className="icons">
        <a target="_blank" rel="noreferrer" href="https://wa.me/96171574926">
          <img className="logos" src={Wp} alt="phone" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/battery_outfitters_lb?igshid=ZmRlMzRkMDU="
        >
          <img className="logos" src={Insta} alt="Instagram" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto: batteryoutfitterslb@gmail.com"
        >
          <img className="logos" src={Email} alt="email" />
        </a>
      </div>
      <div className="Location">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab variant="extended">
            <NavigationIcon sx={{ mr: 1 }} />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maps.app.goo.gl/rxGjJcQS2EBJqtnD9"
              className="locc"
            >
              Location
            </a>
          </Fab>
        </Box>
      </div>
    </div>
  );
}

export default ContactUs;
