import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useLocation } from "react-router-dom";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";
import SubNav from "../../../components/SubNav";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../../../store/slices/DrawerSlice";

function Topbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <>
      <Box
        className="topbar-container"
        pl={1}
        mb={0.3}
        sx={{
          background: "#FFF",
          "@media (max-width: 900px)": {
            ml: 1,
            mr: 1,
            pl: 0,
          },
        }}
      >
        <Box display="flex" className="left" sx={{ alignItems: "center" }}>
          {windowWidth <= 600 && (
            <Box
              sx={{
                display: "flex",
                width: "40px",
                height: "40px",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "60px",
                background: "var(--secondary-5, #F2F8FE)",
              }}
            >
              <IconButton>
                <SegmentOutlinedIcon
                  onClick={openDrawer}
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </IconButton>
            </Box>
          )}
          <Box
            p={1}
            className="component-name"
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Typography
              sx={{
                color: "var(--text-100, #1C4980)",
                fontFamily: "Inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "140%",
              }}
            >
              {location.pathname.replace(/\//g, "")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Topbar;
