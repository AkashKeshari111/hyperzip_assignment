import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import EastIcon from "@mui/icons-material/East";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          width: "85%",
          borderBottom: "2px solid gray",
          paddingBottom: "30px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "left",
          "@media (max-width: 850px)": {
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gridTemplateRows: "auto",
          },
          "@media (max-width: 500px)": {
            display: "grid",
            gridTemplateColumns: "repeat(1,1fr)",
            gridTemplateRows: "auto",
          },
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
            "@media (max-width: 850px)": { width: "90%" },
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
            "@media (max-width: 850px)": { width: "max-content", width: "45%" },
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
            "@media (max-width: 850px)": { width: "max-content", width: "45%" },
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
            "@media (max-width: 850px)": { width: "min-content", width: "45%" },
            "@media (max-width: 500px)": { width: "100%" },
          }}
        >
          <h2>Newsletter</h2>
          <p style={{ flexWrap: "wrap" }}>
            Get the latest Echooling news delivered to you inbox
          </p>
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
      <Box
        sx={{
          width: "80%",
         
        }}
      >
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "20px",
            "@media (max-width: 500px)": {
              display: "block",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            variant="body2"
            color="white"
            align="left"
            style={{ width: "40%" ,
            "@media (max-width: 500px)": {
            alignItems:"center",
            width: "100%"
            },
          }}
          >
            © 2022 <span style={{ color: "rgb(210,9,43)" }}>Echooling</span>.
            All Rights Reserved
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "30%",
             
            }}
          >
            <text
              style={{ fontSize: "20px", fontWeight: 500, marginRight: "20px" }}
            >
              Follow us
            </text>
            <Link to="#" style={{ color: "gray" }}>
              <FacebookIcon />
            </Link>
            <Link to="#" style={{ color: "gray" }}>
              <TwitterIcon />
            </Link>
            <Link to="#" style={{ color: "gray" }}>
              <GoogleIcon />
            </Link>
          </Box>
        </footer>
      </Box>
    </Box>
  );
};

export default Footer;
