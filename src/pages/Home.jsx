/* eslint-disable no-unused-vars */
import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquarePinterest,
  FaLinkedin,
} from "react-icons/fa6";
import { useEffect } from "react";

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
} from "../components/Components";
import {
  AccPaths,
  AvatarPaths,
  EduPaths,
  ExpPaths,
  ImgPaths,
  ToolsPaths,
  ProjPaths,
} from "../components/Utilities";

const Home = () => {
  return (
    <>
      <Section scrollFX={"pinPage"}>
        <AvatarImage href={AvatarPaths.avatarHome} imgSrc={ImgPaths.avatarHome}></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft"}></BorderLine>
          <div id="scrollRef" className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <Heading4>Hi! My</Heading4>
            <Heading4>name is</Heading4>
          </div>
          <BorderLine scrollFX={"borderFadeInRight"}></BorderLine>
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
            href={AccPaths.facebook}
            icon={<FaSquareFacebook />}
          ></IconButton>
          <IconButton
            href={AccPaths.linkedIn}
            icon={<FaLinkedin />}
          ></IconButton>
          <IconButton
            href={AccPaths.gitHub}
            icon={<FaSquareGithub />}
          ></IconButton>
          <IconButton
            href={AccPaths.pinterest}
            icon={<FaSquarePinterest />}
          ></IconButton>
        </div>
      </Section>
    </>
  );
};

export default Home;
