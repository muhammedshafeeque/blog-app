import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./Constants/Routes";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import BlogCreation from "./Pages/CreateBlog/CreateBlog";
import BlogView from "./Pages/View/View";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} exact element={<Home />} />
        <Route path={ROUTES.CREATE_BLOG} exact element={<BlogCreation />} />
        <Route path={ROUTES.VIEW_BLOG+':id'} exact element={<BlogView />} />
      </Routes>
    </>
  );
}

export default App;
