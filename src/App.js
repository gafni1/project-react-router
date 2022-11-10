import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Error from "./pages/Error";
import SharedLayout from "./pages/sharedLayout";
import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/protectedRoute";
import Info from "./pages/info";
import Todos from "./pages/todos";
import Posts from "./pages/posts";
import SinglePost from "./pages/SinglePost";
import Comments from "./pages/comments";
import Albums from "./pages/albums";
import SingelAlbum from "./pages/SingelAlbum";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          >
            <Route path="info" element={<Info />} />
            <Route path="todos" element={<Todos />} />
            <Route path="posts" element={<Posts />}>
              <Route path=":postId" element={<SinglePost />}>
                <Route path="comments" element={<Comments />} />
              </Route>
            </Route>
            <Route path="albums" element={<Albums />}>
              <Route path=":albumId" element={<SingelAlbum />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
