export const fadeIn = () => {
    console.log('fadeIn');
    const fadeInContainers = document.querySelectorAll('.fade-in-container'); 
    if (fadeInContainers){
        fadeInContainers.forEach((fadeInContainer)=>{
            fadeInContainer.classList.remove('fade-in-active-container')
            setTimeout(()=>{fadeInContainer.classList.add('fade-in-active-container')}, 50);
        });
    }  
};