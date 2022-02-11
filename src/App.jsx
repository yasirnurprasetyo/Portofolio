import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Works from "./components/works/Works";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
