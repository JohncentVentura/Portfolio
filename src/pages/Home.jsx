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
  NavButton,
  IconButton,
  Button,
} from "../components/Components";
import { ImgPaths, AccPaths, EduPaths, ExpPaths, ToolsPaths, ProjPaths } from "../components/Utilities";

const Home = () => {
  return (
    <>
      <Section scrollFX={"pinPage0"}>
        <AvatarImage
          scrollFX={"imageFadeIn0"}
          href={"#"}
          imgSrc={ImgPaths.avatarHome}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <div className="flex flex-wrap justify-center gap-2">
            <Heading4>Hi! My</Heading4>
            <Heading4>name is</Heading4>
          </div>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <div className="flex flex-wrap justify-center gap-4">
          <Heading1>Johncent</Heading1>
          <Heading1>Ventura</Heading1>
        </div>

        <Heading4 className={"pt-4 w-[75%] text-center"}>
          Just another fool chasing the dream of Web Development, Game
          Development, & Graphic Design
        </Heading4>

        <div className="pt-8 flex justify-center gap-2 sm:gap-4">
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquareFacebook />}
          ></IconButton>
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquareGithub />}
          ></IconButton>
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquarePinterest />}
          ></IconButton>
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaLinkedin />}
          ></IconButton>
        </div>
      </Section>
    </>
  );
};

export default Home;
