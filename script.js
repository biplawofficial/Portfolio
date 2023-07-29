function loco()
{gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    }
    loco()

    var clutter="";

    document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets)
       { clutter += `<span> ${dets} </span>`

        document.querySelector("#page2>h1").innerHTML=clutter;
})
gsap.defaults({ease: "power3"});
gsap.to("#page2>h1>span",{
  scrollTrigger: {
trigger: `#page2>h1>span`,
start: `top 80%`,
end: `bottom 35%`,
scroller: `#main`,
scrub:1.8
  },
  stagger:0.1,
  color: `white`,
  
})


gsap.defaults({ease: "power3"});
gsap.to("#page4>.buttons>button",{
  scrollTrigger: {
trigger: `#page4>.buttons>button`,
start: `top 80%`,
end: `bottom 70%`,
scroller: `#main`,
scrub:1.8,

  },
  stagger:0.1,
  color: `white`,
  
})



