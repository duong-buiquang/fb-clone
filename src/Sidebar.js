import React from "react";
import "./Sidebar.css";
import { SidebarRow } from "./SidebarRow";

const fixedSize = {
  height: 36,
  width: 36,
};

export const Sidebar = () => {
  return (
    <div className="sidebar">
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
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t31.18172-8/cp0/c15.0.50.50a/p50x50/19620477_308885216239665_5203632701356803348_o.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=uAdNPGlC4esAX8YBUwG&tn=6qwlEx6YgbmvGpXL&_nc_ht=scontent.fhan4-3.fna&oh=02cfc49b37e4f414e60a17b727cee9b1&oe=618FE750"
            ></img>
          }
          title={"Bringing the in-store"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/cp0/c19.0.50.50a/p50x50/162084883_3073619422919356_7571936530601513615_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=2ZK1YIfQsbQAX8JmFzv&_nc_ht=scontent.fhan4-1.fna&oh=604a1f7c12345da5bd92130e745362b1&oe=618D751E"
            ></img>
          }
          title={"Experience Online"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpoAzO7mlTBcs35-Us7dwpjr6y9Y6fOFEPg&usqp=CAU"
            ></img>
          }
          title={"Join us as we nerd"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/cp0/c24.0.50.50a/p50x50/158127098_2906911732961678_5746749891181961356_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=lvlK8-J37DMAX8QaVbh&_nc_ht=scontent.fhan3-4.fna&oh=7013b9fac2914d123fda1aa9c3a73f66&oe=618FE5AA"
            ></img>
          }
          title={"Bridging digital and digital"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-Xw6KU2GRw5lKArPNGgcL5m_gxMBcu3QAQ&usqp=CAU"
            ></img>
          }
          title={"End-to-end Ecommerce redesign"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-1.fna.fbcdn.net/v/t45.1600-4/cp0/q75/spS444/p960x960/244343853_6245359679489_4046298700804176005_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=67cdda&_nc_ohc=zsft-ckjm_0AX_Xq8tH&_nc_oc=AQmYCIIFgwGRaPOKO_7LQWHUKBzifUG-mDdrmPKiLXokx01ehxEUvawa6pdM_jmI_kw&_nc_ht=scontent.fhan3-1.fna&oh=ba0e5529867039ef02be6a47b3599cb8&oe=616E241D"
            ></img>
          }
          title={"Our strawberries smoothies"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="data:image/png;base64,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"
            ></img>
          }
          title={"the feelgood deal of the world"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/cp0/c43.0.50.50a/p50x50/241180563_367152418453546_3294737061776133051_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ac9ee4&_nc_ohc=ViloIdAfAmcAX_ieCNQ&tn=6qwlEx6YgbmvGpXL&_nc_ht=scontent.fhan3-5.fna&oh=a4967fa6994890bb133050a48c3c1836&oe=616DEEC0"
            ></img>
          }
          title={"Introducing a new member service"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgWFQkVFSIWGBUXGBgWHRweIB0YKCAdHx0jITQsHhoxJx0fJT0mJi0rOjovIh8zRDM4OCs5OisBCgoKDg0OGg8QFjclHSA1Mi0wMC01Ny8yNzc3NzQtMS0uNy01Ky0rKzc1Ky0tLS0tOCstNjcrKzguLSsrLTItLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwcEAv/EADMQAQACAQMCAwMKBwAAAAAAAAABAgMEBREGIRITYQcxQRQWIjJCUXGBkbMVM1N0gqGx/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAfEQEBAAEEAgMAAAAAAAAAAAAAAQIDESFREkEEIjH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMxHvBkY5j7zmPvBkAAAAAAAAAAAAAAAAAAAAAAAAAGJlQ906j3ffty1G19I5KY8GG00z6y9fMit+PqYq88XvHxme0Jf2jbtl2To7dNdprTGpjH4Mcx3mL3mK1mPWJtEtOw7Vg6f2TR7XpYiKY6REzHxn7VvxmeZQzy8Ynp4eV2QO5bHvWl0sZI6z1c6q1opX+VSnM/GaxSfoxxM8enCX9me9a/d9r3Cm6auubUYNVfB5kUjH4q144tNY90zzz+bZvOPLq9F4dNePlFbeKni90zxMTX05ra0c/Dnn4KJ8n3PYMuv3jZdbOPV+XNsmlyYcmSMs0jtzEcRSYiJ+nFuPXhHDO39XZ6MmNu/PTtQjendf/ABXY9BuPg487FXJxE88eKInhJLWYAAAAAAAAAAAAAAAAAAAAAAABTPa1x8zckT/Xwfv40nqrc5J/FF+1zj5m5Zt7oz4f3saX1GPm0yp1vTT8ayXl5O35tms4vtWspaOazit2/wAZZjH37vjc7xg2fcMsx2rhvP6VlTGnVsuJ7NJ56B2D+3p/xZla9m1LY+g9hraO/wAnp/uOVlbHNAAAAAAAAAAAAAAAAAAAAAAAAeLd9r0e86DPoNywRfS5K+G1Z5jn847xPx5hz3qzpCvTvTu5brtG/wCvxWw4pvTH583pzEduYtWZ4/CXT0D13t+o3XpHdtv0dedRkw2rWPdzPHaAc433H1Js/TtNy0/Vea2ony48FseC0c3tSO0zTt9b3rXfoDNuEeX1B1LqtRpftYYmmClvS3lxEzX05hV9buGXqPSbRsml2rU11M58M5oyYb0rjpjmLXmbzHE/Vj9XYKzzwq05dvtOU870+NNhpp8GPDhpFcdYiIrHuiIjtEejaC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k="
            ></img>
          }
          title={"Some stuff about typography"}
        />
        <SidebarRow
          image={
            <img
              alt=""
              style={{ ...fixedSize, borderRadius: 10 }}
              src="data:image/jpeg;base64,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"
            ></img>
          }
          title={"Exploring responsive tech"}
        />
      </div>
    </div>
  );
};
