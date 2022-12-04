import React from "react";
import { MdReplay, MdClose, MdStar } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { AiFillThunderbolt } from "react-icons/ai";
import "./SwipeButton.css";
import { IconButton } from "@mui/material";


const SwipeButton = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons_repeat">
        <MdReplay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_left">
        <MdClose fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_star">
        <MdStar fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <IoMdHeart fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_lightning">
        <AiFillThunderbolt fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButton;