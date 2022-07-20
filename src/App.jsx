import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import * as authService from "./services/authService";
import * as postService from "./services/postService";
import * as offerService from "./services/offerService";

// Pages
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ShowPost from "./pages/ShowPost/ShowPost";
import AddPost from "./pages/AddPost/AddPost";
import EditPost from "./pages/EditPost/EditPost";
import AddOffer from "./pages/AddOffer/AddOffer";

// Components
import NavBar from "./components/NavBar/NavBar";

// Account pages
import Account from "./pages/Account/Account";
import Settings from "./pages/Account/Settings";
import AddProfileDetails from "./pages/Account/AddProfileDetails";
import EditProfileDetails from "./pages/Account/EditProfileDetails";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import History from "./pages/Account/ History";
import ReportProblem from "./pages/Account/ReportProblems";


const App = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllPosts = async () => {
      const postData = await postService.getAll();
      setPosts(postData);
    };
    fetchAllPosts();
  }, []);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const handleAddPost = async (newPostData, photo) => {
    const newPost = await postService.create(newPostData);
    if (photo) {
      newPost.photo = await postPhotoHelper(photo, newPost._id);
    }
    setPosts([...posts, newPost]);
    navigate("/");
  };

  const handleUpdatePost = async (updatedPostData, photo) => {
    const updatedPost = await postService.update(updatedPostData);
    if (photo) {
      updatedPost.photo = await postPhotoHelper(photo, updatedPost._id);
    }
    const newPostArray = posts.map((post) =>
      post._id === updatedPost._id ? updatedPost : post
    );
    setPosts(newPostArray);
    navigate("/");
  };

  const handleDeletePost = async (id) => {
    const deletedPost = await postService.deleteOne(id);
    setPosts(posts.filter((post) => post._id !== deletedPost._id));
    navigate("/");
  };

  const handleAddOffer = async (newOfferData, postId) => {
    newOfferData.post = postId
    const newOffer = await offerService.create(newOfferData);
    navigate(`/${postId}`) 
  }

  const handleUpdateOffer = async (updatedOfferData, postId) => {
    const updatedOffer = await offerService.update(updatedOfferData)
    navigate(`/${postId}`)
  }

  const handleDeleteOffer = async (offerId, postId) => {
    const deletedOffer = await offerService.deleteOne(offerId)
    navigate(`/${postId}`)
  }

  const postPhotoHelper = async (photo, id) => {
    const photoData = new FormData();
    photoData.append("photo", photo);
    return await postService.addPhoto(photoData, id);
  };

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>

        <Route
          path="/"
          element={
            <Landing
              user={user}
              posts={posts}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          }
        />

        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />

        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />

        <Route
          path="/add"
          element={<AddPost handleAddPost={handleAddPost} />}
        />

        <Route
          path="/addOffer"
          element={<AddOffer handleAddOffer={handleAddOffer}/>}
        />

        {/* Account stuff start here */}
        <Route path="/Account" element={<Account user={user} />} />
        <Route path="/Account/Settings" element={<Settings />} />
        <Route
          path="/Account/Settings/add-profile-details"
          element={<AddProfileDetails />}
        />
        <Route
          path="/Account/Settings/edit-profile-details"
          element={<EditProfileDetails />}
        />
        <Route
          path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/Account/Settings/History"
          element={<History user={user} />}
        />
        <Route
          path="/Account/Settings/report-Problems"
          element={<ReportProblem />}
        />
        {/* Account stuff end here */}

        <Route
          path="/edit"
          element={<EditPost handleUpdatePost={handleUpdatePost} />}
        />
        {/* <Route
          path="/:id"
          element={user ? <ShowPost /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Account/:id"
          element={
            user ? (
              <Account posts={posts} user={user} handleLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/:id"
          element={
            user ? (
              <ShowPost 
                posts={posts}
                user={user}
                handleDeletePost={handleDeletePost}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default App;
