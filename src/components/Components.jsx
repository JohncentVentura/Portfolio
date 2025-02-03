/* eslint-disable react/prop-types */
import {
  SiAseprite,
  SiAdobephotoshop,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGreensock,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiUnity,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { RiInkBottleFill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";

//import { ExternalPaths } from "./Utilities";

function CheckScrollFX(scrollFX, defaultScrollFX) {
  return scrollFX === undefined ? defaultScrollFX : scrollFX;
}

function CheckColor(color, defaultColor) {
  return color === undefined ? defaultColor : color;
}

function GetHoverClass() {
  return "hover:transition-all hover:duration-[0.5s] hover:ease-in-out";
}

function GetGroupHoverClass() {
  return "group-hover:transition-all group-hover:duration-[0.5s] group-hover:ease-in-out";
}

/********************************************Containers*******************************************/
export const Section = ({ className, scrollFX, children }) => {
  return (
    <>
      <section
        className={`${
          className || ""
        } ${scrollFX} w-full flex flex-col justify-start items-center`}
      >
        {children}
      </section>
    </>
  );
};

export const Grid3ColsContainer = ({ className, children }) => {
  return (
    <>
      <div
        className={`${className || ""} w-full grid grid-cols-3 text-center `}
      >
        {children}
      </div>
    </>
  );
};

/********************************************Texts*******************************************/
//Really Large Text
export const Heading1 = ({ className, scrollFX, children }) => {
  return (
    <>
      <h1
        className={`${className || ""} ${CheckScrollFX(
          scrollFX,
          "wordsFadeIn"
        )}`}
      >
        {children}
      </h1>
    </>
  );
};

//Section Header Title
export const Heading2 = ({ className, scrollFX, children }) => {
  return (
    <>
      <h2
        className={`${className || ""} ${CheckScrollFX(
          scrollFX,
          "wordsFadeIn"
        )}`}
      >
        {children}
      </h2>
    </>
  );
};

//Section Header Subtitle
export const Heading3 = ({ className, scrollFX, children }) => {
  return (
    <>
      <h3
        className={`${className || ""} ${CheckScrollFX(
          scrollFX,
          "wordsFadeIn"
        )}`}
      >
        {children}
      </h3>
    </>
  );
};

//Larger than Paragraph
export const Heading4 = ({ className, scrollFX, children }) => {
  return (
    <>
      <h4
        className={`${className || ""} ${CheckScrollFX(
          scrollFX,
          "wordsFadeIn"
        )}`}
      >
        {children}
      </h4>
    </>
  );
};

//Long Text
export const Paragraph = ({ className, scrollFX, children }) => {
  return (
    <>
      <p
        className={`${className || ""} ${CheckScrollFX(
          scrollFX,
          "wordsFadeIn"
        )}`}
      >
        {children}
      </p>
    </>
  );
};

//Smaller than Paragraph
export const Span = ({ className, scrollFX, children }) => {
  return (
    <>
      <span
        className={`${className || ""} 
        ${CheckScrollFX(scrollFX, "wordsFadeIn")} block`}
      >
        {children}
      </span>
    </>
  );
};

/********************************************Visuals*******************************************/
export const BorderLine = ({ className, scrollFX, border }) => {
  return (
    <>
      <div
        className={`${
          className || ""
        } size-full flex justify-center items-center`}
      >
        <div
          className={`${scrollFX} w-full h-auto ${
            border || "border-2"
          } border-fgClr hover:border-mainClr ${GetHoverClass()} `}
        ></div>
      </div>
    </>
  );
};

export const AvatarImage = ({ className, scrollFX, href, imgSrc }) => {
  return (
    <>
      <div className={`${className || ""} `}>
        <a
          className={`${scrollFX} block size-32 sm:size-48 lg:size-64`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
          loading="lazy"
        >
          <img
            src={imgSrc}
            alt={imgSrc}
            className={`rounded-full ${GetHoverClass()}`}
          />
        </a>
      </div>
    </>
  );
};

export const LogoImage = ({ className, scrollFX, href, imgSrc }) => {
  return (
    <>
      <div className={`${className || ""} `}>
        <a
          className={`${scrollFX} block size-20 sm:size-24 lg:size-28`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
          loading="lazy"
        >
          <img
            src={imgSrc}
            alt={imgSrc}
            className={`rounded-full ${GetHoverClass()}`}
          />
        </a>
      </div>
    </>
  );
};

export const ProjectImage = ({ className, scrollFX, href, imgSrc }) => {
  return (
    <>
      <div className={`${className || ""} `}>
        <a
          className={`${scrollFX} block size-full w-64 h-48 sm:w-80 sm:h-56 lg:w-[24rem] lg:h-[16rem]`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
          loading="lazy"
        >
          <img
            src={imgSrc}
            alt={imgSrc}
            className={`rounded-3xl ${GetHoverClass()}`}
          />
        </a>
      </div>
    </>
  );
};

/********************************************Buttons*******************************************/
export const NavButton = ({
  className,
  onClick,
  scrollFX,
  href,
  target,
  download,
  icon,
}) => {
  return (
    <>
      <button className={`${className || ""} `} onClick={onClick || null}>
        <a
          className={`${
            scrollFX || ""
          } block border-2 rounded-full border-fgClr bg-fgClr text-bgClr hover:border-mainClr hover:bg-mainClr hover:text-bgClr ${GetHoverClass()} size-8 sm:size-10 lg:size-12`}
          href={href}
          target={target}
          rel="noreferrer"
          download={download || null}
        >
          {icon}
        </a>
      </button>
    </>
  );
};

export const IconButton = ({
  className,
  onClick,
  scrollFX,
  href,
  target,
  download,
  icon,
}) => {
  return (
    <>
      <button className={`${className || ""}`} onClick={onClick || null}>
        <a
          className={`${scrollFX} ${GetHoverClass()} block size-12 sm:size-16 lg:size-20`}
          href={href}
          target={target || "_blank"}
          rel="noreferrer"
          download={download || null}
        >
          {icon}
        </a>
      </button>
    </>
  );
};

export const Button = ({
  className,
  onClick,
  scrollFX,
  color,
  href,
  target,
  download,
  icon,
  children,
}) => {
  color = CheckColor(
    color,
    "border-fgClr hover:border-mainClr hover:bg-mainClr"
  );

  return (
    <>
      <button className={`${className || ""}`} onClick={onClick || null}>
        <a
          className={`${scrollFX} ${color} border-2 rounded-3xl px-4 py-2 bg-bgClr w-fit flex justify-center items-center gap-2 group ${GetHoverClass()}`}
          href={href || null}
          target={target || "_blank"}
          rel="noreferrer"
          download={download || null}
        >
          <Span
            className={`group-hover:text-bgClr ${GetGroupHoverClass()}`}
            scrollFX={""}
          >
            {children}
          </Span>
          {icon !== undefined ? (
            <div
              className={`group-hover:text-bgClr ${GetGroupHoverClass()} size-6 sm:size-7 lg:size-8`}
            >
              {icon}
            </div>
          ) : (
            <></>
          )}
        </a>
      </button>
    </>
  );
};

/********************************************Tool Buttons*******************************************/
export const BtnGithub = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        href={"#"}
        icon={<FaGithub />}
      >
        Source
      </Button>
    </>
  );
};

export const BtnAdobePhotoshop = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#31a8ff] hover:bg-[#31a8ff]"}
        href={"#"}
        icon={<SiAdobephotoshop />}
      >
        Adobe Photoshop
      </Button>
    </>
  );
};

export const BtnAseprite = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-fgClr hover:bg-fgClr"}
        href={"#"}
        icon={<SiAseprite />}
      >
        Aseprite
      </Button>
    </>
  );
};

export const BtnCSharp = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#8065e0] hover:bg-[#8065e0]"}
        href={"#"}
        icon={<TbBrandCSharp />}
      >
        C-Sharp
      </Button>
    </>
  );
};

export const BtnCSS3 = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#1572b6] hover:bg-[#1572b6]"}
        href={"#"}
        icon={<SiCss3 />}
      >
        CSS3
      </Button>
    </>
  );
};

export const BtnExpressJS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#545454] hover:bg-[#545454]"}
        href={"#"}
        icon={<SiExpress />}
      >
        ExpressJS
      </Button>
    </>
  );
};

export const BtnFigma = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#8850e8] hover:bg-[#8850e8]"}
        href={"#"}
        icon={<SiFigma />}
      >
        Figma
      </Button>
    </>
  );
};

export const BtnGit = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#f05033] hover:bg-[#f05033]"}
        href={"#"}
        icon={<SiGit />}
      >
        Git
      </Button>
    </>
  );
};

export const BtnGSAP = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#8ac640] hover:bg-[#8ac640]"}
        href={"#"}
        icon={<SiGreensock />}
      >
        GSAP
      </Button>
    </>
  );
};

export const BtnHTML5 = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#ef6429] hover:bg-[#ef6429]"}
        href={"#"}
        icon={<SiHtml5 />}
      >
        HTML5
      </Button>
    </>
  );
};

export const BtnInk = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-fgClr hover:bg-fgClr"}
        href={"#"}
        icon={<RiInkBottleFill />}
      >
        Ink
      </Button>
    </>
  );
};

export const BtnJavaScript = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#cfc146] hover:bg-[#cfc146]"}
        href={"#"}
        icon={<SiJavascript />}
      >
        JavaScript
      </Button>
    </>
  );
};

export const BtnMongoDB = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#4faa41] hover:bg-[#4faa41]"}
        href={"#"}
        icon={<SiMongodb />}
      >
        MongoDB
      </Button>
    </>
  );
};

export const BtnMySQL = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#e68f00] hover:bg-[#e68f00]"}
        href={"#"}
        icon={<SiMysql />}
      >
        MySQL
      </Button>
    </>
  );
};

export const BtnNodeJS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#8cc84b] hover:bg-[#8cc84b]"}
        href={"#"}
        icon={<SiNodedotjs />}
      >
        NodeJS
      </Button>
    </>
  );
};

export const BtnPostgresSQL = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#2f6792] hover:bg-[#2f6792]"}
        href={"#"}
        icon={<SiPostgresql />}
      >
        PostgresSQL
      </Button>
    </>
  );
};

export const BtnReactJS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#07b6d5] hover:bg-[#07b6d5]"}
        href={"#"}
        icon={<SiReact />}
      >
        ReactJS
      </Button>
    </>
  );
};

export const BtnSass = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#d483a9] hover:bg-[#d483a9]"}
        href={"#"}
        icon={<SiSass />}
      >
        Sass
      </Button>
    </>
  );
};

export const BtnTailwindCSS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#07b6d5] hover:bg-[#07b6d5]"}
        href={"#"}
        icon={<SiTailwindcss />}
      >
        Tailwind CSS
      </Button>
    </>
  );
};

export const BtnUnity = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#808080] hover:bg-[#808080]"}
        href={"#"}
        icon={<SiUnity />}
      >
        Unity
      </Button>
    </>
  );
};

export const BtnVisualBasic = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className || ""}`}
        scrollFX={`${scrollFX || ""}`}
        color={"border-[#136099] hover:bg-[#136099]"}
        href={"#"}
        icon={<DiVisualstudio />}
      >
        Visual Basic
      </Button>
    </>
  );
};
