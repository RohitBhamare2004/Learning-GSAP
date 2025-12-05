//Creating Simple Animation 

// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1
// })
// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:1
// })

//Using CSS properties in GSAP
gsap.to("#box1",{
        x:1000,
        duration:2,
        delay:1,
        rotate:360,
        backgroundColor:"blue",
        borderRadius:"50%",
        scale:0.5
    })
    gsap.from("#box2",{
        x:1000,
        duration:2,
        delay:1,
        rotate:360,
        backgroundColor:"red",
        borderRadius:"50%",
        scale:0.5
    })