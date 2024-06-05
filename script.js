var tl = gsap.timeline({scrollTrigger:{
    trigger:".main",
    start:"30% 50%",
    end:"70% 40%",
    scrub:true,
    markers:true
}})



tl.to(".img2",{
rotateX:"0deg"
})

tl.to(".img3",{
    rotateX:"0deg"
    })

tl.to(".resume",{
    marginTop:"105vh",
    scale:"0.8"
},"a")

tl.to(".text",{
    marginTop:"-55vh",
    paddingTop: "0vh"
},"a")

tl.to("img",{
    filter:"grayscale(1)"
},"a")

tl.to(".overlay",{
    opacity:"1"
},"a")