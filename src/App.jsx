import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ShowPost from "./pages/ShowPost/ShowPost"
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";
import * as postService from "./services/postService";
import AddPost from "./pages/AddPost/AddPost";
import EditPost from "./pages/EditPost/EditPost";

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
    console.log(posts);
    const newPost = await postService.create(newPostData);
    if (photo) {
      newPost.photo = await postPhotoHelper(photo, newPost._id);
    }
    setPosts([...posts, newPost]);
    navigate("/");
  };

  const handleUpdatePost = async (updatedPostData, photo) => {
    const updatedPost = await postService.update(updatedPostData)
    if (photo) {
      updatedPost.photo = await postPhotoHelper(photo, updatedPost._id)
    }
    const newPostArray = posts.map((post) => 
      post._id === updatedPost._id ? updatedPost : post
    )
    setPosts(newPostArray)
    navigate("/")
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
        <Route path="/" element={<Landing user={user} posts={posts} />} />
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
          path="/add"
          element={<AddPost handleAddPost={handleAddPost} />}
        />
        <Route
          path="/edit"
          element={<EditPost handleUpdatePost={handleUpdatePost}/>}
          />
        <Route
          path="/:id"
          element={user ? <ShowPost /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
