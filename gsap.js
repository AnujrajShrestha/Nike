let tl=gsap.timeline();

tl.from("nav svg",{
    y:-30,
    duration:0.5,
    opacity:0
});

tl.from("nav ul a",{
    opacity:0,
    y:-30,
    duration:1,
    stagger:0.3
});

tl.from("nav .btn",{
    opacity:0,
    duration:0.5,
});

tl.from(".dark",{
    opacity:0,
    duration:0.5,
});

tl.from(".shop",{
    opacity:0,
    duration:0.5
});

tl.from("video",{
    opacity:0,
    duration:1,
})