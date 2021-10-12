import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Home } from "@mui/icons-material";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import FlagIcon from "@mui/icons-material/Flag";
import { Avatar, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Messenger } from "./icons/Messenger";
import { Group } from "./icons/Group";
import { Gaming } from "./icons/Gaming";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt=""
        ></img>

        <div className="header__input">
          <SearchIcon />
          <input placeholder="Tìm kiếm trên Facebook" type="text"></input>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__options header__options--active">
          <Home fontSize="large" />
        </div>
        <div className="header__options">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__options">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__options">
          <Group height="30" width="30" />
        </div>
        <div className="header__options">
          <Gaming height="30" width="30" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/185782595_1599188627138288_2731098529710614256_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JLbcUd37-ZUAX-X__07&tn=q-lEgb_0z_5NoZg9&_nc_ht=scontent.fhan3-5.fna&oh=a9c9d207b05b2763133a427e344d9370&oe=617F07A7" />
          <h4>Maple</h4>
        </div>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <Messenger height="30" width="30" />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}
