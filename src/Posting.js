import { Avatar, TextareaAutosize } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import FacebookContext from "./context/FacebookContext";
import "./Posting.css";

const initialFont = "1.5rem";
const initialCreatePostHeight = 428;

export const Posting = ({ wrapperRef }) => {
  const [fontSize, setFontSize] = useState(initialFont);
  const [createPostHeight, setCreatePostHeight] = useState(
    initialCreatePostHeight
  );

  return (
    <div className="posting">
      <div
        className="create_post"
        ref={wrapperRef}
        style={{ height: createPostHeight }}
      >
        <div className="create_post__upper">
          <span>Create post</span>
        </div>
        <div className="create_post__middle">
          <div className="avatar__area">
            <Avatar />
          </div>
          <div className="side__area">
            <span>Duong Maple</span>
            <div className="privacy__options">
              <img
                class="hu5pjgll lzf7d6o1"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8hytOd4Srb5.png"
                alt="Only me"
                height="12"
                width="12"
              />
              <span>Only me</span>
              <span className="drop__down"></span>
            </div>
          </div>
        </div>
        <div className="text__field">
          <TextareaAutosize
            placeholder="What's on you mind, Maple"
            className="text__field__content"
            style={{ fontSize }}
          />
        </div>
      </div>
    </div>
  );
};
