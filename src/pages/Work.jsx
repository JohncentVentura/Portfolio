/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
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
  BtnAdobePhotoshop,
  BtnAseprite,
  BtnCSharp,
  BtnCSS3,
  BtnExpressJS,
  BtnFigma,
  BtnGit,
  BtnGSAP,
  BtnHTML5,
  BtnInk,
  BtnJavaScript,
  BtnMongoDB,
  BtnMySQL,
  BtnNodeJS,
  BtnPostgresSQL,
  BtnReactJS,
  BtnSass,
  BtnTailwindCSS,
  BtnUnity,
  BtnVisualBasic,
} from "../components/Components";
import { ImgPaths, AccPaths, EduPaths, ExpPaths, ToolsPaths, ProjPaths } from "../components/Utilities";

const Work = () => {
  return (
    <>
      <Section className={"pt-[20vh] pb-[20vh]"}>
        <AvatarImage
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImgPaths.avatarHome}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <Heading2>My Works</Heading2>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <div className="pt-8 sm:pt-12">
          <Heading3 scrollFX={"charsFadeIn"}>Featured Projects</Heading3>
          <BorderLine
            scrollFX={"borderFadeInCenter0"}
            border={"border"}
          ></BorderLine>
        </div>
        <ul className="pt-8 sm:pt-24 flex flex-col gap-8 sm:gap-12">
          <li className="flex flex-col">
            <div className="flex flex-col xl:flex-row gap-8">
              <ProjectImage
                className={"self-center"}
                scrollFX={"imageFadeIn2"}
                href={"#"}
                imgSrc={ImgPaths.pulpRPG}
              ></ProjectImage>
              <div className="flex flex-col items-center gap-4">
                <Heading4>Jourdan's Snack Corner</Heading4>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae, adipisci earum ea qui cupiditate
                  maiores magni id asperiores possimus officia non deleniti
                  consequatur explicabo sed praesentium.
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae.
                </Paragraph>
              </div>
            </div>
            <div className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-4">
              <BtnAdobePhotoshop scrollFX={"buttonFadeIn1"} />
              <BtnAseprite scrollFX={"buttonFadeIn1"} />
              <BtnCSS3 scrollFX={"buttonFadeIn1"} />
              <BtnAdobePhotoshop scrollFX={"buttonFadeIn1"} />
              <BtnAseprite scrollFX={"buttonFadeIn1"} />
              <BtnCSS3 scrollFX={"buttonFadeIn1"} />
              <BtnAdobePhotoshop scrollFX={"buttonFadeIn1"} />
              <BtnAseprite scrollFX={"buttonFadeIn1"} />
              <BtnCSS3 scrollFX={"buttonFadeIn1"} />
            </div>
            <BorderLine
              className={"pt-8 sm:pt-12"}
              scrollFX={"borderFadeInRight19"}
            ></BorderLine>
          </li>
          <li className="flex flex-col">
            <div className="flex flex-col xl:flex-row-reverse gap-8">
              <ProjectImage
                className={"self-center"}
                scrollFX={"imageFadeIn2"}
                href={"#"}
                imgSrc={ImgPaths.pulpRPG}
              ></ProjectImage>
              <div className="flex flex-col items-center gap-4">
                <Heading4>Jourdan's Snack Corner</Heading4>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae, adipisci earum ea qui cupiditate
                  maiores magni id asperiores possimus officia non deleniti
                  consequatur explicabo sed praesentium.
                </Paragraph>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae.
                </Paragraph>
              </div>
            </div>
            <div className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-4">
              <BtnAdobePhotoshop scrollFX={"buttonFadeIn1"} />
              <BtnAseprite scrollFX={"buttonFadeIn1"} />
              <BtnCSS3 scrollFX={"buttonFadeIn1"} />
              <BtnAdobePhotoshop scrollFX={"buttonFadeIn1"} />
              <BtnAseprite scrollFX={"buttonFadeIn1"} />
              <BtnCSS3 scrollFX={"buttonFadeIn1"} />
              <BtnAdobePhotoshop scrollFX={"buttonFadeIn1"} />
              <BtnAseprite scrollFX={"buttonFadeIn1"} />
              <BtnCSS3 scrollFX={"buttonFadeIn1"} />
            </div>
            <BorderLine
              className={"pt-8 sm:pt-12"}
              scrollFX={"borderFadeInRight19"}
            ></BorderLine>
          </li>
        </ul>

        <div className="pt-8 sm:pt-12 flex flex-col items-center gap-8 sm:gap-12">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Other Projects</Heading3>
            <BorderLine
              scrollFX={"borderFadeInCenter0"}
              border={"border"}
            ></BorderLine>
          </div>
          <Paragraph>
            I'm a graduate from the University of Luzon, Dagupan City with a
            Bachelor's Degree in Information Technology and Latin Honour of Cum
            Laude. Little did I know that playing video games since I was a kid
            will eventually led me into game development that helps me chose
            this course.
          </Paragraph>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <li className="flex md:flex-col justify-center items-center gap-2 sm:gap-4 text-start">
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImgPaths.avatarHome}
              ></LogoImage>
              <div>
                <Heading4>Random Quote Machine</Heading4>
                <Span>
                  An interactive web application that dynamically fetches and
                  displays a variety of quotes with each click.
                </Span>
              </div>
            </li>
            <li className="flex flex-row-reverse md:flex-col justify-center items-center gap-2 sm:gap-4 text-end md:text-start">
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImgPaths.avatarHome}
              ></LogoImage>
              <div>
                <Heading4>Calculator</Heading4>
                <Span>
                  An interactive web application that dynamically fetches and
                  displays a variety of quotes with each click.
                </Span>
              </div>
            </li>
          </ul>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInRight19"}
        ></BorderLine>
      </Section>
    </>
  );
};

export default Work;

/*
<ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            <li className="flex flex-col justify-center items-center gap-4">
              <Heading4>To-Do App</Heading4>
              <Paragraph>
                A simple to-do app built using React.js and Tailwind CSS. It
                allows users to add tasks, mark them as completed, and delete
                them.
              </Paragraph>
              <div className="flex gap-4">
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaGithub />}
                ></SmIconBtn>
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaExternalLinkAlt />}
                ></SmIconBtn>
              </div>
              <BorderLine scrollFX={"borderFadeInRight1"}></BorderLine>
            </li>
            <li className="flex flex-col justify-center items-center gap-4">
              <Heading4>To-Do App</Heading4>
              <Paragraph>
                A simple to-do app built using React.js and Tailwind CSS. It
                allows users to add tasks, mark them as completed, and delete
                them.A simple to-do app built using React.js and Tailwind CSS.
                It allows users to add tasks, mark them as completed, and delete
                them.
              </Paragraph>
              <div className="flex gap-4">
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaGithub />}
                ></SmIconBtn>
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaExternalLinkAlt />}
                ></SmIconBtn>
              </div>
              <BorderLine scrollFX={"borderFadeInRight1"}></BorderLine>
            </li>
            <li className="flex flex-col justify-center items-center gap-4">
              <Heading4>To-Do App</Heading4>
              <Paragraph>
                A simple to-do app built using React.js and Tailwind CSS. It
                allows users to add tasks, mark them as completed, and delete
                them.
              </Paragraph>
              <div className="flex gap-4">
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaGithub />}
                ></SmIconBtn>
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaExternalLinkAlt />}
                ></SmIconBtn>
              </div>
              <BorderLine scrollFX={"borderFadeInRight1"}></BorderLine>
            </li>
            <li className="flex flex-col justify-center items-center gap-4">
              <Heading4>To-Do App</Heading4>
              <Paragraph>
                A simple to-do app built using React.js and Tailwind CSS. It
                allows users to add tasks, mark them as completed, and delete
                them.
              </Paragraph>
              <div className="flex gap-4">
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaGithub />}
                ></SmIconBtn>
                <SmIconBtn
                  scrollFX={"iconFadeIn0"}
                  href={"#"}
                  icon={<FaExternalLinkAlt />}
                ></SmIconBtn>
              </div>
              <BorderLine scrollFX={"borderFadeInRight1"}></BorderLine>
            </li>
          </ul>
*/
