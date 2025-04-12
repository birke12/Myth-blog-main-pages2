import "./App.css";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";
import AcropolisArticle from "./pages/acropolisArticle/AcropolisArticle.jsx";
import AboutUs from "./pages/aboutUs/AboutUs.jsx";
import Footer from "./components/footer/Footer.jsx";
import Greece from "./pages/greece/Greece.jsx";
import Contact from "./components/kontakt/Contact.jsx";
import SocialFollow from "./components/socialFollow/SocialFollow.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";
import TravelTips from "./pages/travelTips/TravelTips.jsx";

/* import Greece from "./pages/greece/Greece.jsx"; */

function App() {
  const routes = useRoutes([
    { path: "./", element: <Home /> },
    { path: "/acropolisArticle", element: <AcropolisArticle /> },
    { path: "/aboutUs", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/travelTips", element: <TravelTips /> },
    { path: "/greece", element: <Greece /> }
  ]);

  return (
    <>
      <div className="app">
        <Navigation />
        <div className="content">{routes}</div>
        <Newsletter />
        <SocialFollow />
        <Footer />
      </div>
    </>
  );
}

export default App;
