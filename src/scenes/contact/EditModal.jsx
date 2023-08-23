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
  editContactReducer,
  editModalReducer,
} from "../../store/slices/ContactSlice";

export default function EditModal() {
  const dispatch = useDispatch();

  const { isOpenEdit, contacts, editIndex } = useSelector(
    (state) => state.contact
  );

  const contactToEdit = contacts[editIndex];
  const firstName = contactToEdit ? contactToEdit.firstName : "";
  const lastName = contactToEdit ? contactToEdit.lastName : "";
  const status = contactToEdit ? contactToEdit.status : "";

  const [formData, setFormData] = useState({ firstName: '', lastName: '', status: '' });

  useEffect(() => {
    if (firstName && lastName && status) {
      setFormData({ firstName, lastName, status });
    }
  }, [firstName, lastName, status]);



  const scroll = "body";

  const handleClose = () => {
    dispatch(editModalReducer({ isOpenEdit: false, index: null }));
    setFormData({});
    // console.log(contacts[editIndex].firstName);
  };

  const handleSave = () => {
    if (formData.firstName && formData.lastName && formData.status) {
      dispatch(editContactReducer({ index: editIndex, data: formData }));
      handleClose();
      setFormData({});
    }
  };
  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (isOpenEdit) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpenEdit]);

  const saveTempData = (e, key) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: e.target.value,
    }));
  };

  return (
    <Dialog
      fullWidth={true}
      width="sm"
      open={isOpenEdit}
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
        <DialogContent dividers={scroll === "body"}>
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
                fullWidth
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
                fullWidth
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
                  value={formData.status}
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
                    label="Inactive"
                  />
                </RadioGroup>
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            fullWidth
            variant="contained"
            onClick={handleSave}
            disabled={
              !formData.firstName || !formData.lastName || !formData.status
            }
          >
            Update
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
