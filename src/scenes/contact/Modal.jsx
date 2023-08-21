import React, { useRef, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  modalReducer,
  saveContactInfoReducer,
} from "../../store/slices/ContactSlice";

export default function Modal() {
  const dispatch = useDispatch();

  const { isOpen } = useSelector((state) => state.contact);

  const scroll = "body";

  const handleClose = () => {
    dispatch(modalReducer({ isOpen: false }));
    setFormData({});
  };

  const handleSave = () => {
    dispatch(saveContactInfoReducer(formData));
    handleClose();
    setFormData({});
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  const [formData, setFormData] = useState({});

  const saveTempData = (e, key) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: e.target.value,
    }));
  };

  return (
    <Dialog
      fullWidth="true"
      width="sm"
      open={isOpen}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <Box>
        <DialogTitle id="scroll-dialog-title">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              sx={{
                color: "var(--text-100, #1C4980)",
                textAlign: "center",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                display: "flex",

                "@media (max-width: 700px)": {
                  fontSize: "14px",
                  alignItems: "center",
                },
              }}
            >
              Add new contact
            </Typography>
            <IconButton>
              <CloseOutlinedIcon onClick={handleClose} />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent Boxiders={scroll === "body"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box
              mb={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ width: "30%", color: "black" }}>
                First Name:
              </Typography>
              <TextField
                onChange={(e) => {
                  saveTempData(e, "firstName");
                }}
                value={formData.firstName}
                fullWidth="true"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>

            <Box
              mb={2}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ width: "30%", color: "black" }}>
                Last Name:
              </Typography>
              <TextField
                onChange={(e) => {
                  saveTempData(e, "lastName");
                }}
                value={formData.lastName}
                fullWidth="true"
                id="outlined-basic"
                variant="outlined"
              />
            </Box>
            <Box
              mb={2}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Typography sx={{ width: "30%", color: "black" }}>
                Status:
              </Typography>
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(e) => {
                    saveTempData(e, "status");
                  }}
                >
                  <FormControlLabel
                    value="Active"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="inactive"
                    control={<Radio />}
                    label="inactive"
                  />
                </RadioGroup>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button fullWidth="true" variant="contained" onClick={handleSave}>
            save
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
