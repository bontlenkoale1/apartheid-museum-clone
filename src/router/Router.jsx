import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/home/Main";
import Home from "../pages/home/Home";
import AboutPage from "../pages/home/AboutPage"
import Exhibitions from "../pages/home/Exhibitions";
import Visit from "../pages/home/Visit";
import Events from "../pages/home/Events";
import Resources from "../pages/home/Resources";
import Contact from "../pages/home/Contact";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />, 
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <AboutPage /> },
        { path: "exhibitions", element: <Exhibitions /> },
        { path: "visit", element: <Visit /> },
        { path: "events", element: <Events /> },
        { path: "resources", element: <Resources /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  {
    basename: "/apartheid-museum-clone/",
  }
);

export default router;
