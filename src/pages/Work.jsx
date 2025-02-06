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
        <AvatarImage href={"#"} imgSrc={ImgPaths.avatarWork}></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft"}></BorderLine>
          <Heading2>My Works</Heading2>
          <BorderLine scrollFX={"borderFadeInRight"}></BorderLine>
        </Grid3ColsContainer>

        <div className="pt-8 sm:pt-12">
          <Heading3 scrollFX={"charsFadeIn"}>Featured Projects</Heading3>
          <BorderLine border={"border"}></BorderLine>
        </div>
        <ul className="pt-8 sm:pt-24 flex flex-col gap-8 sm:gap-12">
          <li className="flex flex-col">
            <div className="flex flex-col xl:flex-row gap-8">
              <ProjectImage
                className={"self-center"}
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
              <BtnGitHub href={ProjPaths.pulpRPGGitHub}></BtnGitHub>
              <BtnAseprite></BtnAseprite>
              <BtnCSharp></BtnCSharp>
              <BtnInk></BtnInk>
              <BtnUnity></BtnUnity>
            </div>
            <BorderLine className={"pt-8 sm:pt-12"}></BorderLine>
          </li>
          <li className="flex flex-col">
            <div className="flex flex-col xl:flex-row-reverse gap-8">
              <ProjectImage
                className={"self-center"}
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
              <BtnGitHub href={ProjPaths.jourdansSnackCornerGitHub}></BtnGitHub>
              <BtnCSS3></BtnCSS3>
              <BtnExpressJS></BtnExpressJS>
              <BtnHTML5></BtnHTML5>
              <BtnJavaScript></BtnJavaScript>
              <BtnMongoDB></BtnMongoDB>
              <BtnNodeJS></BtnNodeJS>
              <BtnReactJS></BtnReactJS>
            </div>
            <BorderLine className={"pt-8 sm:pt-12"}></BorderLine>
          </li>
          <li className="flex flex-col">
            <div className="flex flex-col xl:flex-row gap-8">
              <ProjectImage
                className={"self-center"}
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
              <BtnPinterest href={ProjPaths.pixelArt} />
              <BtnAseprite />
            </div>
            <BorderLine className={"pt-8 sm:pt-12"}></BorderLine>
          </li>
        </ul>

        <div className="pt-8 sm:pt-12 w-full flex flex-col items-center gap-8 sm:gap-12">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Other Projects</Heading3>
            <BorderLine border={"border"}></BorderLine>
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
                href={ProjPaths.vbStudentSystem}
                icon={<DiVisualstudio />}
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
                href={ProjPaths.gameOfGrimoires}
                icon={<IoGameController />}
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
        <BorderLine className={"pt-8 sm:pt-12"}></BorderLine>
      </Section>
    </>
  );
};

export default Work;
