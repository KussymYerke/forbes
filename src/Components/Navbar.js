/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Rectangle 31.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import File from '../Assets/ForbesFile.pdf'
import { Viewer } from '@react-pdf-viewer/core';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "MediaKit",
      icon: <HomeIcon />,
      id: {File}
    },
    {
      text: "Forbes Woman Club",
      icon: <InfoIcon />,
      id: '#hero'
    },
    {
      text: "Привилегии",
      icon: <CommentRoundedIcon />,
      id: '#priveleges'
    },
    {
      text: "Мероприятия  ",
      icon: <PhoneRoundedIcon />,
      id: '#events',
    },
    {
      text: "Анкета",
      icon: <ShoppingCartRoundedIcon />,
      id: "#form"
    },
    {
      text: "О команде",
      icon: <ShoppingCartRoundedIcon />,
      id: "#team"
    }
  ];

  const [shown, setShown] = useState(false);

  const modalBody = () => (
    <div
        style={{
            backgroundColor: '#fff',

            /* Fixed position */
            left: 0,
            position: 'fixed',
            top: 0,

            /* Take full size */
            height: '100%',
            width: '100%',

            /* Displayed on top of other elements */
            zIndex: 9999,

            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
        }}
    >
        <Viewer fileUrl={File} />
    </div>
);

  return (
    <nav>
      <div className="nav">
        <div className="nav-inner">
            <img className="logo" src={Logo} alt="" />
            <div className="navbar-links-container">
            <button onClick={() => setShown(true)}>Open modal</button>
              <a href={File} target="blank">MediaKit</a>
              <a href="#hero">Forbes Woman Club</a>
              <a href="#priveleges">Привилегии</a>
              <a href="#events">Мероприятия</a>
              <a href="#form">Анкета</a>
              <a href="#team">О команде</a>
            </div>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 style={{color: 'white'}}onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer style={{color: 'white'}}open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250}}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <a className={"navLink"}href={item.id}>
                  <ListItemButton>
                    
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    
                  </ListItemButton>
                  </a>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
