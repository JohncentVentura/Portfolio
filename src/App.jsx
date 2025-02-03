/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Lenis from "lenis";
import gsap from "gsap";
import { useState, useEffect, useLayoutEffect } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { TbFileCv } from "react-icons/tb";

import {
  Section,
  Grid3ColsContainer,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Span,
  BorderLine,
  AvatarImage,
  LogoImage,
  ProjectImage,
  NavButton,
  IconButton,
  Button,
} from "./components/Components";
import ParticlesComponent from "./components/Particles";
import { scrollFX } from "./components/ScrollFX";
import { ImgPaths, AccPaths, EduPaths, ExpPaths, ToolsPaths, ProjPaths } from "./components/Utilities";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [clrTheme, setClrTheme] = useState("");
  const [fgClr, setFgClr] = useState(
    getComputedStyle(document.body).getPropertyValue("--fgClr")
  );
  const [bgClr, setBgClr] = useState(
    getComputedStyle(document.body).getPropertyValue("--bgClr")
  );
  const [mainClr, setMainClr] = useState(
    getComputedStyle(document.body).getPropertyValue("--mainClr")
  );

  //* DEBUG: Log breakpoints for responsiveness test
  useEffect(() => {
    PrintBreakpoint();
    window.addEventListener("resize", () => PrintBreakpoint());

    function PrintBreakpoint() {
      if (window.innerWidth >= 1536) {
        console.log("2xl xl-desktop");
      } else if (window.innerWidth >= 1280) {
        console.log("xl desktop-laptop");
      } else if (window.innerWidth >= 1024) {
        console.log("lg h-tablet");
      } else if (window.innerWidth >= 768) {
        console.log("md v-tablet");
      } else if (window.innerWidth >= 640) {
        console.log("sm h-mobile");
      } else if (window.innerWidth >= 320) {
        console.log("df v-mobile");
      } else {
        console.log("invalid size");
      }
    }
  });
  //*/

  //Effect for setting color theme
  useEffect(() => {
    if (clrTheme === "light-theme") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else if (clrTheme === "dark-theme") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setClrTheme("light-theme");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setClrTheme("dark-theme");
    }

    setFgClr(getComputedStyle(document.body).getPropertyValue("--fgClr"));
    setBgClr(getComputedStyle(document.body).getPropertyValue("--bgClr"));
    setMainClr(getComputedStyle(document.body).getPropertyValue("--mainClr"));
  }, [clrTheme]);

  //Effect for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({});
    //lenis.on("scroll", (e) => console.log(e));
    function raf(time) {
      lenis;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  //Effect for using GSAP
  useLayoutEffect(
    () => {
      let ctx = gsap.context(() => {
        scrollFX.init(fgClr, bgClr, mainClr);

        for (let i = 0; i < 99; i++) {
          scrollFX.setFX(".pinPage" + i, (elem) => scrollFX.pinPage(elem));
          scrollFX.setFX(".borderFadeInCenter" + i, (elem) =>
            scrollFX.borderFadeInCenter(elem)
          );
          scrollFX.setFX(".borderFadeInLeft" + i, (elem) =>
            scrollFX.borderFadeInCenter(elem)
          );
          scrollFX.setFX(".borderFadeInRight" + i, (elem) =>
            scrollFX.borderFadeInRight(elem)
          );
          scrollFX.setFX(".imageFadeIn" + i, (elem) =>
            scrollFX.imageFadeIn(elem)
          );
          scrollFX.setFX(".iconFadeIn" + i, (elem) =>
            scrollFX.iconFadeIn(elem)
          );
          scrollFX.setFX(".buttonFadeIn" + i, (elem) =>
            scrollFX.buttonFadeIn(elem)
          );
        }

        //NOTE: Should be called last, else may cause bug where it will trigger early
        scrollFX.setFX(".wordsFadeIn", (elem) => scrollFX.wordsFadeIn(elem));
        scrollFX.setFX(".charsFadeIn", (elem) => scrollFX.charsFadeIn(elem));
      });
      return () => ctx.revert(); // <- cleanup!
    },
    //Adding the color states as dependencies will cause a lag when changing color themes
    []
  );

  return (
    <>
      <ParticlesComponent
        id="particles"
        fgClr={fgClr}
        bgClr={bgClr}
        mainClr={mainClr}
      />
      <Header
        clrTheme={clrTheme}
        clrThemeOnClick={() =>
          clrTheme === "light-theme"
            ? setClrTheme("dark-theme")
            : setClrTheme("light-theme")
        }
      />
      <Main />
      <Footer />
    </>
  );
}

const Header = ({ ...props }) => {
  return (
    <>
      <header className={`${props.className || ""} fixed top-10 left-0 z-10`}>
        <nav className="flex justify-between items-center">
          <NavButton icon={<TbFileCv />} href={AccPaths.resume} target={"_blank"} />
          {props.clrTheme === "light-theme" ? (
            <NavButton onClick={props.clrThemeOnClick} icon={<IoIosMoon />} />
          ) : (
            <NavButton onClick={props.clrThemeOnClick} icon={<IoIosSunny />} />
          )}
        </nav>
      </header>
    </>
  );
};

const Main = ({ ...props }) => {
  return (
    <>
      <main className={`${props.className || ""} pt-[70vh]`}>
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
};

const Footer = ({ ...props }) => {
  return (
    <>
      <footer className={`${props.className || ""} pb-8`}>
        <Grid3ColsContainer className={"gap-2"}>
          <BorderLine></BorderLine>
          <Span
            scrollFX={""}
            className={"font-mainFont text-fgClr text-center"}
          >
            Designed & Built by Johncent © 2024
          </Span>
          <BorderLine></BorderLine>
        </Grid3ColsContainer>
      </footer>
    </>
  );
};

export default App;
