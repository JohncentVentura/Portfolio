/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { SiAseprite } from "react-icons/si";
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
import { ImagePaths } from "../components/Utilities";

const Work = () => {
  return (
    <>
      <Section className={"pt-[20vh] pb-[20vh]"}>
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
          <Heading2 className={"col-span-6"}>My Works</Heading2>
          <BorderLine
            className={"col-span-3"}
            scrollFX={"borderFadeInRight1"}
          ></BorderLine>
        </Grid12ColsContainer>

        <Heading3 className={"pt-8"}>Featured Projects</Heading3>
        <ul className={"pt-8 flex flex-col gap-8"}>
          <li className={"flex flex-col gap-4"}>
            <div
              className={
                "flex justify-center items-center md:flex-row flex-col gap-4 "
              }
            >
              <ProjectImage
                className={"justify-start items-center"}
                scrollFX={"imageFadeIn2"}
                href={"#"}
                imgSrc={ImagePaths.pulpRPG}
              ></ProjectImage>
              <div className={"flex flex-col text-start gap-4"}>
                <Heading4>Jourdan's Snack Corner</Heading4>
                <Paragraph className={""}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae, adipisci earum ea qui cupiditate
                  maiores magni id asperiores possimus officia non deleniti
                  consequatur explicabo sed praesentium.
                </Paragraph>
                <Paragraph className={""}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae.
                </Paragraph>
              </div>
            </div>
            <div className={"flex flex-wrap justify-start gap-4"}>
              <Button
                scrollFX={"buttonFadeIn0"}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                href={"#"}
                icon={<SiAseprite />}
              >
                Aseprite
              </Button>
              <Button
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Aseprite
              </Button>
            </div>
            <BorderLine
              className={""}
              scrollFX={"borderFadeInRight1"}
            ></BorderLine>
          </li>
          <li className={"flex flex-col gap-4"}>
            <div
              className={
                "flex justify-center items-center md:flex-row-reverse flex-col gap-4 "
              }
            >
              <ProjectImage
                className={"justify-end items-center"}
                scrollFX={"imageFadeIn2"}
                href={"#"}
                imgSrc={ImagePaths.pulpRPG}
              ></ProjectImage>
              <div className={"flex flex-col text-end gap-4"}>
                <Heading4>Jourdan's Snack Corner</Heading4>
                <Paragraph className={""}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae, adipisci earum ea qui cupiditate
                  maiores magni id asperiores possimus officia non deleniti
                  consequatur explicabo sed praesentium.
                </Paragraph>
                <Paragraph className={""}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  fugit enim illo recusandae.
                </Paragraph>
              </div>
            </div>
            <div className={"flex flex-wrap justify-end gap-4"}>
              <Button
                scrollFX={"buttonFadeIn0"}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                href={"#"}
                icon={<SiAseprite />}
              >
                Aseprite
              </Button>
              <Button
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Aseprite
              </Button>
            </div>
            <BorderLine
              className={""}
              scrollFX={"borderFadeInRight1"}
            ></BorderLine>
          </li>
        </ul>

        <Heading3 className={"pt-8"}>Other Projects</Heading3>
        <ul className={"pt-8 grid md:grid-cols-2 grid-cols-1 gap-8"}>
          <li className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-4"}>
              <Heading4>Jourdan's Snack Corner</Heading4>
              <Paragraph className={""}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                fugit enim illo recusandae, adipisci earum ea qui cupiditate
                maiores magni id asperiores possimus officia non deleniti
                consequatur explicabo sed praesentium.
              </Paragraph>
            </div>
            <div className={"flex justify-center gap-4"}>
              <Button
                className={""}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Github
              </Button>
              <Button
                className={""}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Link
              </Button>
            </div>
            <BorderLine
              className={""}
              scrollFX={"borderFadeInRight1"}
            ></BorderLine>
          </li>
          <li className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-4"}>
              <Heading4>Jourdan's Snack Corner</Heading4>
              <Paragraph className={""}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                fugit enim illo recusandae, adipisci earum ea qui cupiditate
                maiores magni id asperiores possimus officia non deleniti
                consequatur explicabo sed praesentium.
              </Paragraph>
            </div>
            <div className={"flex justify-center gap-4"}>
              <Button
                className={""}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Github
              </Button>
              <Button
                className={""}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Link
              </Button>
            </div>
            <BorderLine
              className={""}
              scrollFX={"borderFadeInRight1"}
            ></BorderLine>
          </li>
        </ul>
      </Section>
    </>
  );
};

export default Work;
