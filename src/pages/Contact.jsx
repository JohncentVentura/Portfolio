/* eslint-disable no-unused-vars */

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
import { ImagePaths } from "../components/Utilities";
import { SiMessenger, SiDiscord, SiGmail, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <Section scrollFX={"pinPage1"}>
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

        <Heading4 className={"pt-8 text-center"} scrollFX={"wordFadeIn"}>
          Send me a message if you have opportunities for collaboration or want
          to build something amazing.
        </Heading4>

        <div className={"pt-8 flex justify-center gap-4"}>
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
        </div>
      </Section>
    </>
  );
};

export default Contact;
