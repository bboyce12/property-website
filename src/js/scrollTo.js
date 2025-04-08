export const scrollTo = (section_id) => {
    const section = document.getElementById(section_id);
    section.scrollIntoView({behavior: "smooth"});
}