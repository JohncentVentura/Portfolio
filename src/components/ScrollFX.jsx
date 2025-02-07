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
  pinnedScrollerPosition: "10%",
  scrollerPosition: "75%",
  fadeOutScrollerPosition: "65%",
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
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
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
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
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
  charsFadeIn(elem) {
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
  iconFadeIn(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  },
  iconFadeOut(elem) {
    this.createTimeline({
      trigger: elem.parentElement,
      start: `top ${this.fadeOutScrollerPosition}`,
      end: `bottom ${this.fadeOutScrollerPosition}`,
      markers: false,
    }).fromTo(
      `.${elem.className.split(" ")[0]}`,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        stagger: 0.5, //seconds between elements to start animating, 1 means instant animate
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
  pinPage(elem) {
    this.createTimeline({
      trigger: elem,
      start: `top ${this.pinnedScrollerPosition}`,
      end: `bottom-=40% ${this.pinnedScrollerPosition}`,
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
  wordsFadeIn(elem) {
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
};
