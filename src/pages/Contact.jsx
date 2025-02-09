/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
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
import {
  AccPaths,
  AvatarPaths,
  EduPaths,
  ExpPaths,
  ImgPaths,
  ToolsPaths,
  ProjPaths,
} from "../components/Utilities";

const Contact = () => {
  return (
    <>
      <Section scrollFX={"pinPage"}>
        <AvatarImage
          href={AvatarPaths.avatarContact}
          imgSrc={ImgPaths.avatarContact}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft"}></BorderLine>
          <div className="flex flex-wrap justify-center gap-2">
            <Heading2>Contact</Heading2>
            <Heading2>Me</Heading2>
          </div>
          <BorderLine scrollFX={"borderFadeInRight"}></BorderLine>
        </Grid3ColsContainer>

        <Heading4 className={"pt-8 sm:pt-12 w-[75%] text-center"}>
          Feel free to message me if you have feedbacks, inquiries, criticism,
          or opportunities for collaboration to develop or design something
          amazing.
        </Heading4>
        <div className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-2 sm:gap-4">
          <IconButton
            href={AccPaths.facebook}
            icon={<FaFacebookMessenger />}
          ></IconButton>
          <IconButton href={AccPaths.discord} icon={<FaDiscord />}></IconButton>
          <IconButton href={AccPaths.gmail} icon={<BiLogoGmail />}></IconButton>
          <IconButton
            href={AccPaths.linkedIn}
            icon={<FaLinkedin />}
          ></IconButton>
          <IconButton
            href={AccPaths.telegram}
            icon={<FaTelegram />}
          ></IconButton>
        </div>
      </Section>
    </>
  );
};

export default Contact;
