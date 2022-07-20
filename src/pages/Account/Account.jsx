import React, { useState, useEffect } from "react";
import { getOneProfile } from "../../services/profileService";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Card from "@mui/material/Card";
import { Link, useLocation, NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import AccountSpeedDial from "../Account/AccountSpeedDial";
import PostGallery from "../../components/PostGallery/PostGallery";

import Typography from "@mui/material/Typography";
export default function Account({ user, posts, handleLogout }) {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    const fetchAddProfile = async () => {
      const profileData = await getOneProfile(id);
      setProfile(profileData);
    };
    fetchAddProfile();
  }, []);
  console.log(profile);

  const userPosts = posts.filter((post) => profile._id === post.owner._id);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_504768.png"
            alt="profile-pic"
            className="profile-image"
          />
          <Divider variant="middle" />
          <div>
            <div className="profile-title">
              <p className="title-name">
                <strong>{profile ? profile.name : "Noname"}</strong>
                <br />
                <Typography variant="body1">
                  Member Since {profile.createdAt?.slice(0, 4)}
                </Typography>
              </p>
              {/* <Link className="AddIcon" to="/Account/Settings">
                <AddIcon />
              </Link> */}
              <AccountSpeedDial
                handleLogout={handleLogout}
                className="AddIcon"
              />
            </div>
          </div>

          <Divider variant="middle" />
          <div className="profile-des">
            <p className="des-post">
              <strong>140</strong> <br />
              Posts
            </p>
            <p className="des-reviews">
              <strong>142</strong> <br />
              Reviews
            </p>
            <p className="des-friends">
              <strong>24</strong>
              <br />
              Friends
            </p>
          </div>
          <h2>Posts</h2>
          <Divider variant="middle" />
          <>
            {userPosts.length ? (
              <PostGallery posts={userPosts} user={user} />
            ) : (
              <p>Not posts yet</p>
            )}
          </>
        </Card>
      </Grid>
    </Grid>
  );
}
