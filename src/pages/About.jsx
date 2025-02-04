/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaServer, FaDatabase } from "react-icons/fa";
import { FaFilePdf, FaReact } from "react-icons/fa6";
import { IoGlobeOutline, IoGameController } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { SiJavascript } from "react-icons/si";
import { VscPreview, VscChecklist } from "react-icons/vsc";

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

const About = () => {
  return (
    <>
      <Section className={"pt-[20vh]"}>
        <AvatarImage
          className={""}
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImgPaths.avatarAbout}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <Heading2>About Me</Heading2>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <div className="pt-8 sm:pt-12 w-full flex flex-col items-center gap-8 sm:gap-12">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Background</Heading3>
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
          <Paragraph>
            This sparks my passion in developing and designing video games that
            makes me curious of what other things you can create using
            technology. This also creates bonds between me and the people who
            share the same passion, and I hope I can continue creating and
            learning more things with you.
          </Paragraph>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              scrollFX={"buttonFadeIn0"}
              href={AccPaths.resume}
              icon={<VscPreview />}
            >
              View Resume
            </Button>
            <Button
              scrollFX={"buttonFadeIn0"}
              href={AccPaths.resume}
              download={"Carlos Johncent Ventura Resume"}
              icon={<FaFilePdf />}
            >
              Download Resume
            </Button>
          </div>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInCenter0"}
        ></BorderLine>

        <div className="pt-8 sm:pt-12 w-full flex flex-col items-center gap-8 sm:gap-12">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Education</Heading3>
            <BorderLine
              scrollFX={"borderFadeInCenter0"}
              border={"border"}
            ></BorderLine>
          </div>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-12">
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.qualityAssurance}
                icon={<VscChecklist />}
              ></ImgIconButton>
              <div>
                <Span>2024 / Developer Certificate</Span>
                <Heading4>Quality Assurance</Heading4>
                <Span>freeCodeCamp.org</Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.backEndDevelopmentAndAPI}
                icon={<FaServer />}
              ></ImgIconButton>
              <div>
                <Span>2024 / Developer Certificate</Span>
                <Heading4>Back End Development and API</Heading4>
                <Span>freeCodeCamp.org</Span>
              </div>
            </ListItemImgRight>
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.relationalDatabase}
                icon={<FaDatabase />}
              ></ImgIconButton>
              <div>
                <Span>2024 / Developer Certificate</Span>
                <Heading4>Relational Database</Heading4>
                <Span>freeCodeCamp.org</Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.tesdaCSS}
                imgSrc={ImgPaths.eduTesda}
              ></ImgIconButton>
              <div>
                <Span>2024 / National Certificate II</Span>
                <Heading4>TESDA Computer System Servicing</Heading4>
                <Span>Pangasinan School of Excellence Incorporated</Span>
              </div>
            </ListItemImgRight>
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.frontEndDevelopmentLibraries}
                icon={<FaReact />}
              ></ImgIconButton>
              <div>
                <Span>2024 / Developer Certificate</Span>
                <Heading4>Front End Development Libraries</Heading4>
                <Span>freeCodeCamp.org</Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.javaScriptAlgorithmAndDataStructures}
                icon={<SiJavascript />}
              ></ImgIconButton>
              <div>
                <Span>2023 / Developer Certificate</Span>
                <Heading4>JavaScript Algorithms and Data Structures</Heading4>
                <Span>freeCodeCamp.org</Span>
              </div>
            </ListItemImgRight>
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.responsiveWebDesign}
                icon={<MdDevices />}
              ></ImgIconButton>
              <div>
                <Span>2023 / Developer Certificate</Span>
                <Heading4>Responsive Web Design</Heading4>
                <Span>freeCodeCamp.org</Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={EduPaths.college}
                imgSrc={ImgPaths.eduCollege}
              ></ImgIconButton>
              <div>
                <Span>2019-2023 / College Diploma</Span>
                <Heading4>
                  Bachelor of Science in Information Technology
                </Heading4>
                <Span>University of Luzon</Span>
              </div>
            </ListItemImgRight>
          </ul>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInCenter0"}
        ></BorderLine>

        <div className="pt-8 sm:pt-12 w-full flex flex-col items-center gap-8 sm:gap-12">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Experience</Heading3>
            <BorderLine
              scrollFX={"borderFadeInCenter0"}
              border={"border"}
            ></BorderLine>
          </div>
          <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-12">
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ExpPaths.webDeveloper}
                icon={<IoGlobeOutline />}
              ></ImgIconButton>
              <div>
                <Span>2024-Present</Span>
                <Heading4>Web Developer</Heading4>
                <Span>Freelancer</Span>
              </div>
            </ListItemImgLeft>
            <ListItemImgRight>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ExpPaths.gameDeveloper}
                icon={<IoGameController />}
              ></ImgIconButton>
              <div>
                <Span>2023-Present</Span>
                <Heading4>Indie Game Developer</Heading4>
                <Span>Independent</Span>
              </div>
            </ListItemImgRight>
            <ListItemImgLeft>
              <ImgIconButton
                scrollFX={"imageFadeIn3"}
                href={ExpPaths.college}
                imgSrc={ImgPaths.eduCollege}
              ></ImgIconButton>
              <div>
                <Span>2022 / On-the-Job Training</Span>
                <Heading4>IT Assistant</Heading4>
                <Span>University of Luzon</Span>
              </div>
            </ListItemImgLeft>
          </ul>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInCenter0"}
        ></BorderLine>

        <div className="pt-8 sm:pt-12 w-full flex flex-col items-center gap-8 sm:gap-12">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Tools</Heading3>
            <BorderLine
              scrollFX={"borderFadeInCenter0"}
              border={"border"}
            ></BorderLine>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <BtnAdobePhotoshop scrollFX={"buttonFadeIn0"}></BtnAdobePhotoshop>
            <BtnAseprite scrollFX={"buttonFadeIn1"}></BtnAseprite>
            <BtnCSharp scrollFX={"buttonFadeIn2"}></BtnCSharp>
            <BtnCSS3 scrollFX={"buttonFadeIn3"}></BtnCSS3>
            <BtnExpressJS scrollFX={"buttonFadeIn4"}></BtnExpressJS>
            <BtnFigma scrollFX={"buttonFadeIn5"}></BtnFigma>
            <BtnGit scrollFX={"buttonFadeIn5"}></BtnGit>
            <BtnGSAP scrollFX={"buttonFadeIn6"}></BtnGSAP>
            <BtnHTML5 scrollFX={"buttonFadeIn7"}></BtnHTML5>
            <BtnInk scrollFX={"buttonFadeIn8"}></BtnInk>
            <BtnJavaScript scrollFX={"buttonFadeIn9"}></BtnJavaScript>
            <BtnMongoDB scrollFX={"buttonFadeIn10"}></BtnMongoDB>
            <BtnMySQL scrollFX={"buttonFadeIn11"}></BtnMySQL>
            <BtnNodeJS scrollFX={"buttonFadeIn12"}></BtnNodeJS>
            <BtnPostgresSQL scrollFX={"buttonFadeIn12"}></BtnPostgresSQL>
            <BtnReactJS scrollFX={"buttonFadeIn13"}></BtnReactJS>
            <BtnSass scrollFX={"buttonFadeIn14"}></BtnSass>
            <BtnTailwindCSS scrollFX={"buttonFadeIn14"}></BtnTailwindCSS>
            <BtnUnity scrollFX={"buttonFadeIn15"}></BtnUnity>
            <BtnVisualBasic scrollFX={"buttonFadeIn16"}></BtnVisualBasic>
          </div>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInCenter0"}
        ></BorderLine>
      </Section>
    </>
  );
};

export default About;
