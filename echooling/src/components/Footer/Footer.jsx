import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EastIcon from "@mui/icons-material/East";

const aboutUs = [
  "About",
  "Courses",
  "Events",
  "Career",
  "Become a Teacher",
  "Contact",
];

const UsefulLinks = [
  "Browse Library",
  "Library",
  "Partners",
  "News & Blog",
  "FAQ",
  "Tutorials",
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handlePhoneClick = () => {
    window.location.href = "tel:+(402) 76244183";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:info@echooling.com";
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = () => {
    if (!email.includes("@")) {
      setEmail(email);
      alert(
        `Please include an '@' in your email address. '${email}' is missing '@'.`
      );
      return false;
    } else {
      setEmail("");
      return true;
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "20px",
        paddingBottom: "20px",
        backgroundColor: "rgb(15,18,22)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",

          display: "flex",
          alignItems: "flex-start",
          justifyContent: "left",
        }}
      >
        {/* //first box */}
        <Box
          sx={{
            width: "30%",

            flexWrap: "wrap",
            textAlign: "left",
            paddingLeft: "5px",
            paddingRight: "5%",
          }}
        >
          <img alt="echooling logo" src="/echooling_logo.png" />
          <p style={{ fontSize: "17px", fontWeight: 450 }}>
            There are course and event custom post types so you can easily
            create and manage course, events.
          </p>
          <p
            onClick={handlePhoneClick}
            style={{
              color: "rgb(183,183,164)",
              padding: 0,
              margin: 0,
              marginTop: "30px",
              cursor: "pointer",
            }}
          >
            <PhoneOutlinedIcon style={{ fontSize: "18px" }} />{" "}
            <text
              style={{ fontSize: "17px", fontWeight: "500" }}
              onMouseOver={(e) => {
                e.target.style.color = "rgb(210,9,43)";
                e.target.style.transition = ".8s";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "rgb(183,183,164)";
                e.target.style.transition = ".8s";
              }}
            >
              +(402) 762 441 83
            </text>
          </p>
          <p
            onClick={handleEmailClick}
            style={{
              color: "rgb(183,183,164)",
              padding: 0,
              margin: 0,
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            <EmailOutlinedIcon style={{ fontSize: "18px" }} />{" "}
            <text
              style={{ fontSize: "17px", fontWeight: "500" }}
              onMouseOver={(e) => {
                e.target.style.color = "rgb(210,9,43)";
                e.target.style.transition = ".8s";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "rgb(183,183,164)";
                e.target.style.transition = ".8s";
              }}
            >
              info@echooling.com
            </text>
          </p>
        </Box>

        {/* //2nd box */}
        <Box
          sx={{
            width: "21%",
            flexWrap: "wrap",
            textAlign: "left",
            paddingLeft: "5px",
          }}
        >
          <h3>AboutUs</h3>

          <List sx={{ color: "rgb(183,183,164)" }}>
            {aboutUs.map((value) => (
              <ListItem
                key={value}
                sx={{
                  margin: 0,
                  padding: 0,
                  width: "max-content",
                  "&:hover": {
                    color: "rgb(210,9,43)",
                    fontSize: "15px",
                    marginLeft: "5%",
                    borderBottom: "1px solid rgb(210,9,43)",
                    transition: "margin-left 1s linear",
                  },
                }}
              >
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* //3rd box */}
        <Box
          sx={{
            width: "21%",

            flexWrap: "wrap",
            textAlign: "left",
            paddingLeft: "5px",
          }}
        >
          <h2>Useful Links</h2>

          <List sx={{ color: "rgb(183,183,164)" }}>
            {UsefulLinks.map((value) => (
              <ListItem
                key={value}
                sx={{
                  margin: 0,
                  padding: 0,
                  width: "max-content",
                  "&:hover": {
                    color: "rgb(210,9,43)",
                    fontSize: "15px",
                    marginLeft: "5%",
                    borderBottom: "1px solid rgb(210,9,43)",
                    transition: "margin-left 1s linear",
                  },
                }}
              >
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* //4th box */}
        <Box
          sx={{
            width: "27%",

            flexWrap: "wrap",
            textAlign: "left",
          }}
        >
          <h2>Newsletter</h2>
          <p>Get the latest Echooling news delivered to you inbox</p>
          <Box style={{ display: "flex", marginTop: "15%" }}>
            <TextField
              type="email"
              placeholder="Enter your email"
              value={email}
              color="primary"
              focused={false}
              onChange={handleChange}
              style={{ backgroundColor: "white", borderRadius: "4px 0 0 4px" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              style={{ borderRadius: "0 4px 4px 0" }}
            >
              <EastIcon />
            </Button>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Footer;
