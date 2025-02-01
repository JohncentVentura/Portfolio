import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export const effectPaths = {
  pinHomePage: ".pinHomePage",
};

export const scrollFX = {
  fgClr: "",
  bgClr: "",
  primaryClr: "",
  scrollerPosition: "70%",
  pinnedScrollerPosition: "10%",
  init(fgClr, bgClr, primaryClr) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    this.fgClr = fgClr;
    this.bgClr = bgClr;
    this.primaryClr = primaryClr;
  },
  createTimeline({
    trigger,
    endTrigger,
    start,
    end,
    pin,
    pinSpacing,
    scrub,
    toggleActions,
    markers,
  }) {
    return new gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        //If pin is true, padding size of pinSpacing is endTrigger element height + trigger element height
        endTrigger: endTrigger || null,
        start: start || `top ${this.scrollerPosition}`,
        //end: label+=n%, means from label, padding size of pinSpacing is trigger element height + its percentage from n
        end: end || `bottom ${this.scrollerPosition}`,
        pin: pin || false,
        pinSpacing: pinSpacing || true, //If trigger element is display: flex, this is set to false
        scrub: scrub || true, //duration of the tween
        toggleActions: toggleActions || "play pause resume reverse",
        markers: markers || false,
      },
    });
  },
  //queries elements with a class of scrollFXClassName (one scrollFXClassName per element only) 
  //and applies scrollFXCallback of the same name as scrollFXClassName to each elements
  setFX(scrollFXClassName, scrollFXCallback) {
    document.querySelectorAll(scrollFXClassName).forEach(scrollFXCallback);
  },
  //List of callbacks that can be assigned in scrollFXCallback from setFX()
  pinPage(elem) {
    this.createTimeline({
      trigger: elem,
      start: `top ${this.pinnedScrollerPosition}`,
      end: `bottom ${this.pinnedScrollerPosition}`,
      pin: true,
      pinSpacing: false,
      /*
      markers: {
        startColor: "violet",
        endColor: "fuchsia",
      },
      //*/
    });
  },
  lettersFadeIn(elem) {
    this.createTimeline({
      trigger: elem,
      markers: false,
    }).fromTo(
      new SplitType(elem, { types: "chars" }).chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5, //seconds between elements to start animating, 1 means instant animate
      }
    );
  },
  wordFadeIn(elem) {
    this.createTimeline({
      trigger: elem,
      markers: false,
    }).fromTo(
      new SplitType(elem, { types: "words" }).words,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5, //seconds between elements to start animating, 1 means instant animate
      }
    );
  },
  borderFadeInCenter(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
  },
  borderFadeInLeft(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
  },
  borderFadeInRight(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
  },
  imageFadeIn(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      /*
      markers: {
        startColor: "skyblue",
        endColor: "cyan",
      },
      //*/
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
  },
  iconFadeIn(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
  },
  buttonFadeIn(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
      }
    );
  },

  
  //Test functions
  testHomeLgDiv(elem) {
    this.createTimeline({
      trigger: elem.children[0],
      start: `top ${this.scrollerPosition}`,
      end: `bottom ${this.scrollerPosition}`,
      markers: true,
    })
      
      .fromTo(
        new SplitType(elem.children[0], { types: "chars" }).chars,
        {
          opacity: 0,

        },
        {
          opacity: 1,
          stagger: 0.5,
        }
      );

    console.log(elem.children.length);
  },
  homeNameFadeInOutAndRemove(elem) {
    let chars = new SplitType(elem, { types: "chars" }).chars;

    this.createTimeline({
      trigger: elem,
      start: `top ${this.scrollerPosition}`,
      end: `bottom ${this.scrollerPosition}`,
      markers: false,
    }).fromTo(
      chars,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
      }
    );

    this.createTimeline({
      trigger: elem,
      start: `bottom+=100% ${this.scrollerPosition}`,
      end: `bottom+=200% ${this.scrollerPosition}`,
      markers: false,
    }).to(chars, {
      display: "none",
      opacity: 0,
    });
  },
  homeFrontEndDevFadeInOutAndRemove(elem) {
    let chars = new SplitType(elem, { types: "chars" }).chars;

    this.createTimeline({
      trigger: elem,
      start: `top+=200% ${this.scrollerPosition}`,
      end: `bottom+=200% ${this.scrollerPosition}`,
      markers: true,
    }).fromTo(
      chars,
      {
        opacity: 0,
      },
      {
        display: "inline-block",
        opacity: 1,
        stagger: 0.5,
      }
    );

    this.createTimeline({
      trigger: elem,
      start: `bottom+=200% ${this.scrollerPosition}`,
      end: `bottom+=400% ${this.scrollerPosition}`,
      markers: true,
    }).to(chars, {
      display: "none",
      opacity: 0,
    });
  },
};
