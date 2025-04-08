import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { isDebuggerStatement } from "typescript";

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();
export const our_values_transformation = () => {
    mm.add({isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)"}, (context) => {
        let {isMobile, isDesktop} = context.conditions;
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".our-values-background",
                start: "top top",
                end: isMobile? "+=100vh": "+=500vh",
                markers: false,
                scrub: 1,
                pin: ".our-values-container",
                pinSpacing: true,
            },
        })

        tl.fromTo('.our-values-content', 
            {width: '55vw',
            borderRadius: '150px',
            },
            {width: '80vw',
            borderRadius: '50px',
            })
        .fromTo('.our-values-content',
            {width: '80vw',
            borderRadius: '50px',
            scale: 1,
            },
            {
            width: '91vw',
            borderRadius: '0px',
            scale: 1.1
        });
        

    })
}

