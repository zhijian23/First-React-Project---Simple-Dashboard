import React from "react";
import { Grid, Cell } from "react-mdl";
import "./profile.css";

function Profile() {
  return (
    <div>
      <Grid className="contact-grid">
        <h3 className="heading">Profile Page</h3>
        <img
          className="avatar"
          src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
          style={{ height: "200px" }}
          alt="profile_pic"
        />
        <Cell col={6} align="middle" offsetDesktop="2">
          <h5>
            <b>Name:</b> Aaron Tiow
          </h5>
        </Cell>
        <Cell col={6} align="middle" offsetDesktop="2">
          <h5>
            <b>Age:</b> 21
          </h5>
        </Cell>
        <Cell col={6} align="middle" offsetDesktop="2">
          <h5>
            <b>Date of Birth:</b> 22/1/1999
          </h5>
        </Cell>
        <Cell col={6} align="middle" offsetDesktop="2">
          <h5>
            <b>Contact Number:</b> 012-3456789
          </h5>
        </Cell>
        <Cell col={6} align="middle" offsetDesktop="2">
          <h5>
            <b>Email:</b> aaron.tiow@email.com
          </h5>
        </Cell>
      </Grid>
    </div>
  );
}

export default Profile;
