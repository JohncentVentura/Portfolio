/* eslint-disable no-unused-vars */
import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebookMessenger,
  FaDiscord,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa6";

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
import { AccPaths, EduPaths, ExpPaths, ImgPaths, ToolsPaths, ProjPaths } from "../components/Utilities";

const Contact = () => {
  return (
    <>
      <Section scrollFX={"pinPage1"}>
        <AvatarImage
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImgPaths.avatarContact}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <div className="flex flex-wrap justify-center gap-2">
            <Heading2>Contact</Heading2>
            <Heading2>Me</Heading2>
          </div>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <Heading4
          className={"pt-8 sm:pt-12 w-[75%] text-center"}
          scrollFX={"wordsFadeIn"}
        >
          Send me a message if you have opportunities for collaboration or want
          to build something amazing.
        </Heading4>

        <div className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={AccPaths.facebook}
            icon={<FaFacebookMessenger />}
          ></IconButton>
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={AccPaths.discord}
            icon={<FaDiscord />}
          ></IconButton>
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={AccPaths.gmail}
            icon={<BiLogoGmail />}
          ></IconButton>
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={AccPaths.linkedIn}
            icon={<FaLinkedin />}
          ></IconButton>
          <IconButton
            scrollFX={"iconFadeIn0"}
            href={AccPaths.telegram}
            icon={<FaTelegram />}
          ></IconButton>
        </div>
      </Section>
    </>
  );
};

export default Contact;
