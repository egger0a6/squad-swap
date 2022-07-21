import React, { useState, useEffect } from "react";
import { getOneProfile } from "../../services/profileService";
import Card from "@mui/material/Card";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import AccountSpeedDial from "../Account/AccountSpeedDial";
import PostGallery from "../../components/PostGallery/PostGallery";
import BottomNav from "../../components/NavBar/BottomNav";
import CommentIcon from "@mui/icons-material/Comment";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import * as profileService from "../../services/profileService";
import { update } from "../../services/offerService";
import CommentAccordion from "../../components/CommentAccordion/CommentAccordion";
import { validateFormCollection } from '../../services/profileService';

export default function Account({ user, posts, handleLogout }) {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [formData, setFormData] = useState({ content: "" });
  const [comments, setComments] = useState([]);
  const { checkValidForm } = validateFormCollection()
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const fetchAddProfile = async () => {
      const profileData = await getOneProfile(id);
      setProfile(profileData);
      setComments(profileData.comments);
    };
    fetchAddProfile();
  }, [id]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const fetchAddComment = async () => {
      const updatedProfile = await profileService.addComment(
        formData,
        profile?._id
      );
      setComments(updatedProfile.comments);
      setFormData({ content: "" });
    };
    fetchAddComment();
    evt.target.reset();
  };

  const userPosts = posts.filter((post) => profile?._id === post.owner?._id);

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
            src={
              profile?.photo
                ? profile.photo
                : "http://cdn.onlinewebfonts.com/svg/img_504768.png"
            }
            alt="profile-pic"
            className="profile-image"
          />

          <Divider variant="middle" />

          <div>
            <div className="profile-title">
              <p className="title-name">
                <strong>{profile ? profile.name : "Noname"}</strong>
                <br />
                <Typography component={"span"} variant="body1">
                  Member Since {profile.createdAt?.slice(0, 4)}
                </Typography>
              </p>
              <AccountSpeedDial
                handleLogout={handleLogout}
                className="AddIcon"
              />
            </div>
          </div>

          <Divider variant="middle" />

          {user.profile !== profile._id && (
            <Paper
              component="form"
              sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
              onSubmit={handleSubmit}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Leave a Review"
                inputProps={{ "aria-label": "search google maps", maxLength: 280 }}
                name="content"
                onChange={handleChange}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                type="submit"
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
                disabled={!checkValidForm(formData, errors)}
              >
                <CommentIcon />
              </IconButton>
            </Paper>
          )}
          <CommentAccordion comments={comments} />
          <div className="profile-des">
            {userPosts?.length && (
              <p className="des-post">
                <strong> {userPosts.length} </strong> <br />
                Posts
              </p>
            )}
            <p className="des-reviews">
              <strong>{comments.length}</strong> <br />
              Reviews
            </p>
          </div>
          <h2 className="posts-header">Posts</h2>
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
      <BottomNav user={user} />
    </Grid>
  );
}
