export const popUp = () => {
    const getInTouchButton = document.getElementById("get-in-touch-btn")
    const popUpForm = document.getElementById("email-list-form-container")
    const closeButton = document.getElementById("closeModalButton")

    if (getInTouchButton && popUpForm) {
        getInTouchButton.addEventListener("click", () => {
            console.log("clicked")
            popUpForm.style.display = "flex";
            popUpForm.style.opacity = 1;
            // Sign up submit button
            const signUpButton = document.querySelector(".sign-up-button")
            if (signUpButton) {
                signUpButton.addEventListener("click", (event)=> {
                    event.preventDefault();
                    console.log("submited");
                });
            }
        // Close button mechanism
        closeButton.addEventListener("click", () => {popUpForm.style.display = "none";
            
        })
        });
        
    }
};