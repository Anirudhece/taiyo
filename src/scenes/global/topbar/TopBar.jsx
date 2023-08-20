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
        display="flex"
        justifyContent="space-between"
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
          <Box p={1} className="component-name">
            <Typography
              sx={{
                color: "var(--text-100, #1C4980)",
                fontFeatureSettings: "'clig' off, 'liga' off",
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
          <Divider sx={{ ml: 3, mr: 3 }} orientation="vertical" flexItem />

          <Box
            sx={{
              "@media (max-width: 600px)": {
                display: "none",
              },
            }}
          >
            <SubNav
              border={true}
              value={
                <>
                  My {}
                  {location.pathname.replace(/\//g, "")}
                </>
              }
            />
          </Box>
        </Box>
        <Box
          pr={1}
          className="right"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#1C4980",
            "@media (max-width: 900px)": {
              pr: 0,
            },
          }}
        >
          <IconButton>
            <PhoneAndroidIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "none",
          "@media (max-width: 600px)": {
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <Box width={"50%"}>
          <SubNav
            border={true}
            value={
              <>
                My {}
                {location.pathname.replace(/\//g, "")}
              </>
            }
          />
        </Box>
        <Box width={"50%"}>
          <SubNav color="#3E6493" value="Unstop Assessment" />
        </Box>
      </Box>
    </>
  );
}

export default Topbar;
