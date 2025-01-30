/* eslint-disable react/prop-types */
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiAseprite,
  SiTailwindcss,
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
  SiReact,
  SiUnity,
} from "react-icons/si";

import { ExternalPaths } from "./Utilities";

function CheckClass(className) {
  return className === undefined ? "" : className;
}

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
export const Grid12ColsContainer = ({ className, children }) => {
  className = CheckClass(className);

  return (
    <>
      <div className={`${className} w-full grid grid-cols-12 text-center`}>
        {children}
      </div>
    </>
  );
};

export const FlexColContainer = ({ className, children }) => {
  className = CheckClass(className);

  return (
    <>
      <div className={`${className} flex flex-col`}>{children}</div>
    </>
  );
};

export const FlexRowContainer = ({ className, children }) => {
  className = CheckClass(className);

  return (
    <>
      <div className={`${className} flex`}>{children}</div>
    </>
  );
};

export const UnorderedList = ({ className, children }) => {
  className = CheckClass(className);

  return (
    <>
      <ul className={`${className} flex`}>{children}</ul>
    </>
  );
};

export const ListItem = ({ className, children }) => {
  className = CheckClass(className);

  return (
    <>
      <li className={`${className} flex`}>{children}</li>
    </>
  );
};

/********************************************Texts*******************************************/
//Really Large Text
export const Heading1 = ({ className, scrollFX, children }) => {
  className = CheckClass(className);
  scrollFX = CheckScrollFX(scrollFX, "lettersFadeIn");

  return (
    <>
      <h1 className={`${className} ${scrollFX}`}>{children}</h1>
    </>
  );
};

//Section Header Title
export const Heading2 = ({ className, scrollFX, children }) => {
  className = CheckClass(className);
  scrollFX = CheckScrollFX(scrollFX, "lettersFadeIn");

  return (
    <>
      <h2 className={`${className} ${scrollFX}`}>{children}</h2>
    </>
  );
};

//Section Header Subtitles
export const Heading3 = ({ className, scrollFX, children }) => {
  className = CheckClass(className);
  scrollFX = CheckScrollFX(scrollFX, "lettersFadeIn");

  return (
    <>
      <h3 className={`${className} ${scrollFX}`}>{children}</h3>
    </>
  );
};

//Larger than Paragraph
export const Heading4 = ({ className, scrollFX, children }) => {
  className = CheckClass(className);
  scrollFX = CheckScrollFX(scrollFX, "lettersFadeIn");

  return (
    <>
      <h4 className={`${className} ${scrollFX}`}>{children}</h4>
    </>
  );
};

//Long Text
export const Paragraph = ({ className, scrollFX, children }) => {
  className = CheckClass(className);
  scrollFX = CheckScrollFX(scrollFX, "lettersFadeIn");

  return (
    <>
      <p className={`${className} ${scrollFX}`}>{children}</p>
    </>
  );
};

//Smaller than Paragraph
export const Span = ({ className, scrollFX, children }) => {
  className = CheckClass(className);
  scrollFX = CheckScrollFX(scrollFX, "lettersFadeIn");

  return (
    <>
      <span className={`${className} ${scrollFX} block`}>{children}</span>
    </>
  );
};

/********************************************Visuals*******************************************/
export const BorderLine = ({ className, scrollFX }) => {
  className = CheckClass(className);

  return (
    <>
      <div
        className={`${className} w-full h-full flex justify-center items-center`}
      >
        <div
          className={`${scrollFX} w-full border-2 border-fgClr
          hover:border-mainClr ${GetHoverClass()} `}
        ></div>
      </div>
    </>
  );
};

export const IconLink = ({ className, scrollFX, href, icon }) => {
  className = CheckClass(className);

  return (
    <>
      <div className={`${className} w-fit`}>
        <a
          className={`${scrollFX} ${GetHoverClass()} block xl:size-20 md:size-16 size-14`}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {icon}
        </a>
      </div>
    </>
  );
};

export const AvatarImage = ({ className, scrollFX, href, imgSrc }) => {
  className = CheckClass(className);

  return (
    <>
      <div className={`${className} flex justify-center items-center`}>
        <a
          className={`${scrollFX} block xl:size-72 md:size-48 size-40`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
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
  className = CheckClass(className);

  return (
    <>
      <div className={`${className} flex justify-center items-center`}>
        <a
          className={`${scrollFX} block xl:size-28 md:size-14 size-10`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
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
  className = CheckClass(className);

  return (
    <>
      <div className={`${className} flex`}>
        <a
          className={`${scrollFX} block xl:w-96 xl:h-64 md:w-72 md:h-48 w-48 h-24`}
          href={href || null}
          target="_blank"
          rel="noreferrer"
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
export const NavButton = ({ onClick, download, icon }) => {
  return (
    <>
      <button className={`w-fit`} onClick={onClick || null}>
        <a
          className={`block rounded-full border-2 border-fgClr bg-fgClr text-bgClr 
            hover:border-mainClr hover:bg-mainClr hover:text-bgClr ${GetHoverClass()}
            size-12`}
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
  className = CheckClass(className);
  color = CheckColor(
    color,
    "border-fgClr hover:border-mainClr hover:bg-mainClr"
  );

  return (
    <>
      <button className={`${className} w-fit`} onClick={onClick || null}>
        <a
          className={`${scrollFX} ${color} border-2 rounded-3xl bg-bgClr px-[2vw] py-[1vh] flex justify-center items-center gap-2 
          group ${GetHoverClass()}`}
          href={href || null}
          target={target || "_blank"}
          rel="noreferrer"
          download={download || null}
        >
          <Paragraph
            className={`group-hover:text-bgClr ${GetGroupHoverClass()}`}
            scrollFX={""}
          >
            {children}
          </Paragraph>
          {icon !== undefined ? (
            <div
              className={`group-hover:text-bgClr ${GetGroupHoverClass()}
              size-7`}
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

export const BtnAdobePhotoshop = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-[#8065e0] hover:bg-[#8065e0]"}
        href={"#"}
        icon={<TbBrandCSharp />}
      >
        C-Sharp
      </Button>
    </>
  );
};

export const BtnCSS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-[#35a8db] hover:bg-[#35a8db]"}
        href={"#"}
        icon={<SiCss3 />}
      >
        CSS
      </Button>
    </>
  );
};

export const BtnExpressJS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-[#8ac640] hover:bg-[#8ac640]"}
        href={"#"}
        icon={<SiGreensock />}
      >
        GSAP
      </Button>
    </>
  );
};

export const BtnHTML = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-[#ef6429] hover:bg-[#ef6429]"}
        href={"#"}
        icon={<SiHtml5 />}
      >
        HTML
      </Button>
    </>
  );
};

export const BtnInky = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-fgClr hover:bg-fgClr"}
        href={"#"}
      >
        Inky
      </Button>
    </>
  );
};

export const BtnJavaScript = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-[#8cc84b] hover:bg-[#8cc84b]"}
        href={"#"}
        icon={<SiNodedotjs />}
      >
        NodeJS
      </Button>
    </>
  );
};

export const BtnReactJS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-[#07b6d5] hover:bg-[#07b6d5]"}
        href={"#"}
        icon={<SiReact />}
      >
        ReactJS
      </Button>
    </>
  );
};

export const BtnTailwindCSS = ({ className, scrollFX }) => {
  return (
    <>
      <Button
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
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
        className={`${className}`}
        scrollFX={`${scrollFX}`}
        color={"border-[#136099] hover:bg-[#136099]"}
        href={"#"}
      >
        Visual Basic
      </Button>
    </>
  );
};
