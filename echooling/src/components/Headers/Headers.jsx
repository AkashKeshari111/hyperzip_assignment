import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Headers = () => {
  return (
    <Box
    id="/"
      sx={{
        width: "100%",
        height: "54px",
        backgroundColor: "#262626",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position:"fixed",
        top:0,
        zIndex:1000

      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "max-content",
          marginLeft: "16px",
        }}
      >
        <Link
          to="https://themeforest.net/item/echooling-education-react-template/43914749"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            height: "100%",
          }}
        >
          <img
            alt="envato logo"
            src="/envato_logo.png"
            style={{ height: "45%", marginTop: "5%" }}
          />
          <span style={{ marginLeft: "-3%" }}>
            <text style={{ color: "white", fontSize: "24px" }}>envato</text>
            <text style={{ color: "rgb(129,180,65)", fontSize: "23px" }}>
              market
            </text>
          </span>
        </Link>
      </Box>

      <Box sx={{ marginRight: "16px", height: "60%", weight: "max-content" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(129,180,65)",
            height: "100%",
            textTransform: "inherit",
            "&:hover": {
              backgroundColor: "rgb(129,180,2)",
            },
          }}
        >
          Buy now
        </Button>
      </Box>
    </Box>
  );
};

export default Headers;
