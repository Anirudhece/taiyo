import React, { useState, useEffect } from "react";
import { Box, CssBaseline } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import SideDrawer from "./scenes/global/sidebar/SideBar";
import Topbar from "./scenes/global/topbar/TopBar";
import ChartsMaps from "./scenes/chatsMaps/ChartsMaps";
import Contact from "./scenes/contact/Contact";


function App() {
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

  const isCollapsible = windowWidth <= 600;

  return (
    <Box>
      <CssBaseline />
      <SideDrawer />
      <Box
        style={{
          marginLeft: isCollapsible ? 0 : "140px",
          // background: "var(--system-background, #F6F8FA)",
        }}
      >
        <Box ml="10px" mr="10px">
          <Topbar isCollapsible={isCollapsible} />
          <Routes>
            <Route path="/" element={<Navigate to="/Contact" />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ChartsMaps" element={<ChartsMaps />} />
          </Routes>
        </Box>
      </Box>
      <style>
        {`
          @media (max-width: 1100px) {
            .collapsed-sidebar-margin {
              margin-left: 0;
            }
          }
        `}
      </style>
    </Box>
  );
}

export default App;