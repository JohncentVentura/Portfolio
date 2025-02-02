/* eslint-disable no-unused-vars */

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
import { ImagePaths } from "../components/Utilities";
import { SiMessenger, SiDiscord, SiGmail, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <Section scrollFX={"pinPage1"}>
        <AvatarImage
          scrollFX={"imageFadeIn2"}
          href={"#"}
          imgSrc={ImagePaths.avatar}
        ></AvatarImage>

        <Grid3ColsContainer>
          <BorderLine scrollFX={"borderFadeInLeft0"}></BorderLine>
          <Heading2 scrollFX={"wordsFadeIn"}>Contact Me</Heading2>
          <BorderLine scrollFX={"borderFadeInRight0"}></BorderLine>
        </Grid3ColsContainer>

        <Heading4
          className={"pt-4 w-[75%] text-center"}
          scrollFX={"wordsFadeIn"}
        >
          Send me a message if you have opportunities for collaboration or want
          to build something amazing.
        </Heading4>

        <div className={"pt-8 flex justify-center gap-2 sm:gap-4"}>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiMessenger />}
          ></LgIconBtn>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiDiscord />}
          ></LgIconBtn>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiGmail />}
          ></LgIconBtn>
          <LgIconBtn
            scrollFX={"iconFadeIn0"}
            href={"#"}
            icon={<SiLinkedin />}
          ></LgIconBtn>
        </div>
      </Section>
    </>
  );
};

export default Contact;
