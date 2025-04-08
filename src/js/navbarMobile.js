export const navbarMobile = () => {
    // Prevent bootstrap default behavior of collapsing the navbar on click
    const dropdownEventPreventList = document.querySelectorAll(".dropdown-event-prevent");
    console.log(dropdownEventPreventList);
    // event handler setup
    const handleDropdownClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    if (dropdownEventPreventList.length > 0) {
        // Add the event listener
        dropdownEventPreventList.forEach((dropdown)=>{
            dropdown.addEventListener("click", handleDropdownClick);
        })
    }



    // Remove event listener on component unmount
    return ()=>{
        if (dropdownEventPreventList.length > 0) {
            // Remove the event listener
            dropdownEventPreventList.forEach((dropdown)=>{
                dropdown.removeEventListener("click", handleDropdownClick);
            })
        }
       
    }
}