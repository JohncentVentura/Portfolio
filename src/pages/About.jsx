/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {
  SiAseprite,
  SiTailwindcss,
  SiAdobephotoshop,
  SiCss3,
  SiExpress,
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
import { TbBrandCSharp } from "react-icons/tb";
import { VscPreview } from "react-icons/vsc";
import { FaFilePdf } from "react-icons/fa6";

import {
  Grid12ColsContainer,
  FlexColContainer,
  FlexRowContainer,
  UnorderedList,
  ListItem,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
  Span,
  BorderLine,
  IconLink,
  AvatarImage,
  LogoImage,
  ProjectImage,
  NavButton,
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
  BtnInky,
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

const About = () => {
  return (
    <>
      <section className={"pt-[20vh]"}>
        <AvatarImage
          className={""}
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImagePaths.avatar}
        ></AvatarImage>

        <Grid12ColsContainer>
          <BorderLine
            className={"col-span-3"}
            scrollFX={"borderFadeInLeft0"}
          ></BorderLine>
          <Heading2 className={"col-span-6"}>About Me</Heading2>
          <BorderLine
            className={"col-span-3"}
            scrollFX={"borderFadeInRight0"}
          ></BorderLine>
        </Grid12ColsContainer>

        <FlexColContainer className={"pt-[6vh] gap-[4vh] items-center"}>
          <Heading3>Background</Heading3>
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
          <FlexColContainer
            className={"flex sm:flex-row sm:gap-[2vw] gap-[2vh]"}
          >
            <Button scrollFX={"buttonFadeIn0"} href={"#"} icon={<VscPreview />}>
              View Resume
            </Button>
            <Button scrollFX={"buttonFadeIn0"} href={"#"} icon={<FaFilePdf />}>
              Download Resume
            </Button>
          </FlexColContainer>
          <BorderLine
            className={""}
            scrollFX={"borderFadeInCenter0"}
          ></BorderLine>
        </FlexColContainer>

        <FlexColContainer className={"items-center"}>
          <Heading3 className={"pt-[6vh]"}>Education</Heading3>
          <UnorderedList className={"gap-[2vh] justify-center"}>
            <ListItem className={"gap-[1vw]"}>
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImagePaths.avatar}
              ></LogoImage>
              <FlexColContainer>
                <Paragraph>2023</Paragraph>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Paragraph>University of Luzon</Paragraph>
              </FlexColContainer>
            </ListItem>
            <ListItem className={"gap-[1vw]"}>
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImagePaths.avatar}
              ></LogoImage>
              <FlexColContainer>
                <Span>2023</Span>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Span>University of Luzon</Span>
              </FlexColContainer>
            </ListItem>
          </UnorderedList>
          <BorderLine
            className={"pt-[6vh]"}
            scrollFX={"borderFadeInCenter0"}
          ></BorderLine>
        </FlexColContainer>

        <FlexColContainer className={"items-center"}>
          <Heading3 className={"pt-[6vh]"}>Experience</Heading3>
          <UnorderedList className={" justify-center gap-4"}>
            <ListItem className={"flex-row-reverse gap-4"}>
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImagePaths.avatar}
              ></LogoImage>
              <FlexColContainer className={"items-end"}>
                <Span>2023</Span>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Span>University of Luzon</Span>
              </FlexColContainer>
            </ListItem>
            <ListItem className={"flex-row-reverse gap-4"}>
              <LogoImage
                scrollFX={"imageFadeIn3"}
                href={"#"}
                imgSrc={ImagePaths.avatar}
              ></LogoImage>
              <FlexColContainer className={"items-end"}>
                <Span>2023</Span>
                <Heading4>Bachelor of Science in</Heading4>
                <Heading4>Information Technology</Heading4>
                <Span>University of Luzon</Span>
              </FlexColContainer>
            </ListItem>
          </UnorderedList>
          <BorderLine
            className={"pt-[6vh]"}
            scrollFX={"borderFadeInCenter0"}
          ></BorderLine>
        </FlexColContainer>

        <FlexColContainer className={"items-center"}>
          <Heading3 className={"pt-[6vh]"}>Tools</Heading3>
          <FlexRowContainer className={"pt-[4vh] flex-wrap justify-center gap-[1  vw]"}>
            <BtnAdobePhotoshop scrollFX={"buttonFadeIn0"}></BtnAdobePhotoshop>
            <BtnAseprite scrollFX={"buttonFadeIn1"}></BtnAseprite>
            <BtnCSharp scrollFX={"buttonFadeIn2"}></BtnCSharp>
            <BtnCSS scrollFX={"buttonFadeIn3"}></BtnCSS>
            <BtnExpressJS scrollFX={"buttonFadeIn4"}></BtnExpressJS>
            <BtnFigma scrollFX={"buttonFadeIn5"}></BtnFigma>
            <BtnGit scrollFX={"buttonFadeIn5"}></BtnGit>
            <BtnGSAP scrollFX={"buttonFadeIn6"}></BtnGSAP>
            <BtnHTML scrollFX={"buttonFadeIn7"}></BtnHTML>
            <BtnInky scrollFX={"buttonFadeIn8"}></BtnInky>
            <BtnJavaScript scrollFX={"buttonFadeIn9"}></BtnJavaScript>
            <BtnMongoDB scrollFX={"buttonFadeIn10"}></BtnMongoDB>
            <BtnMySQL scrollFX={"buttonFadeIn11"}></BtnMySQL>
            <BtnNodeJS scrollFX={"buttonFadeIn12"}></BtnNodeJS>
            <BtnReactJS scrollFX={"buttonFadeIn13"}></BtnReactJS>
            <BtnTailwindCSS scrollFX={"buttonFadeIn14"}></BtnTailwindCSS>
            <BtnUnity scrollFX={"buttonFadeIn15"}></BtnUnity>
            <BtnVisualBasic scrollFX={"buttonFadeIn16"}></BtnVisualBasic>
          </FlexRowContainer>
          <BorderLine
            className={"pt-[6vh]"}
            scrollFX={"borderFadeInCenter0"}
          ></BorderLine>
        </FlexColContainer>
      </section>
    </>
  );
};

export default About;
