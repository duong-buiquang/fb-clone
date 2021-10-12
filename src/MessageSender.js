import "./MessageSender.css";
import { Avatar, IconButton } from "@mui/material";
import {
  InsertEmoticonOutlined,
  PhotoLibraryOutlined,
  VideocamOutlined,
} from "@mui/icons-material";

export const MessageSender = () => {
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input placeholder={"What's on your mind"} />
        </form>
      </div>
      <div className="messageSender__bottom">
        <IconButton className="messageSender__options">
          <VideocamOutlined fontSize="large" style={{ color: "red" }} />
          <span>Live Video</span>
        </IconButton>
        <IconButton className="messageSender__options">
          <PhotoLibraryOutlined fontSize="large" style={{ color: "green" }} />
          <span>Photo/Video</span>
        </IconButton>
        <IconButton className="messageSender__options">
          <InsertEmoticonOutlined
            fontSize="large"
            style={{ color: "orange" }}
          />
          <span>Feeling/Activity</span>
        </IconButton>
      </div>
    </div>
  );
};
