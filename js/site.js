gsap.registerPlugin(ScrollTrigger)

const images = document.querySelectorAll('.img');

// Here is where the z-index is being set
// from greatest to least
images.forEach(function (e, i) {
  e.style.zIndex = images.length + 1 - i;
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".purple",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=300%",
  }
});

tl.from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 1)
  .to(images[0], 5, { scale: 1.2 }) // Zoom in effect
  .to(images[0], 1.4, { autoAlpha: 0 })
  .to(images[1], 8, { autoAlpha: 0, scale: 1.2 }, '-=1') // Zoom in effect
  .to(images[1], 1.4, { autoAlpha: 0 })
  .to(images[2], 5, { autoAlpha: 1, scale: 1.2 }, '-=1') // Zoom in effect
  .to(images[2], 1.4, { autoAlpha: 0 });


gsap.utils.toArray(".revealUp").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 10%",
    markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 200, autoAlpha: 0 },
        {
          duration: 0.5,
          y: 0,
          autoAlpha: 1,
          ease: "ease-in-out",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});
