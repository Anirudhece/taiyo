import React, { useState } from "react";
import { Box, Chip, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function InsideList(props) {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const isCurrentRoute = location.pathname === props.to;

  const borderColor =
    isHovered || isCurrentRoute ? "var(--secondary-1, #0073E6)" : "transparent";

  const background = isCurrentRoute ? "#E5F1FC" : "transparent";

  const fontColor = isCurrentRoute ? "#0073E6" : "#1C4980";

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ListItem
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "center",
          border: `1px solid ${borderColor}`,
          borderRadius: "8px",
          background: background,
          mb: "5px",
          textAlign: "center",
          "@media (max-width: 600px)": {
            display: "block",
            pl: 0,
            width: "85%",
          },
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Link
          style={{ textDecoration: "none", color: fontColor }}
          to={props.to}
        >
          <Box
            sx={{
              mt: "10px",
              mb: "10px",
              "@media (max-width: 600px)": {
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            <ListItemIcon
              sx={{
                display: "flex",
                justifyContent: "center",
                color: fontColor,
                fontSize: "20px",
                "@media (max-width: 600px)": {
                  display: "flex",
                },
              }}
            >
              <props.icon />
            </ListItemIcon>
            <Box color={fontColor}>
              <ListItemText primary={props.value} />
            </Box>
            {props.chip && (
              <Chip
                variant="outlined"
                color="error"
                size="small"
                label="Admin"
                sx={{
                  ml: "auto",
                  "@media (min-width: 600px)": {
                    display: "none",
                  },
                }}
              />
            )}
          </Box>
        </Link>
      </ListItem>
    </Box>
  );
}

export default InsideList;