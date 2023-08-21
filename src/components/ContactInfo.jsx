import React from "react";
import { Box, Button, Typography } from "@mui/material";
function ContactInfo({ ele }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
            justifyContent: "space-evenly",
          p: "10px",
          ml: "10px",
          mr: "10px",
        }}
      >
        <Box>
          <Box>
            <Box mb={2} sx={{ textAlign: "center" }}>
              <Typography>{ele.firstName}</Typography>
              <Typography>{ele.lastName}</Typography>
              <Typography>{ele.status}</Typography>
            </Box>
          </Box>
          <Box>
            <Button m={2} variant="contained" color="success">
              edit
            </Button>
            <Button m={2} variant="contained" color="error">
              delete
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactInfo;
