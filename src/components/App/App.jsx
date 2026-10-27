import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Area from "../Area/Area.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Area />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
