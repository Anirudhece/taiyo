import React from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  Chip,
  Typography,
  IconButton,
} from "@mui/material";
import { RiDashboardLine } from "react-icons/ri";
import InsideList from "../../../components/InsideList";
import {
  MdOutlineNoteAlt,
  MdOutlineQuiz,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../../store/slices/DrawerSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const drawerWidth = 140;

function SideDrawer(props) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.drawer);

  const { window } = props;

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  const drawer = (
    <Box>
      <List
        sx={{
          color: "var(--secondary-1, #0073E6)",
          fontFamily: "Inter",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: "500",
          "@media (max-width: 600px)": {
            fontSize: "15px",
          },
        }}
      >
        <InsideList to="/Contact" value="Contact" icon={RiDashboardLine} />

        <InsideList to="/ChartsMaps" value="ChartsMaps" icon={MdOutlineQuiz} />

        <Divider variant="middle" />

        <Box
          m={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 600px)": {
              display: "none",
            },
          }}
        >
          <Chip variant="outlined" color="error" label="SideBar" />
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "80%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "40px",
          }}
        ></Box>
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default SideDrawer;
