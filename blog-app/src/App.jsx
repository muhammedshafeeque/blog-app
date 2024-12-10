import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./Constants/Routes";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import BlogCreation from "./Pages/CreateBlog/CreateBlog";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} exact element={<Home />} />
        <Route path={ROUTES.CREATE_BLOG} exact element={<BlogCreation />} />
      </Routes>
    </>
  );
}

export default App;
