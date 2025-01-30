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

const Work = () => {
  return (
    <>
      <section className={"pt-[20vh] pb-[20vh]"}>
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

        <Heading3 className={""}>Featured Projects</Heading3>
        <UnorderedList className={" flex-col gap-4"}>
          <ListItem className={"flex-col"}>
            <FlexRowContainer className={"gap-4 xl:flex-row flex-col"}>
              <ProjectImage
                className={"justify-start items-center"}
                scrollFX={"imageFadeIn2"}
                href={"#"}
                imgSrc={ImagePaths.pulpRPG}
              ></ProjectImage>
              <FlexColContainer className={"text-start"}>
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
              </FlexColContainer>
            </FlexRowContainer>
            <FlexRowContainer className={" flex-wrap justify-start gap-4"}>
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
            </FlexRowContainer>
            <BorderLine
              className={""}
              scrollFX={"borderFadeInRight1"}
            ></BorderLine>
          </ListItem>
        </UnorderedList>

        <Heading3 className={""}>Other Projects</Heading3>
        <ul className={"grid grid-cols-2 gap-4"}>
          <ListItem className={" flex-col"}>
            <FlexRowContainer className={" gap-4 xl:flex-row flex-col"}>
              <Heading4>Jourdan's Snack Corner</Heading4>
            </FlexRowContainer>
            <Paragraph className={""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              fugit enim illo recusandae, adipisci earum ea qui cupiditate
              maiores magni id asperiores possimus officia non deleniti
              consequatur explicabo sed praesentium.
            </Paragraph>
            <FlexRowContainer className={"justify-center gap-4"}>
              <Button
                className={" self-end"}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Github
              </Button>
              <Button
                className={" self-end"}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Link
              </Button>
            </FlexRowContainer>

            <BorderLine
              className={""}
              scrollFX={"borderFadeInRight1"}
            ></BorderLine>
          </ListItem>
          <ListItem className={" flex-col"}>
            <FlexRowContainer className={" gap-4 xl:flex-row flex-col"}>
              <Heading4>Jourdan's Snack Corner</Heading4>
            </FlexRowContainer>
            <Paragraph className={""}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              fugit enim illo recusandae, adipisci earum ea qui cupiditate
              maiores magni id asperiores possimus officia non deleniti
              consequatur explicabo sed praesentium. recusandae, adipisci earum
              ea qui cupiditate maiores magni id asperiores possimus officia non
              deleniti consequatur explicabo sed praesentium.
            </Paragraph>
            <FlexRowContainer className={"justify-center gap-4"}>
              <Button
                className={" self-end"}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Github
              </Button>
              <Button
                className={" self-end"}
                color={"border-[#ff7133] hover:bg-[#ff7133]"}
                scrollFX={"buttonFadeIn0"}
                href={"#"}
              >
                Link
              </Button>
            </FlexRowContainer>

            <BorderLine
              className={""}
              scrollFX={"borderFadeInRight1"}
            ></BorderLine>
          </ListItem>
        </ul>
      </section>
    </>
  );
};

export default Work;
