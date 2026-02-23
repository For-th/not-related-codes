function moveRandomE1(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 85 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 85 + 5) + "%";
}

// NO button - move randomly on mouse enter (unchanged)
const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("mouseenter", function(e){
    moveRandomE1(e.target);
});

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init("LPEJkMbZmKdLGt7Wl");
}

// YES button click handler
const yesBtn = document.querySelector("#yes-btn");
yesBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log("YES button clicked!");
    
    const emailParams = {
        to_email: "jhonreytuto@gmail.com",
        receiver_name: "Unknown",
        message: "They confirmed they want coffee!"
    };
    
    // Check if emailjs is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.send("service_n1vkk6m", "template_4w4sf18", emailParams)
            .then((response) => {
                console.log("Email sent successfully!", response);
                window.location.href = "yes.html";
            })
            .catch((error) => {
                console.error("Failed to send email:", error);
                window.location.href = "yes.html";
            });
    } else {
        console.log("EmailJS not loaded, navigating directly to yes.html");
        window.location.href = "yes.html";
    }
});

