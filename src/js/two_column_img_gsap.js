import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";
import { isDebuggerStatement } from "typescript";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    markers: false,
})

let mm = gsap.matchMedia();

export const two_column_img_transformation = () => {
    mm.add({
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
    }, (context) => {
        let { isMobile, isDesktop} = context.conditions;
        const left_img_details = gsap.utils.toArray('.past-success-left-img-content')
        const right_img_details = gsap.utils.toArray('.past-success-right-img-content')
        left_img_details.forEach((section) => {
            gsap.fromTo(section, 
                { xPercent: 0, yPercent: 0, rotation: 0 }, // Starting state
                {
                    xPercent: isMobile ? -8: -30,
                    yPercent: isMobile ? 0: -12,
                    rotation: -18,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "+=100%",
                        scrub: 1, // Scrub handles the progress
                        toggleActions: "play resume restart pause",
                    }
                }
            );
        });
        right_img_details.forEach((section) => {
            gsap.fromTo(section, 
                { xPercent: 0, yPercent: 0, rotation: 0 }, // Starting state
                {
                    xPercent: isMobile ? 8: 30,
                    yPercent: isMobile ? 0: -12,
                    rotation: 18,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "+=100%",
                        scrub: 1, // Scrub handles the progress
                        toggleActions: "play resume restart pause",
                    }
                }
            );
        });
    });
    
}
