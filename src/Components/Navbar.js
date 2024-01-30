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
import File from './../Assets/ForbesFile.pdf'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "MediaKit",
      icon: <HomeIcon />,
    },
    {
      text: "Forbes Woman Club",
      icon: <InfoIcon />,
    },
    {
      text: "Привилегии",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Мероприятия  ",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Анкета",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "О команде",
      icon: <ShoppingCartRoundedIcon />,
    }
  ];
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
        <div className="nav-logo-container">
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href={File} download >MediaKit</a>
        <a href="">Forbes Woman Club</a>
        <a href="">Привилегии</a>
        <a href="">Мероприятия</a>
        <a href="">Анкета</a>
        <a href="">О команде</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
