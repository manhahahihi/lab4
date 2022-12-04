import React from "react";
import { BsFilePersonFill } from "react-icons/bs";
import { MdForum } from "react-icons/md";
import LOGO from "./logo.png";
import { IconButton } from "@mui/material";
import "./Header.css";


const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <BsFilePersonFill fontSize="large" className="header_icon" />
            </IconButton>
            <img src={LOGO} className="header_logo" alt="header" />
            <IconButton>
                <MdForum fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header