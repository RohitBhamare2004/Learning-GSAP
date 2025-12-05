# Learning GSAP 

This repository contains my collection of 12 hands-on practice projects built with **GSAP (GreenSock Animation Platform)**. Each mini-project focuses on understanding a specific GSAP concept—such as timelines, easing, scroll animations, stagger effects, pinning, and complex motion sequences. By practicing small and focused animations instead of one large project, I strengthened my understanding of GSAP’s core workflow and how to combine multiple animation techniques to create smooth, interactive, and visually appealing web experiences.

## 🌱 Notes for Understanding GSAP
Below are important GSAP concepts and notes that were applied throughout these practice projects:

GSAP - GreenSock Animation Platform 
        ---- JS Labary using for Animation 
        syntax:
            gsap.<method>(<target>,{
                property:values,
                property:values
            })
        example:
            gsap.to("#box",{
                x:1000,
                duration:2,
                delay:1
            })


    How to use GSAP in your website :
        - Go to Google and search "GSAP cdn" 
        - click on the first link and open website of cdnjs
        - then copy the first link of "gsap.min.js" cdnjs 
        - insert that script link into your html file 
        - note intert right before your main js script link
        
    Method :
        - to       (Initial to final)
        - from     (Final to initial)
        - fromto
        
    Some properties:
            stagger:0.5   
                // stagger is use to run every element one by one 
                // giving stagger as -1 will reverse the order of elements
            
            repeat : -1 
                // use for repeating  the animation 
                // value as -1 will repeat infinite
                // value as 1 will repeat the animation 2 times (1 of original and 1 of repeat)
                // so value as n will repeat animation n+1 times .

            yoyo : true 
                // to repeat the animation from initial to final and return final to initial like the ball bounce back from the wall or the yoyo toy come back

            timeline : var tl = gsap.timeline()
                //Timeline: A container to organize multiple animations in sequence or overlap.
                // will carryout the animation one by one in a syncronised manner (in order)
                // now instead of gsap.to / gsap.from use tl.to / tl.from

            scrollTigger :Animation is done on the basis of scrolling.ScrollTrigger allows animations to respond to scroll position.
                //Key features:
                //Trigger animations when elements enter the viewport
                //Pin sections while scrolling
                //Create horizontal and parallax effects
                //Connect timelines to scroll progress
                // note : use cdn of scrollTigger from cdnjs website.
                // and paste it after the cdn of gsap and before the main js script
                
            SVG : Scaleable Vector Graphics
            
            Easing: Controls the speed curve of the animation.
                //Examples: power1, power4, back, bounce, etc.
            
            *GSAP Easing website use to visualise the ease animation.
            *remixicon for free opensource icon library website

            //🎯 Purpose of This Repository
This project is part of my journey to:
Improve my animation skills
Learn GSAP deeply
Build creative front-end interactions
Practice structuring clean and reusable animation code