import "./SidebarRow.css";
import { IconButton } from "@mui/material";

export const SidebarRow = ({ image, title, update }) => {
  return (
    <div className="sidebarRow">
      <IconButton
        sx={{
          width: "100%",
          justifyContent: "flex-start",
          borderRadius: 5,
          gap: "13px",
        }}
      >
        {image}
        <span>{title}</span>
      </IconButton>
    </div>
  );
};
