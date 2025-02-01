/* eslint-disable no-unused-vars */

import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquarePinterest,
  FaLinkedin,
} from "react-icons/fa6";

import {
  Section,
  Grid12ColsContainer,
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
      <Section scrollFX={"pinPage0"}>
        <AvatarImage
          className={""}
          scrollFX={"imageFadeIn0"}
          href={"#"}
          imgSrc={ImagePaths.avatar}
        ></AvatarImage>

        <Grid12ColsContainer>
          <BorderLine
            className={"md:col-span-4 col-span-3"}
            scrollFX={"borderFadeInLeft0"}
          ></BorderLine>
          <Heading4 className={"md:col-span-4 col-span-6"}>
            Hi! My name is
          </Heading4>
          <BorderLine
            className={"md:col-span-4 col-span-3"}
            scrollFX={"borderFadeInRight0"}
          ></BorderLine>
        </Grid12ColsContainer>

        <div className="flex flex-wrap justify-center gap-2">
          <Heading1>Johncent</Heading1>
          <Heading1>Ventura</Heading1>
        </div>

        <div className={"flex flex-col text-center"}>
          <Heading4 scrollFX={"wordFadeIn"}>
            Just another fool chasing the dream of
          </Heading4>
          <Heading4 scrollFX={"wordFadeIn"}>
            Web Development, Game Development,
          </Heading4>
          <Heading4 scrollFX={"wordFadeIn"}>& Graphic Design</Heading4>
        </div>

        <div className={"flex justify-center"}>
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
        </div>
      </Section>
    </>
  );
};

export default Home;
