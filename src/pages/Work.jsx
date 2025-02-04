/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { IoGameController } from "react-icons/io5";
import { DiVisualstudio } from "react-icons/di";

import {
  Section,
  Grid3ColsContainer,
  ListItemImgLeft,
  ListItemImgRight,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Span,
  BorderLine,
  AvatarImage,
  ProjectImage,
  ImgIconButton,
  NavIconButton,
  IconButton,
  Button,
  BtnAdobePhotoshop,
  BtnAseprite,
  BtnCSharp,
  BtnCSS3,
  BtnExpressJS,
  BtnFigma,
  BtnGit,
  BtnGitHub,
  BtnGSAP,
  BtnHTML5,
  BtnInk,
  BtnJavaScript,
  BtnMongoDB,
  BtnMySQL,
  BtnNodeJS,
  BtnPinterest,
  BtnPostgresSQL,
  BtnReactJS,
  BtnSass,
  BtnTailwindCSS,
  BtnUnity,
  BtnVisualBasic,
} from "../components/Components";
import {
  AccPaths,
  EduPaths,
  ExpPaths,
  ImgPaths,
  ToolsPaths,
  ProjPaths,
} from "../components/Utilities";

const Work = () => {
  return (
    <>
      <Section className={"pt-[20vh] pb-[20vh]"}>
        <AvatarImage
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImgPaths.avatarWork}
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
                href={ProjPaths.pulpRpg}
                imgSrc={ImgPaths.projPulpRPG}
              ></ProjectImage>
              <div className="flex flex-col items-center gap-4">
                <Heading4>PULP RPG</Heading4>
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
              <BtnGitHub
                scrollFX={"buttonFadeIn15"}
                href={ProjPaths.pulpRPGGitHub}
              ></BtnGitHub>
              <BtnAseprite scrollFX={"buttonFadeIn1"}></BtnAseprite>
              <BtnCSharp scrollFX={"buttonFadeIn2"}></BtnCSharp>
              <BtnInk scrollFX={"buttonFadeIn8"}></BtnInk>
              <BtnUnity scrollFX={"buttonFadeIn15"}></BtnUnity>
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
                href={ProjPaths.jourdansSnackCorner}
                imgSrc={ImgPaths.projJourdansSnackCorner}
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
              <BtnGitHub
                scrollFX={"buttonFadeIn15"}
                href={ProjPaths.jourdansSnackCornerGitHub}
              ></BtnGitHub>
              <BtnCSS3 scrollFX={"buttonFadeIn3"}></BtnCSS3>
              <BtnExpressJS scrollFX={"buttonFadeIn4"}></BtnExpressJS>
              <BtnHTML5 scrollFX={"buttonFadeIn7"}></BtnHTML5>
              <BtnJavaScript scrollFX={"buttonFadeIn9"}></BtnJavaScript>
              <BtnMongoDB scrollFX={"buttonFadeIn10"}></BtnMongoDB>
              <BtnNodeJS scrollFX={"buttonFadeIn12"}></BtnNodeJS>
              <BtnReactJS scrollFX={"buttonFadeIn13"}></BtnReactJS>
            </div>
            <BorderLine
              className={"pt-8 sm:pt-12"}
              scrollFX={"borderFadeInRight19"}
            ></BorderLine>
          </li>
          <li className="flex flex-col">
            <div className="flex flex-col xl:flex-row gap-8">
              <ProjectImage
                className={"self-center"}
                scrollFX={"imageFadeIn2"}
                href={ProjPaths.pixelArt}
                imgSrc={ImgPaths.projPixelArt}
              ></ProjectImage>
              <div className="flex flex-col items-center gap-4">
                <Heading4>Pixel Artwork</Heading4>
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
              <BtnPinterest
                scrollFX={"buttonFadeIn1"}
                href={ProjPaths.pixelArt}
              />
              <BtnAseprite scrollFX={"buttonFadeIn1"} />
            </div>
            <BorderLine
              className={"pt-8 sm:pt-12"}
              scrollFX={"borderFadeInRight19"}
            ></BorderLine>
          </li>
        </ul>

        <div className="pt-8 sm:pt-12 w-full flex flex-col items-center gap-8 sm:gap-12">
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
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-12">
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ProjPaths.vbStudentSystem}
                icon={<DiVisualstudio/>}
              ></ImgIconButton>
              <div>
                <Heading4>Student Registration System</Heading4>
                <Span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus fugiat sint maiores porro itaque? Blanditiis!
                </Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ProjPaths.gameOfGrimoires}
                icon={<IoGameController/>}
              ></ImgIconButton>
              <div>
                <Heading4>Game of Grimoires</Heading4>
                <Span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus fugiat sint maiores porro itaque? Blanditiis!
                </Span>
              </div>
            </ListItemImgRight>
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ProjPaths.graphicDesign}
                imgSrc={ImgPaths.projGraphicDesign}
              ></ImgIconButton>
              <div>
                <Heading4>Graphic Design</Heading4>
                <Span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus fugiat sint maiores porro itaque? Blanditiis!
                </Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ProjPaths.randomQuoteMachine}
                imgSrc={ImgPaths.projRandomQuoteMachine}
              ></ImgIconButton>
              <div>
                <Heading4>Random Qoute Machine</Heading4>
                <Span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus fugiat sint maiores porro itaque? Blanditiis!
                </Span>
              </div>
            </ListItemImgRight>
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ProjPaths.musicPlayer}
                imgSrc={ImgPaths.projMusicPlayer}
              ></ImgIconButton>
              <div>
                <Heading4>Music Player</Heading4>
                <Span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus fugiat sint maiores porro itaque? Blanditiis!
                </Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ProjPaths.pulpRPGDocumentation}
                imgSrc={ImgPaths.projPulpRPGDocumentation}
              ></ImgIconButton>
              <div>
                <Heading4>Technical Documentation</Heading4>
                <Span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Minus fugiat sint maiores porro itaque? Blanditiis!
                </Span>
              </div>
            </ListItemImgRight>
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
