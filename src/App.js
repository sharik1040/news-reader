import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { News } from "./pages/News";
import { Profile } from "./pages/Profile";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
  return (
    <div className="App">
      <Routes path="/">
        <Route path="/" element={<Layout/>}>
          <Route index path="/" element={<Home/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="news" element={<News />}/>
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
