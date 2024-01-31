gsap.registerPlugin(ScrollTrigger)

let animTime = 0.1;

let tlWrapper = gsap.timeline({
  scrollTrigger: {
    trigger: ".js-pin-container",
    pin: ".js-pin-container",
    start: "top top",
    end: "+=900%",
    scrub: 1
  }
});

tlWrapper.from('.number_one', {
  autoAlpha: 0,
  y: 80,
  duration: 0.3,
  onComplete: function () {
    // Hide the element when the animation is complete
    TweenMax.set('.number_one', { autoAlpha: 0, duration: 0.5 });
    TweenMax.set('.number_one', { y: 0, duration: 0.3 });
  }
}, animTime);

tlWrapper.to(".image", { scale: 1.3, duration: 0.3 }, animTime);
animTime += 0.5;
tlWrapper.to(".image", { scale: 1, duration: 0.3 }, animTime);

tlWrapper.to("#image_one", { autoAlpha: 0, duration: 0.1 }, animTime);

animTime += 0.5;

tlWrapper.from('.number_two', {
  autoAlpha: 0,
  y: 80,
  duration: 0.3,
  onComplete: function () {
    // Hide the element when the animation is complete
    TweenMax.set('.number_two', { autoAlpha: 0, duration: 0.5 });
    TweenMax.set('.number_two', { y: 0, duration: 0.3 });
  }
}, animTime);

tlWrapper.to(".image", { scale: 1.3, duration: 0.3 }, animTime);
animTime += 0.5;

tlWrapper.to("#image_two", { autoAlpha: 0, duration: 0.1 }, animTime);

tlWrapper.to(".image", { scale: 1, duration: 0.3 }, animTime);

animTime += 0.5;


tlWrapper.from('.number_three', {
  autoAlpha: 0,
  y: 80,
  duration: 0.2,
  onComplete: function () {
    // Hide the element when the animation is complete
    TweenMax.set('.number_three', { autoAlpha: 0, duration: 0.5 });
    TweenMax.set('.number_three', { y: 0, duration: 0.3 });
  }
}, animTime);

tlWrapper.to(".image", { scale: 1.3, duration: 0.3 }, animTime);
animTime += 0.5;

tlWrapper.to("#image_three", { autoAlpha: 0, duration: 0.1 }, animTime);
tlWrapper.to(".image", { scale: 1, duration: 0.3 }, animTime);

animTime += 0.5;
tlWrapper.from('.number_four', {
  autoAlpha: 0,
  y: 80,
  duration: 0.2,
  onComplete: function () {
    // Hide the element when the animation is complete
    TweenMax.set('.number_four', { y: 0, duration: 0.3 });
  }
}, animTime);


animTime += 0.5;

// every li item within auto-grid appears one after the other
gsap.utils.toArray(".auto-grid li").forEach(function (elem, index) {
  gsap.fromTo(
    elem,
    { autoAlpha: 0, y: 100 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        end: "bottom 10%",
        markers: true,
        toggleActions: "play none none reverse"
      }
    }
  ), animTime;
});


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
