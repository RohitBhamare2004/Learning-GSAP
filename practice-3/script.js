//Animate the box to repeat the animation from initial to final (in one direction)
gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    repeat:-1 // repeat will repeat the animation 
                // value as -1 will repeat infinite
                // value as 1 will repeat the animation 2 times (1 of original and 1 of repeat)
                // so value as n will repeat animation n+1 times .
    
})

//Animate the box to repeat the animation from initial to final and return final to initial like the ball bounce back from the wall (using the concept call yoyo)
gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    repeat:-1 ,
    yoyo:true
    
})