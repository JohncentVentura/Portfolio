/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { FaGithub, FaExternalLinkAlt, FaPinterest } from "react-icons/fa";

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
  NavBtn,
  SmIconBtn,
  LgIconBtn,
  Button,
  BtnAdobePhotoshop,
  BtnAseprite,
  BtnCSharp,
  BtnCSS,
  BtnExpressJS,
  BtnFigma,
  BtnGit,
  BtnGSAP,
  BtnHTML,
  BtnInk,
  BtnJavaScript,
  BtnMongoDB,
  BtnMySQL,
  BtnNodeJS,
  BtnReactJS,
  BtnTailwindCSS,
  BtnUnity,
  BtnVisualBasic,
} from "../components/Components";
import { ImagePaths } from "../components/Utilities";

const Work = () => {
  return (
    <>
      <Section className={"pt-[20vh] pb-[20vh]"}>
        <AvatarImage
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImagePaths.avatar}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <Heading2 scrollFX={"wordsFadeIn"}>My Works</Heading2>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <div>
          <Heading3 className={"pt-8"}>Featured Projects</Heading3>
          <BorderLine scrollFX={"borderFadeInCenter0"}></BorderLine>
        </div>
        <ul className={"pt-8 flex flex-col gap-16"}>
          <li className={"flex flex-col gap-8"}>
            <div className="flex flex-col xl:flex-row gap-8 ">
              <ProjectImage
                className={"self-center"}
                scrollFX={"imageFadeIn2"}
                href={"#"}
                imgSrc={ImagePaths.pulpRPG}
              ></ProjectImage>
              <div className={"flex flex-col items-center gap-4"}>
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
            <div className={"flex flex-wrap justify-center gap-4"}>
              <BtnAdobePhotoshop />
              <BtnAseprite />
              <BtnCSS />
            </div>
            <BorderLine scrollFX={"borderFadeInRight1"}></BorderLine>
          </li>
          <li className={"flex flex-col gap-8"}>
            <div className="flex flex-col xl:flex-row gap-8 ">
              <ProjectImage
                className={"self-center"}
                scrollFX={"imageFadeIn2"}
                href={"#"}
                imgSrc={ImagePaths.pulpRPG}
              ></ProjectImage>
              <div className={"flex flex-col items-center gap-4"}>
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
            <div className={"flex flex-wrap justify-center gap-4"}>
              <BtnAdobePhotoshop />
              <BtnAseprite />
              <BtnCSS />
            </div>
            <BorderLine scrollFX={"borderFadeInRight1"}></BorderLine>
          </li>
        </ul>

        <div className={"pt-8 flex flex-col items-center gap-8"}>
          <div>
            <Heading3 className={"pt-8"}>Other Projects</Heading3>
            <BorderLine scrollFX={"borderFadeInCenter0"}></BorderLine>
          </div>
          <Paragraph>
            I'm a graduate from the University of Luzon, Dagupan City with a
            Bachelor's Degree in Information Technology and Latin Honour of Cum
            Laude. Little did I know that playing video games since I was a kid
            will eventually led me into game development that helps me chose
            this course.
          </Paragraph>
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
                them.A simple to-do app built using React.js and Tailwind CSS. It
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
        </div>
      </Section>
    </>
  );
};

export default Work;
