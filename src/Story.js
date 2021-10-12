import { Avatar } from "@mui/material";
import "./Story.css";

export const Story = ({ profileSrc, title, background, curUser }) => {
  return curUser ? (
    <></>
  ) : (
    <div className="story" style={{ backgroundImage: `url(${background})` }}>
      <Avatar
        style={{ margin: 12, border: "4px solid hsl(214, 89%, 52%)" }}
        src={profileSrc}
      />
      <span>{title}</span>
    </div>
  );
};
