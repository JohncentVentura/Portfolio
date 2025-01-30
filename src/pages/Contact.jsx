/* eslint-disable no-unused-vars */

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
import { ImagePaths } from "../components/Utilities";
import { SiMessenger, SiDiscord, SiGmail, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <section className={"pinPage1"}>
        <AvatarImage
          className={""}
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImagePaths.avatar}
        ></AvatarImage>

        <Grid12ColsContainer>
          <BorderLine
            className={"col-span-3"}
            scrollFX={"borderFadeInLeft1"}
          ></BorderLine>
          <Heading2 className={"col-span-6"}>Contact Me</Heading2>
          <BorderLine
            className={"col-span-3"}
            scrollFX={"borderFadeInRight1"}
          ></BorderLine>
        </Grid12ColsContainer>

        <FlexColContainer className={"items-center"}>
          <Heading4>Send me a message if you have</Heading4>
          <Heading4>opportunities for collaboration or</Heading4>
          <Heading4>want to build something amazing.</Heading4>
        </FlexColContainer>

        <FlexRowContainer className={"justify-center gap-[1vw]"}>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiMessenger />}
          ></IconLink>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiDiscord />}
          ></IconLink>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiGmail />}
          ></IconLink>
          <IconLink
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiLinkedin />}
          ></IconLink>
        </FlexRowContainer>
      </section>
    </>
  );
};

export default Contact;
