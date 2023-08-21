import React from "react";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Heading from "../../components/Heading";
import { useSelector, useDispatch } from "react-redux";
import { modalReducer } from "../../store/slices/ContactSlice";
import Modal from "./Modal";
import ContactInfo from "../../components/ContactInfo";

function Contact() {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contact);

  const addContacts = () => {
    dispatch(modalReducer({ isOpen: true }));
  };

  return (
    <>
      <Box mt={5} mb={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          onClick={addContacts}
          className="NewAssessment-clickable"
          m={0.2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            borderRadius: "0.75rem",
            border: "1px dashed var(--system-stroke-2, #DADCE0)",
            background: "var(--system-background, #F6F8FA)",
            cursor: "pointer",
            width: "50%",
            padding: "30px",
            "@media (max-width: 1100px)": {
              width: "100%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "4.375rem",
              width: "4.375rem",
              padding: "0.625rem",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4.5rem",
              background: "#FFF",
            }}
          >
            <AddIcon
              sx={{
                display: "flex",
                height: "2.5rem",
                width: "2.5rem",
                flexShrink: "0",
                color: "#0073E6",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.625rem",
            }}
          >
            <Heading size={"18px"} weight={"500"} value="Cretate contact" />
          </Box>
        </Box>
      </Box>
      <Modal />
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {contacts.length > 0 ? (
          contacts.map((ele, ind) => (
            <ContactInfo ele={ele} key={ele.id} index={ind} />
          ))
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            no contact details available
          </Box>
        )}
      </Box>
    </>
  );
}

export default Contact;
