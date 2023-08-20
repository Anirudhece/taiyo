import React from "react";
import { Typography } from "@mui/material";
function SubNav(props) {
  return (
    <div>
      <Typography
        pt={2}
        pb={2}
        sx={{
          color: props.color ? props.color : "#0073E6",
          fontFamily: "Inter",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          borderBottom: props.border && "2px solid #0073E6",
          textAlign: "center",
        }}
      >
        {props.value}
      </Typography>
    </div>
  );
}

export default SubNav;