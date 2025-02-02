/* eslint-disable no-unused-vars */

import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquarePinterest,
  FaLinkedin,
} from "react-icons/fa6";

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
} from "../components/Components";
import { ExternalPaths, ImagePaths } from "../components/Utilities";

const Home = () => {
  return (
    <>
      <Section scrollFX={"pinPage0"}>
        <AvatarImage
          scrollFX={"imageFadeIn0"}
          href={"#"}
          imgSrc={ImagePaths.avatar}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <Heading4 scrollFX={"wordsFadeIn"}>Hi! My name is</Heading4>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <div className="flex flex-wrap justify-center gap-4">
          <Heading1>Johncent</Heading1>
          <Heading1>Ventura</Heading1>
        </div>

        <Heading4 className={"pt-4 w-[75%] text-center"} scrollFX={"wordsFadeIn"}>
          Just another fool chasing the dream of Web Development, Game
          Development, & Graphic Design
        </Heading4>

        <div className={"pt-8 flex justify-center gap-2 sm:gap-4"}>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquareFacebook />}
          ></LgIconBtn>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquareGithub />}
          ></LgIconBtn>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquarePinterest />}
          ></LgIconBtn>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaLinkedin />}
          ></LgIconBtn>
        </div>
      </Section>
    </>
  );
};

export default Home;
