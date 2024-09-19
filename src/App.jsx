import { Home, Whyme, Proyects, MySkills, Footer } from "./views";
import { Navbar, Email } from "./components";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    const handleLoad = (e) => {
      e.target.classList.add("loaded");
    };

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.complete) {
        handleLoad({ target: img });
      } else {
        img.addEventListener("load", handleLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
      });
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <Whyme />
      <MySkills />
      <Proyects />
      <Footer />
      <Email />
    </div>
  );
}

export default App;
