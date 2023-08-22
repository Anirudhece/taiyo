import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteReducer, editModalReducer } from "../store/slices/ContactSlice";
function ContactInfo({ ele, index }) {
  const dispatch = useDispatch();

  const deleteContact = (index) => {
    dispatch(deleteReducer({ index }));
  };
  
  const editContact = (index) => {
    dispatch(editModalReducer({ index:index, isOpenEdit: true }));
  };

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
            <Button
              onClick={() => {
                editContact(index);
              }}
              m={2}
              variant="contained"
              color="success"
            >
              edit
            </Button>
            <Button
              onClick={() => {
                deleteContact(index);
              }}
              m={2}
              variant="contained"
              color="error"
            >
              delete
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ContactInfo;
