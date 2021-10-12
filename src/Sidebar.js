import React from "react";
import "./Sidebar.css";
import { SidebarRow } from "./SidebarRow";

const fixedSize = {
  height: 36,
  width: 36,
};

export const Sidebar = ({ height }) => {
  return (
    <div className="sidebar" style={{ height }}>
      <div className="sidebar__top">
        <SidebarRow
          title="Dương Maple"
          image={
            <img
              alt=""
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-1/cp0/p40x40/185782595_1599188627138288_2731098529710614256_n.jpg?_nc_cat=110&amp;ccb=1-5&amp;_nc_sid=dbb9e7&amp;_nc_ohc=-z7zA0fzLSoAX-jEGS_&amp;_nc_ht=scontent.fhan4-3.fna&amp;oh=d9b280a09c6555028ebc9b688e52595b&amp;oe=6181ACF2"
            ></img>
          }
        />
        <SidebarRow
          image={
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
              style={fixedSize}
              alt=""
            ></img>
          }
          title={"Friends"}
        />
        <SidebarRow
          image={
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"
              alt=""
              style={fixedSize}
            ></img>
          }
          title={"Marketplace"}
        />
        <SidebarRow
          image={
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
              style={fixedSize}
              alt=""
            ></img>
          }
          title={"Watch"}
        />
        <SidebarRow
          image={
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
              style={fixedSize}
              alt=""
            ></img>
          }
          title={"Groups"}
        />
        <SidebarRow
          image={
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png"
              style={fixedSize}
              alt=""
            ></img>
          }
          title={"Memories"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-22.jpg"
              style={fixedSize}
            ></img>
          }
          title={"See more"}
        />
      </div>
      <div className="sidebar__middle">
        <h3>Your Shortcuts</h3>
        <SidebarRow
          image={
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
              style={fixedSize}
              alt=""
            ></img>
          }
          title={"[PROPTIT] Vietnam"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.18169-9/cp0/c19.0.50.50a/p50x50/11902291_1634155443500033_5313853581904777076_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=ac9ee4&amp;_nc_ohc=uEJ-XtH1UNwAX8rrsot&amp;_nc_ht=scontent.fhan3-3.fna&amp;oh=ef2e747d7959278fd69af93d6310fca1&amp;oe=6182E947"
            ></img>
          }
          title={"Audience around the world"}
        />
      </div>
    </div>
  );
};
