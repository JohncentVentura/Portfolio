/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { FaFilePdf } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";

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
  BtnGithub,
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

const About = () => {
  return (
    <>
      <Section className={"pt-[20vh]"}>
        <AvatarImage
          className={""}
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImgPaths.avatarHome}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <Heading2>About Me</Heading2>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <div className="pt-8 sm:pt-12 flex flex-col items-center gap-8">
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
          <div className="flex flex-col sm:flex-row gap-4">
            <Button scrollFX={"buttonFadeIn0"} href={"#"} icon={<VscPreview />}>
              View Resume
            </Button>
            <Button scrollFX={"buttonFadeIn0"} href={"#"} icon={<FaFilePdf />}>
              Download Resume
            </Button>
          </div>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInCenter0"}
        ></BorderLine>

        <div className="pt-8 sm:pt-12 flex flex-col items-center gap-8">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Education</Heading3>
            <BorderLine
              scrollFX={"borderFadeInCenter0"}
              border={"border"}
            ></BorderLine>
          </div>
          <ul className="flex flex-wrap justify-center gap-12">
            <li className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImgPaths.avatarHome}
              ></LogoImage>
              <div>
                <Span scrollFX={"charsFadeIn"}>2023</Span>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Span>University of Luzon</Span>
              </div>
            </li>
            <li className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImgPaths.avatarHome}
              ></LogoImage>
              <div>
                <Span scrollFX={"charsFadeIn"}>2023</Span>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Span>University of Luzon</Span>
              </div>
            </li>
          </ul>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInCenter0"}
        ></BorderLine>

        <div className="pt-8 sm:pt-12 flex flex-col items-center gap-8">
          <div>
            <Heading3 scrollFX={"charsFadeIn"}>Experience</Heading3>
            <BorderLine
              scrollFX={"borderFadeInCenter0"}
              border={"border"}
            ></BorderLine>
          </div>
          <ul className="flex flex-wrap justify-center gap-12 text-end">
            <li className="flex flex-row-reverse flex-wrap justify-center items-center gap-2 sm:gap-4">
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImgPaths.avatarHome}
              ></LogoImage>
              <div>
                <Span scrollFX={"charsFadeIn"}>2023</Span>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Span>University of Luzon</Span>
              </div>
            </li>
            <li className="flex flex-row-reverse flex-wrap justify-center items-center gap-2 sm:gap-4">
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImgPaths.avatarHome}
              ></LogoImage>
              <div>
                <Span scrollFX={"charsFadeIn"}>2023</Span>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Span>University of Luzon</Span>
              </div>
            </li>
          </ul>
        </div>
        <BorderLine
          className={"pt-8 sm:pt-12"}
          scrollFX={"borderFadeInCenter0"}
        ></BorderLine>

        <div className="pt-8 sm:pt-12 flex flex-col items-center gap-8">
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
