import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsap_transformation = () => {
    const colors = ["#2E4D71", "#856546", "#05625C", "#5A483E", "#886648"];
    const details = gsap.utils.toArray(".left-description:not(:first-child)");
    console.log(details);
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    const allPhotos = gsap.utils.toArray(".desktopPhoto");
    // Set all photos except the first one invisible
    gsap.set(photos, { clipPath: 'inset(100% 0% 0% 0%)', autoAlpha: 1 });
    
    ScrollTrigger.defaults({
        markers: false,
})

    // Timeline details
    details.forEach((section, index) => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "200 bottom",
                end: '+=60%',
                scrub: true,
                toggleActions: "play pause reverse pause",
                snap: true,
            },
            onUpdate: () => {
                const progress = tl.progress();
                console.log(progress, index);
                let bgColor = colors[index + 1] || colors[colors.length - 1]; // Fallback to last color if out of bounds
                let previousBgColor = colors[index] || colors[0]; // Fallback to first color if out of bounds
                const currentColor = gsap.utils.interpolate(previousBgColor, bgColor, progress);
                // Only change bgColor when scrolled
                if (progress>0 && progress!==1){
                    gsap.set('.page-container', {
                        backgroundColor: currentColor,
                    })
                }
            },
        })

        // Animation details
        tl.to(photos[index], {
            clipPath: 'inset(0% 0% 0% 0%)',
            autoAlpha: 1,
            duration: 1.5,
        })
        .set(allPhotos[index], { autoAlpha: 1, duration: 1.5 });
    })
}