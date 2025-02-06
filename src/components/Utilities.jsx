import { useState, useEffect } from 'react';

export const GetClassCount = ({className}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCount(document.getElementsByClassName(className).length);
    };

    updateCount();
    const observer = new MutationObserver(updateCount);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [count, className]);

  return document.getElementsByClassName(className);
}

export const AccPaths = {
  discord: "https://discord.com/users/1262701083856211998",
  facebook: "https://www.facebook.com/johncent.ventura.7",
  gitHub: "https://github.com/JohncentVentura",
  gmail: "mailto:johncent.ventura@gmail.com",
  linkedIn: "https://www.linkedin.com/in/johncent-ventura-424548314/",
  pinterest: "https://ph.pinterest.com/johncentventura/pins/",
  resume: "/Carlos Johncent Ventura Resume.pdf",
  telegram: "https://t.me/JohncentVentura",
};

export const EduPaths = {
  backEndDevelopmentAndAPI:
    "https://www.freecodecamp.org/certification/Johncent-Developer/back-end-development-and-apis",
  college:
    "https://www.facebook.com/photo/?fbid=616436970579239&set=a.427670096122595",
  frontEndDevelopmentLibraries:
    "https://www.freecodecamp.org/certification/Johncent-Developer/front-end-development-libraries",
  javaScriptAlgorithmAndDataStructures:
    "https://www.freecodecamp.org/certification/Johncent-Developer/javascript-algorithms-and-data-structures",
  qualityAssurance:
    "https://www.freecodecamp.org/certification/Johncent-Developer/quality-assurance-v7",
  relationalDatabase:
    "https://www.freecodecamp.org/certification/Johncent-Developer/relational-database-v8",
  responsiveWebDesign:
    "https://www.freecodecamp.org/certification/Johncent-Developer/responsive-web-design",
  tesdaCSS:
    "https://www.facebook.com/photo?fbid=387383134255760&set=pcb.387388560921884",
};

export const ExpPaths = {
  gameDeveloper: "",
  college: "https://ul.edu.ph/",
  webDeveloper: "",
};

export const ImgPaths = {
  avatarAbout: "/avatar square.jpg",
  avatarContact: "/avatar square.jpg",
  avatarHome: "/avatar square.jpg",
  avatarWork: "/avatar square.jpg",
  eduCollege: "/University of Luzon Logo.png",
  eduTesda: "/TESDA Logo.png",
  projGraphicDesign: "/Graphics Design.jpg",
  projJourdansSnackCorner: "/Jourdans Snack Corner.png",
  projMusicPlayer: "/Music Player.png",
  projPixelArt: "/Pixel Art.png",
  projPulpRPGDocumentation: "/PULP RPG Documentation.png",
  projPulpRPG: "/PULP RPG.png",
  projRandomQuoteMachine: "/Random Quote Machine.png",
};

export const ToolsPaths = {
  adobePhotoshop: "https://www.adobe.com/products/photoshop.html",
  aseprite: "https://aseprite.org/",
  cSharp: "https://docs.unity3d.com/Manual/ScriptingSection.html",
  css3: "https://www.w3schools.com/css/",
  expressJS: "https://expressjs.com/",
  figma: "https://www.figma.com/",
  git: "https://www.git-scm.com/",
  gsap: "https://gsap.com/",
  html5: "https://www.w3schools.com/html/",
  ink: "https://www.inklestudios.com/ink/",
  javaScript: "https://www.javascript.com/",
  mongoDB:
    "https://www.mongodb.com/lp/cloud/atlas/try4?utm_content=rlsavisitor&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_retarget-brand_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=14412646476&adgroup=131761130812&cq_cmp=14412646476&gad_source=1&gclid=CjwKCAjwmrqzBhAoEiwAXVpgornjh4oe2dVT2egalczl2pdA7xmoUyvedcKuWd1eIwq-mxSg8y-rkhoCcH4QAvD_BwE",
  mySQL: "https://www.mysql.com/",
  nodeJS: "https://nodejs.org/en",
  postgresSQL: "https://www.postgresql.org/",
  reactJS: "https://react.dev/",
  sass: "https://sass-lang.com/",
  tailwindCSS: "https://tailwindcss.com/",
  unity: "https://unity.com/",
  visualBasic: "https://learn.microsoft.com/en-us/dotnet/visual-basic/",
};

export const ProjPaths = {
  gameOfGrimoires: "#",
  graphicDesign: "https://ph.pinterest.com/johncentventura/graphics-design/",
  jourdansSnackCorner: "https://jourdans-snack-corner.netlify.app",
  jourdansSnackCornerGitHub:
    "https://github.com/JohncentVentura/Jourdans-Snack-Corner",
  musicPlayer: "https://cjv-music-player.netlify.app",
  pulpRpg:
    "https://drive.google.com/file/d/1UoWxtuWfohXF-6YLGBBe0MQ9s2_f3GDN/view?usp=sharing",
  pulpRPGDocumentation: "https://pulp-rpg-doc.netlify.app",
  pulpRPGGitHub: "https://github.com/JohncentVentura/PULP-RPG-Scripts",
  pixelArt: "https://ph.pinterest.com/johncentventura/pixel-art/",
  randomQuoteMachine: "https://cjv-random-quote-machine.netlify.app",
  vbStudentSystem: "#",
};
