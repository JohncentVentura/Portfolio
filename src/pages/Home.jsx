/* eslint-disable no-unused-vars */

import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquarePinterest,
  FaLinkedin,
} from "react-icons/fa6";

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
} from "../components/Components";
import { ExternalPaths, ImagePaths } from "../components/Utilities";

const Home = () => {
  return (
    <>
      <section className={"pinPage0"}>
        <AvatarImage
          className={""}
          scrollFX={"imageFadeIn0"}
          href={"#"}
          imgSrc={ImagePaths.avatar}
        ></AvatarImage>

        <FlexColContainer className={"items-center gap-[2vh]"}>
          <Grid12ColsContainer>
            <BorderLine
              className={"lg:col-span-4 col-span-3"}
              scrollFX={"borderFadeInLeft0"}
            ></BorderLine>
            <Heading4 className={"lg:col-span-4 col-span-6"}>Hi! My name is</Heading4>
            <BorderLine
              className={"lg:col-span-4 col-span-3"}
              scrollFX={"borderFadeInRight0"}
            ></BorderLine>
          </Grid12ColsContainer>
          <Heading1>Johncent Ventura</Heading1>
        </FlexColContainer>

        <FlexColContainer className={"pt-[2vh] items-center"}>
          <Heading4 >Just another fool chasing the dream of</Heading4>
          <Heading4 >Web Development, Game Development,</Heading4>
          <Heading4 >& Graphic Design</Heading4>
        </FlexColContainer>

        <FlexRowContainer className={"pt-[4vh] gap-[1vw] justify-center"}>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquareFacebook />}
          ></IconLink>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquareGithub />}
          ></IconLink>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaSquarePinterest />}
          ></IconLink>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<FaLinkedin />}
          ></IconLink>
        </FlexRowContainer>
      </section>
    </>
  );
};

export default Home;
